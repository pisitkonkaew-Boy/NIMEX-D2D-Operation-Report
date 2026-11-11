/* NIMEX D2D Operation Report — loads the data from the Google Sheet (Apps Script), checks the admin key, then starts app.js.
   The admin key is checked by Apps Script only; this page keeps it in sessionStorage for the open tab. */
window.NIMEX_ONLINE = true;
(function(){
  const KEY = 'nimex-d2d-key';
  const getKey = ()=>{ try{ return sessionStorage.getItem(KEY); }catch(e){ return null; } };
  const setKey = v=>{ try{ v ? sessionStorage.setItem(KEY, v) : sessionStorage.removeItem(KEY); }catch(e){} };
  const boot = document.getElementById('boot');
  const say = html=>{ boot.innerHTML = html; boot.hidden = false; };
  document.body.classList.add('online');

  // cover first, every time (also for #admin links)
  const cover = document.getElementById('cover');
  if(cover){
    document.body.classList.add('cover-on');
    const close = ()=>{ cover.style.display = 'none'; document.body.classList.remove('cover-on'); if(typeof maybePromptAdmin === 'function') maybePromptAdmin(); };
    cover.querySelector('#btnEnter').addEventListener('click', close);
    cover.querySelector('.fg').addEventListener('click', close);
  }

  async function api(body, key){
    const r = await fetch(window.NIMEX_API, { method:'POST', headers:{ 'Content-Type':'text/plain;charset=utf-8' }, body:JSON.stringify({ ...body, key: key===undefined ? getKey() : key }) });
    const j = await r.json(); if(!j.ok) throw new Error(j.error || 'failed'); return j;
  }
  window.nimexApi = api;
  // used by the app's admin login (only when online)
  window.onlineAuth = async pass=>{
    try{ await api({ a:'auth' }, pass); setKey(pass); location.reload(); return true; }catch(e){ return false; }
  };
  window.onlineLogout = ()=>{ setKey(null); history.replaceState(null, '', location.pathname + location.search); location.reload(); };
  window.onlineSaveSettings = async settings=>{ await api({ a:'settings', settings }); };

  /* ---------- admin upload: preview first, then replace the uploaded creation days ---------- */
  window.onlineUpload = async fileList=>{
    const files = Array.from(fileList); if(!files.length) return;
    toast('กำลังอ่านไฟล์…');
    const merged = new Map(), metas = [], problems = []; let reportEnd = null, dup = 0, excl = 0; const reasons = {};
    for(const file of files){
      try{
        if(/\.json$/i.test(file.name)){
          const seed = JSON.parse(await file.text());
          const recs = decodeBootRows(seed);
          recs.forEach(r=> merged.set(r.billNo, r));
          const m = seed.meta || {};
          if(m.reportEndDateISO && (!reportEnd || m.reportEndDateISO > reportEnd)) reportEnd = m.reportEndDateISO;
          (m.uploadedFiles || []).forEach(x=> metas.push(x));
          metas.push({ name:file.name, at:new Date().toISOString(), rows:recs.length, kind:'seed' });
          continue;
        }
        const wb = XLSX.read(await file.arrayBuffer(), { type:'array', cellDates:false });
        const res = parseWorkbookToRecords(wb);
        if(res.error){ problems.push(file.name + ': ' + res.error); continue; }
        const fm = new Map(); res.records.forEach(r=>{ if(isBetterRecord(r, fm.get(r.billNo))) fm.set(r.billNo, r); });
        fm.forEach((r,k)=> merged.set(k, r));
        dup += res.duplicateRows || 0; excl += res.excluded || 0; Object.entries(res.reasons || {}).forEach(([k,v])=> reasons[k] = (reasons[k]||0) + v);
        if(res.reportEndDateISO && (!reportEnd || res.reportEndDateISO > reportEnd)) reportEnd = res.reportEndDateISO;
        const cd = res.records.map(r=>r.createDateISO).filter(Boolean).sort();
        metas.push({ name:file.name, at:new Date().toISOString(), rows:res.records.length, dup:res.duplicateRows||0, excluded:res.excluded||0, reasons:res.reasons||{}, reportEnd:res.reportEndDateISO||null, minCreate:cd[0]||null, maxCreate:cd[cd.length-1]||null });
      }catch(e){ console.error(e); problems.push(file.name + ': อ่านไม่สำเร็จ (' + e.message + ')'); }
    }
    const recs = [...merged.values()];
    const days = new Set(recs.map(rowDayKey));
    const haveDays = new Map(); RECORDS.forEach(r=>{ const d = rowDayKey(r); haveDays.set(d, (haveDays.get(d)||0) + 1); });
    const replaced = [...days].filter(d=> haveDays.has(d)).sort(), removedRows = replaced.reduce((s,d)=> s + haveDays.get(d), 0);
    const cds = recs.map(r=> r.createDateISO).filter(Boolean).sort();
    const esc = s => String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    const box = document.getElementById('upModal') || (()=>{ const d = document.createElement('div'); d.className = 'modal-overlay'; d.id = 'upModal'; d.innerHTML = '<div class="modal" style="max-width:560px"></div>'; document.body.appendChild(d); return d; })();
    const inner = box.querySelector('.modal');
    inner.innerHTML = `<h4>ตรวจก่อนบันทึก</h4>
      <div class="up-grid">
        <div><span>บิลในไฟล์</span><b>${fmtNum(recs.length)}</b></div>
        <div><span>วันที่สร้างบิล</span><b>${cds.length ? cds[0] + ' – ' + cds[cds.length-1] : '–'}</b></div>
        <div><span>วันที่จะถูกแทนที่</span><b>${fmtNum(replaced.length)} วัน</b><em>ลบของเดิม ${fmtNum(removedRows)} บิล</em></div>
        <div><span>วันใหม่</span><b>${fmtNum(days.size - replaced.length)} วัน</b></div>
        <div><span>แถวซ้ำในไฟล์ (รวมเป็น 1 บิล)</span><b>${fmtNum(dup)}</b></div>
        <div><span>แถวที่ตัดออก</span><b>${fmtNum(excl)}</b><em>${esc(Object.entries(reasons).map(([k,v])=>k+' '+v).join(' · '))}</em></div>
      </div>
      <p class="panel-note" style="text-align:left">คำนวณถึงวันที่: ${esc(reportEnd || '–')} · ไฟล์ต้องเป็นรายงาน "ทุก DC ต้นทาง" เพราะระบบจะลบบิลเดิมของวันเดียวกันทั้งหมดแล้วใช้ค่าใหม่</p>
      ${problems.length ? `<p class="badt" style="text-align:left">${problems.map(esc).join('<br>')}</p>` : ''}
      <p class="panel-note" id="upMsg" role="status" style="text-align:left"></p>
      <div class="modal-actions"><button class="btn btn-outline btn-sm" id="upCancel">ยกเลิก</button><button class="btn btn-solid btn-sm" id="upGo"${recs.length?'':' disabled'}>บันทึกลงระบบ</button></div>`;
    box.classList.add('show');
    inner.querySelector('#upCancel').onclick = ()=> box.classList.remove('show');
    inner.querySelector('#upGo').onclick = async ()=>{
      const msg = inner.querySelector('#upMsg'), go = inner.querySelector('#upGo'); go.disabled = true; inner.querySelector('#upCancel').disabled = true;
      try{
        msg.textContent = 'กำลังลบวันที่จะแทนที่…';
        await api({ a:'begin', days:[...days], cols:ROW_COLS });
        const CH = 1500;
        for(let i = 0; i < recs.length; i += CH){
          msg.textContent = `กำลังบันทึก ${fmtNum(Math.min(i+CH, recs.length))} / ${fmtNum(recs.length)} บิล…`;
          await api({ a:'append', rows: recs.slice(i, i+CH).map(encodeRow) });
        }
        msg.textContent = 'กำลังสรุปและล้างแคช…';
        await api({ a:'finish', meta:{ reportEndDateISO:reportEnd, lastUpdated:new Date().toISOString(), files:metas } });
        msg.textContent = 'บันทึกแล้ว กำลังโหลดใหม่…'; setTimeout(()=> location.reload(), 500);
      }catch(e){ msg.textContent = 'บันทึกไม่สำเร็จ: ' + e.message + ' (ลองอัปโหลดไฟล์เดิมอีกครั้ง ระบบจะแทนที่วันเดิมให้)'; go.disabled = false; inner.querySelector('#upCancel').disabled = false; }
    };
  };

  async function start(){
    if(!window.NIMEX_API){ say('<h3>ยังไม่ได้ตั้งค่า</h3><p>ยังไม่ได้ใส่ที่อยู่ Apps Script ใน config.js</p>'); return; }
    let D;
    try{
      say('<div class="spinner"></div><p>กำลังโหลดข้อมูล…</p>');
      D = await (await fetch(window.NIMEX_API + (window.NIMEX_API.includes('?') ? '&' : '?') + 'v=' + (window.NIMEX_V || 1))).json();
      if(!D || !D.ok) throw new Error('bad data');
    }catch(e){ say('<h3>โหลดข้อมูลไม่สำเร็จ</h3><p>ลองเปิดหน้านี้ใหม่อีกครั้ง</p>'); return; }
    let admin = false;
    if(getKey()){ try{ await api({ a:'auth' }); admin = true; }catch(e){ setKey(null); } }
    window.__BOOT = D; window.__BOOT_SETTINGS = D.settings || {}; window.__ONLINE_ADMIN = admin;
    boot.hidden = true;
    const s = document.createElement('script'); s.src = 'app.js?v=' + (window.NIMEX_V || 1); document.body.appendChild(s);
  }
  start();
})();
