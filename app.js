/* Snapshot of this page's own source, taken before any rendering, so "บันทึกแดชบอร์ดฉบับอัปเดต" can write a new copy of the file. */
const PRISTINE_HTML = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
/* ============================== ZONE MAP ============================== */
const ZONE_MAP = [{"code": "320", "name": "DC ชลบุรี", "zone": "ตะวันออก"}, {"code": "321", "name": "DC ระยอง", "zone": "ตะวันออก"}, {"code": "322", "name": "DC จันทบุรี", "zone": "ตะวันออก"}, {"code": "323", "name": "DC พัทยา", "zone": "ตะวันออก"}, {"code": "325", "name": "DC ปราจีนบุรี", "zone": "ตะวันออก"}, {"code": "328", "name": "DC อรัญประเทศ", "zone": "ตะวันออก"}, {"code": "624", "name": "DC ฉะเชิงเทรา", "zone": "ตะวันออก"}, {"code": "477", "name": "DC ประจวบคีรีขันธ์", "zone": "ใต้บน"}, {"code": "482", "name": "DC พังงา", "zone": "ใต้บน"}, {"code": "483", "name": "DC ภูเก็ต", "zone": "ใต้บน"}, {"code": "484", "name": "DC สุราษฎร์", "zone": "ใต้บน"}, {"code": "486", "name": "DC ชุมพร", "zone": "ใต้บน"}, {"code": "487", "name": "DC กระบี่", "zone": "ใต้บน"}, {"code": "480", "name": "DC ทุ่งสง", "zone": "ใต้ล่าง"}, {"code": "481", "name": "DC นครศรีธรรมราช", "zone": "ใต้ล่าง"}, {"code": "490", "name": "DC หาดใหญ่", "zone": "ใต้ล่าง"}, {"code": "493", "name": "DC พัทลุง", "zone": "ใต้ล่าง"}, {"code": "615", "name": "DC ลพบุรี", "zone": "กลาง"}, {"code": "618", "name": "DC สระบุรี", "zone": "กลาง"}, {"code": "631", "name": "DC อยุธยา", "zone": "กลาง"}, {"code": "672", "name": "DC สุพรรณบุรี", "zone": "กลาง"}, {"code": "476", "name": "DC ชะอำ", "zone": "ตะวันตก"}, {"code": "610", "name": "DC พุทธมณฑลสาย 3", "zone": "BKK"}, {"code": "670", "name": "DC ราชบุรี", "zone": "ตะวันตก"}, {"code": "671", "name": "DC กาญจนบุรี", "zone": "ตะวันตก"}, {"code": "673", "name": "DC นครปฐม", "zone": "ตะวันตก"}, {"code": "674", "name": "DC สมุทรสาคร", "zone": "ตะวันตก"}, {"code": "621", "name": "DC รังสิต", "zone": "BKK"}, {"code": "691", "name": "CDC บางนา", "zone": "BKK"}, {"code": "153", "name": "DC อุตรดิตถ์", "zone": "เหนือกลาง"}, {"code": "154", "name": "DC แพร่", "zone": "เหนือกลาง"}, {"code": "155", "name": "DC น่าน", "zone": "เหนือกลาง"}, {"code": "164", "name": "DC สุโขทัย", "zone": "เหนือกลาง"}, {"code": "165", "name": "DC พิษณุโลก", "zone": "เหนือกลาง"}, {"code": "167", "name": "DC เพชรบูรณ์", "zone": "เหนือกลาง"}, {"code": "168", "name": "DC วิเชียรบุรี", "zone": "เหนือกลาง"}, {"code": "150", "name": "DC เชียงใหม่", "zone": "เหนือบน"}, {"code": "151", "name": "DC ลำพูน", "zone": "เหนือบน"}, {"code": "152", "name": "DC ลำปาง", "zone": "เหนือบน"}, {"code": "156", "name": "DC พะเยา", "zone": "เหนือบน"}, {"code": "157", "name": "DC เชียงราย", "zone": "เหนือบน"}, {"code": "158", "name": "DC แม่ฮ่องสอน", "zone": "เหนือบน"}, {"code": "159", "name": "DC ฝาง", "zone": "เหนือบน"}, {"code": "171", "name": "DC แม่สาย", "zone": "เหนือบน"}, {"code": "160", "name": "DC นครสวรรค์", "zone": "เหนือล่าง"}, {"code": "162", "name": "DC กำแพงเพชร", "zone": "เหนือล่าง"}, {"code": "163", "name": "DC ตาก", "zone": "เหนือล่าง"}, {"code": "166", "name": "DC พิจิตร", "zone": "เหนือล่าง"}, {"code": "170", "name": "DC ชัยนาท", "zone": "เหนือล่าง"}, {"code": "235", "name": "DC ยโสธร", "zone": "อีสานกลาง"}, {"code": "236", "name": "DC ชัยภูมิ", "zone": "อีสานกลาง"}, {"code": "240", "name": "DC ขอนแก่น", "zone": "อีสานกลาง"}, {"code": "244", "name": "DC มหาสารคาม", "zone": "อีสานกลาง"}, {"code": "245", "name": "DC ร้อยเอ็ด", "zone": "อีสานกลาง"}, {"code": "246", "name": "DC กาฬสินธุ์", "zone": "อีสานกลาง"}, {"code": "249", "name": "DC มุกดาหาร", "zone": "อีสานกลาง"}, {"code": "250", "name": "DC พล", "zone": "อีสานกลาง"}, {"code": "241", "name": "DC อุดรธานี", "zone": "อีสานบน"}, {"code": "242", "name": "DC เลย", "zone": "อีสานบน"}, {"code": "243", "name": "DC หนองคาย", "zone": "อีสานบน"}, {"code": "247", "name": "DC สกลนคร", "zone": "อีสานบน"}, {"code": "248", "name": "DC นครพนม", "zone": "อีสานบน"}, {"code": "230", "name": "DC โคราช", "zone": "อีสานล่าง"}, {"code": "231", "name": "DC บุรีรัมย์", "zone": "อีสานล่าง"}, {"code": "232", "name": "DC สุรินทร์", "zone": "อีสานล่าง"}, {"code": "233", "name": "DC ศรีสะเกษ", "zone": "อีสานล่าง"}, {"code": "234", "name": "DC อุบลราชธานี", "zone": "อีสานล่าง"}, {"code": "237", "name": "DC อำนาจเจริญ", "zone": "อีสานล่าง"}, {"code": "251", "name": "DC ปากช่อง", "zone": "อีสานล่าง"}, {"code": "252", "name": "DC กันทรลักษ์", "zone": "อีสานล่าง"}];
const ZONE_BY_CODE = {};
ZONE_MAP.forEach(z => { ZONE_BY_CODE[z.code] = z; });
const ZONE_ORDER = [...new Set(ZONE_MAP.map(z=>z.zone))];

/* ============================== CONSTANTS ============================== */
const TARGETS = { kpi1: 98, kpi2: 100, kpi3: 100 };
if(typeof Chart !== 'undefined'){
  Chart.defaults.animation = false;
  Chart.defaults.font.family = "'Prompt', sans-serif";
}
const COLORS = {};
/* NIMEX kit palette. "green" = on/above target = good (blue, no green on screen); red = bad only.
   Series order: navy->s1, blue->s2, blue2->s3. Re-applied when the theme changes. */
const THEME_COLORS = {
  light:{ navy:'#1d57b8', blue:'#b8860b', blue2:'#6e93d6', sky:'#f4f7fc', green:'#1d57b8', yellow:'#b8860b', orange:'#d9822b', red:'#b8334a', gray:'#8a9ab5', ab:'#b8860b', cc:'#1d57b8', ink:'#0b1f3f', muted:'#55657f', grid:'#e6ecf5' },
  dark: { navy:'#5b8fe8', blue:'#caa12e', blue2:'#7ea3ea', sky:'#132a4d', green:'#7ea3ea', yellow:'#caa12e', orange:'#e8964a', red:'#e0657c', gray:'#7f90ad', ab:'#caa12e', cc:'#5b8fe8', ink:'#eaf0fb', muted:'#a3b4d0', grid:'#22395f' }
};
function isDarkTheme(){
  const t = document.documentElement.getAttribute('data-theme');
  if(t) return t === 'dark';
  return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
}
function applyThemeColors(){
  Object.assign(COLORS, THEME_COLORS[isDarkTheme() ? 'dark' : 'light']);
  if(typeof Chart !== 'undefined'){
    Chart.defaults.color = COLORS.muted;
    Chart.defaults.borderColor = COLORS.grid;
  }
}
applyThemeColors();
const STORAGE_KEY = 'd2d_records_v1';
const META_KEY = 'd2d_meta_v1';
const UNLOCK_KEY = 'd2d_unlocked_v1';
// Admin password: only a salted SHA-256 is stored (see ADMIN GATE). No password in this file.
let isUnlocked = !!window.__NIMEX_ADMIN_BUILD || !!window.__ONLINE_ADMIN;
if(!window.NIMEX_ONLINE){ try{ if(sessionStorage.getItem('nimex-d2d-admin')==='1') isUnlocked = true; }catch(e){} }

/* ============================== STATE ============================== */
let RECORDS = [];        // all parsed+valid records
let META = { lastUpdated: null, uploadedFiles: [], reportEndDateISO: null };
let REPORT_END_DATE = null; // dates after this (not yet due) are excluded from all calculations
let dataQuality = { excluded: 0, reasons: {} };
let charts = {};
let drillZone = null;    // currently drilled-into zone (for ranking table + zone chart)
let currentPeriod = 'month';

/* ============================== UTILS ============================== */
function parseThaiDate(str){
  if(!str) return null;
  const s = String(str).trim();
  const m = s.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if(!m) return null;
  let [, d, mo, y, hh, mm, ss] = m;
  y = parseInt(y,10);
  if(y > 2400) y -= 543; // Buddhist -> Gregorian
  const dt = new Date(y, parseInt(mo,10)-1, parseInt(d,10), hh?parseInt(hh,10):0, mm?parseInt(mm,10):0, ss?parseInt(ss,10):0);
  if(isNaN(dt.getTime())) return null;
  return dt;
}
function dateOnly(d){ if(!d) return null; return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
function toISODate(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function fmtDateTH(d){
  if(!d) return '–';
  try{ return d.toLocaleDateString('th-TH',{day:'2-digit',month:'2-digit',year:'numeric'}); }
  catch(e){ return toISODate(d); }
}
function fmtNum(n, digits=0){
  if(n===null||n===undefined||isNaN(n)) return '–';
  return n.toLocaleString('th-TH',{minimumFractionDigits:digits, maximumFractionDigits:digits});
}
function fmtPct(n){ return (n===null||n===undefined||isNaN(n)) ? '–' : n.toFixed(1)+'%'; }
function parseNum(v){
  if(v===null||v===undefined||v==='') return 0;
  const n = parseFloat(String(v).replace(/,/g,''));
  return isNaN(n) ? 0 : n;
}
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2200);
}
let __chartErrorShown = false;
function safeCall(label, fn, canvasId){
  try{
    fn();
    if(canvasId){
      // clear any previous fallback message if this render succeeded
      const wrap = document.getElementById(canvasId)?.closest('.chart-wrap');
      const msg = wrap?.querySelector('.chart-fallback-msg');
      if(msg) msg.remove();
    }
  }
  catch(e){
    console.error(`[D2D Dashboard] ${label} failed:`, e);
    if(!__chartErrorShown){
      __chartErrorShown = true;
      toast('กราฟบางส่วนแสดงผลไม่ได้ — เปิด Console (F12) เพื่อดูรายละเอียด');
    }
    if(canvasId){
      const wrap = document.getElementById(canvasId)?.closest('.chart-wrap');
      if(wrap && !wrap.querySelector('.chart-fallback-msg')){
        const msg = document.createElement('div');
        msg.className = 'chart-fallback-msg';
        msg.style.cssText = 'position:absolute; inset:0; display:flex; align-items:center; justify-content:center; text-align:center; color:var(--gray); font-size:12.5px; padding:20px;';
        msg.textContent = '⚠ กราฟนี้แสดงผลไม่สำเร็จ (ดู Console) — ข้อมูล KPI และตารางยังใช้งานได้ปกติ';
        wrap.appendChild(msg);
      }
    }
  }
}
function weekKey(d){
  // ISO week label: YYYY-Www
  const dt = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = (dt.getUTCDay()+6)%7;
  dt.setUTCDate(dt.getUTCDate()-dayNum+3);
  const firstThursday = new Date(Date.UTC(dt.getUTCFullYear(),0,4));
  const week = 1 + Math.round(((dt-firstThursday)/86400000 - 3 + ((firstThursday.getUTCDay()+6)%7))/7);
  return `${dt.getUTCFullYear()}-W${String(week).padStart(2,'0')}`;
}
function monthKey(d){ return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`; }
function periodKey(d, period){
  if(period==='week') return weekKey(d);
  if(period==='month') return monthKey(d);
  return toISODate(d);
}
function periodLabel(key, period){
  if(period==='month'){
    const [y,m] = key.split('-');
    return new Date(y, m-1, 1).toLocaleDateString('th-TH',{month:'short', year:'2-digit'});
  }
  if(period==='week') return key.replace('-W','/สัปดาห์ ');
  const d = new Date(key);
  return d.toLocaleDateString('th-TH',{day:'2-digit',month:'2-digit'});
}

/* ============================== STORAGE ============================== */
async function loadFromStorage(){
  try{
    const res = await window.storage.get(STORAGE_KEY, true);
    if(res && res.value) RECORDS = JSON.parse(res.value);
  }catch(e){ RECORDS = []; }
  try{
    const res2 = await window.storage.get(META_KEY, true);
    if(res2 && res2.value) META = JSON.parse(res2.value);
  }catch(e){ META = { lastUpdated:null, uploadedFiles:[], reportEndDateISO:null }; }
  REPORT_END_DATE = META.reportEndDateISO || null;
  try{
    const res3 = await window.storage.get(UNLOCK_KEY, false); // personal — this viewer's own permission, not shared
    isUnlocked = isUnlocked || !!(res3 && res3.value === '1');
  }catch(e){ /* standalone file: keep the current admin state */ }
}
async function saveToStorage(){
  if(!window.storage) return; // standalone copy of the file: data lives in memory + the saved HTML snapshot
  try{ await window.storage.set(STORAGE_KEY, JSON.stringify(RECORDS), true); }
  catch(e){ console.error('save records failed', e); toast('บันทึกข้อมูลไม่สำเร็จ (ไฟล์อาจใหญ่เกินไป)'); }
  try{ await window.storage.set(META_KEY, JSON.stringify(META), true); }
  catch(e){ console.error('save meta failed', e); }
}
async function clearStorage(){
  if(!window.storage){ RECORDS = []; META = { lastUpdated:null, uploadedFiles:[], reportEndDateISO:null }; REPORT_END_DATE = null; return; }
  try{ await window.storage.delete(STORAGE_KEY, true); }catch(e){}
  try{ await window.storage.delete(META_KEY, true); }catch(e){}
  RECORDS = []; META = { lastUpdated:null, uploadedFiles:[], reportEndDateISO:null }; REPORT_END_DATE = null;
}

/* ============================== PARSING ============================== */
// Fixed column layout of the "NIMEX ... รายงานระบบ Booking และเข้ารับ" export (0-indexed)
const COL = {
  billNo:1, createDate:2, cancelDate:3, cancelReasonMain:4,
  b01Confirm:6, confirmDate:10, actualDate:12, pickupResult:13, pickupFailReasonMain:14,
  dcOrigin:21, qty:38, transportFee:39, billStatus:43, productType:46,
  vehiclePlate:48, driverName:49, route:51,
  cancelReasonSub:5, pickupFailReasonSub:15
};

function classifyProduct(raw){
  const s = (raw||'').toString();
  if(s.includes('แช่แข็ง') || s.includes('แช่เย็น')) return 'CC';
  if(s.includes('ทั่วไป')) return 'AB';
  return null;
}
function classifyCancelReason(raw){
  // Column E semantics: 02000 = customer, 01000 / "Nim Express" = company
  const s = (raw||'').toString();
  if(!s.trim()) return null;
  if(s.includes('02000')) return 'customer';
  if(s.includes('01000') || s.includes('Nim Express')) return 'company';
  return 'other';
}
function classifyFailReason(raw){
  // Column O semantics: 01000 = customer, 02000 = staff
  const s = (raw||'').toString();
  if(!s.trim()) return null;
  if(s.includes('01000')) return 'customer';
  if(s.includes('02000')) return 'staff';
  return 'other';
}
function extractDcCode(raw){
  const s = (raw||'').toString().trim();
  const m = s.match(/^(\d+)/);
  return m ? m[1] : null;
}
// Strips the leading "01000"/"02000" style code prefix to get the detailed reason text, if any.
// Returns null when there is nothing more specific than the bare category word.
function detailedReasonText(raw){
  const s = (raw||'').toString().trim();
  if(!s) return null;
  const stripped = s.replace(/^0?[12]000\s*/, '').trim();
  if(!stripped) return null;
  if(stripped === 'ลูกค้า' || stripped === 'Nim Express' || stripped === 'พนักงาน') return null; // no more detail than the broad group
  return stripped;
}

function parseWorkbookToRecords(wb){
  const sheetName = wb.SheetNames[0];
  const ws = wb.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(ws, { header:1, raw:false, defval:'' });

  // locate header row (cell[1] === 'เลขที่บิล')
  let headerRow = -1;
  for(let i=0;i<Math.min(rows.length,20);i++){
    if((rows[i][1]||'').toString().trim() === 'เลขที่บิล'){ headerRow = i; break; }
  }
  if(headerRow === -1) return { records:[], excluded:0, error:'ไม่พบหัวตารางที่คาดไว้ (เลขที่บิล) ในไฟล์นี้ — ตรวจสอบว่าเป็นรายงาน NIMEX รูปแบบเดียวกันหรือไม่' };

  // extract the report's stated date range ("ตั้งแต่ DD/MM/YYYY ถึง DD/MM/YYYY") to cap calculations
  // at dates that have actually arrived — future-dated pickup appointments beyond this shouldn't count yet.
  let reportEndDateISO = null;
  for(let i=0;i<headerRow;i++){
    const cell0 = (rows[i][0]||'').toString();
    const m = cell0.match(/ถึง\s*(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if(m){
      let [, d, mo, y] = m; y = parseInt(y,10); if(y>2400) y -= 543;
      reportEndDateISO = toISODate(new Date(y, parseInt(mo,10)-1, parseInt(d,10)));
      break;
    }
  }

  let dataStart = headerRow+1;
  // skip any sub-header/info rows until we hit a row with a real bill number
  while(dataStart < rows.length && !(rows[dataStart][COL.billNo]||'').toString().trim()){
    dataStart++;
  }

  const out = [];
  let excluded = 0;
  const reasons = {};
  const bump = (r)=>{ reasons[r] = (reasons[r]||0)+1; };

  // A bill can appear on several rows (each re-confirmation / pickup attempt / status change adds one).
  // Merge them into ONE row per bill: order by the B01 confirm timestamp (file order breaks ties or
  // covers rows without a timestamp), then let the NEWEST non-empty value win for every column.
  // Empty cells in a newer row never erase what an older row already recorded (e.g. the pickup result).
  const groups = new Map();
  for(let i=dataStart;i<rows.length;i++){
    const bn = (rows[i][COL.billNo]||'').toString().trim();
    if(!bn) continue; // blank trailing row
    if(!groups.has(bn)) groups.set(bn, []);
    groups.get(bn).push({ row: rows[i], idx: i });
  }
  let duplicateRows = 0;
  const mergedRows = [];
  groups.forEach((items)=>{
    duplicateRows += items.length - 1;
    if(items.length > 1){
      const stamps = items.map(it=>{ const d = parseThaiDate(it.row[COL.b01Confirm]); return d ? d.getTime() : null; });
      if(stamps.every(t=>t!==null)){
        items = items.map((it,k)=>({ ...it, t:stamps[k] })).sort((a,b)=> (a.t-b.t) || (a.idx-b.idx));
      }
    }
    const merged = [];
    items.forEach(it=>{
      it.row.forEach((v,c)=>{
        if(v!==null && v!==undefined && String(v).trim()!=='') merged[c] = v;
      });
    });
    // KPI2: remember the first appointment and whether any attempt had a customer reason
    let firstK = null;
    items.forEach(it=>{ const d = parseThaiDate(it.row[COL.confirmDate]); if(d && (!firstK || toISODate(d) < toISODate(firstK))) firstK = d; });
    merged.__firstK = firstK;
    merged.__custDelay = items.some(it=> /^\s*01000/.test(String(it.row[COL.pickupFailReasonMain]||'')));
    mergedRows.push(merged);
  });

  for(const row of mergedRows){
    const billNo = (row[COL.billNo]||'').toString().trim();

    const confirmDate = parseThaiDate(row[COL.confirmDate]);
    if(!confirmDate){ excluded++; bump('ไม่มีวันที่นัดรับ (K)'); continue; }

    const dcRaw = (row[COL.dcOrigin]||'').toString().trim();
    const dcCode = extractDcCode(dcRaw);
    const zoneInfo = dcCode ? ZONE_BY_CODE[dcCode] : null;
    if(!zoneInfo){ excluded++; bump('ไม่พบรหัส DC ต้นทางในตารางภาค (Index.xlsx)'); continue; }

    const productGroup = classifyProduct(row[COL.productType]);
    if(!productGroup){ excluded++; bump('ไม่พบประเภทสินค้า (AB/CC)'); continue; }

    const cancelDate = parseThaiDate(row[COL.cancelDate]);
    const cancelReasonGroup = cancelDate ? classifyCancelReason(row[COL.cancelReasonMain]) : null;
    const cancelReasonDetail = cancelDate ? detailedReasonText(row[COL.cancelReasonMain]) : null;

    const actualDate = parseThaiDate(row[COL.actualDate]);
    const pickupResultRaw = (row[COL.pickupResult]||'').toString();
    let pickupResult = null;
    if(pickupResultRaw.includes('สำเร็จ') && !pickupResultRaw.includes('ไม่สำเร็จ')) pickupResult = 'success';
    else if(pickupResultRaw.includes('ไม่สำเร็จ')) pickupResult = 'fail';
    const failReasonGroup = pickupResult==='fail' ? classifyFailReason(row[COL.pickupFailReasonMain]) : null;
    const failReasonDetail = pickupResult==='fail' ? detailedReasonText(row[COL.pickupFailReasonMain]) : null;

    const firstK = row.__firstK || confirmDate;
    const onTime = !!(actualDate && (toISODate(actualDate) === toISODate(firstK)
      || (row.__custDelay && toISODate(actualDate) > toISODate(firstK)))); // KPI2: first appointment; customer-caused delay = on time
    const driverName = (row[COL.driverName]||'').toString().trim() || null;
    const vehiclePlate = (row[COL.vehiclePlate]||'').toString().trim() || null;
    const route = (row[COL.route]||'').toString().trim() || null;

    out.push({
      billNo,
      dcCode, dcName: zoneInfo.name, zone: zoneInfo.zone,
      productGroup,
      confirmDateISO: toISODate(confirmDate),
      cancelled: !!cancelDate,
      cancelReasonGroup,      // 'customer' | 'company' | 'other' | null
      cancelReasonDetail,     // specific text beyond the broad group, or null
      pickupResult,           // 'success' | 'fail' | null
      failReasonGroup,        // 'customer' | 'staff' | 'other' | null
      failReasonDetail,       // specific text beyond the broad group, or null
      onTime,
      qty: parseNum(row[COL.qty]),
      fee: parseNum(row[COL.transportFee]),
      driverName, vehiclePlate, route,
      // cancelled-bill analysis page (raw values; see CANCELLED-BILL ANALYSIS)
      hasB01: !!parseThaiDate(row[COL.b01Confirm]),
      createDateISO: (()=>{ const d = parseThaiDate(row[COL.createDate]); return d ? toISODate(d) : null; })(),
      billStatus: (row[COL.billStatus]||'').toString().trim(),
      cancelMainRaw: (row[COL.cancelReasonMain]||'').toString().trim(),
      cancelSubRaw: (row[COL.cancelReasonSub]||'').toString().trim(),
      failMainRaw: (row[COL.pickupFailReasonMain]||'').toString().trim(),
      failSubRaw: (row[COL.pickupFailReasonSub]||'').toString().trim()
    });
  }
  return { records: out, excluded, reasons, sheetName, totalRowsSeen: rows.length - dataStart, reportEndDateISO, duplicateRows };
}

// When the same bill number appears more than once (common — a bill is logged again each time
// its status changes), file order alone is not a reliable way to know which row is the "final" one.
// A row with a determined outcome (success/fail/cancelled) always wins over one still pending;
// among rows at the same completeness level, the later scheduled date wins (rescheduling moves forward).
function isBetterRecord(candidate, existing){
  if(!existing) return true;
  const candDetermined = candidate.cancelled || candidate.pickupResult !== null;
  const existDetermined = existing.cancelled || existing.pickupResult !== null;
  if(candDetermined !== existDetermined) return candDetermined;
  if(candidate.confirmDateISO !== existing.confirmDateISO) return candidate.confirmDateISO > existing.confirmDateISO;
  return true;
}

async function handleFiles(fileList){
  if(window.NIMEX_ONLINE && window.onlineUpload) return window.onlineUpload(fileList); // preview, then save to the Sheet
  const files = Array.from(fileList);
  if(!files.length) return;
  showLoadingToast(true);
  let addedTotal = 0, updatedTotal = 0, excludedTotal = 0, duplicatesInFileTotal = 0;
  const reasonAgg = {};

  for(const file of files){
    try{
      const buf = await file.arrayBuffer();
      const wb = XLSX.read(buf, { type:'array', cellDates:false });
      const { records, excluded, reasons, error, reportEndDateISO, duplicateRows } = parseWorkbookToRecords(wb);
      duplicatesInFileTotal += (duplicateRows||0);
      if(error){ toast(error); continue; }
      excludedTotal += excluded;
      Object.entries(reasons||{}).forEach(([k,v])=>{ reasonAgg[k]=(reasonAgg[k]||0)+v; });
      if(reportEndDateISO && (!META.reportEndDateISO || reportEndDateISO > META.reportEndDateISO)){
        META.reportEndDateISO = reportEndDateISO;
      }

      // Phase 1: resolve duplicate bill numbers WITHIN this file — file row order isn't
      // reliable, so prefer the row with a determined outcome (see isBetterRecord).
      const seenInThisFile = new Set();
      const fileMap = new Map();
      records.forEach(r=>{
        if(isBetterRecord(r, fileMap.get(r.billNo))) fileMap.set(r.billNo, r);
      });

      // Phase 2: merge into the global store. A freshly uploaded file always reflects the
      // most current known status, so it always overwrites whatever was stored before —
      // this is what keeps repeated "top-up" uploads from ever going stale or duplicating.
      const map = new Map(RECORDS.map(r=>[r.billNo, r]));
      fileMap.forEach((r, billNo)=>{
        if(!map.has(billNo)) addedTotal++; else updatedTotal++;
        map.set(billNo, r);
      });
      RECORDS = Array.from(map.values());
      const __cd = records.map(r=>r.createDateISO).filter(Boolean).sort();
      META.uploadedFiles.push({ name:file.name, at:new Date().toISOString(), rows:records.length, dup:duplicateRows||0, excluded:excluded||0, reasons:reasons||{}, reportEnd:reportEndDateISO||null, minCreate:__cd[0]||null, maxCreate:__cd[__cd.length-1]||null });
    }catch(e){
      console.error(e);
      toast('อ่านไฟล์ "'+file.name+'" ไม่สำเร็จ: '+e.message);
    }
  }

  META.lastUpdated = new Date().toISOString();
  META.lastDuplicatesInFile = duplicatesInFileTotal;
  REPORT_END_DATE = META.reportEndDateISO || null;
  dataQuality = { excluded: excludedTotal, reasons: reasonAgg };
  await saveToStorage();
  showLoadingToast(false);
  toast(`อัปเดตข้อมูลแล้ว · เพิ่มใหม่ ${addedTotal} บิล · อัปเดตทับ ${updatedTotal} บิล${duplicatesInFileTotal>0 ? ` · พบบิลซ้ำในไฟล์ ${duplicatesInFileTotal} แถว (รวมเป็น 1 บิล ใช้ค่าใหม่สุดทับเสมอ)` : ''}`);
  rebuildFilterOptions();
  renderAll();
}

function showLoadingToast(on){
  const btn = document.getElementById('btnExport');
  if(on){ toast('กำลังประมวลผลไฟล์…'); }
}

/* ============================== FILTERING & ANALYSIS ============================== */
function filterRecords({zone, dc, product, start, end}){
  const effectiveEnd = (REPORT_END_DATE && (!end || REPORT_END_DATE < end)) ? REPORT_END_DATE : end;
  return RECORDS.filter(r=>{
    if(EXCLUDED_DC.size && EXCLUDED_DC.has(r.dcCode)) return false;
    if(zone && r.zone!==zone) return false;
    if(dc && r.dcCode!==dc) return false;
    if(product && r.productGroup!==product) return false;
    if(start && r.confirmDateISO < start) return false;
    if(effectiveEnd && r.confirmDateISO > effectiveEnd) return false;
    return true;
  });
}
function notYetDueCount(){
  if(!REPORT_END_DATE) return 0;
  return RECORDS.filter(r=>r.confirmDateISO > REPORT_END_DATE).length;
}

// Per-record verdict for each KPI — the single source of truth reused by both the
// aggregate analyze() function and the failure root-cause analysis tab, so they can never drift apart.
function recordKpiFlags(r){
  const companyCancel = r.cancelled && r.cancelReasonGroup === 'company';
  if(companyCancel) return { inBase:false, kpi1Fail:true, kpi2Fail:false, kpi3Fail:false, failBucket:null };
  let k2 = false, k3 = false, failBucket = null;
  if(r.cancelled){
    k2 = true; k3 = true;
  } else if(r.pickupResult === 'success'){
    k3 = true;
    k2 = !!r.onTime;
    if(!k2) failBucket = 'lateOnly'; // succeeded, but missed the promised date
  } else if(r.pickupResult === 'fail'){
    if(r.failReasonGroup === 'customer'){ k2 = true; k3 = true; }
    else if(r.failReasonGroup === 'staff'){ failBucket = 'staff'; }
    else { failBucket = 'other'; }
  } else {
    failBucket = 'pending';
  }
  return { inBase:true, kpi1Fail:false, kpi2Fail:!k2, kpi3Fail:!k3, failBucket };
}

function analyze(records){
  let total = records.length;
  let companyCancelled = 0, baseCount = 0, pendingCount = 0;
  let kpi2SuccessCount = 0, kpi3SuccessCount = 0;
  let totalQty = 0, totalFee = 0;
  let failCustomer = 0, failStaff = 0, failOther = 0;

  records.forEach(r=>{
    totalQty += r.qty; totalFee += r.fee;
    const f = recordKpiFlags(r);
    if(!f.inBase){ companyCancelled++; return; }
    baseCount++;
    if(!f.kpi2Fail) kpi2SuccessCount++;
    if(!f.kpi3Fail) kpi3SuccessCount++;
    if(f.failBucket === 'staff') failStaff++;
    else if(f.failBucket === 'other') failOther++;
    else if(f.failBucket === 'pending') pendingCount++;
    if(r.pickupResult === 'fail' && r.failReasonGroup === 'customer') failCustomer++;
  });

  const kpi1 = total>0 ? (total-companyCancelled)/total*100 : null;
  const kpi2 = baseCount>0 ? kpi2SuccessCount/baseCount*100 : null;
  const kpi3 = baseCount>0 ? kpi3SuccessCount/baseCount*100 : null;
  const kpi1FailCount = companyCancelled;
  const kpi2FailCount = baseCount - kpi2SuccessCount;
  const kpi3FailCount = baseCount - kpi3SuccessCount;
  return { total, companyCancelled, baseCount, kpi1, kpi2, kpi3, totalQty, totalFee, pendingCount, failCustomer, failStaff, failOther, kpi1FailCount, kpi2FailCount, kpi3FailCount };
}

function gradeColor(value, target){
  if(value===null || value===undefined || isNaN(value)) return COLORS.gray;
  const diff = target - value;
  if(diff <= 0) return COLORS.green;
  if(diff <= 1) return COLORS.yellow;
  if(diff <= 2) return COLORS.orange;
  return COLORS.red;
}

function getFilters(){
  return {
    zone: document.getElementById('fZone').value || '',
    dc: document.getElementById('fDC').value || '',
    product: document.getElementById('fProduct').value || '',
    start: document.getElementById('fStart').value || '',
    end: document.getElementById('fEnd').value || ''
  };
}

// Everything the six main KPI cards (and the share text) need, in one place so they always agree:
// overall + AB + CC for the selected scope, plus the same metrics for the immediately preceding
// period of equal length (only when both a start and an end date are chosen).
function computeKpiSet(f){
  const scope = filterRecords({ zone:f.zone, dc:f.dc, product:'', start:f.start, end:f.end });
  const overall = analyze(scope);
  const ab = analyze(scope.filter(r=>r.productGroup==='AB'));
  const cc = analyze(scope.filter(r=>r.productGroup==='CC'));
  let prev = null;
  const pr = prevPeriodRange(f.start, f.end);
  if(pr){
    const prevScope = filterRecords({ zone:f.zone, dc:f.dc, product:'', start:pr.start, end:pr.end });
    if(prevScope.length) prev = analyze(prevScope);
  }
  return { overall, ab, cc, prev, pr };
}

function prevPeriodRange(start, end){
  if(!start || !end) return null;
  if(PER.auto && start === PER.start && end === PER.end) return { start:PER.prevStart, end:PER.prevEnd }; // equal working days
  const s = new Date(start), e = new Date(end);
  const lenMs = e - s;
  const prevEnd = new Date(s.getTime() - 86400000);
  const prevStart = new Date(prevEnd.getTime() - lenMs);
  return { start: toISODate(prevStart), end: toISODate(prevEnd) };
}

/* ============================== RANKING / GROUPING ============================== */
function buildRanking(baseRecords, level){
  // level: 'zone' | 'dc'
  const groups = new Map();
  baseRecords.forEach(r=>{
    const key = level==='zone' ? r.zone : r.dcCode;
    const label = level==='zone' ? r.zone : (r.dcName || r.dcCode);
    if(!groups.has(key)) groups.set(key, { key, label, records:[] });
    groups.get(key).records.push(r);
  });
  const rows = Array.from(groups.values()).map(g=>{
    const a = analyze(g.records);
    return { key:g.key, label:g.label, ...a };
  });
  return rows;
}

/* ============================== SORTABLE RANKING STATE ============================== */
let rankSort = { key:'kpi3', dir:'asc' };
const RANK_DEFAULT_DIR = { label:'asc', total:'desc', totalQty:'desc', totalFee:'desc', kpi1:'asc', kpi2:'asc', kpi3:'asc' };
const RANK_SORT_NAMES = {
  label:'ชื่อ', total:'จำนวนบิล', totalQty:'จำนวนกล่อง', totalFee:'รายได้',
  kpi1:'อัตราเข้ารับลูกค้าได้ทั้งหมด', kpi2:'อัตราจัดรถตรงวันนัด', kpi3:'อัตราเข้ารับสำเร็จ'
};
function rankSortLabel(){
  return `${RANK_SORT_NAMES[rankSort.key]||rankSort.key} (${rankSort.dir==='asc'?'ต่ำ→สูง':'สูง→ต่ำ'})`;
}
function sortRankRows(rows, sort){
  const dir = sort.dir==='asc' ? 1 : -1;
  return [...rows].sort((a,b)=>{
    if(sort.key==='label'){
      return dir * (a.label||'').localeCompare((b.label||''), 'th');
    }
    let av = a[sort.key], bv = b[sort.key];
    av = (av===null||av===undefined||isNaN(av)) ? -Infinity : av;
    bv = (bv===null||bv===undefined||isNaN(bv)) ? -Infinity : bv;
    return dir * (av - bv);
  });
}

function buildTrend(baseRecords, period){
  const groups = new Map();
  baseRecords.forEach(r=>{
    const key = periodKey(new Date(r.confirmDateISO), period);
    if(!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  });
  const keys = Array.from(groups.keys()).sort();
  return keys.map(k=>{
    const a = analyze(groups.get(k));
    return { key:k, label: periodLabel(k, period), ...a };
  });
}

const WEEKDAY_TH = ['จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์','อาทิตย์'];

// Builds two aligned series — the current week/month and the one immediately before it —
// bucketed by position (weekday name, or day-of-month number) so they overlay for comparison.
// Only meaningful for period 'week' or 'month'; 'day' has no natural sub-bucket to compare within.
function buildComparisonRows(records, period, refDateISO){
  const ref = refDateISO ? new Date(refDateISO) : new Date();
  let curStart, curEnd, prevStart, prevEnd, positions, posKeyFn, posLabelFn;

  if(period === 'week'){
    const dow = (ref.getDay()+6)%7; // 0=Mon..6=Sun
    curStart = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate()-dow);
    curEnd = new Date(curStart.getFullYear(), curStart.getMonth(), curStart.getDate()+6);
    prevEnd = new Date(curStart.getFullYear(), curStart.getMonth(), curStart.getDate()-1);
    prevStart = new Date(prevEnd.getFullYear(), prevEnd.getMonth(), prevEnd.getDate()-6);
    positions = [0,1,2,3,4,5,6];
    posKeyFn = (d)=> (d.getDay()+6)%7;
    posLabelFn = (p)=> WEEKDAY_TH[p];
  } else { // month
    curStart = new Date(ref.getFullYear(), ref.getMonth(), 1);
    curEnd = new Date(ref.getFullYear(), ref.getMonth()+1, 0);
    prevStart = new Date(ref.getFullYear(), ref.getMonth()-1, 1);
    prevEnd = new Date(ref.getFullYear(), ref.getMonth(), 0);
    const maxDay = Math.max(curEnd.getDate(), prevEnd.getDate());
    positions = Array.from({length:maxDay}, (_,i)=>i+1);
    posKeyFn = (d)=> d.getDate();
    posLabelFn = (p)=> String(p);
  }

  const curBuckets = new Map(), prevBuckets = new Map();
  const curRecords = [], prevRecords = [];
  records.forEach(r=>{
    const d = new Date(r.confirmDateISO);
    if(d>=curStart && d<=curEnd){
      curRecords.push(r);
      const p = posKeyFn(d);
      if(!curBuckets.has(p)) curBuckets.set(p, []);
      curBuckets.get(p).push(r);
    } else if(d>=prevStart && d<=prevEnd){
      prevRecords.push(r);
      const p = posKeyFn(d);
      if(!prevBuckets.has(p)) prevBuckets.set(p, []);
      prevBuckets.get(p).push(r);
    }
  });

  const rows = positions.map(p=>({
    label: posLabelFn(p),
    cur: analyze(curBuckets.get(p)||[]),
    prev: analyze(prevBuckets.get(p)||[])
  }));

  const fmtRange = (s,e)=> `${fmtDateTH(s)}–${fmtDateTH(e)}`;
  const curLabel = period==='week' ? `สัปดาห์นี้ (${fmtRange(curStart,curEnd)})` : `เดือนนี้ (${curStart.toLocaleDateString('th-TH',{month:'short',year:'2-digit'})})`;
  const prevLabel = period==='week' ? `สัปดาห์ก่อน (${fmtRange(prevStart,prevEnd)})` : `เดือนก่อน (${prevStart.toLocaleDateString('th-TH',{month:'short',year:'2-digit'})})`;

  return { rows, curLabel, prevLabel, curRecords, prevRecords };
}

// Custom mode: two arbitrary, independently-chosen date ranges, aligned by day-offset from
// each range's own start (Day 1, Day 2, ...) so ranges of different lengths still overlay sensibly.
function buildCustomComparisonRows(records, start1ISO, end1ISO, start2ISO, end2ISO){
  const curStart = new Date(start1ISO), curEnd = new Date(end1ISO);
  const prevStart = new Date(start2ISO), prevEnd = new Date(end2ISO);
  const lenCur = Math.round((curEnd-curStart)/86400000)+1;
  const lenPrev = Math.round((prevEnd-prevStart)/86400000)+1;
  const maxLen = Math.max(lenCur, lenPrev, 1);

  const curBuckets = new Map(), prevBuckets = new Map();
  const curRecords = [], prevRecords = [];
  records.forEach(r=>{
    const d = new Date(r.confirmDateISO);
    if(d>=curStart && d<=curEnd){
      curRecords.push(r);
      const p = Math.round((d-curStart)/86400000)+1;
      if(!curBuckets.has(p)) curBuckets.set(p, []);
      curBuckets.get(p).push(r);
    } else if(d>=prevStart && d<=prevEnd){
      prevRecords.push(r);
      const p = Math.round((d-prevStart)/86400000)+1;
      if(!prevBuckets.has(p)) prevBuckets.set(p, []);
      prevBuckets.get(p).push(r);
    }
  });

  const rows = Array.from({length:maxLen}, (_,i)=>i+1).map(p=>({
    label: `วันที่ ${p}`,
    cur: analyze(curBuckets.get(p)||[]),
    prev: analyze(prevBuckets.get(p)||[])
  }));

  const curLabel = `ช่วงปัจจุบัน (${fmtDateTH(curStart)}–${fmtDateTH(curEnd)})`;
  const prevLabel = `ช่วงก่อนหน้า (${fmtDateTH(prevStart)}–${fmtDateTH(prevEnd)})`;
  return { rows, curLabel, prevLabel, curRecords, prevRecords };
}

/* ============================== COMPARE TAB ============================== */
let compareTabMode = 'custom';
let compareTabPeriod = 'week';
let compareChangeDim = 'zone';
let compareChangeKpi = 'kpi3';

function scorecardRowHTML(label, curVal, prevVal, isPct, isCurrency, indent){
  const delta = (curVal!==null && curVal!==undefined && prevVal!==null && prevVal!==undefined) ? curVal-prevVal : null;
  const pctChange = (prevVal && prevVal!==0 && delta!==null) ? (delta/Math.abs(prevVal)*100) : null;
  const fmtV = v => (v===null||v===undefined) ? '–' : (isPct?fmtPct(v):(isCurrency?'฿'+fmtNum(v):fmtNum(v)));
  const up = delta!==null && delta>0.001, down = delta!==null && delta<-0.001;
  const color = up ? 'var(--green)' : (down ? 'var(--red)' : 'var(--gray)');
  const arrow = up ? '▲' : (down ? '▼' : '▬');
  const deltaStr = delta===null ? '–' : `${arrow} ${isPct ? Math.abs(delta).toFixed(1)+'pt' : (isCurrency?'฿'+fmtNum(Math.abs(delta)):fmtNum(Math.abs(delta)))}`;
  const pctStr = pctChange===null ? '–' : `${pctChange>0?'+':''}${pctChange.toFixed(1)}%`;
  return `<tr>
    <td style="text-align:left; ${indent?'padding-left:30px; color:var(--ink-soft); font-size:12px;':'font-weight:700;'}">${label}</td>
    <td class="num">${fmtV(curVal)}</td>
    <td class="num">${fmtV(prevVal)}</td>
    <td class="num" style="color:${color}; font-weight:700;">${deltaStr}</td>
    <td class="num" style="color:${color};">${pctStr}</td>
  </tr>`;
}

function renderScorecard(curRecords, prevRecords){
  const curA = analyze(curRecords), prevA = analyze(prevRecords);
  const curAB = analyze(curRecords.filter(r=>r.productGroup==='AB')), prevAB = analyze(prevRecords.filter(r=>r.productGroup==='AB'));
  const curCC = analyze(curRecords.filter(r=>r.productGroup==='CC')), prevCC = analyze(prevRecords.filter(r=>r.productGroup==='CC'));

  const metrics = [
    { label:'อัตราเข้ารับลูกค้าได้ทั้งหมด (ตัดสาเหตุลูกค้า)', key:'kpi1', isPct:true },
    { label:'อัตราจัดรถเข้ารับตรงวันนัด (ตัดสาเหตุลูกค้า)', key:'kpi2', isPct:true },
    { label:'อัตรารถเข้ารับสำเร็จทั่วประเทศ (ตัดสาเหตุลูกค้า)', key:'kpi3', isPct:true },
    { label:'จำนวนบิล', key:'total', isPct:false },
    { label:'จำนวนกล่อง', key:'totalQty', isPct:false },
    { label:'รายได้ (฿)', key:'totalFee', isPct:false, isCurrency:true }
  ];

  let html = '';
  metrics.forEach(m=>{
    html += scorecardRowHTML(m.label, curA[m.key], prevA[m.key], m.isPct, m.isCurrency, false);
    html += scorecardRowHTML('AB · ทั่วไป', curAB[m.key], prevAB[m.key], m.isPct, m.isCurrency, true);
    html += scorecardRowHTML('CC · Cold Chain', curCC[m.key], prevCC[m.key], m.isPct, m.isCurrency, true);
  });
  document.getElementById('scorecardBody').innerHTML = html;
  return { curA, prevA };
}

function renderCompareChangeTable(curRecords, prevRecords, dim, kpiKey){
  const groupBy = (records)=>{
    const groups = new Map();
    records.forEach(r=>{
      const key = dim==='zone' ? r.zone : (r.dcName||r.dcCode||'ไม่ระบุ');
      if(!groups.has(key)) groups.set(key, []);
      groups.get(key).push(r);
    });
    return groups;
  };
  const curGroups = groupBy(curRecords), prevGroups = groupBy(prevRecords);
  const allKeys = new Set([...curGroups.keys(), ...prevGroups.keys()]);
  let rows = Array.from(allKeys).map(key=>{
    const curVal = rateFor(analyze(curGroups.get(key)||[]), kpiKey);
    const prevVal = rateFor(analyze(prevGroups.get(key)||[]), kpiKey);
    const delta = (curVal!==null && prevVal!==null) ? curVal-prevVal : null;
    return { label:key, curVal, prevVal, delta };
  }).filter(r=>r.delta!==null);
  rows.sort((a,b)=> Math.abs(b.delta)-Math.abs(a.delta));

  document.getElementById('compareChangeColLabel').textContent = dim==='zone' ? 'ภาค' : 'DC';
  const tbody = document.getElementById('compareChangeBody');
  tbody.innerHTML = rows.slice(0,12).map((r,i)=>{
    const up = r.delta>0.001, down = r.delta<-0.001;
    const color = up ? 'var(--green)' : (down ? 'var(--red)' : 'var(--gray)');
    const arrow = up ? '▲' : (down ? '▼' : '▬');
    return `<tr>
      <td>${i+1}</td>
      <td>${r.label}</td>
      <td class="num">${fmtPct(r.curVal)}</td>
      <td class="num">${fmtPct(r.prevVal)}</td>
      <td class="num" style="color:${color}; font-weight:700;">${arrow} ${Math.abs(r.delta).toFixed(1)}pt</td>
    </tr>`;
  }).join('') || `<tr><td colspan="5" style="text-align:center; color:var(--gray); padding:20px;">ไม่มีข้อมูล</td></tr>`;
}

function renderCompareTab(f){
  // Compare tab defines its own date ranges, so it ignores the fStart/fEnd date filter,
  // but still respects zone / DC / product-type filters from the top bar.
  const scopeRecords = filterRecords({ zone:f.zone, dc:f.dc, product:f.product, start:'', end:'' });

  let compareData = null;
  let missingMsg = '';

  if(compareTabMode === 'auto'){
    const refDate = REPORT_END_DATE || (scopeRecords.length ? scopeRecords.map(r=>r.confirmDateISO).sort().slice(-1)[0] : null);
    if(refDate) compareData = buildComparisonRows(scopeRecords, compareTabPeriod, refDate);
    else missingMsg = 'ยังไม่มีข้อมูลให้เทียบ';
  } else {
    const s1 = document.getElementById('cmpStart1').value, e1 = document.getElementById('cmpEnd1').value;
    const s2 = document.getElementById('cmpStart2').value, e2 = document.getElementById('cmpEnd2').value;
    if(s1 && e1 && s2 && e2) compareData = buildCustomComparisonRows(scopeRecords, s1, e1, s2, e2);
    else missingMsg = 'กรุณาเลือกวันที่ให้ครบทั้ง 4 ช่อง (ช่วงปัจจุบันและช่วงก่อนหน้า)';
  }

  if(!compareData){
    document.getElementById('scorecardBody').innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--gray); padding:24px;">${missingMsg}</td></tr>`;
    document.getElementById('compareChangeBody').innerHTML = '';
    window.__lastCompareData = null;
    return;
  }

  renderScorecard(compareData.curRecords, compareData.prevRecords);
  renderCompareChangeTable(compareData.curRecords, compareData.prevRecords, compareChangeDim, compareChangeKpi);

  document.getElementById('scorecardNote').textContent = `${compareData.curLabel} vs ${compareData.prevLabel} · แถวย่อยสีเทาคือแยกตามประเภทสินค้า`;

  window.__lastCompareData = compareData;
}

/* ============================== FILTER OPTIONS ============================== */
function rebuildFilterOptions(){
  const zoneSel = document.getElementById('fZone');
  const dcSel = document.getElementById('fDC');
  const curZone = zoneSel.value, curDc = dcSel.value;

  const zonesPresent = Array.from(new Set(RECORDS.map(r=>r.zone))).sort((a,b)=>ZONE_ORDER.indexOf(a)-ZONE_ORDER.indexOf(b));
  zoneSel.innerHTML = '<option value="">ทุกภาค</option>' +
    zonesPresent.map(z=>`<option value="${z}">${z}</option>`).join('');
  zoneSel.value = zonesPresent.includes(curZone) ? curZone : '';

  const dcsPresent = Array.from(new Map(
    RECORDS.filter(r=> !zoneSel.value || r.zone===zoneSel.value)
           .map(r=>[r.dcCode, r.dcName])
  ).entries()).sort((a,b)=>a[1].localeCompare(b[1],'th'));
  dcSel.innerHTML = '<option value="">ทุก DC</option>' +
    dcsPresent.map(([code,name])=>`<option value="${code}">${name}</option>`).join('');
  dcSel.value = dcsPresent.some(([code])=>code===curDc) ? curDc : '';
}

/* ============================== RENDER: KPI CARDS ============================== */
function kpiCardHTML({label, value, isPct, isCurrency, target, delta, deltaPct, color, abVal, ccVal}){
  const fmtVal = v => isPct ? fmtPct(v) : (isCurrency ? '฿'+fmtNum(v) : fmtNum(v));
  const valStr = fmtVal(value);
  let deltaHTML = '';
  if(delta!==null && delta!==undefined && !isNaN(delta)){
    const eps = isPct ? 0.05 : 0.5;
    const up = delta>eps, down = delta<-eps;
    const mag = isPct ? Math.abs(delta).toFixed(1)+'pt' : (isCurrency?'฿':'')+fmtNum(Math.abs(delta));
    const pctStr = (!isPct && deltaPct!==null && deltaPct!==undefined && !isNaN(deltaPct)) ? ` (${deltaPct>0?'+':''}${deltaPct.toFixed(1)}%)` : '';
    deltaHTML = `<div class="kpi-delta ${up?'up':(down?'down':'flat')}">
      ${up?'▲':(down?'▼':'▬')} ${mag}${pctStr} เทียบช่วงก่อนหน้า
    </div>`;
  }
  return `
  <div class="kpi">
    <div class="kpi-bar" style="background:${color}"></div>
    <div class="kpi-label">${label}</div>
    <div class="kpi-value-row">
      <div class="kpi-value num" style="color:${color}">${valStr}</div>
      ${target!==undefined?`<div class="kpi-target">เป้า ${target}%</div>`:''}
    </div>
    ${deltaHTML}
    <div class="kpi-split">
      <div class="kpi-split-item"><span class="kpi-split-tag ab">AB · ทั่วไป</span><span class="kpi-split-val num">${fmtVal(abVal)}</span></div>
      <div class="kpi-split-item"><span class="kpi-split-tag cc">CC · Cold Chain</span><span class="kpi-split-val num">${fmtVal(ccVal)}</span></div>
    </div>
  </div>`;
}

function renderKPIs(cur, ab, cc, prev, pr){
  const grid = document.getElementById('kpiGrid');
  const d1 = prev ? (cur.kpi1 - prev.kpi1) : null;
  const d2 = prev ? (cur.kpi2 - prev.kpi2) : null;
  const d3 = prev ? (cur.kpi3 - prev.kpi3) : null;
  const vol = (k)=> prev ? { d: cur[k]-prev[k], p: prev[k] ? (cur[k]-prev[k])/Math.abs(prev[k])*100 : null } : { d:null, p:null };
  const vBill = vol('total'), vBox = vol('totalQty'), vFee = vol('totalFee');
  const hint = document.getElementById('kpiCompareHint');
  if(hint){
    hint.textContent = prev ? `เทียบกับช่วงก่อนหน้า: ${pLabelRange(pr.start, pr.end)}`
      : (pr ? (isUnlocked ? `ช่วงก่อนหน้า (${pr.start} ถึง ${pr.end}) ไม่มีข้อมูลให้เทียบ` : '')
            : 'เลือกช่วงวันที่ (ตั้งแต่–ถึง) เพื่อแสดงการเทียบกับช่วงก่อนหน้าในทุกการ์ด');
  }
  grid.innerHTML = [
    kpiCardHTML({label:'อัตราเข้ารับลูกค้าได้ทั้งหมด (ตัดสาเหตุลูกค้า)', value:cur.kpi1, isPct:true, target:TARGETS.kpi1, delta:d1, color: gradeColor(cur.kpi1, TARGETS.kpi1), abVal:ab.kpi1, ccVal:cc.kpi1}),
    kpiCardHTML({label:'อัตราจัดรถเข้ารับตรงวันนัด (ตัดสาเหตุลูกค้า)', value:cur.kpi2, isPct:true, target:TARGETS.kpi2, delta:d2, color: gradeColor(cur.kpi2, TARGETS.kpi2), abVal:ab.kpi2, ccVal:cc.kpi2}),
    kpiCardHTML({label:'อัตรารถเข้ารับสำเร็จทั่วประเทศ (ตัดสาเหตุลูกค้า)', value:cur.kpi3, isPct:true, target:TARGETS.kpi3, delta:d3, color: gradeColor(cur.kpi3, TARGETS.kpi3), abVal:ab.kpi3, ccVal:cc.kpi3}),
    kpiCardHTML({label:'จำนวนบิล', value:cur.total, isPct:false, delta:vBill.d, deltaPct:vBill.p, color:COLORS.navy, abVal:ab.total, ccVal:cc.total}),
    kpiCardHTML({label:'จำนวนกล่อง', value:cur.totalQty, isPct:false, delta:vBox.d, deltaPct:vBox.p, color:COLORS.blue, abVal:ab.totalQty, ccVal:cc.totalQty}),
    kpiCardHTML({label:'รายได้รวม (฿)', value:cur.totalFee, isPct:false, isCurrency:true, delta:vFee.d, deltaPct:vFee.p, color:COLORS.blue2, abVal:ab.totalFee, ccVal:cc.totalFee})
  ].join('');
}

/* ============================== RENDER: CHARTS ============================== */
function destroyChart(key){ if(charts[key]){ charts[key].destroy(); delete charts[key]; } }

function renderTrendChart(rows){
  destroyChart('trend');
  const canvasEl = document.getElementById('chartTrend');
  charts.trend = new Chart(canvasEl, {
    type:'line',
    data:{
      labels: rows.map(r=>r.label),
      datasets:[
        { label:'KPI1 เข้ารับได้ทั้งหมด', data: rows.map(r=>r.kpi1), borderColor:COLORS.navy, backgroundColor:COLORS.navy, tension:.3, pointRadius:3 },
        { label:'KPI2 ตรงวันนัด', data: rows.map(r=>r.kpi2), borderColor:COLORS.blue, backgroundColor:COLORS.blue, tension:.3, pointRadius:3 },
        { label:'KPI3 เข้ารับสำเร็จ', data: rows.map(r=>r.kpi3), borderColor:COLORS.blue2, backgroundColor:COLORS.blue2, tension:.3, pointRadius:3 }
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      scales:{ y:{ min:80, max:100, ticks:{ callback:v=>v+'%' }, grid:{color:COLORS.grid} }, x:{ grid:{display:false} } },
      plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10, font:{family:'Prompt', size:11} } }, tooltip:{ callbacks:{ label:c=>`${c.dataset.label}: ${c.parsed.y===null?'–':c.parsed.y.toFixed(1)+'%'}` } } }
    }
  });
}

function renderReasonChart(records){
  destroyChart('reason');
  const fails = records.filter(r=>r.pickupResult==='fail');
  const customer = fails.filter(r=>r.failReasonGroup==='customer').length;
  const staff = fails.filter(r=>r.failReasonGroup==='staff').length;
  const other = fails.filter(r=>!r.failReasonGroup || r.failReasonGroup==='other').length;
  const canvasEl = document.getElementById('chartReason');
  charts.reason = new Chart(canvasEl, {
    type:'doughnut',
    data:{
      labels:['สาเหตุลูกค้า','สาเหตุพนักงาน','อื่นๆ/ไม่ระบุ'],
      datasets:[{ data:[customer, staff, other], backgroundColor:[COLORS.blue2, COLORS.red, COLORS.gray], borderWidth:0 }]
    },
    options:{
      responsive:true, maintainAspectRatio:false, cutout:'62%',
      plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10, font:{family:'Prompt', size:11} } } }
    }
  });
}

function renderZoneChart(rows, level){
  destroyChart('zone');
  const top = rows; // show every zone/DC in scope, per request
  const canvasEl = document.getElementById('chartZone');
  charts.zone = new Chart(canvasEl, {
    type:'bar',
    data:{
      labels: top.map(r=>r.label),
      datasets:[{ label:'KPI3 เข้ารับสำเร็จ (%)', data: top.map(r=>r.kpi3), backgroundColor: top.map(r=>gradeColor(r.kpi3, TARGETS.kpi3)), borderRadius:5, maxBarThickness:34 }]
    },
    options:{
      indexAxis:'x', responsive:true, maintainAspectRatio:false,
      scales:{
        y:{ min:0, max:100, ticks:{ callback:v=>v+'%' }, grid:{color:COLORS.grid} },
        x:{ grid:{display:false}, ticks:{ autoSkip:false, maxRotation:60, minRotation: top.length>6?45:0, font:{size:11} } }
      },
      plugins:{ legend:{display:false}, tooltip:{ callbacks:{ label:c=>`${fmtPct(c.parsed.y)} · ${fmtNum(top[c.dataIndex].total)} บิล` } } },
      onClick:(evt, els)=>{
        if(!els.length || level!=='zone') return;
        const idx = els[0].index;
        document.getElementById('fZone').value = top[idx].key;
        onFilterChange();
      },
      onHover:(evt, els)=>{ evt.native.target.style.cursor = (els.length && level==='zone') ? 'pointer' : 'default'; }
    }
  });
}

function renderFailChart(trendRows){
  destroyChart('staffFail');
  const canvasEl = document.getElementById('chartStaffFail');
  charts.staffFail = new Chart(canvasEl, {
    type:'bar',
    data:{
      labels: trendRows.map(r=>r.label),
      datasets:[
        { label:'KPI1 ไม่สำเร็จ', data: trendRows.map(r=>r.kpi1FailCount), backgroundColor:COLORS.navy, borderRadius:3, maxBarThickness:16 },
        { label:'KPI2 ไม่สำเร็จ', data: trendRows.map(r=>r.kpi2FailCount), backgroundColor:COLORS.blue, borderRadius:3, maxBarThickness:16 },
        { label:'KPI3 ไม่สำเร็จ', data: trendRows.map(r=>r.kpi3FailCount), backgroundColor:COLORS.red, borderRadius:3, maxBarThickness:16 }
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      scales:{ y:{ beginAtZero:true, grid:{color:COLORS.grid} }, x:{ grid:{display:false} } },
      plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10, font:{family:'Prompt', size:11} } } }
    }
  });
}

/* ============================== RENDER: RANKING TABLE ============================== */
function renderRankTable(rows, level){
  const tbody = document.getElementById('rankBody');
  document.getElementById('rankColLabel').textContent = level==='zone' ? 'ภาค' : 'DC';
  delete document.getElementById('rankColLabel').dataset.label;
  document.getElementById('rankTitle').textContent = level==='zone'
    ? `อันดับภาค เรียงตาม${rankSortLabel()}`
    : `อันดับ DC ในภาค "${document.getElementById('fZone').value}" เรียงตาม${rankSortLabel()}`;
  document.getElementById('btnRankUp').style.display = level==='zone' ? 'none' : 'inline-flex';

  document.querySelectorAll('#rankHeadRow th.sortable').forEach(th=>{
    const key = th.dataset.sort;
    th.classList.toggle('active', key===rankSort.key);
    if(!th.dataset.label) th.dataset.label = th.textContent.trim();
    const baseText = th.dataset.label;
    th.innerHTML = baseText + (key===rankSort.key ? ` <span class="arrow">${rankSort.dir==='asc'?'▲':'▼'}</span>` : ' <span class="arrow">↕</span>');
  });

  tbody.innerHTML = rows.map((r,i)=>{
    const barColor = gradeColor(r.kpi3, TARGETS.kpi3);
    const nameCell = level==='zone'
      ? `<span class="zone-link" data-key="${r.key}">${r.label}</span>`
      : `<span>${r.label}</span>`;
    return `<tr data-key="${r.key}" data-level="${level}">
      <td>${i+1}</td>
      <td>${nameCell}</td>
      <td class="num">${fmtNum(r.total)}</td>
      <td class="num">${fmtNum(r.totalQty)}</td>
      <td class="num">${fmtNum(r.totalFee)}</td>
      <td class="num" style="color:${gradeColor(r.kpi1,TARGETS.kpi1)}; font-weight:700;">${fmtPct(r.kpi1)}</td>
      <td class="num" style="color:${gradeColor(r.kpi2,TARGETS.kpi2)}; font-weight:700;">${fmtPct(r.kpi2)}</td>
      <td class="num" style="color:${barColor}; font-weight:700;">${fmtPct(r.kpi3)}</td>
    </tr>`;
  }).join('') || `<tr><td colspan="8" style="text-align:center; color:var(--gray); padding:24px;">ไม่มีข้อมูลตามเงื่อนไขที่เลือก</td></tr>`;

  tbody.querySelectorAll('.zone-link').forEach(el=>{
    el.addEventListener('click', ()=>{
      document.getElementById('fZone').value = el.dataset.key;
      onFilterChange();
    });
  });
}

/* ============================== RENDER: BREADCRUMB / FOOTER ============================== */
function renderBreadcrumb(f, cur){
  const parts = ['<b>ทุกภาค</b>'];
  if(f.zone) parts[0] = `<span class="zone-link" id="bcAllZones">ทุกภาค</span>`;
  const chain = [];
  chain.push(f.zone ? `<span class="zone-link" id="bcZone">${f.zone}</span>` : '<b>ทุกภาค</b>');
  if(f.dc){
    const dcName = document.getElementById('fDC').selectedOptions[0]?.textContent || f.dc;
    chain.push(`<b>${dcName}</b>`);
  }
  if(f.product) chain.push(`<b style="color:${f.product==='CC'?'var(--cc)':'var(--ab)'}">${f.product==='CC'?'CC · แช่แข็ง/แช่เย็น':'AB · ทั่วไป'}</b>`);
  if((f.start || f.end) && !perIsActive(f)) chain.push(`<b>${f.start ? pLabelRange(f.start, f.end || f.start) : '… – ' + f.end}</b>`);
  document.getElementById('breadcrumb').innerHTML =
    chain.join('<span class="sep">›</span>') +
    `<span class="sep">·</span><span>${fmtNum(cur.total)} บิล ในมุมมองนี้</span>`;

  const bcZone = document.getElementById('bcZone');
  if(bcZone) bcZone.addEventListener('click', ()=>{ document.getElementById('fDC').value=''; onFilterChange(); });
  const bcAll = document.getElementById('bcAllZones');
  if(bcAll) bcAll.addEventListener('click', ()=>{ document.getElementById('fZone').value=''; document.getElementById('fDC').value=''; onFilterChange(); });
}

function renderFooter(){
  const dq = document.getElementById('dqBox');
  const pieces = [];
  if(dataQuality.excluded > 0){
    const reasonList = Object.entries(dataQuality.reasons||{}).map(([k,v])=>`${k} (${v})`).join(', ');
    pieces.push(`⚠ ตัดข้อมูลที่ไม่ครบออก <b>${fmtNum(dataQuality.excluded)}</b> แถว ไม่นำมาคำนวณ — ${reasonList}`);
  }
  if(META.lastDuplicatesInFile > 0){
    pieces.push(`🔗 พบบิลซ้ำในไฟล์ล่าสุด <b>${fmtNum(META.lastDuplicatesInFile)}</b> แถว (บิลเดียวกันถูกบันทึกหลายสถานะ) — ระบบรวมเป็น 1 บิล โดยใช้ค่าใหม่สุดทับเสมอ และไม่ลบผลเก่าที่ช่องใหม่ว่างอยู่`);
  }
  const dueCount = notYetDueCount();
  if(REPORT_END_DATE){
    pieces.push(`📅 คำนวณผลถึงวันที่ <b>${fmtDateTH(new Date(REPORT_END_DATE))}</b> เท่านั้น (ตามช่วงวันที่ในรายงาน)${dueCount>0 ? ` · บิลนัดรับหลังจากนี้ <b>${fmtNum(dueCount)}</b> บิล ยังไม่ถึงวันนัด ยังไม่นำมาคำนวณ` : ''}`);
  }
  dq.innerHTML = pieces.length ? pieces.join(' &nbsp;·&nbsp; ') : '✓ ข้อมูลครบถ้วน ไม่มีแถวที่ถูกตัดออก';
  document.getElementById('metaTotalBills').textContent = fmtNum(RECORDS.length);
  document.getElementById('metaUpdated').textContent = META.lastUpdated ? new Date(META.lastUpdated).toLocaleString('th-TH') : '–';
  if(RECORDS.length){
    const dates = RECORDS.map(r=>r.confirmDateISO).sort();
    document.getElementById('metaCoverage').textContent = `${fmtDateTH(new Date(dates[0]))} – ${fmtDateTH(new Date(dates[dates.length-1]))}`;
  } else {
    document.getElementById('metaCoverage').textContent = '–';
  }
}

/* ============================== MASTER RENDER ============================== */
let currentTab = 'overview';

function renderAll(){
  if(!RECORDS.length){
    document.getElementById('emptyState').style.display = 'block';
    document.getElementById('dashArea').style.display = 'none';
    document.getElementById('analysisArea').style.display = 'none';
    document.getElementById('compareArea').style.display = 'none';
    document.getElementById('cancelArea').style.display = 'none';
    document.querySelectorAll('.xtab-area').forEach(el=> el.style.display = 'none');
    document.getElementById('tabBar').style.display = 'none';
    renderFooter();
    return;
  }
  document.getElementById('emptyState').style.display = 'none';
  document.getElementById('tabBar').style.display = 'block';
  document.getElementById('dashArea').style.display = currentTab==='overview' ? 'block' : 'none';
  document.getElementById('analysisArea').style.display = currentTab==='analysis' ? 'block' : 'none';
  document.getElementById('compareArea').style.display = currentTab==='compare' ? 'block' : 'none';
  document.getElementById('cancelArea').style.display = currentTab==='cancel' ? 'block' : 'none';
  document.querySelectorAll('.xtab-area').forEach(el=> el.style.display = el.dataset.tab===currentTab ? 'block' : 'none');
  document.querySelectorAll('.tab-btn').forEach(b=> b.classList.toggle('active', b.dataset.tab===currentTab));

  const f = getFilters();
  const curRecords = filterRecords(f);

  if(currentTab === 'analysis'){
    safeCall('renderAnalysisTab', ()=> renderAnalysisTab(f, curRecords));
    renderBreadcrumb(f, analyze(curRecords));
    renderFooter();
    window.__lastFilters = f;
    return;
  }

  if(XTABS[currentTab]){
    safeCall('xtab-'+currentTab, ()=> XTABS[currentTab](f, curRecords));
    renderBreadcrumb(f, analyze(curRecords));
    renderFooter();
    window.__lastFilters = f;
    return;
  }

  if(currentTab === 'cancel'){
    safeCall('renderCancelTab', ()=> renderCancelTab(f));
    renderFooter();
    window.__lastFilters = f;
    return;
  }

  if(currentTab === 'compare'){
    safeCall('renderCompareTab', ()=> renderCompareTab(f));
    renderBreadcrumb(f, analyze(curRecords));
    renderFooter();
    window.__lastFilters = f;
    return;
  }

  const cur = analyze(curRecords);

  // KPI cards always show overall + AB/CC breakdown, independent of the product-type filter
  // (zone / DC / date filters still apply). Charts, trend, and ranking below still respect fProduct.
  const kpiSet = computeKpiSet(f);
  const { overall: kpiOverall, ab: kpiAB, cc: kpiCC, prev, pr } = kpiSet;

  renderKPIs(kpiOverall, kpiAB, kpiCC, prev, pr);

  // ranking scope: same as curRecords but ignoring the dc filter (so we can rank DCs within the chosen zone),
  // and ignoring zone filter when at 'zone' level (rank all zones).
  const rankScopeFilters = { product:f.product, start:f.start, end:f.end, zone: f.zone, dc:'' };
  const rankLevel = f.zone ? 'dc' : 'zone';
  const rankScopeRecords = filterRecords(rankLevel==='dc' ? rankScopeFilters : { ...rankScopeFilters, zone:'' });
  let rankRows = buildRanking(rankScopeRecords, rankLevel);
  rankRows = sortRankRows(rankRows, rankSort);

  renderRankTable(rankRows, rankLevel);
  safeCall('renderZoneChart', ()=> renderZoneChart(rankRows, rankLevel), 'chartZone');
  document.getElementById('zoneChartTitle').textContent = rankLevel==='zone'
    ? 'เปรียบเทียบอัตราเข้ารับสำเร็จรายภาค' : `เปรียบเทียบอัตราเข้ารับสำเร็จราย DC — ภาค ${f.zone}`;

  const isDrilled = false; // trend keeps the chosen day/week/month even when drilled into a region
  const effectivePeriod = currentPeriod;
  const trendRows = dropSundayRows(buildTrend(trendScope(f), effectivePeriod), effectivePeriod);

  safeCall('renderTrendChart', ()=> renderTrendChart(trendRows), 'chartTrend');
  safeCall('renderReasonChart', ()=> renderReasonChart(curRecords), 'chartReason');
  safeCall('renderFailChart', ()=> renderFailChart(trendRows), 'chartStaffFail');
  const drillNote = isDrilled ? ' (แสดงรายวันอัตโนมัติเมื่อดูภาค/DC)' : '';
  document.getElementById('trendChartNote').textContent = `อิงวันที่นัดรับ (คอลัมน์ K) · กดจุดเพื่อเปิดช่วงนั้น${drillNote}`;
  document.getElementById('failChartNote').textContent = `จำนวนบิลที่นับว่า "ไม่สำเร็จ" ของแต่ละ KPI ต่อช่วงเวลา${drillNote}`;

  renderBreadcrumb(f, cur);
  renderFooter();

  window.__lastCur = cur; window.__lastFilters = f;
  window.__lastKpi = { overall: kpiOverall, ab: kpiAB, cc: kpiCC, prev, pr };
}

function onFilterChange(){ renderAll(); }

/* ============================== ANALYSIS TAB ============================== */
let reasonKpiKey = 'kpi2';
let paretoDim = 'dc';

const KPI_NAMES = { kpi1:'KPI1 · อัตราเข้ารับลูกค้าได้ทั้งหมด', kpi2:'KPI2 · อัตราจัดรถเข้ารับตรงวันนัด', kpi3:'KPI3 · อัตรารถเข้ารับสำเร็จ' };

// Reason-level breakdown of what's causing a given KPI to fail, using the same per-record
// verdicts as the main dashboard (via recordKpiFlags) so the numbers always tie out.
function getFailReasonBreakdown(records, kpiKey){
  const counts = new Map();
  const bump = (label)=> counts.set(label, (counts.get(label)||0)+1);
  records.forEach(r=>{
    const f = recordKpiFlags(r);
    if(kpiKey==='kpi1'){
      if(!f.inBase) bump(r.cancelReasonDetail || 'ยกเลิกโดยบริษัท/Nim Express');
      return;
    }
    if(!f.inBase) return;
    const isFail = kpiKey==='kpi2' ? f.kpi2Fail : f.kpi3Fail;
    if(!isFail) return;
    if(f.failBucket === 'lateOnly'){
      if(kpiKey==='kpi2') bump('เข้ารับสำเร็จ แต่ผิดวันนัด');
    } else if(f.failBucket === 'staff'){
      bump(r.failReasonDetail || 'สาเหตุพนักงาน (ไม่ระบุรายละเอียด)');
    } else if(f.failBucket === 'other'){
      bump(r.failReasonDetail || 'อื่นๆ/ไม่ระบุสาเหตุ');
    } else if(f.failBucket === 'pending'){
      bump('ยังไม่มีผลเข้ารับ (รอดำเนินการ)');
    }
  });
  return Array.from(counts.entries()).map(([label,count])=>({label,count})).sort((a,b)=>b.count-a.count);
}

function failCountFor(a, kpiKey){
  return kpiKey==='kpi1' ? a.kpi1FailCount : kpiKey==='kpi2' ? a.kpi2FailCount : a.kpi3FailCount;
}
function rateFor(a, kpiKey){
  return kpiKey==='kpi1' ? a.kpi1 : kpiKey==='kpi2' ? a.kpi2 : a.kpi3;
}

function getParetoByDimension(records, kpiKey, dim){
  const groups = new Map();
  records.forEach(r=>{
    const key = dim==='dc' ? (r.dcName||r.dcCode||'ไม่ระบุ')
              : dim==='route' ? (r.route||'ไม่ระบุเส้นทาง')
              : (r.driverName||'ไม่ระบุคนขับ');
    if(!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  });
  let totalFails = 0;
  const rows = Array.from(groups.entries()).map(([label, recs])=>{
    const a = analyze(recs);
    const failCount = failCountFor(a, kpiKey);
    totalFails += failCount;
    const successRate = rateFor(a, kpiKey);
    const failRate = successRate===null ? null : 100 - successRate;
    return { label, failCount, total: a.total, rate: failRate };
  });
  rows.forEach(r=> r.failShare = totalFails>0 ? r.failCount/totalFails*100 : 0);
  rows.sort((a,b)=>b.failCount-a.failCount);
  return rows;
}

let paretoSort = { key:'failCount', dir:'desc' };
function sortParetoRows(rows, sort){
  const dir = sort.dir==='asc' ? 1 : -1;
  return [...rows].sort((a,b)=>{
    if(sort.key==='label') return dir * (a.label||'').localeCompare((b.label||''),'th');
    let av=a[sort.key], bv=b[sort.key];
    av = (av===null||av===undefined||isNaN(av)) ? -Infinity : av;
    bv = (bv===null||bv===undefined||isNaN(bv)) ? -Infinity : bv;
    return dir*(av-bv);
  });
}

function failSums(records, kpiKey){
  let count=0, qty=0, fee=0;
  records.forEach(r=>{
    const f = recordKpiFlags(r);
    const isFail = kpiKey==='kpi1' ? !f.inBase : (f.inBase && (kpiKey==='kpi2'?f.kpi2Fail:f.kpi3Fail));
    if(isFail){ count++; qty+=r.qty; fee+=r.fee; }
  });
  return {count, qty, fee};
}

function renderFailKpiGrid(curRecords){
  const grid = document.getElementById('failKpiGrid');
  const abRecords = curRecords.filter(r=>r.productGroup==='AB');
  const ccRecords = curRecords.filter(r=>r.productGroup==='CC');

  const s1 = failSums(curRecords,'kpi1'), s2 = failSums(curRecords,'kpi2'), s3 = failSums(curRecords,'kpi3');
  const s1ab = failSums(abRecords,'kpi1'), s2ab = failSums(abRecords,'kpi2'), s3ab = failSums(abRecords,'kpi3');
  const s1cc = failSums(ccRecords,'kpi1'), s2cc = failSums(ccRecords,'kpi2'), s3cc = failSums(ccRecords,'kpi3');

  // "รวมทั้ง 3 KPI" — a bill failing more than one KPI is counted once per KPI (double-counted on purpose)
  const totalCount = s1.count+s2.count+s3.count, totalCountAB = s1ab.count+s2ab.count+s3ab.count, totalCountCC = s1cc.count+s2cc.count+s3cc.count;
  const totalQty = s1.qty+s2.qty+s3.qty, totalQtyAB = s1ab.qty+s2ab.qty+s3ab.qty, totalQtyCC = s1cc.qty+s2cc.qty+s3cc.qty;
  const totalFee = s1.fee+s2.fee+s3.fee, totalFeeAB = s1ab.fee+s2ab.fee+s3ab.fee, totalFeeCC = s1cc.fee+s2cc.fee+s3cc.fee;

  grid.innerHTML = [
    kpiCardHTML({label:'อัตราเข้ารับลูกค้าได้ทั้งหมด (ตัดสาเหตุลูกค้า) — ไม่สำเร็จ', value:s1.count, isPct:false, color:COLORS.navy, abVal:s1ab.count, ccVal:s1cc.count}),
    kpiCardHTML({label:'อัตราจัดรถเข้ารับตรงวันนัด (ตัดสาเหตุลูกค้า) — ไม่สำเร็จ', value:s2.count, isPct:false, color:COLORS.blue, abVal:s2ab.count, ccVal:s2cc.count}),
    kpiCardHTML({label:'อัตรารถเข้ารับสำเร็จทั่วประเทศ (ตัดสาเหตุลูกค้า) — ไม่สำเร็จ', value:s3.count, isPct:false, color:COLORS.red, abVal:s3ab.count, ccVal:s3cc.count}),
    kpiCardHTML({label:'จำนวนบิลไม่สำเร็จ (รวมทั้ง 3 KPI)', value:totalCount, isPct:false, color:COLORS.navy, abVal:totalCountAB, ccVal:totalCountCC}),
    kpiCardHTML({label:'จำนวนกล่องไม่สำเร็จ (รวมทั้ง 3 KPI)', value:totalQty, isPct:false, color:COLORS.blue, abVal:totalQtyAB, ccVal:totalQtyCC}),
    kpiCardHTML({label:'รายได้ไม่สำเร็จ (฿) (รวมทั้ง 3 KPI)', value:totalFee, isPct:false, isCurrency:true, color:COLORS.blue2, abVal:totalFeeAB, ccVal:totalFeeCC})
  ].join('');
}

function renderReasonParetoChart(breakdown){
  destroyChart('reasonPareto');
  const top = breakdown.slice(0, 10);
  const totalAll = breakdown.reduce((s,x)=>s+x.count,0) || 1;
  const canvasEl = document.getElementById('chartReasonPareto');
  charts.reasonPareto = new Chart(canvasEl, {
    type:'bar',
    data:{
      labels: top.map(x=>x.label),
      datasets:[{ label:'จำนวนบิล', data: top.map(x=>x.count), backgroundColor: COLORS.red, borderRadius:5, maxBarThickness:26 }]
    },
    options:{
      indexAxis:'y', responsive:true, maintainAspectRatio:false,
      scales:{ x:{ beginAtZero:true, grid:{color:COLORS.grid} }, y:{ grid:{display:false}, ticks:{ font:{size:11} } } },
      plugins:{ legend:{display:false}, tooltip:{ callbacks:{ label:c=>`${fmtNum(c.parsed.x)} บิล (${(c.parsed.x/totalAll*100).toFixed(1)}% ของปัญหาทั้งหมด)` } } }
    }
  });
}

function renderReasonTrendChart(records, kpiKey, period){
  destroyChart('reasonTrend');
  const groups = new Map();
  records.forEach(r=>{
    const key = periodKey(new Date(r.confirmDateISO), period);
    if(!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  });
  const keys = Array.from(groups.keys()).sort();
  const rows = keys.map(k=>{
    const a = analyze(groups.get(k));
    return { label: periodLabel(k, period), fail: failCountFor(a, kpiKey) };
  });
  const canvasEl = document.getElementById('chartReasonTrend');
  charts.reasonTrend = new Chart(canvasEl, {
    type:'line',
    data:{
      labels: rows.map(r=>r.label),
      datasets:[{ label:`${KPI_NAMES[kpiKey]} ไม่สำเร็จ`, data: rows.map(r=>r.fail), borderColor:COLORS.red, backgroundColor:COLORS.red, tension:.3, fill:false, pointRadius:3 }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      scales:{ y:{ beginAtZero:true, grid:{color:COLORS.grid} }, x:{ grid:{display:false} } },
      plugins:{ legend:{display:false} }
    }
  });
}

function renderParetoTable(rows){
  const tbody = document.getElementById('paretoBody');
  document.getElementById('paretoColLabel').textContent = paretoDim==='dc' ? 'DC' : paretoDim==='route' ? 'เส้นทาง' : 'คนขับ';
  delete document.getElementById('paretoColLabel').dataset.label;
  document.querySelectorAll('#paretoHeadRow th.sortable').forEach(th=>{
    const key = th.dataset.sort;
    th.classList.toggle('active', key===paretoSort.key);
    if(!th.dataset.label) th.dataset.label = th.textContent.trim();
    th.innerHTML = th.dataset.label + (key===paretoSort.key ? ` <span class="arrow">${paretoSort.dir==='asc'?'▲':'▼'}</span>` : ' <span class="arrow">↕</span>');
  });
  tbody.innerHTML = rows.map((r,i)=>{
    return `<tr>
      <td>${i+1}</td>
      <td>${r.label}</td>
      <td class="num" style="color:var(--red); font-weight:700;">${fmtNum(r.failCount)}</td>
      <td class="num">${fmtPct(r.failShare)}</td>
      <td class="num">${fmtNum(r.total)}</td>
      <td class="num">${fmtPct(r.rate)}</td>
    </tr>`;
  }).join('') || `<tr><td colspan="6" style="text-align:center; color:var(--gray); padding:24px;">ไม่มีข้อมูลตามเงื่อนไขที่เลือก</td></tr>`;
}

function actionSuggestionFor(label){
  if(label.includes('ผิดวันนัด')) return 'ทบทวนกระบวนการจัดคิว/จัดรถเข้ารับให้ตรงกับวันที่แจ้งลูกค้า อาจเกิดจากรถไม่พอหรือจัดเส้นทางไม่ทันในบางวัน';
  if(label.includes('รอดำเนินการ')) return 'ติดตามปิดสถานะบิลที่ค้างให้ครบ อาจมีบิลตกหล่นหรือพนักงานยังไม่บันทึกผลเข้ารับ';
  if(label.includes('พนักงาน')) return 'ตรวจสอบสาเหตุฝั่งปฏิบัติการ พิจารณาการอบรมพนักงานหรือทบทวนแผนเดินรถ';
  if(label.includes('บริษัท') || label.includes('Nim Express')) return 'ทบทวนกระบวนการภายในที่ทำให้ต้องยกเลิกบิลเอง เพื่อลดผลกระทบต่อลูกค้า';
  return 'ตรวจสอบรายละเอียดเพิ่มเติม เนื่องจากไม่มีการระบุสาเหตุที่ชัดเจนในระบบ';
}

function buildActionPlanText(f, curRecords, kpiKey){
  const a = analyze(curRecords);
  const breakdown = getFailReasonBreakdown(curRecords, kpiKey);
  const totalFail = failCountFor(a, kpiKey);
  const scopeStr = [
    f.zone||'ทุกภาค', f.dc?document.getElementById('fDC').selectedOptions[0]?.textContent:null,
    (f.start||f.end) ? `${f.start||'…'} – ${f.end||'…'}` : 'ทุกช่วงเวลา'
  ].filter(Boolean).join(' · ');

  if(totalFail === 0 || !breakdown.length){
    return `✅ ไม่พบบิลที่ไม่สำเร็จสำหรับ ${KPI_NAMES[kpiKey]} ในขอบเขตที่เลือก (${scopeStr}) — ยังไม่มีประเด็นที่ต้องแก้ไขในตอนนี้`;
  }

  const lines = [];
  lines.push(`ขอบเขตที่วิเคราะห์: ${scopeStr}  ·  ${KPI_NAMES[kpiKey]}`);
  lines.push(`บิลไม่สำเร็จรวม ${fmtNum(totalFail)} บิล จาก ${fmtNum(a.total)} บิลทั้งหมด (${fmtPct(100-((a.total-totalFail)/a.total*100))} ของบิลทั้งหมด)`);
  lines.push('');

  const top3 = breakdown.slice(0,3);
  lines.push('🔴 สาเหตุที่กระทบมากที่สุด:');
  top3.forEach((b,i)=>{
    lines.push(`  ${i+1}. "${b.label}" — ${fmtNum(b.count)} บิล (${fmtPct(b.count/totalFail*100)} ของปัญหาทั้งหมด)`);
  });
  lines.push('');

  const dcRows = getParetoByDimension(curRecords, kpiKey, 'dc').filter(r=>r.failCount>0);
  if(dcRows.length){
    const topDc = dcRows[0];
    lines.push(`📍 DC ที่กระทบมากที่สุด: ${topDc.label} (${fmtNum(topDc.failCount)} บิล, ${fmtPct(topDc.failShare)} ของปัญหาทั้งหมด)`);
  }
  const driverRows = getParetoByDimension(curRecords, kpiKey, 'driver').filter(r=>r.failCount>0 && r.label!=='ไม่ระบุคนขับ');
  if(driverRows.length){
    const topDriver = driverRows[0];
    lines.push(`🚗 คนขับที่ควรจับตา: ${topDriver.label} (${fmtNum(topDriver.failCount)} บิลไม่สำเร็จ จาก ${fmtNum(topDriver.total)} บิล = ${fmtPct(topDriver.rate)} ไม่สำเร็จ)`);
  }
  lines.push('');

  lines.push('💡 ข้อเสนอ Action Plan เบื้องต้น:');
  const seen = new Set();
  let n = 1;
  top3.forEach(b=>{
    const suggestion = actionSuggestionFor(b.label);
    if(seen.has(suggestion)) return;
    seen.add(suggestion);
    lines.push(`  ${n}. ${suggestion}`);
    n++;
  });
  if(dcRows.length && dcRows[0].failShare > 30){
    lines.push(`  ${n}. โฟกัสที่ DC ${dcRows[0].label} เป็นลำดับแรก เนื่องจากกระทบเกิน 30% ของปัญหาทั้งหมด`);
    n++;
  }

  return lines.join('\n');
}

function renderAnalysisTab(f, curRecords){
  renderFailKpiGrid(curRecords);
  safeCall('addFailDeltas', ()=> addFailDeltas(f));

  const breakdown = getFailReasonBreakdown(curRecords, reasonKpiKey);
  safeCall('renderReasonParetoChart', ()=> renderReasonParetoChart(breakdown), 'chartReasonPareto');
  safeCall('renderReasonTrendChart', ()=>{ const rs = trendScope(f).filter(r=> currentPeriod!=='day' || !pSun(r.confirmDateISO)); window.__reasonTrendKeys = [...new Set(rs.map(r=>periodKey(new Date(r.confirmDateISO), currentPeriod)))].sort(); renderReasonTrendChart(rs, reasonKpiKey, currentPeriod); }, 'chartReasonTrend');

  let paretoRows = getParetoByDimension(curRecords, reasonKpiKey, paretoDim);
  paretoRows = sortParetoRows(paretoRows, paretoSort);
  renderParetoTable(paretoRows);

  document.getElementById('actionPlanText').textContent = buildActionPlanText(f, curRecords, reasonKpiKey);
  window.__lastActionPlanText = document.getElementById('actionPlanText').textContent;
  window.__lastAnalysisData = { curRecords, kpiKey: reasonKpiKey, f };
}

/* ============================== SHARE TEXT ============================== */
function buildShareText(){
  // Built from the same function the overview cards use, so the numbers and the
  // previous-period comparison always match what is on the 📊 ภาพรวม D2D tab.
  const f = getFilters();
  const { overall, ab, cc, prev, pr } = computeKpiSet(f);
  const scopeParts = [];
  scopeParts.push(f.zone ? `ภาค ${f.zone}` : 'ทุกภาค');
  if(f.dc) scopeParts.push(document.getElementById('fDC').selectedOptions[0]?.textContent || f.dc);
  const dateRange = (f.start||f.end) ? `${f.start||'…'} ถึง ${f.end||'…'}` : 'ทุกช่วงเวลาที่มีข้อมูล';

  const cmpLine = prev
    ? `เทียบกับช่วงก่อนหน้า: ${pr.start} ถึง ${pr.end}`
    : (pr ? `ช่วงก่อนหน้า (${pr.start} ถึง ${pr.end}) ไม่มีข้อมูลให้เทียบ` : 'เทียบช่วงก่อนหน้า: เลือกช่วงวันที่ (ตั้งแต่–ถึง) เพื่อแสดง');

  const arrow = (d, eps)=> d>eps ? '▲' : (d<-eps ? '▼' : '▬');
  const sign = (d, eps)=> d>eps ? '+' : (d<-eps ? '-' : '');
  // one metric: overall value + change vs previous period, then the AB / CC split underneath
  const metric = (label, key, kind, extra)=>{
    const isPct = kind==='pct', isCur = kind==='cur';
    const fmt = v => isPct ? fmtPct(v) : (isCur ? '฿'+fmtNum(v) : fmtNum(v));
    let out = `${label}: ${fmt(overall[key])}${extra||''}`;
    if(prev && overall[key]!==null && prev[key]!==null){
      const d = overall[key] - prev[key], eps = isPct ? 0.05 : 0.5;
      const mag = isPct ? Math.abs(d).toFixed(1)+'pt' : (isCur?'฿':'')+fmtNum(Math.abs(d));
      let pct = '';
      if(!isPct && prev[key]) { const p = d/Math.abs(prev[key])*100; pct = ` (${p>0?'+':''}${p.toFixed(1)}%)`; }
      out += `  ${arrow(d,eps)} ${sign(d,eps)}${mag}${pct} เทียบช่วงก่อนหน้า (${fmt(prev[key])})`;
    }
    out += `\n    AB ${fmt(ab[key])} · CC ${fmt(cc[key])}`;
    return out;
  };

  return `📊 D2D Operation Report — สรุปผล
ขอบเขต: ${scopeParts.join(' · ')}
ช่วงวันที่ (นัดรับ): ${dateRange}
${cmpLine}

1) ${metric('อัตราเข้ารับลูกค้าได้ทั้งหมด (ตัดสาเหตุลูกค้า)', 'kpi1', 'pct', ` (เป้า ${TARGETS.kpi1}%)`)}
2) ${metric('อัตราจัดรถเข้ารับตรงวันนัด (ตัดสาเหตุลูกค้า)', 'kpi2', 'pct', ` (เป้า ${TARGETS.kpi2}%)`)}
3) ${metric('อัตรารถเข้ารับสำเร็จทั่วประเทศ (ตัดสาเหตุลูกค้า)', 'kpi3', 'pct', ` (เป้า ${TARGETS.kpi3}%)`)}

${metric('จำนวนบิล', 'total', 'num')}
${metric('จำนวนกล่อง', 'totalQty', 'num')}
${metric('รายได้รวม', 'totalFee', 'cur')}

Fail จากสาเหตุพนักงาน: ${fmtNum(overall.failStaff)} บิล
อัปเดตข้อมูลล่าสุด: ${META.lastUpdated ? new Date(META.lastUpdated).toLocaleString('th-TH') : '–'}`;
}

/* ============================== PNG EXPORT ============================== */
function waitForPaint(){
  // ensure Chart.js has actually painted the current frame before we rasterize it
  return new Promise(resolve=>{
    requestAnimationFrame(()=>requestAnimationFrame(resolve));
  });
}

async function exportPNG(){
  const f = window.__lastFilters || getFilters();
  const kpi = window.__lastKpi || { overall: analyze(filterRecords(f)), ab: analyze([]), cc: analyze([]) };
  const { overall: cur, ab, cc } = kpi;

  // force a synchronous, animation-free repaint of every chart so the canvases have real pixels
  Object.values(charts).forEach(ch=>{ try{ ch.update('none'); }catch(e){} });
  await waitForPaint();

  const W = 1200, PAD = 40;
  const canvas = document.getElementById('exportCanvas');
  canvas.width = W;

  const headerH = 130, kpiRowH = 150, chartH = 260;
  const H = headerH + kpiRowH*2 + 30 + chartH*2 + 60;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // background
  const grad = ctx.createLinearGradient(0,0,W,0);
  grad.addColorStop(0, '#0B2A5B'); grad.addColorStop(1,'#1D5FE0');
  ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0,0,W,H);
  ctx.fillStyle = grad; ctx.fillRect(0,0,W,headerH);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#BFD3FF'; ctx.font = '600 13px Prompt, sans-serif';
  ctx.fillText('NIM EXPRESS · COLD CHAIN LOGISTICS', PAD, 34);
  ctx.fillStyle = '#FFFFFF'; ctx.font = '700 26px Prompt, sans-serif';
  ctx.fillText('Dashboard D2D Operation Report', PAD, 68);
  ctx.font = '400 13px Prompt, sans-serif'; ctx.fillStyle = '#CFE0FF';
  const scopeStr = [
    f.zone||'ทุกภาค', f.dc ? (document.getElementById('fDC').selectedOptions[0]?.textContent||f.dc) : null,
    (f.start||f.end) ? `${f.start||'…'} – ${f.end||'…'}` : 'ทุกช่วงเวลา'
  ].filter(Boolean).join('   ·   ');
  ctx.fillText(scopeStr, PAD, 96);
  ctx.fillText('สร้างเมื่อ ' + new Date().toLocaleString('th-TH'), PAD, 116);

  // ===== KPI cards: 2 rows x 3 cols, centered, with AB/CC breakdown =====
  const kpis = [
    { label:'อัตราเข้ารับลูกค้าได้ทั้งหมด', value: fmtPct(cur.kpi1), color: gradeColor(cur.kpi1, TARGETS.kpi1), abVal: fmtPct(ab.kpi1), ccVal: fmtPct(cc.kpi1) },
    { label:'อัตราจัดรถเข้ารับตรงวันนัด', value: fmtPct(cur.kpi2), color: gradeColor(cur.kpi2, TARGETS.kpi2), abVal: fmtPct(ab.kpi2), ccVal: fmtPct(cc.kpi2) },
    { label:'อัตรารถเข้ารับสำเร็จทั่วประเทศ', value: fmtPct(cur.kpi3), color: gradeColor(cur.kpi3, TARGETS.kpi3), abVal: fmtPct(ab.kpi3), ccVal: fmtPct(cc.kpi3) },
    { label:'จำนวนบิล', value: fmtNum(cur.total), color:'#0B2A5B', abVal: fmtNum(ab.total), ccVal: fmtNum(cc.total) },
    { label:'จำนวนกล่อง', value: fmtNum(cur.totalQty), color:'#1D5FE0', abVal: fmtNum(ab.totalQty), ccVal: fmtNum(cc.totalQty) },
    { label:'รายได้รวม (฿)', value: '฿'+fmtNum(cur.totalFee), color:'#3B7DFF', abVal: '฿'+fmtNum(ab.totalFee), ccVal: '฿'+fmtNum(cc.totalFee) }
  ];
  const gap = 14;
  const cardW = (W - PAD*2 - 2*gap)/3, cardH = kpiRowH - 20;
  kpis.forEach((k,i)=>{
    const row = Math.floor(i/3), col = i%3;
    const x = PAD + col*(cardW+gap);
    const y = headerH + 20 + row*(cardH+16);
    const cx = x + cardW/2;
    ctx.fillStyle = '#FFFFFF'; ctx.strokeStyle = '#DCE6F7'; ctx.lineWidth = 1;
    roundRect(ctx, x, y, cardW, cardH, 10); ctx.fill(); ctx.stroke();
    ctx.fillStyle = k.color; ctx.fillRect(x, y, cardW, 4);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#4A5C7D'; ctx.font = '700 11px Prompt, sans-serif';
    wrapTextCentered(ctx, k.label, cx, y+22, cardW-24, 14);
    ctx.fillStyle = k.color; ctx.font = '700 26px Prompt, sans-serif';
    ctx.fillText(k.value, cx, y+66);

    // AB / CC split
    const splitY = y + 88;
    ctx.font = '700 9px Prompt, sans-serif';
    ctx.fillStyle = COLORS.ab; ctx.fillText('AB', cx-46, splitY);
    ctx.fillStyle = COLORS.cc; ctx.fillText('CC', cx+34, splitY);
    ctx.font = '700 13px Prompt, sans-serif'; ctx.fillStyle = '#0F1E3D';
    ctx.fillText(k.abVal, cx-46, splitY+16);
    ctx.fillText(k.ccVal, cx+34, splitY+16);
    ctx.textAlign = 'left';
  });

  // ===== charts (draw existing canvases as images) =====
  let y = headerH + 20 + 2*(cardH+16) + 10;
  const chartIds = ['chartTrend','chartReason','chartZone','chartStaffFail'];
  const chartTitles = ['แนวโน้ม 3 KPI', 'สาเหตุเข้ารับไม่สำเร็จ', 'เปรียบเทียบราย ภาค/DC', 'บิลไม่สำเร็จทุกสาเหตุ 3 KPI'];
  const halfW = (W - PAD*2 - 14)/2;
  for(let row=0; row<2; row++){
    for(let col=0; col<2; col++){
      const idx = row*2+col;
      const cnv = document.getElementById(chartIds[idx]);
      const x = PAD + col*(halfW+14);
      ctx.fillStyle = '#FFFFFF'; ctx.strokeStyle = '#DCE6F7';
      roundRect(ctx, x, y, halfW, chartH, 10); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#0B2A5B'; ctx.font = '700 13px Prompt, sans-serif';
      ctx.fillText(chartTitles[idx], x+14, y+22);
      if(cnv && cnv.width > 0 && cnv.height > 0){
        try{ ctx.drawImage(cnv, x+10, y+32, halfW-20, chartH-46); }
        catch(e){ console.error('drawImage failed for', chartIds[idx], e); }
      } else {
        ctx.fillStyle = '#9AA9C4'; ctx.font = '400 12px Prompt, sans-serif'; ctx.textAlign='center';
        ctx.fillText('กราฟนี้แสดงผลไม่สำเร็จ', x+halfW/2, y+chartH/2);
        ctx.textAlign='left';
      }
    }
    y += chartH + 14;
  }

  ctx.fillStyle = '#9AA9C4'; ctx.font = '400 11px Prompt, sans-serif';
  ctx.fillText('Nim Express D2D Operation Report · ข้อมูลอิงวันที่นัดรับ (K) · ตัดสาเหตุลูกค้าออกจากผลชี้วัด', PAD, H-16);

  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl; a.download = `D2D-Dashboard-${toISODate(new Date())}.png`;
  a.click();
}

// Generic canvas table drawer used by the Compare-tab PNG export.
// headers: string[]; aligns: ('left'|'center')[]; rows: array of row-arrays of {text,color,bold,indent}
// Draws a bordered card containing the table and returns the y-position just below it.
function drawTableCard(ctx, x, y, w, title, headers, aligns, rows, rowH){
  const headH = title ? 34 : 0;
  const cardH = headH + 30 + rows.length*rowH + 10;
  ctx.fillStyle = '#FFFFFF'; ctx.strokeStyle = '#DCE6F7'; ctx.lineWidth = 1;
  roundRect(ctx, x, y, w, cardH, 10); ctx.fill(); ctx.stroke();
  let ty = y + 14;
  if(title){
    ctx.textAlign='left'; ctx.fillStyle = '#0B2A5B'; ctx.font = '700 13px Prompt, sans-serif';
    ctx.fillText(title, x+16, ty+8);
    ty += headH;
  }
  const colW = w / headers.length;
  ctx.font = '700 10.5px Prompt, sans-serif'; ctx.fillStyle = '#4A5C7D';
  headers.forEach((h,i)=>{
    ctx.textAlign = aligns[i];
    const cx = aligns[i]==='left' ? x+16 : x+i*colW+colW/2;
    ctx.fillText(h, cx, ty+16);
  });
  let ry = ty + 30;
  rows.forEach(row=>{
    row.forEach((cell,i)=>{
      ctx.font = `${cell.bold?'700':'600'} ${cell.small?'11px':'12.5px'} Prompt, sans-serif`;
      ctx.fillStyle = cell.color || '#0F1E3D';
      ctx.textAlign = aligns[i];
      const cx = aligns[i]==='left' ? x+16+(cell.indent||0) : x+i*colW+colW/2;
      ctx.fillText(cell.text, cx, ry+14);
    });
    ry += rowH;
  });
  ctx.textAlign = 'left';
  return y + cardH;
}

function scorecardExportRows(curRecords, prevRecords){
  const curA = analyze(curRecords), prevA = analyze(prevRecords);
  const curAB = analyze(curRecords.filter(r=>r.productGroup==='AB')), prevAB = analyze(prevRecords.filter(r=>r.productGroup==='AB'));
  const curCC = analyze(curRecords.filter(r=>r.productGroup==='CC')), prevCC = analyze(prevRecords.filter(r=>r.productGroup==='CC'));
  const metrics = [
    { label:'อัตราเข้ารับลูกค้าได้ทั้งหมด', key:'kpi1', isPct:true },
    { label:'อัตราจัดรถเข้ารับตรงวันนัด', key:'kpi2', isPct:true },
    { label:'อัตรารถเข้ารับสำเร็จ', key:'kpi3', isPct:true },
    { label:'จำนวนบิล', key:'total', isPct:false },
    { label:'จำนวนกล่อง', key:'totalQty', isPct:false },
    { label:'รายได้ (฿)', key:'totalFee', isPct:false, isCurrency:true }
  ];
  const fmtV = (v,isPct,isCurrency) => (v===null||v===undefined) ? '–' : (isPct?fmtPct(v):(isCurrency?'฿'+fmtNum(v):fmtNum(v)));
  const mkRow = (label, cur, prev, isPct, isCurrency, small, indent) => {
    const delta = (cur!==null && prev!==null) ? cur-prev : null;
    const up = delta!==null && delta>0.001, down = delta!==null && delta<-0.001;
    const color = up ? '#0E9F6E' : (down ? '#D8394C' : '#9AA9C4');
    const arrow = up ? '▲' : (down ? '▼' : '▬');
    const deltaStr = delta===null ? '–' : `${arrow} ${isPct ? Math.abs(delta).toFixed(1)+'pt' : (isCurrency?'฿'+fmtNum(Math.abs(delta)):fmtNum(Math.abs(delta)))}`;
    const pctChange = (prev && prev!==0 && delta!==null) ? delta/Math.abs(prev)*100 : null;
    const pctStr = pctChange===null ? '–' : `${pctChange>0?'+':''}${pctChange.toFixed(1)}%`;
    return [
      { text: label, bold: !small, small, indent: indent||0 },
      { text: fmtV(cur,isPct,isCurrency), small },
      { text: fmtV(prev,isPct,isCurrency), small, color:'#9AA9C4' },
      { text: deltaStr, small, color, bold:true },
      { text: pctStr, small, color }
    ];
  };
  const rows = [];
  metrics.forEach(m=>{
    rows.push(mkRow(m.label, curA[m.key], prevA[m.key], m.isPct, m.isCurrency, false, 0));
    rows.push(mkRow('AB · ทั่วไป', curAB[m.key], prevAB[m.key], m.isPct, m.isCurrency, true, 16));
    rows.push(mkRow('CC · Cold Chain', curCC[m.key], prevCC[m.key], m.isPct, m.isCurrency, true, 16));
  });
  return rows;
}

async function exportComparePNG(){
  const cd = window.__lastCompareData;
  if(!cd) return;

  Object.values(charts).forEach(ch=>{ try{ ch.update('none'); }catch(e){} });
  await waitForPaint();

  const W = 1200, PAD = 40, headerH = 130;
  const canvas = document.getElementById('exportCanvas');
  canvas.width = W;

  const scoreRows = scorecardExportRows(cd.curRecords, cd.prevRecords);
  const scoreRowH = 24, scoreCardH = 34+30+scoreRows.length*scoreRowH+10;

  const changeRows = (()=>{
    const groupBy = (records)=>{
      const groups = new Map();
      records.forEach(r=>{
        const key = compareChangeDim==='zone' ? r.zone : (r.dcName||r.dcCode||'ไม่ระบุ');
        if(!groups.has(key)) groups.set(key, []);
        groups.get(key).push(r);
      });
      return groups;
    };
    const curGroups = groupBy(cd.curRecords), prevGroups = groupBy(cd.prevRecords);
    const allKeys = new Set([...curGroups.keys(), ...prevGroups.keys()]);
    let rows = Array.from(allKeys).map(key=>{
      const curVal = rateFor(analyze(curGroups.get(key)||[]), compareChangeKpi);
      const prevVal = rateFor(analyze(prevGroups.get(key)||[]), compareChangeKpi);
      const delta = (curVal!==null && prevVal!==null) ? curVal-prevVal : null;
      return { label:key, curVal, prevVal, delta };
    }).filter(r=>r.delta!==null);
    rows.sort((a,b)=> Math.abs(b.delta)-Math.abs(a.delta));
    return rows.slice(0,8).map(r=>{
      const up = r.delta>0.001, down = r.delta<-0.001;
      const color = up ? '#0E9F6E' : (down ? '#D8394C' : '#9AA9C4');
      const arrow = up ? '▲' : (down ? '▼' : '▬');
      return [
        { text: r.label, bold:true },
        { text: fmtPct(r.curVal) },
        { text: fmtPct(r.prevVal), color:'#9AA9C4' },
        { text: `${arrow} ${Math.abs(r.delta).toFixed(1)}pt`, color, bold:true }
      ];
    });
  })();
  const changeRowH = 24, changeCardH = 34+30+Math.max(changeRows.length,1)*changeRowH+10;

  const totalH = headerH + 20 + scoreCardH + 20 + changeCardH + 40;
  canvas.height = totalH;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0,0,W,0);
  grad.addColorStop(0, '#0B2A5B'); grad.addColorStop(1,'#1D5FE0');
  ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0,0,W,totalH);
  ctx.fillStyle = grad; ctx.fillRect(0,0,W,headerH);
  ctx.textAlign = 'left';
  ctx.fillStyle = '#BFD3FF'; ctx.font = '600 13px Prompt, sans-serif';
  ctx.fillText('NIM EXPRESS · COLD CHAIN LOGISTICS', PAD, 34);
  ctx.fillStyle = '#FFFFFF'; ctx.font = '700 24px Prompt, sans-serif';
  ctx.fillText('เปรียบเทียบผล D2D Operation', PAD, 66);
  ctx.font = '400 13px Prompt, sans-serif'; ctx.fillStyle = '#CFE0FF';
  ctx.fillText(`${cd.curLabel}  vs  ${cd.prevLabel}`, PAD, 92);
  ctx.fillText('สร้างเมื่อ ' + new Date().toLocaleString('th-TH'), PAD, 114);

  let y = headerH + 20;
  y = drawTableCard(ctx, PAD, y, W-PAD*2, 'ตารางสรุปเปรียบเทียบ (Scorecard)',
    ['ตัวชี้วัด','ปัจจุบัน','ก่อนหน้า','ผลต่าง','% เปลี่ยนแปลง'], ['left','center','center','center','center'],
    scoreRows, scoreRowH);
  y += 20;

  const dimLabel = compareChangeDim==='zone' ? 'ภาค' : 'DC';
  drawTableCard(ctx, PAD, y, W-PAD*2, `${dimLabel}ที่เปลี่ยนแปลงมากที่สุด (${KPI_NAMES[compareChangeKpi]})`,
    [dimLabel,'ปัจจุบัน (%)','ก่อนหน้า (%)','ผลต่าง'], ['left','center','center','center'],
    changeRows, changeRowH);

  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl; a.download = `D2D-Compare-${toISODate(new Date())}.png`;
  a.click();
}

async function exportAnalysisPNG(){
  const ad = window.__lastAnalysisData;
  if(!ad) return;
  const { curRecords, kpiKey, f } = ad;
  const a = analyze(curRecords);
  const breakdown = getFailReasonBreakdown(curRecords, kpiKey);

  Object.values(charts).forEach(ch=>{ try{ ch.update('none'); }catch(e){} });
  await waitForPaint();

  const W = 1200, PAD = 40, headerH = 130, kpiRowH = 120, chartH = 280;
  const canvas = document.getElementById('exportCanvas');
  canvas.width = W;
  canvas.height = headerH + kpiRowH + 20 + chartH + 40;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0,0,W,0);
  grad.addColorStop(0, '#0B2A5B'); grad.addColorStop(1,'#1D5FE0');
  ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0,0,W,canvas.height);
  ctx.fillStyle = grad; ctx.fillRect(0,0,W,headerH);
  ctx.textAlign = 'left';
  ctx.fillStyle = '#BFD3FF'; ctx.font = '600 13px Prompt, sans-serif';
  ctx.fillText('NIM EXPRESS · COLD CHAIN LOGISTICS', PAD, 34);
  ctx.fillStyle = '#FFFFFF'; ctx.font = '700 24px Prompt, sans-serif';
  ctx.fillText('วิเคราะห์สาเหตุ & Action Plan', PAD, 66);
  ctx.font = '400 13px Prompt, sans-serif'; ctx.fillStyle = '#CFE0FF';
  const scopeStr = [f.zone||'ทุกภาค', f.dc?document.getElementById('fDC').selectedOptions[0]?.textContent:null, KPI_NAMES[kpiKey]].filter(Boolean).join('   ·   ');
  ctx.fillText(scopeStr, PAD, 92);
  ctx.fillText('สร้างเมื่อ ' + new Date().toLocaleString('th-TH'), PAD, 114);

  const kpis = [
    { label:'KPI1 ไม่สำเร็จ', value: fmtNum(a.kpi1FailCount), color: COLORS.navy },
    { label:'KPI2 ไม่สำเร็จ', value: fmtNum(a.kpi2FailCount), color: COLORS.blue },
    { label:'KPI3 ไม่สำเร็จ', value: fmtNum(a.kpi3FailCount), color: COLORS.red }
  ];
  const gap = 14, cardW = (W - PAD*2 - 2*gap)/3, cardY = headerH + 20, cardH = kpiRowH - 20;
  kpis.forEach((k,i)=>{
    const x = PAD + i*(cardW+gap);
    ctx.fillStyle = '#FFFFFF'; ctx.strokeStyle = '#DCE6F7'; ctx.lineWidth = 1;
    roundRect(ctx, x, cardY, cardW, cardH, 10); ctx.fill(); ctx.stroke();
    ctx.fillStyle = k.color; ctx.fillRect(x, cardY, cardW, 4);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#4A5C7D'; ctx.font = '700 12px Prompt, sans-serif';
    ctx.fillText(k.label, x+cardW/2, cardY+26);
    ctx.fillStyle = k.color; ctx.font = '700 26px Prompt, sans-serif';
    ctx.fillText(k.value, x+cardW/2, cardY+60);
    ctx.textAlign = 'left';
  });

  let y = cardY + cardH + 20;
  const halfW = (W - PAD*2 - 14)/2;
  const paretoCnv = document.getElementById('chartReasonPareto');
  const trendCnv = document.getElementById('chartReasonTrend');
  [ [paretoCnv,'สาเหตุที่กระทบมากที่สุด'], [trendCnv,'แนวโน้มปัญหารายวัน'] ].forEach(([cnv,title], i)=>{
    const x = PAD + i*(halfW+14);
    ctx.fillStyle = '#FFFFFF'; ctx.strokeStyle = '#DCE6F7';
    roundRect(ctx, x, y, halfW, chartH, 10); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#0B2A5B'; ctx.font = '700 13px Prompt, sans-serif';
    ctx.fillText(title, x+14, y+22);
    if(cnv && cnv.width>0){
      try{ ctx.drawImage(cnv, x+10, y+32, halfW-20, chartH-46); }
      catch(e){
        console.error('drawImage failed for', title, e);
        ctx.fillStyle = '#9AA9C4'; ctx.font = '400 12px Prompt, sans-serif'; ctx.textAlign='center';
        ctx.fillText('กราฟนี้แสดงผลไม่สำเร็จ', x+halfW/2, y+chartH/2);
        ctx.textAlign='left';
      }
    }
  });

  ctx.fillStyle = '#9AA9C4'; ctx.font = '400 11px Prompt, sans-serif';
  ctx.fillText('Nim Express D2D Operation Report · วิเคราะห์สาเหตุ & Action Plan', PAD, canvas.height-16);

  const dataUrl = canvas.toDataURL('image/png');
  const a2 = document.createElement('a');
  a2.href = dataUrl; a2.download = `D2D-Analysis-${toISODate(new Date())}.png`;
  a2.click();
}
function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath();
}
function wrapTextCentered(ctx, text, cx, y, maxWidth, lineHeight){
  const words = text.split(' ');
  let line = '', lines = [];
  words.forEach((w,i)=>{
    const test = line + w + ' ';
    if(ctx.measureText(test).width > maxWidth && i>0){ lines.push(line.trim()); line = w+' '; }
    else line = test;
  });
  lines.push(line.trim());
  lines.slice(0,2).forEach((l,i)=> ctx.fillText(l, cx, y + i*lineHeight));
}
function wrapText(ctx, text, x, y, maxWidth, lineHeight){
  const words = text.split(' ');
  let line = '', ly = y;
  words.forEach((w,i)=>{
    const test = line + w + ' ';
    if(ctx.measureText(test).width > maxWidth && i>0){
      ctx.fillText(line, x, ly); line = w+' '; ly += lineHeight;
    } else line = test;
  });
  ctx.fillText(line, x, ly);
}

/* ============================== EVENTS ============================== */
document.getElementById('fileInput').addEventListener('change', (e)=>{
  if(!isUnlocked){ e.target.value=''; return; }
  handleFiles(e.target.files); e.target.value='';
});

['fZone'].forEach(id=>{
  document.getElementById(id).addEventListener('change', ()=>{
    document.getElementById('fDC').value = '';
    rebuildFilterOptions();
    onFilterChange();
  });
});
['fDC','fProduct','fStart','fEnd'].forEach(id=>{
  document.getElementById(id).addEventListener('change', onFilterChange);
});

document.getElementById('periodSeg').addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  document.querySelectorAll('#periodSeg button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  selectPeriod(btn.dataset.p);
});

document.getElementById('tabBar').addEventListener('click', (e)=>{
  const btn = e.target.closest('.tab-btn'); if(!btn) return;
  currentTab = btn.dataset.tab;
  renderAll();
});

document.getElementById('compareModeSeg').addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  document.querySelectorAll('#compareModeSeg button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  compareTabMode = btn.dataset.mode;
  const isAuto = compareTabMode === 'auto';
  document.getElementById('compareAutoField').style.display = isAuto ? '' : 'none';
  ['compareCustomField1','compareCustomField2','compareCustomField3','compareCustomField4'].forEach(id=>{
    document.getElementById(id).style.display = isAuto ? 'none' : '';
  });
  renderAll();
});

document.getElementById('compareAutoPeriodSeg').addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  document.querySelectorAll('#compareAutoPeriodSeg button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  compareTabPeriod = btn.dataset.p;
  renderAll();
});

['cmpStart1','cmpEnd1','cmpStart2','cmpEnd2'].forEach(id=>{
  document.getElementById(id).addEventListener('change', renderAll);
});

document.getElementById('compareChangeDimSeg').addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  document.querySelectorAll('#compareChangeDimSeg button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  compareChangeDim = btn.dataset.dim;
  renderAll();
});

document.getElementById('compareChangeKpiSeg').addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  document.querySelectorAll('#compareChangeKpiSeg button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  compareChangeKpi = btn.dataset.k;
  renderAll();
});

document.getElementById('btnCompareCopy').addEventListener('click', async ()=>{
  const cd = window.__lastCompareData;
  if(!cd){ toast('ยังไม่มีข้อมูลให้สรุป'); return; }
  const curA = analyze(cd.curRecords), prevA = analyze(cd.prevRecords);
  const line = (label, cur, prev, isPct) => {
    const fmt = v => isPct ? fmtPct(v) : fmtNum(v);
    const delta = (cur!==null&&prev!==null) ? cur-prev : null;
    return `${label}: ${fmt(cur)} (ก่อนหน้า ${fmt(prev)}, ${delta===null?'–':(delta>=0?'+':'')+(isPct?delta.toFixed(1)+'pt':fmtNum(delta))})`;
  };
  const text = `📊 เปรียบเทียบผล D2D
${cd.curLabel} vs ${cd.prevLabel}

${line('อัตราเข้ารับลูกค้าได้ทั้งหมด', curA.kpi1, prevA.kpi1, true)}
${line('อัตราจัดรถเข้ารับตรงวันนัด', curA.kpi2, prevA.kpi2, true)}
${line('อัตรารถเข้ารับสำเร็จ', curA.kpi3, prevA.kpi3, true)}
${line('จำนวนบิล', curA.total, prevA.total, false)}
${line('จำนวนกล่อง', curA.totalQty, prevA.totalQty, false)}
รายได้: ฿${fmtNum(curA.totalFee)} (ก่อนหน้า ฿${fmtNum(prevA.totalFee)})

อัปเดตข้อมูลล่าสุด: ${META.lastUpdated ? new Date(META.lastUpdated).toLocaleString('th-TH') : '–'}`;
  try{ await navigator.clipboard.writeText(text); toast('คัดลอกสรุปเทียบผลแล้ว ✓'); }
  catch(e){ toast('คัดลอกไม่สำเร็จ'); }
});

document.getElementById('btnCompareExport').addEventListener('click', ()=>{
  if(!window.__lastCompareData){ toast('ยังไม่มีข้อมูลให้บันทึกภาพ'); return; }
  toast('กำลังสร้างภาพ PNG…');
  setTimeout(async ()=>{
    try{ await exportComparePNG(); }
    catch(e){ console.error('exportComparePNG failed:', e); toast('สร้างภาพไม่สำเร็จ — เปิด Console (F12) เพื่อดูรายละเอียด'); }
  }, 60);
});

document.getElementById('reasonKpiSeg').addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  document.querySelectorAll('#reasonKpiSeg button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  reasonKpiKey = btn.dataset.k;
  renderAll();
});

document.getElementById('paretoDimSeg').addEventListener('click', (e)=>{
  const btn = e.target.closest('button'); if(!btn) return;
  document.querySelectorAll('#paretoDimSeg button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  paretoDim = btn.dataset.dim;
  renderAll();
});

document.getElementById('paretoHeadRow').addEventListener('click', (e)=>{
  const th = e.target.closest('th.sortable'); if(!th) return;
  const key = th.dataset.sort;
  if(paretoSort.key === key){ paretoSort.dir = paretoSort.dir==='asc' ? 'desc' : 'asc'; }
  else { paretoSort = { key, dir: key==='label' ? 'asc' : 'desc' }; }
  renderAll();
});

document.getElementById('btnCopyActionPlan').addEventListener('click', async ()=>{
  const text = window.__lastActionPlanText || document.getElementById('actionPlanText').textContent;
  try{ await navigator.clipboard.writeText(text); toast('คัดลอกสรุป Action Plan แล้ว ✓'); }
  catch(e){ toast('คัดลอกไม่สำเร็จ ลองเลือกข้อความเองแทน'); }
});

document.getElementById('btnAnalysisExport').addEventListener('click', ()=>{
  if(!window.__lastAnalysisData){ toast('ยังไม่มีข้อมูลให้บันทึกภาพ'); return; }
  toast('กำลังสร้างภาพ PNG…');
  setTimeout(async ()=>{
    try{ await exportAnalysisPNG(); }
    catch(e){ console.error('exportAnalysisPNG failed:', e); toast('สร้างภาพไม่สำเร็จ — เปิด Console (F12) เพื่อดูรายละเอียด'); }
  }, 60);
});

document.getElementById('btnReset').addEventListener('click', ()=>{
  ['fZone','fDC','fProduct','fStart','fEnd'].forEach(id=> document.getElementById(id).value='');
  rebuildFilterOptions();
  onFilterChange();
});

document.querySelector('#rankTable thead').addEventListener('click', (e)=>{
  const th = e.target.closest('th.sortable');
  if(!th) return;
  const key = th.dataset.sort;
  if(rankSort.key === key){
    rankSort.dir = rankSort.dir==='asc' ? 'desc' : 'asc';
  } else {
    rankSort = { key, dir: RANK_DEFAULT_DIR[key] || 'desc' };
  }
  renderAll();
});

document.getElementById('btnRankUp').addEventListener('click', ()=>{
  document.getElementById('fZone').value='';
  document.getElementById('fDC').value='';
  onFilterChange();
});

document.getElementById('btnRankToggle').addEventListener('click', ()=>{
  const wrap = document.getElementById('rankTableWrap');
  const btn = document.getElementById('btnRankToggle');
  const hidden = wrap.style.display === 'none';
  wrap.style.display = hidden ? '' : 'none';
  btn.textContent = hidden ? '▾ ซ่อนตาราง' : '▸ แสดงตาราง';
});

function wireToggle(btnId, targetId, labelShown, labelHidden){
  document.getElementById(btnId).addEventListener('click', ()=>{
    const target = document.getElementById(targetId);
    const btn = document.getElementById(btnId);
    const hidden = target.style.display === 'none';
    target.style.display = hidden ? '' : 'none';
    btn.textContent = hidden ? labelShown : labelHidden;
  });
}
wireToggle('btnParetoToggle', 'paretoTableWrap', '▾ ซ่อนตาราง', '▸ แสดงตาราง');
wireToggle('btnActionPlanToggle', 'actionPlanText', '▾ ซ่อนสรุป', '▸ แสดงสรุป');

document.getElementById('btnShareLegacy').addEventListener('click', ()=>{
  if(!RECORDS.length){ toast('ยังไม่มีข้อมูลให้สรุป'); return; }
  document.getElementById('shareText').value = buildShareText();
  document.getElementById('shareModal').classList.add('show');
});
document.getElementById('btnCloseModal').addEventListener('click', ()=>{
  document.getElementById('shareModal').classList.remove('show');
});
document.getElementById('shareModal').addEventListener('click', (e)=>{
  if(e.target.id==='shareModal') document.getElementById('shareModal').classList.remove('show');
});
document.getElementById('btnCopyText').addEventListener('click', async ()=>{
  const ta = document.getElementById('shareText');
  ta.select();
  try{
    await navigator.clipboard.writeText(ta.value);
    toast('คัดลอกข้อความแล้ว ✓');
  }catch(e){
    document.execCommand('copy');
    toast('คัดลอกข้อความแล้ว ✓');
  }
});

document.getElementById('btnExportLegacy').addEventListener('click', ()=>{
  if(!RECORDS.length){ toast('ยังไม่มีข้อมูลให้บันทึกภาพ'); return; }
  if(currentTab === 'analysis' && !window.__lastAnalysisData){ toast('ยังไม่มีข้อมูลให้บันทึกภาพ'); return; }
  if(currentTab === 'compare' && !window.__lastCompareData){ toast('ยังไม่มีข้อมูลให้บันทึกภาพ'); return; }
  toast('กำลังสร้างภาพ PNG…');
  setTimeout(async ()=>{
    try{
      if(currentTab === 'analysis') await exportAnalysisPNG();
      else if(currentTab === 'compare') await exportComparePNG();
      else await exportPNG();
    }
    catch(e){ console.error('export failed:', e); toast('สร้างภาพไม่สำเร็จ — เปิด Console (F12) เพื่อดูรายละเอียด'); }
  }, 60);
});

document.getElementById('btnClear').addEventListener('click', async ()=>{
  if(!isUnlocked){ toast('ต้องเข้าสู่ระบบผู้ดูแลก่อนจึงจะล้างข้อมูลได้'); return; }
  if(!RECORDS.length){ toast('ไม่มีข้อมูลให้ล้าง'); return; }
  if(!confirm('ล้างข้อมูลทั้งหมดที่เก็บไว้ในเบราว์เซอร์นี้? การกระทำนี้ย้อนกลับไม่ได้')) return;
  await clearStorage();
  rebuildFilterOptions();
  renderAll();
  toast('ล้างข้อมูลแล้ว');
});

// drag & drop support onto the empty state / topbar
['dragover','drop'].forEach(evt=>{
  document.body.addEventListener(evt, (e)=>{ e.preventDefault(); });
});
document.body.addEventListener('drop', (e)=>{
  if(!isUnlocked) return;
  if(e.dataTransfer.files && e.dataTransfer.files.length){
    handleFiles(e.dataTransfer.files);
  }
});

/* ============================== PERMISSION / LOGIN ============================== */
function applyPermissionUI(){
  document.body.classList.toggle('is-admin', !!isUnlocked);
  document.getElementById('adminTools').style.display = isUnlocked ? 'flex' : 'none';
  document.querySelectorAll('.admin-only').forEach(el=>{ el.style.display = isUnlocked ? 'flex' : 'none'; });
  document.getElementById('emptyStateAdminMsg').style.display = isUnlocked ? 'block' : 'none';
  document.getElementById('emptyStateViewerMsg').style.display = isUnlocked ? 'none' : 'block';
  document.getElementById('emptyStateUploadBtn').style.display = isUnlocked ? 'inline-flex' : 'none';
  const btn = document.getElementById('btnUnlock');
  btn.style.display = adminEntryVisible() ? '' : 'none';
  btn.textContent = isUnlocked ? '⚙ ผู้ดูแล' : '⚙ เข้าสู่ระบบ';
  btn.title = isUnlocked ? 'ออกจากโหมดผู้ดูแล' : 'เข้าสู่ระบบผู้ดูแล';
}

function openLoginModal(){
  document.getElementById('loginPass').value = '';
  document.getElementById('loginError').textContent = '';
  document.getElementById('loginModal').classList.add('show');
  setTimeout(()=>document.getElementById('loginPass').focus(), 50);
}
function closeLoginModal(){ document.getElementById('loginModal').classList.remove('show'); }

async function submitLogin(){
  const pass = document.getElementById('loginPass').value;
  if(await checkAdminPassword(pass)){
    isUnlocked = true;
    try{ sessionStorage.setItem('nimex-d2d-admin','1'); }catch(e){}
    closeLoginModal(); applyPermissionUI(); renderAll();
    toast('เข้าสู่โหมดผู้ดูแลแล้ว ✓');
  } else {
    document.getElementById('loginError').textContent = 'รหัสผ่านไม่ถูกต้อง';
    document.getElementById('loginPass').value = '';
    document.getElementById('loginPass').focus();
  }
}

document.getElementById('btnUnlock').addEventListener('click', async ()=>{
  if(isUnlocked){
    if(!confirm('ออกจากระบบผู้ดูแล? (จะซ่อนปุ่มอัปโหลด/แชร์/บันทึกภาพ/ลบข้อมูล)')) return;
    isUnlocked = false;
    if(window.NIMEX_ONLINE && window.onlineLogout){ window.onlineLogout(); return; }
    try{ sessionStorage.removeItem('nimex-d2d-admin'); }catch(e){}
    if(location.hash==='#admin') history.replaceState(null,'',location.pathname+location.search);
    applyPermissionUI(); renderAll();
    toast('ออกจากระบบแล้ว');
    return;
  }
  openLoginModal();
});
document.getElementById('btnLoginSubmit').addEventListener('click', submitLogin);
document.getElementById('btnLoginCancel').addEventListener('click', closeLoginModal);
['loginPass'].forEach(id=>{
  document.getElementById(id).addEventListener('keydown', (e)=>{ if(e.key==='Enter') submitLogin(); if(e.key==='Escape') closeLoginModal(); });
});
document.getElementById('loginModal').addEventListener('click', (e)=>{ if(e.target.id==='loginModal') closeLoginModal(); });

/* ============================== SAVE UPDATED DASHBOARD (HTML with data embedded) ============================== */
// Writes a fresh copy of this very file with the current data embedded as a seed, so it can be
// handed to other people. When that copy is opened it starts from the embedded data; uploading
// a newer Excel file on top of it follows the same rule as always: the newer value wins.
async function buildUpdatedHtml(){
  // Always writes a VIEWER copy: data compressed, current password hash, no admin-build flag.
  const json = JSON.stringify({ version:1, savedAt:new Date().toISOString(), records:RECORDS, meta:META });
  const payload = JSON.stringify({ v:2, enc:'gzip-base64', data: bytesToB64(await gzipText(json)) });
  const re = /<script[^>]*id="seedData"[^>]*>[\s\S]*?<\/script>/;
  if(!re.test(PRISTINE_HTML)) throw new Error('ไม่พบส่วนเก็บข้อมูลในไฟล์ต้นฉบับ');
  const close = '</scr' + 'ipt>'; // never write the closing tag literally inside a script
  return PRISTINE_HTML
    .replace(re, ()=> '<script type="application/json" id="seedData">' + payload + close)
    .replace(/<script[^>]*id="adminCfg"[^>]*>[\s\S]*?<\/script>/, ()=> '<script type="application/json" id="adminCfg">' + JSON.stringify({ h: ADMIN_HASH }) + close)
    .replace(/<script[^>]*id="appSettings"[^>]*>[\s\S]*?<\/script>/, ()=> '<script type="application/json" id="appSettings">' + JSON.stringify(SETTINGS).replace(/</g,'\\u003c') + close)
    .replace(/<script id="adminBuildFlag">[\s\S]*?<\/script>/, '')
    .replace(/<body class="[^"]*"/, '<body');
}

document.getElementById('btnSaveDash').addEventListener('click', async ()=>{
  if(!isUnlocked){ toast('ต้องเข้าสู่ระบบผู้ดูแลก่อน'); return; }
  if(!RECORDS.length){ toast('ยังไม่มีข้อมูลให้บันทึก'); return; }
  try{
    const html = await buildUpdatedHtml();
    const blob = new Blob([html], { type:'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `NIMEX-D2D-${toISODate(new Date())}.html`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 3000);
    toast(`บันทึกแดชบอร์ดฉบับอัปเดตแล้ว · ${fmtNum(RECORDS.length)} บิล · ${(blob.size/1048576).toFixed(1)} MB`);
  }catch(e){
    console.error('save dashboard failed', e);
    toast('บันทึกไฟล์ไม่สำเร็จ — เปิด Console (F12) เพื่อดูรายละเอียด');
  }
});

async function readSeed(){
  try{
    const el = document.getElementById('seedData');
    const t = el ? el.textContent.trim() : '';
    if(!t) return null;
    let seed = JSON.parse(t);
    if(seed && seed.enc === 'gzip-base64') seed = JSON.parse(await gunzipText(b64ToBytes(seed.data)));
    return (seed && Array.isArray(seed.records) && seed.records.length) ? seed : null;
  }catch(e){ console.error('seed data unreadable', e); return null; }
}

/* ============================== CANCELLED-BILL ANALYSIS ==============================
   Own rules for this page only (agreed with the owner, Nov 2026). The overview KPIs are untouched.
   - Period basis: bill creation date (column C) inside the period chosen in the top bar (same working-day rules
     as the rest of the dashboard), no "not yet due" cap.
   - Cancelled = final bill status in column AR is "CC ยกเลิก" or "B031 ... (รับไม่ได้)".
   - Before / after pickup (owner's rule, 9 Nov 2026): column G "วันที่ เวลา ทำการยืนยัน (B01)" empty = ก่อนเข้ารับ,
     has a value = หลังเข้ารับ.
   - "รับได้" = all bills in the period minus cancelled (same as the owner's sample).
   - Reasons follow the bill status: CC bills use columns E/F (01000 = Nim Express, 02000 = ลูกค้า);
     B031 bills use columns O/P (01000 = ลูกค้า, 02000 = พนักงาน) and are kept as their own "B031 รับไม่ได้" groups,
     because the two code lists conflict. One table for ก่อนเข้ารับ, one for หลังเข้ารับ.
   - Lost revenue (estimate): cancelled pieces × average baht per piece of NOT-cancelled bills with a fee,
     same region × product group (AB/CC) × creation month. Falls back to product × month, then month. */
let cancelReasonMode = 'before'; // reasons chart: before | after
let cancelSort = { key:'rateBills', dir:'desc' };

function cxKind(r){
  const s = (r.billStatus||'').trim();
  if(/^CC\b/.test(s)) return 'cc';
  if(/^B031\b/.test(s)) return 'b031';
  return null;
}
function cxStage(r){
  if(!cxKind(r)) return null;
  return r.hasB01 ? 'after' : 'before';
}
function cxNorm(s){ return String(s||'').replace(/\s+/g,' ').trim(); }
// Main + sub reason for a cancelled bill, as {group, groupLabel, sub}
function cxReason(r){
  const kind = cxKind(r);
  if(kind === 'cc'){
    const m = cxNorm(r.cancelMainRaw), sub = cxNorm(r.cancelSubRaw);
    let group = 'none', label = 'ไม่ระบุสาเหตุ';
    if(/^02000/.test(m)){ group='customer'; label='02000 ลูกค้า'; }
    else if(/^01000/.test(m) || /Nim Express/i.test(m)){ group='nim'; label='01000 Nim Express'; }
    else if(m){ group='other'; label=m; }
    return { group, groupLabel:label, sub: sub || (group==='none' ? 'ไม่ระบุสาเหตุ' : 'ไม่ระบุสาเหตุย่อย') };
  }
  if(kind === 'b031'){
    const m = cxNorm(r.failMainRaw), sub = cxNorm(r.failSubRaw);
    let group = 'b031none', label = 'B031 รับไม่ได้ · ไม่ระบุสาเหตุ';
    if(/^01000/.test(m)){ group='b031customer'; label='B031 รับไม่ได้ · 01000 ลูกค้า'; }
    else if(/^02000/.test(m)){ group='b031staff'; label='B031 รับไม่ได้ · 02000 พนักงาน'; }
    else if(m){ group='other'; label=m; }
    // some rows carry the detail in the main column ("01000 สินค้าไม่พร้อม") with an empty sub column
    let detail = sub;
    if(!detail && m){ const d = m.replace(/^0?[12]000\s*/,'').trim(); if(d && d!=='ลูกค้า' && d!=='พนักงาน' && d!=='พนักงานจัดส่ง') detail = d; }
    return { group, groupLabel:label, sub: detail || (group==='b031none' ? 'ไม่ระบุสาเหตุ' : 'ไม่ระบุสาเหตุย่อย') };
  }
  return null;
}
const cxMonth = r => (r.createDateISO||'').slice(0,7);

// Average baht per piece of not-cancelled bills, built once per data load over ALL records (filters do not move it).
let __cxAvgCache = null, __cxAvgFor = null;
function cxAvgTable(){
  if(__cxAvgFor === RECORDS && __cxAvgCache) return __cxAvgCache;
  const add = (m,k,fee,qty)=>{ const v = m[k] || (m[k]=[0,0,0]); v[0]+=fee; v[1]+=qty; v[2]++; };
  const a = {}, b = {}, c = {};
  RECORDS.forEach(r=>{
    if(!r.createDateISO || cxStage(r) || !(r.fee>0) || EXCLUDED_DC.has(r.dcCode)) return;
    const q = r.qty>0 ? r.qty : 1, mo = cxMonth(r);
    add(a, r.zone+'|'+r.productGroup+'|'+mo, r.fee, q);
    add(b, r.productGroup+'|'+mo, r.fee, q);
    add(c, mo, r.fee, q);
  });
  __cxAvgCache = { a, b, c }; __cxAvgFor = RECORDS;
  return __cxAvgCache;
}
function cxLostValue(r){
  const t = cxAvgTable(), mo = cxMonth(r), q = r.qty>0 ? r.qty : 1;
  const v = t.a[r.zone+'|'+r.productGroup+'|'+mo] || t.b[r.productGroup+'|'+mo] || t.c[mo];
  if(!v) return 0;
  return SETTINGS.lostBasis === 'bill' ? (v[2] ? v[0]/v[2] : 0) : (v[1] ? v[0]/v[1]*q : 0);
}

function cxScope(f, start, end){
  return RECORDS.filter(r=>{
    if(!r.createDateISO || EXCLUDED_DC.has(r.dcCode)) return false;
    if(start && r.createDateISO < start) return false;
    if(end && r.createDateISO > end) return false;
    if(f.zone && r.zone!==f.zone) return false;
    if(f.dc && r.dcCode!==f.dc) return false;
    if(f.product && r.productGroup!==f.product) return false;
    return true;
  });
}
function cxAgg(list){
  const o = { bills:0, qty:0, fee:0, cBills:0, cQty:0, cFee:0, before:0, after:0, beforeQty:0, afterQty:0, nim:0, customer:0, staff:0, none:0, okBills:0, okQty:0, okFee:0 };
  list.forEach(r=>{
    const st = cxStage(r);
    o.bills++; o.qty += r.qty;
    if(st){
      const lost = cxLostValue(r);
      o.cBills++; o.cQty += r.qty; o.cFee += lost;
      if(st==='before'){ o.before++; o.beforeQty += r.qty; } else { o.after++; o.afterQty += r.qty; }
      const g = cxReason(r).group;
      if(g==='nim') o.nim++; else if(g==='customer'||g==='b031customer') o.customer++; else if(g==='b031staff') o.staff++; else o.none++;
    } else {
      o.okBills++; o.okQty += r.qty; o.okFee += r.fee;
    }
  });
  o.fee = o.okFee + o.cFee;
  o.rateBills = o.bills ? o.cBills/o.bills*100 : null;
  o.rateQty = o.qty ? o.cQty/o.qty*100 : null;
  o.rateFee = o.fee ? o.cFee/o.fee*100 : null;
  return o;
}
function cxMonths(){
  const s = new Set(); RECORDS.forEach(r=>{ if(r.createDateISO) s.add(cxMonth(r)); });
  return [...s].sort();
}
function cxMaxCreate(){ let m=''; RECORDS.forEach(r=>{ if(r.createDateISO && r.createDateISO>m) m=r.createDateISO; }); return m; }
function cxMonthLabel(k){
  if(!k) return '–';
  const [y,m] = k.split('-').map(Number);
  const th = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
  return `${th[m-1]} ${String(y+543).slice(-2)}`;
}
function cxPrevMonth(k){ const [y,m]=k.split('-').map(Number); const d=new Date(y,m-2,1); return monthKey(d); }
function cxDefaultMonth(){
  const ms = cxMonths(); if(!ms.length) return '';
  const max = cxMaxCreate(); const last = ms[ms.length-1];
  const [y,m] = last.split('-').map(Number);
  const lastDay = toISODate(new Date(y, m, 0));
  // latest month whose last day has been reached in the data, else the latest month
  return (max >= lastDay || ms.length===1) ? last : ms[ms.length-2];
}

function cxDelta(cur, prev, isPct, badWhenUp){
  if(prev===null || prev===undefined || cur===null || cur===undefined || isNaN(cur) || isNaN(prev)) return '';
  const d = cur - prev, eps = isPct ? 0.05 : 0.5;
  if(Math.abs(d) < eps) return `<span class="cx-d flat">▬ 0${isPct?'pt':''}</span>`;
  const up = d > 0, bad = badWhenUp ? up : !up;
  const mag = isPct ? Math.abs(d).toFixed(1)+'pt' : fmtNum(Math.abs(d));
  return `<span class="cx-d ${bad?'bad':'good'}">${up?'▲':'▼'} ${mag}</span>`;
}
function cxKpi(label, value, sub, delta, bar){
  return `<div class="kpi"><div class="kpi-bar" style="background:${bar}"></div><div class="kpi-label">${label}</div>
    <div class="kpi-value-row"><div class="kpi-value num">${value}</div></div>
    <div class="kpi-target">${sub}</div><div class="kpi-delta">${delta}</div></div>`;
}

function renderCancelTab(f){
  const area = document.getElementById('cancelArea');
  const hasFields = RECORDS.some(r=>r.billStatus!==undefined);
  document.getElementById('cxNeedReupload').style.display = hasFields ? 'none' : 'block';
  document.getElementById('cxBody').style.display = hasFields ? '' : 'none';
  if(!hasFields) return;

  const pr = prevRangeFor(f);
  const prevList = pr ? cxScope(f, pr.start, pr.end) : [];
  const hasPrev = prevList.length > 0;
  const curLabel = f.start ? pLabelRange(f.start, f.end || f.start) : 'ทุกช่วงเวลา';
  const prevLabel = pr ? pLabelRange(pr.start, pr.end) : '';
  document.getElementById('cxPeriodPills').innerHTML =
    // the period itself is shown in the bar under the title; here only what is different on this page
    `<span class="pill-p">หน้านี้นับตามวันที่สร้างบิล</span>` +
    (hasPrev ? '' : `<span class="pill-p admin-info">ไม่มีข้อมูลช่วงก่อนให้เทียบ</span>`);
  const cur = cxScope(f, f.start, f.end), prev = prevList;
  const A = cxAgg(cur), P = hasPrev ? cxAgg(prev) : null;
  renderBreadcrumb(f, { total: A.bills });

  // KPI cards
  const pctOf = (n,d)=> d ? (n/d*100) : null;
  document.getElementById('cxKpis').innerHTML = [
    cxKpi('บิลทั้งหมด (สร้างในช่วงนี้)', fmtNum(A.bills), `${fmtNum(A.qty)} ชิ้น`, P?cxDelta(A.bills,P.bills,false,false)+' เทียบช่วงก่อน':'', COLORS.navy),
    cxKpi('บิลยกเลิก', fmtNum(A.cBills), `${fmtPct(A.rateBills)} ของบิลทั้งหมด`, P?cxDelta(A.rateBills,P.rateBills,true,true)+' เทียบช่วงก่อน':'', COLORS.red),
    cxKpi('รายได้ที่หายไป (ประมาณ)', '฿'+fmtNum(A.cFee), `${fmtPct(A.rateFee)} ของรายได้รวม`, P?cxDelta(A.cFee,P.cFee,false,true)+' บาท':'', COLORS.red),
    cxKpi('ยกเลิกก่อนเข้ารับ', fmtNum(A.before), `${fmtPct(pctOf(A.before,A.bills))} ของบิลทั้งหมด`, P?cxDelta(pctOf(A.before,A.bills),pctOf(P.before,P.bills),true,true):'', COLORS.blue),
    cxKpi('ยกเลิกหลังเข้ารับ', fmtNum(A.after), `${fmtPct(pctOf(A.after,A.bills))} ของบิลทั้งหมด`, P?cxDelta(pctOf(A.after,A.bills),pctOf(P.after,P.bills),true,true):'', COLORS.blue2),
    cxKpi('สาเหตุจาก Nim Express / พนักงาน', fmtNum(A.nim+A.staff), `${fmtPct(pctOf(A.nim+A.staff,A.cBills))} ของบิลยกเลิก`, P?cxDelta(A.nim+A.staff,P.nim+P.staff,false,true)+' บิล':'', COLORS.red),
  ].join('');

  renderCancelRegionTable(f, hasPrev ? pr : null);
  renderCancelReasonTable('before', cur, prev, hasPrev, prevLabel, curLabel);
  renderCancelReasonTable('after', cur, prev, hasPrev, prevLabel, curLabel);
  safeCall('renderCancelTrend', ()=> renderCancelTrend(f), 'chartCancelTrend');
  safeCall('renderCancelReasonChart', ()=> renderCancelReasonChart(cur), 'chartCancelReason');

  const none = cur.filter(r=>cxStage(r) && /none$/.test(cxReason(r).group)).length;
  document.getElementById('cxNote').innerHTML =
    `ยกเลิก = สถานะบิล (คอลัมน์ AR) "CC ยกเลิก" หรือ "B031 รับไม่ได้" · ก่อนเข้ารับ = ยังไม่มีเวลายืนยัน B01 (คอลัมน์ G ว่าง) · หลังเข้ารับ = มีเวลายืนยัน B01 แล้ว · รับได้ = บิลทั้งหมด − ยกเลิก (รวมบิลที่ยังรอผล) · ` +
    (SETTINGS.lostBasis==='bill' ? `รายได้ที่หายไป = บิลที่ยกเลิก × ค่าเฉลี่ยบาทต่อบิลของบิลที่ไม่ยกเลิก ในภาค + ประเภทสินค้า + เดือนเดียวกัน (ประมาณการ)` : `รายได้ที่หายไป = ชิ้นที่ยกเลิก × ค่าเฉลี่ยบาทต่อชิ้นของบิลที่ไม่ยกเลิก ในภาค + ประเภทสินค้า + เดือนเดียวกัน (ประมาณการ)`) +
    (none ? `<span class="admin-info"> · ไม่ระบุสาเหตุ <b>${fmtNum(none)}</b> บิล</span>` : '');
}

function renderCancelRegionTable(f, pr){
  const level = f.zone ? 'dc' : 'zone';
  const keyOf = r => level==='zone' ? r.zone : r.dcCode;
  const base = { zone: level==='dc' ? f.zone : '', dc:'', product:f.product };
  const cur = cxScope(base, f.start, f.end), prev = pr ? cxScope(base, pr.start, pr.end) : [];
  const groups = new Map(), pg = new Map();
  cur.forEach(r=>{ const k=keyOf(r); if(!groups.has(k)) groups.set(k, { label: level==='zone'?r.zone:(r.dcName||r.dcCode), zone:r.zone, list:[] }); groups.get(k).list.push(r); });
  prev.forEach(r=>{ const k=keyOf(r); if(!pg.has(k)) pg.set(k, []); pg.get(k).push(r); });
  let rows = [...groups.entries()].map(([k,g])=>{ const a=cxAgg(g.list); const p=pg.has(k)?cxAgg(pg.get(k)):null; return { key:k, label:g.label, zone:g.zone, a, p, rateBills:a.rateBills, cBills:a.cBills, cFee:a.cFee, bills:a.bills, d: p ? a.rateBills-p.rateBills : null }; });
  const k = cancelSort.key, dir = cancelSort.dir==='asc'?1:-1;
  rows.sort((x,y)=>{ const vx = k==='label'?x.label:(x[k]??-Infinity), vy = k==='label'?y.label:(y[k]??-Infinity); return (vx>vy?1:vx<vy?-1:0)*dir; });
  const tot = cxAgg(cur), totP = pr ? cxAgg(prev) : null;
  const rateCls = v => v===null ? '' : (v>=20 ? 'cx-bad2' : v>=15 ? 'cx-bad1' : '');
  const cell = (a)=>`<td class="num">${fmtNum(a.bills)}</td><td class="num">${fmtNum(a.qty)}</td><td class="num">${fmtNum(a.fee)}</td>
    <td class="num">${fmtNum(a.okBills)}</td><td class="num">${fmtNum(a.okQty)}</td><td class="num">${fmtNum(a.okFee)}</td>
    <td class="num">${fmtNum(a.cBills)}</td><td class="num">${fmtNum(a.before)}</td><td class="num">${fmtNum(a.after)}</td><td class="num">${fmtNum(a.cQty)}</td><td class="num">${fmtNum(a.cFee)}</td>
    <td class="num ${rateCls(a.rateBills)}">${fmtPct(a.rateBills)}</td><td class="num">${fmtPct(a.rateQty)}</td><td class="num">${fmtPct(a.rateFee)}</td>`;
  const dCell = (a,p)=>`<td class="num">${p?cxDelta(a.rateBills,p.rateBills,true,true):'–'}</td>`;
  document.getElementById('cxRegionTitle').textContent = level==='zone' ? 'บิลยกเลิกรายภาค' : `บิลยกเลิกราย DC — ภาค ${f.zone}`;
  document.getElementById('cxRegionFirst').textContent = level==='zone' ? 'ภาค' : 'DC';
  document.getElementById('cxRegionBody').innerHTML = rows.map(r=>`<tr data-k="${r.key}" class="${f.dc===r.key?'sel':''}"><td><span class="zone-link">${r.label}</span>${level==='dc'?`<small class="cx-loc">${r.zone}</small>`:''}</td>${cell(r.a)}${dCell(r.a,r.p)}</tr>`).join('') +
    `<tr class="sum"><td>รวม</td>${cell(tot)}${dCell(tot,totP)}</tr>`;
  document.querySelectorAll('#cxRegionHead [data-sort]').forEach(th=>{ th.classList.toggle('active', th.dataset.sort===cancelSort.key); });
  document.getElementById('btnCxUp').style.display = level==='dc' ? '' : 'none';
}

function renderCancelReasonTable(stage, cur, prev, hasPrev, prevLabel, curLabel){
  const pick = list => list.filter(r=>cxStage(r)===stage);
  const C = pick(cur), Pv = pick(prev);
  const order = ['nim','customer','b031staff','b031customer','b031none','other','none'];
  const groups = {};
  const put = (r, which)=>{ const x = cxReason(r); const g = groups[x.group] || (groups[x.group] = { label:x.groupLabel, subs:{}, cur:0, prev:0 }); const s = g.subs[x.sub] || (g.subs[x.sub] = { cur:0, prev:0 }); s[which]++; g[which]++; };
  C.forEach(r=>put(r,'cur')); Pv.forEach(r=>put(r,'prev'));
  const groupName = { nim:'รวม Nim Express', customer:'รวมลูกค้า', b031staff:'รวม B031 · พนักงาน', b031customer:'รวม B031 · ลูกค้า', b031none:'รวม B031 · ไม่ระบุ', other:'รวมอื่นๆ', none:'รวมไม่ระบุ' };
  const d = (c,p)=> hasPrev ? (c-p) : null;
  const dCls = v => v===null||v===0 ? '' : (v>0 ? 'badt' : 'good');
  const dTxt = v => v===null ? '–' : (v>0?'+':'')+fmtNum(v);
  let html = '';
  order.filter(k=>groups[k]).forEach(k=>{
    const g = groups[k];
    const subs = Object.entries(g.subs).sort((a,b)=> b[1].cur-a[1].cur || b[1].prev-a[1].prev);
    subs.forEach(([name, v], i)=>{
      html += `<tr>${i===0?`<td rowspan="${subs.length+1}" class="cx-main">${g.label}</td>`:''}<td class="cx-sub">${name}</td>
        <td class="num">${hasPrev?fmtNum(v.prev):'–'}</td><td class="num">${fmtNum(v.cur)}</td><td class="num ${dCls(d(v.cur,v.prev))}">${dTxt(d(v.cur,v.prev))}</td>
        <td class="num">${g.cur?fmtPct(v.cur/g.cur*100):'–'}</td></tr>`;
    });
    html += `<tr class="sub-sum"><td class="cx-sub">${groupName[k]}</td><td class="num">${hasPrev?fmtNum(g.prev):'–'}</td><td class="num">${fmtNum(g.cur)}</td><td class="num ${dCls(d(g.cur,g.prev))}">${dTxt(d(g.cur,g.prev))}</td><td class="num">${C.length?fmtPct(g.cur/C.length*100):'–'}</td></tr>`;
  });
  html += `<tr class="sum"><td colspan="2">รวมทั้งหมด</td><td class="num">${hasPrev?fmtNum(Pv.length):'–'}</td><td class="num">${fmtNum(C.length)}</td><td class="num ${dCls(d(C.length,Pv.length))}">${dTxt(d(C.length,Pv.length))}</td><td class="num">100%</td></tr>`;
  if(!C.length && !Pv.length) html = `<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:20px;">ไม่มีบิลยกเลิกในช่วงนี้</td></tr>`;
  const id = stage==='before' ? 'cxBefore' : 'cxAfter';
  document.getElementById(id+'Body').innerHTML = html;
  document.querySelectorAll(`#${id}Head .cx-mprev`).forEach(e=> e.textContent = hasPrev ? prevLabel : 'ช่วงก่อน');
  document.querySelectorAll(`#${id}Head .cx-mcur`).forEach(e=> e.textContent = curLabel);
}

function renderCancelTrend(f){
  destroyChart('cancelTrend');
  const period = currentPeriod;
  const w = trendWindow(f);
  const all = cxScope(f, w.start, w.end);
  const map = new Map();
  all.forEach(r=>{
    const d = new Date(r.createDateISO+'T00:00:00');
    if(period==='day' && d.getDay()===0) return; // Sundays are counted in week/month but not shown as their own day
    const k = periodKey(d, period);
    const g = map.get(k) || { n:0, b:0, a:0 }; g.n++; const st = cxStage(r); if(st==='before') g.b++; else if(st==='after') g.a++; map.set(k,g);
  });
  let keys = [...map.keys()].sort();
  if(!perIsActive(f)){ if(period==='day') keys = keys.slice(-26); else if(period==='week') keys = keys.slice(-12); }
  window.__cancelTrendKeys = keys;
  const ctx = document.getElementById('chartCancelTrend');
  charts['cancelTrend'] = new Chart(ctx, {
    type:'line',
    data:{ labels: keys.map(k=>periodLabel(k, period)), datasets:[
      { label:'% ยกเลิกรวม', data: keys.map(k=>{const g=map.get(k);return g.n?+(((g.b+g.a)/g.n)*100).toFixed(2):null;}), borderColor:COLORS.red, backgroundColor:COLORS.red, tension:.3, pointRadius:2.5, borderWidth:2 },
      { label:'% ก่อนเข้ารับ', data: keys.map(k=>{const g=map.get(k);return g.n?+((g.b/g.n)*100).toFixed(2):null;}), borderColor:COLORS.blue, backgroundColor:COLORS.blue, tension:.3, pointRadius:2, borderWidth:1.6 },
      { label:'% หลังเข้ารับ', data: keys.map(k=>{const g=map.get(k);return g.n?+((g.a/g.n)*100).toFixed(2):null;}), borderColor:COLORS.blue2, backgroundColor:COLORS.blue2, tension:.3, pointRadius:2, borderWidth:1.6 }
    ]},
    options:{ responsive:true, maintainAspectRatio:false, interaction:{mode:'index',intersect:false},
      plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10, font:{family:'Prompt', size:11} } }, tooltip:{ callbacks:{ label:c=>`${c.dataset.label}: ${c.parsed.y==null?'–':c.parsed.y.toFixed(1)+'%'}` } } },
      scales:{ y:{ beginAtZero:true, ticks:{ callback:v=>v+'%' }, grid:{color:COLORS.grid} }, x:{ grid:{display:false} } } }
  });
}

function renderCancelReasonChart(cur){
  destroyChart('cancelReason');
  const list = cur.filter(r=>cxStage(r)===cancelReasonMode);
  const m = new Map();
  list.forEach(r=>{ const x = cxReason(r); const k = x.sub; const v = m.get(k) || { n:0, g:x.group }; v.n++; m.set(k,v); });
  const top = [...m.entries()].sort((a,b)=>b[1].n-a[1].n).slice(0,10);
  const colorOf = g => g==='nim'||g==='b031staff' ? COLORS.red : (g==='customer'||g==='b031customer') ? COLORS.navy : COLORS.gray;
  charts['cancelReason'] = new Chart(document.getElementById('chartCancelReason'), {
    type:'bar',
    data:{ labels: top.map(t=>t[0].length>30?t[0].slice(0,29)+'…':t[0]), datasets:[{ label:'บิลยกเลิก', data: top.map(t=>t[1].n), backgroundColor: top.map(t=>colorOf(t[1].g)), borderRadius:5, maxBarThickness:24 }]},
    options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{ callbacks:{ title:i=>top[i[0].dataIndex][0], label:c=>`${fmtNum(c.parsed.x)} บิล (${list.length?(c.parsed.x/list.length*100).toFixed(1):0}%)` } } },
      scales:{ x:{ beginAtZero:true, grid:{color:COLORS.grid} }, y:{ grid:{display:false}, ticks:{ font:{size:11} } } } }
  });
}

function wireCancelTab(){
  document.getElementById('cxReasonSeg').addEventListener('click', e=>{
    const b = e.target.closest('button'); if(!b) return;
    cancelReasonMode = b.dataset.m;
    document.querySelectorAll('#cxReasonSeg button').forEach(x=>x.classList.toggle('active', x===b));
    renderAll();
  });
  document.getElementById('cxRegionHead').addEventListener('click', e=>{
    const th = e.target.closest('[data-sort]'); if(!th) return;
    const k = th.dataset.sort;
    cancelSort = cancelSort.key===k ? { key:k, dir: cancelSort.dir==='asc'?'desc':'asc' } : { key:k, dir: k==='label'?'asc':'desc' };
    renderAll();
  });
  document.getElementById('cxRegionBody').addEventListener('click', e=>{
    const tr = e.target.closest('tr[data-k]'); if(!tr) return;
    const fZ = document.getElementById('fZone'), fD = document.getElementById('fDC');
    if(!fZ.value){ fZ.value = tr.dataset.k; fD.value=''; rebuildFilterOptions(); onFilterChange(); }
    else { fD.value = fD.value===tr.dataset.k ? '' : tr.dataset.k; onFilterChange(); }
  });
  document.getElementById('btnCxUp').addEventListener('click', ()=>{ document.getElementById('fZone').value=''; document.getElementById('fDC').value=''; rebuildFilterOptions(); onFilterChange(); });
}

wireCancelTab();

/* ============================== ADMIN GATE (single-file build) ==============================
   Honest note: in a single HTML file this is a client-side gate only. The page stores just a salted SHA-256 of the
   admin password (never the password). It keeps casual viewers out of upload / share / data-quality views; it is not
   server-side security. The online version (GitHub Pages + Apps Script) checks the key on the server instead.
   - Viewers never see the ⚙ button. Admin opens the link with #admin and types the password.
   - The ADMIN build (window.__NIMEX_ADMIN_BUILD) opens already in admin mode — keep that file to yourself.
   - Session only (sessionStorage): closing the tab logs out. */
const ADMIN_SALT = 'nimex-d2d|';
function adminCfg(){
  try{ return JSON.parse(document.getElementById('adminCfg').textContent || '{}'); }catch(e){ return {}; }
}
let ADMIN_HASH = adminCfg().h || '';
let ADMIN_HASH_CHANGED = false;

// SHA-256 (hex). Uses WebCrypto when available, otherwise a small pure-JS fallback (older in-app browsers).
async function sha256Hex(text){
  const bytes = new TextEncoder().encode(text);
  if(window.crypto && crypto.subtle && crypto.subtle.digest){
    try{
      const buf = await crypto.subtle.digest('SHA-256', bytes);
      return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');
    }catch(e){ /* fall through */ }
  }
  return sha256Fallback(bytes);
}
function sha256Fallback(msg){
  const K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const l = msg.length, nBlocks = ((l + 9 + 63) >> 6), w = new Uint32Array(nBlocks*16);
  for(let i=0;i<l;i++) w[i>>2] |= msg[i] << (24 - (i%4)*8);
  w[l>>2] |= 0x80 << (24 - (l%4)*8);
  w[nBlocks*16-1] = l*8;
  const r = (x,n)=> (x>>>n)|(x<<(32-n)), W = new Uint32Array(64);
  for(let b=0;b<nBlocks;b++){
    for(let t=0;t<64;t++){
      if(t<16) W[t] = w[b*16+t];
      else { const s0 = r(W[t-15],7)^r(W[t-15],18)^(W[t-15]>>>3), s1 = r(W[t-2],17)^r(W[t-2],19)^(W[t-2]>>>10); W[t] = (W[t-16]+s0+W[t-7]+s1)|0; }
    }
    let [a,bb,c,d,e,f,g,h] = H;
    for(let t=0;t<64;t++){
      const S1 = r(e,6)^r(e,11)^r(e,25), ch = (e&f)^(~e&g), t1 = (h+S1+ch+K[t]+W[t])|0;
      const S0 = r(a,2)^r(a,13)^r(a,22), maj = (a&bb)^(a&c)^(bb&c), t2 = (S0+maj)|0;
      h=g; g=f; f=e; e=(d+t1)|0; d=c; c=bb; bb=a; a=(t1+t2)|0;
    }
    H[0]=(H[0]+a)|0; H[1]=(H[1]+bb)|0; H[2]=(H[2]+c)|0; H[3]=(H[3]+d)|0; H[4]=(H[4]+e)|0; H[5]=(H[5]+f)|0; H[6]=(H[6]+g)|0; H[7]=(H[7]+h)|0;
  }
  return H.map(x=>(x>>>0).toString(16).padStart(8,'0')).join('');
}
async function checkAdminPassword(pass){
  if(window.NIMEX_ONLINE && window.onlineAuth) return !!pass && await window.onlineAuth(pass); // checked by Apps Script
  if(!ADMIN_HASH || !pass) return false;
  return (await sha256Hex(ADMIN_SALT + pass)) === ADMIN_HASH;
}
function adminEntryVisible(){ return isUnlocked || location.hash === '#admin'; }
window.addEventListener('hashchange', ()=>{ applyPermissionUI(); maybePromptAdmin(); });
function maybePromptAdmin(){
  if(location.hash === '#admin' && !isUnlocked && !document.body.classList.contains('cover-on')) openLoginModal();
}

/* ---------- change password (admin): new hash goes into the next "save dashboard" file ---------- */
function openPwModal(){
  ['pwNew','pwNew2'].forEach(id=> document.getElementById(id).value='');
  document.getElementById('pwError').textContent='';
  document.getElementById('pwModal').classList.add('show');
  setTimeout(()=>document.getElementById('pwNew').focus(), 50);
}
async function submitPw(){
  const a = document.getElementById('pwNew').value, b = document.getElementById('pwNew2').value;
  const err = document.getElementById('pwError');
  if(a.length < 8){ err.textContent = 'รหัสผ่านต้องยาวอย่างน้อย 8 ตัวอักษร'; return; }
  if(a !== b){ err.textContent = 'รหัสผ่านทั้งสองช่องไม่ตรงกัน'; return; }
  ADMIN_HASH = await sha256Hex(ADMIN_SALT + a);
  ADMIN_HASH_CHANGED = true;
  document.getElementById('pwModal').classList.remove('show');
  toast('ตั้งรหัสใหม่แล้ว · กด "บันทึกแดชบอร์ด" เพื่อได้ไฟล์ที่ใช้รหัสใหม่');
}

/* ---------- embedded data: gzip + base64 (22 MB of JSON becomes ~1 MB) ---------- */
function b64ToBytes(b64){ const bin = atob(b64), out = new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) out[i]=bin.charCodeAt(i); return out; }
function bytesToB64(bytes){ let s=''; const CH=0x8000; for(let i=0;i<bytes.length;i+=CH) s += String.fromCharCode.apply(null, bytes.subarray(i,i+CH)); return btoa(s); }
async function gunzipText(bytes){
  if(typeof DecompressionStream === 'undefined') throw new Error('เบราว์เซอร์นี้เปิดข้อมูลที่บีบอัดไม่ได้ กรุณาใช้ Chrome / Safari / Edge รุ่นใหม่');
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return await new Response(stream).text();
}
async function gzipText(text){
  const stream = new Blob([new TextEncoder().encode(text)]).stream().pipeThrough(new CompressionStream('gzip'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

document.getElementById('btnPw').addEventListener('click', openPwModal);
document.getElementById('btnPwCancel').addEventListener('click', ()=> document.getElementById('pwModal').classList.remove('show'));
document.getElementById('btnPwSave').addEventListener('click', submitPw);
['pwNew','pwNew2'].forEach(id=> document.getElementById(id).addEventListener('keydown', e=>{ if(e.key==='Enter') submitPw(); }));

/* ============================== AUTO PERIOD + COMPARISON (Stage 4) ==============================
   Owner's rules: working days = Monday–Saturday. Sundays are counted inside week/month totals but never shown
   as their own day (no Sunday day period, no Sunday point on daily charts).
   - Day:   latest working day vs the same weekday one week earlier.
   - Week:  Monday..latest day vs the same days of the previous week.
   - Month: 1st..latest day vs the previous month's first N working days (N = working days so far);
            a complete month is compared with the complete previous month.
   The KPI formulas are unchanged: the period only sets the date range (fStart/fEnd) the original code already uses.
   Typing dates by hand = custom range (original "previous range of equal length" comparison). */
const PER = { kind:'month', auto:true, start:'', end:'', prevStart:'', prevEnd:'', workDays:0, _for:null, _n:-1 };
const pISO = d => toISODate(d);
const pDate = s => new Date(s + 'T00:00:00');
function pAdd(s, n){ const d = pDate(s); d.setDate(d.getDate() + n); return pISO(d); }
function pSun(s){ return pDate(s).getDay() === 0; }
function pWorkDays(a, b){ let n = 0; for(let s = a; s <= b; s = pAdd(s, 1)) if(!pSun(s)) n++; return n; }
function dataMaxDate(){ let m = ''; RECORDS.forEach(r=>{ const d = r.confirmDateISO; if(d > m && (!REPORT_END_DATE || d <= REPORT_END_DATE)) m = d; }); return m; }
function dataMinDate(){ let m = '9999'; RECORDS.forEach(r=>{ if(r.confirmDateISO < m) m = r.confirmDateISO; }); return m === '9999' ? '' : m; }
function pLastWork(s){ while(s && pSun(s)) s = pAdd(s, -1); return s; }

function periodRange(kind, ref){
  const max = dataMaxDate();
  if(kind === 'day'){
    const d = pLastWork(ref);
    return { start:d, end:d, prevStart:pAdd(d,-7), prevEnd:pAdd(d,-7), workDays:1 };
  }
  if(kind === 'week'){
    const mon = pAdd(ref, -((pDate(ref).getDay() + 6) % 7));
    let end = pAdd(mon, 6); if(max && end > max) end = max;
    return { start:mon, end, prevStart:pAdd(mon,-7), prevEnd:pAdd(end,-7), workDays:pWorkDays(mon,end) };
  }
  const [y, m] = ref.split('-').map(Number);
  const start = pISO(new Date(y, m-1, 1)), monthEnd = pISO(new Date(y, m, 0));
  let end = monthEnd; if(max && end > max) end = max;
  const N = pWorkDays(start, end);
  const ps = pISO(new Date(y, m-2, 1)), pLast = pISO(new Date(y, m-1, 0));
  let pe = ps, n = pSun(ps) ? 0 : 1;
  while(n < N && pe < pLast){ pe = pAdd(pe, 1); if(!pSun(pe)) n++; }
  if(end === monthEnd) pe = pLast; // full month vs full month
  return { start, end, prevStart:ps, prevEnd:pe, workDays:N };
}
function perIsActive(f){ return PER.auto && f.start === PER.start && f.end === PER.end; }
function setDateInputs(){ document.getElementById('fStart').value = PER.start; document.getElementById('fEnd').value = PER.end; }
function selectPeriod(kind, ref){
  const max = dataMaxDate(); if(!max) return;
  ref = ref || max;
  if(ref > max) ref = max;
  Object.assign(PER, periodRange(kind, ref), { kind, auto:true });
  currentPeriod = kind;
  document.querySelectorAll('#periodSeg button').forEach(b=> b.classList.toggle('active', b.dataset.p === kind));
  setDateInputs();
  onFilterChange();
}
function shiftPeriod(dir){
  if(!PER.start) return;
  let ref;
  if(PER.kind === 'day'){ ref = pAdd(PER.start, dir); if(pSun(ref)) ref = pAdd(ref, dir); }
  else if(PER.kind === 'week') ref = pAdd(PER.start, 7*dir);
  else { const [y,m] = PER.start.split('-').map(Number); ref = pISO(new Date(y, m-1+dir, 1)); }
  const max = dataMaxDate(), min = dataMinDate();
  if(ref > max) return;
  const r = periodRange(PER.kind, ref);
  if(r.end < min) return;
  selectPeriod(PER.kind, ref);
}
function isoWeekMonday(key){ // 'YYYY-Www'
  const [y, w] = key.split('-W').map(Number);
  const jan4 = new Date(y, 0, 4), mon1 = new Date(jan4); mon1.setDate(jan4.getDate() - ((jan4.getDay()+6)%7));
  mon1.setDate(mon1.getDate() + (w-1)*7); return pISO(mon1);
}
function selectPeriodByKey(key){
  if(!key) return;
  if(currentPeriod === 'week') selectPeriod('week', isoWeekMonday(key));
  else if(currentPeriod === 'month') selectPeriod('month', key + '-01');
  else selectPeriod('day', key);
}
const TH_MON = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
const TH_DOW = ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'];
function pLabelRange(a, b){
  const A = pDate(a), B = pDate(b), yy = d => String(d.getFullYear()+543).slice(-2);
  if(a === b) return `${TH_DOW[A.getDay()]} ${A.getDate()} ${TH_MON[A.getMonth()]} ${yy(A)}`;
  if(A.getMonth() === B.getMonth() && A.getFullYear() === B.getFullYear()) return `${A.getDate()}–${B.getDate()} ${TH_MON[A.getMonth()]} ${yy(A)}`;
  return `${A.getDate()} ${TH_MON[A.getMonth()]} – ${B.getDate()} ${TH_MON[B.getMonth()]} ${yy(B)}`;
}
function periodLabelNow(){ return PER.start ? pLabelRange(PER.start, PER.end) : ''; }
// the date window a trend chart shows, ending at the selected period
function trendWindow(f){
  if(!perIsActive(f)) return { start:f.start, end:f.end };
  const end = PER.end; let start;
  if(currentPeriod === 'day') start = pAdd(end, -20);                 // ≈3 weeks
  else if(currentPeriod === 'week') start = pAdd(PER.start, -49);     // 8 weeks
  else { const [y,m] = PER.start.split('-').map(Number); start = pISO(new Date(y, m-12, 1)); } // 12 months
  return { start, end };
}
function trendScope(f){ const w = trendWindow(f); return filterRecords({ ...f, start:w.start, end:w.end }); }
function dropSundayRows(rows, period){
  const out = period === 'day' ? rows.filter(r=> !pSun(r.key)) : rows;
  window.__trendKeys = out.map(r=>r.key);
  return out;
}
function prevRangeFor(f){ return perIsActive(f) ? { start:PER.prevStart, end:PER.prevEnd } : prevPeriodRange(f.start, f.end); }

/* period bar under the page title */
function renderPeriodBar(){
  const bar = document.getElementById('perBar'); if(!bar) return;
  const f = getFilters();
  if(!RECORDS.length){ bar.style.display = 'none'; return; }
  bar.style.display = '';
  const cur = document.getElementById('perCur'), cmp = document.getElementById('perCmp');
  const kindTH = { day:'วัน', week:'สัปดาห์', month:'เดือน' }[PER.kind];
  if(perIsActive(f)){
    cur.textContent = `${kindTH}นี้: ${pLabelRange(PER.start, PER.end)} · ${PER.workDays} วันทำการ`;
    const prevN = filterRecords({ ...f, start:PER.prevStart, end:PER.prevEnd }).length;
    cmp.textContent = `เทียบ: ${pLabelRange(PER.prevStart, PER.prevEnd)}` + (prevN ? '' : ' (ไม่มีข้อมูล)');
    cmp.classList.toggle('admin-info', !prevN);
    document.getElementById('perPrev').disabled = periodRange(PER.kind, PER.kind==='month' ? pISO(new Date(+PER.start.slice(0,4), +PER.start.slice(5,7)-2, 1)) : pAdd(PER.start, PER.kind==='week'?-7:-1)).end < dataMinDate();
    document.getElementById('perNext').disabled = PER.end >= dataMaxDate();
    ['perPrev','perNext'].forEach(id=> document.getElementById(id).style.display = '');
  } else {
    cur.textContent = (f.start || f.end) ? `กำหนดเอง: ${f.start ? pLabelRange(f.start, f.end || f.start) : '… – ' + f.end}` : 'ทุกช่วงเวลา';
    const pr = prevPeriodRange(f.start, f.end);
    cmp.textContent = pr ? `เทียบ: ${pLabelRange(pr.start, pr.end)}` : 'ไม่มีช่วงเทียบ';
    cmp.classList.remove('admin-info');
    ['perPrev','perNext'].forEach(id=> document.getElementById(id).style.display = 'none');
  }
}
function wirePeriod(){
  document.getElementById('perPrev').addEventListener('click', ()=> shiftPeriod(-1));
  document.getElementById('perNext').addEventListener('click', ()=> shiftPeriod(1));
  ['fStart','fEnd'].forEach(id=> document.getElementById(id).addEventListener('change', ()=>{ PER.auto = false; renderPeriodBar(); }));
  document.getElementById('btnReset').addEventListener('click', ()=> setTimeout(()=> selectPeriod(PER.kind), 0));
}
// clicking a point on a trend chart opens that period (deferred so Chart.js finishes its own click handling)
function attachTrendClick(chart, keysGetter){
  if(!chart) return;
  chart.options.interaction = { mode:'index', intersect:false }; // the whole column is clickable
  chart.options.onClick = (e, els)=>{ if(els && els.length){ const k = keysGetter()[els[0].index]; setTimeout(()=> selectPeriodByKey(k), 0); } };
  chart.options.onHover = (e, els)=>{ const c = e.native && e.native.target; if(c) c.style.cursor = els && els.length ? 'pointer' : 'default'; };
  // mark the selected period
  const f = getFilters();
  if(perIsActive(f)){
    const keys = keysGetter(), selKey = periodKey(pDate(PER.start), currentPeriod), i = keys.indexOf(selKey);
    chart.data.datasets.forEach(ds=>{
      if(chart.config.type === 'line'){ ds.pointRadius = keys.map((_,j)=> j===i ? 6 : 2.5); ds.pointBorderWidth = keys.map((_,j)=> j===i ? 2 : 1); }
      else { ds.borderWidth = keys.map((_,j)=> j===i ? 2 : 0); ds.borderColor = '#d4af37'; }
    });
  }
  chart.update('none');
}

/* ---- the master render hook: keeps the period in sync, then runs the original renderAll ---- */
const __renderAllOriginal = renderAll;
renderAll = function(){
  if(RECORDS.length && (PER._for !== RECORDS || PER._n !== RECORDS.length)){
    PER._for = RECORDS; PER._n = RECORDS.length;
    if(PER.auto){
      const max = dataMaxDate();
      if(max){ Object.assign(PER, periodRange(PER.kind, (PER.end && PER.end <= max && PER.start) ? PER.start : max)); currentPeriod = PER.kind; setDateInputs(); }
    }
  }
  if(currentTab === 'compare') prefillCompareInputs();
  __renderAllOriginal();
  try{ renderPeriodBar(); }catch(e){ console.error(e); }
  try{ if(typeof renderChips === 'function') renderChips(); }catch(e){ console.error(e); }
  try{
    if(currentTab === 'overview'){ attachTrendClick(charts.trend, ()=> window.__trendKeys || []); attachTrendClick(charts.staffFail, ()=> window.__trendKeys || []); }
    if(currentTab === 'analysis') attachTrendClick(charts.reasonTrend, ()=> window.__reasonTrendKeys || []);
    if(currentTab === 'cancel') attachTrendClick(charts.cancelTrend, ()=> window.__cancelTrendKeys || []);
  }catch(e){ console.error(e); }
};
function prefillCompareInputs(){
  const ids = ['cmpStart1','cmpEnd1','cmpStart2','cmpEnd2'];
  if(ids.some(id=> document.getElementById(id).value) || !PER.start) return;
  [PER.start, PER.end, PER.prevStart, PER.prevEnd].forEach((v,i)=> document.getElementById(ids[i]).value = v);
}

/* ---- fail-count cards on the analysis page get ▲▼ vs the comparison period ---- */
function addFailDeltas(f){
  const pr = prevRangeFor(f); if(!pr) return;
  const prev = filterRecords({ ...f, start:pr.start, end:pr.end }); if(!prev.length) return;
  const cur = filterRecords(f);
  const s = k => failSums(cur, k), p = k => failSums(prev, k);
  const c = [s('kpi1'), s('kpi2'), s('kpi3')], q = [p('kpi1'), p('kpi2'), p('kpi3')];
  const vals = [ [c[0].count,q[0].count], [c[1].count,q[1].count], [c[2].count,q[2].count],
    [c[0].count+c[1].count+c[2].count, q[0].count+q[1].count+q[2].count],
    [c[0].qty+c[1].qty+c[2].qty, q[0].qty+q[1].qty+q[2].qty],
    [c[0].fee+c[1].fee+c[2].fee, q[0].fee+q[1].fee+q[2].fee] ];
  document.querySelectorAll('#failKpiGrid .kpi').forEach((card, i)=>{
    if(!vals[i] || card.querySelector('.kpi-delta')) return;
    const [a, b] = vals[i], d = a - b;
    const el = document.createElement('div');
    el.className = 'kpi-delta ' + (Math.abs(d) < 0.5 ? 'flat' : d > 0 ? 'down' : 'up'); // more failures = worse
    el.textContent = `${Math.abs(d)<0.5?'▬':d>0?'▲':'▼'} ${i===5?'฿':''}${fmtNum(Math.abs(d))} เทียบช่วงก่อนหน้า`;
    card.querySelector('.kpi-value-row').after(el);
  });
}

/* ============================== SHARED SETTINGS (Stage 5) ==============================
   One object, saved by the admin. Single-file build: kept in this browser (localStorage) and written into the file
   by "บันทึกแดชบอร์ด". Online build: saved to the Google Sheet (Settings tab) and loaded for every viewer.
   Defaults reproduce the original dashboard exactly (no DC excluded, original targets, original table columns). */
const SETTINGS_DEFAULT = {
  targets: { kpi1:98, kpi2:100, kpi3:100 },
  excludedDCs: [],                 // DC codes left out of every calculation (default: none)
  rankCols: ['total','totalQty','totalFee','kpi1','kpi2','kpi3'],
  rankDeltas: true,                // ▲▼ under the KPI columns of the main table
  lostBasis: 'piece',              // cancelled-bill lost revenue: 'piece' (avg ฿/piece) or 'bill' (avg ฿/bill)
  savedAt: ''
};
let SETTINGS = JSON.parse(JSON.stringify(SETTINGS_DEFAULT));
let EXCLUDED_DC = new Set();
function readEmbeddedSettings(){
  try{ const t = document.getElementById('appSettings'); return t && t.textContent.trim() ? JSON.parse(t.textContent) : null; }catch(e){ return null; }
}
function applySettings(obj){
  const s = JSON.parse(JSON.stringify(SETTINGS_DEFAULT));
  if(obj && typeof obj === 'object'){
    if(obj.targets) Object.assign(s.targets, obj.targets);
    ['excludedDCs','rankCols'].forEach(k=>{ if(Array.isArray(obj[k])) s[k] = obj[k].map(String); });
    ['rankDeltas'].forEach(k=>{ if(typeof obj[k] === 'boolean') s[k] = obj[k]; });
    if(obj.lostBasis === 'bill' || obj.lostBasis === 'piece') s.lostBasis = obj.lostBasis;
    if(obj.savedAt) s.savedAt = obj.savedAt;
  }
  if(!s.rankCols.length) s.rankCols = SETTINGS_DEFAULT.rankCols.slice();
  SETTINGS = s;
  Object.assign(TARGETS, s.targets);   // grade colours only; formulas unchanged
  EXCLUDED_DC = new Set(s.excludedDCs);
  if(typeof __cxAvgFor !== 'undefined') __cxAvgFor = null; // lost-revenue averages rebuild
}
function loadSettings(){
  const shared = window.__BOOT_SETTINGS || readEmbeddedSettings();
  let local = null;
  try{ local = JSON.parse(localStorage.getItem('nimex-d2d-settings') || 'null'); }catch(e){}
  // the admin's own unsaved-to-file changes win only when newer than what the file/server carries
  const pick = (local && isUnlocked && !window.NIMEX_ONLINE && (!shared || (local.savedAt||'') > (shared.savedAt||''))) ? local : shared;
  applySettings(pick);
}
async function saveSettings(patch){
  const next = Object.assign(JSON.parse(JSON.stringify(SETTINGS)), patch, { savedAt: new Date().toISOString() });
  applySettings(next);
  if(window.NIMEX_ONLINE && typeof window.onlineSaveSettings === 'function'){
    await window.onlineSaveSettings(SETTINGS);
  } else {
    try{ localStorage.setItem('nimex-d2d-settings', JSON.stringify(SETTINGS)); }catch(e){}
  }
  renderAll();
}

/* ============================== MAIN TABLE: configurable columns + ▲▼ ============================== */
const RANK_COLS = [
  { k:'total',          g:'ปริมาณ',        t:'บิล',              f:v=>fmtNum(v) },
  { k:'totalQty',       g:'ปริมาณ',        t:'กล่อง',            f:v=>fmtNum(v) },
  { k:'totalFee',       g:'ปริมาณ',        t:'รายได้ (฿)',        f:v=>fmtNum(v) },
  { k:'kpi1',           g:'KPI (%)',       t:'KPI1 เข้ารับได้ทั้งหมด', f:v=>fmtPct(v), pct:true, target:'kpi1' },
  { k:'kpi2',           g:'KPI (%)',       t:'KPI2 ตรงวันนัด',     f:v=>fmtPct(v), pct:true, target:'kpi2' },
  { k:'kpi3',           g:'KPI (%)',       t:'KPI3 เข้ารับสำเร็จ',   f:v=>fmtPct(v), pct:true, target:'kpi3' },
  { k:'kpi1FailCount',  g:'บิลไม่สำเร็จ',    t:'KPI1',             f:v=>fmtNum(v), bad:true },
  { k:'kpi2FailCount',  g:'บิลไม่สำเร็จ',    t:'KPI2',             f:v=>fmtNum(v), bad:true },
  { k:'kpi3FailCount',  g:'บิลไม่สำเร็จ',    t:'KPI3',             f:v=>fmtNum(v), bad:true },
  { k:'companyCancelled', g:'สาเหตุ',       t:'ยกเลิกโดยบริษัท',    f:v=>fmtNum(v), bad:true },
  { k:'failStaff',      g:'สาเหตุ',         t:'ไม่สำเร็จ: พนักงาน',  f:v=>fmtNum(v), bad:true },
  { k:'failCustomer',   g:'สาเหตุ',         t:'ไม่สำเร็จ: ลูกค้า',   f:v=>fmtNum(v) },
  { k:'pendingCount',   g:'สาเหตุ',         t:'รอผล',             f:v=>fmtNum(v) },
];
RANK_COLS.forEach(c=>{ if(!(c.k in RANK_SORT_NAMES)) RANK_SORT_NAMES[c.k] = c.g + ' ' + c.t; });
Object.assign(RANK_DEFAULT_DIR, Object.fromEntries(RANK_COLS.filter(c=>!(c.k in RANK_DEFAULT_DIR)).map(c=>[c.k, 'desc'])));
let __rankPrev = null; // key -> analyze() of the comparison period
function rankDeltaHTML(col, r){
  if(!SETTINGS.rankDeltas || !col.pct || !__rankPrev) return '';
  const p = __rankPrev.get(r.key); if(!p) return '';
  const a = r[col.k], b = p[col.k];
  if(a===null||b===null||a===undefined||b===undefined||isNaN(a)||isNaN(b)) return '';
  const d = a - b;
  if(Math.abs(d) < 0.05) return `<span class="dlt flat">▬</span>`;
  return `<span class="dlt ${d>0?'good':'bad'}">${d>0?'▲':'▼'}${Math.abs(d).toFixed(1)}</span>`;
}
function computeRankPrev(f, level){
  const pr = prevRangeFor(f);
  if(!pr){ __rankPrev = null; return; }
  const scope = { product:f.product, start:pr.start, end:pr.end, zone:f.zone, dc:'' };
  const recs = filterRecords(level==='dc' ? scope : { ...scope, zone:'' });
  __rankPrev = recs.length ? new Map(buildRanking(recs, level).map(r=>[r.key, r])) : null;
}
renderRankTable = function(rows, level){
  const f = getFilters();
  computeRankPrev(f, level);
  const cols = SETTINGS.rankCols.map(k=> RANK_COLS.find(c=>c.k===k)).filter(Boolean);
  document.getElementById('rankTitle').textContent = level==='zone'
    ? `อันดับภาค เรียงตาม${rankSortLabel()}`
    : `อันดับ DC ในภาค "${f.zone}" เรียงตาม${rankSortLabel()}`;
  document.getElementById('btnRankUp').style.display = level==='zone' ? 'none' : 'inline-flex';
  // two-row grouped header built from the chosen columns
  const groups = []; cols.forEach(c=>{ const g = groups[groups.length-1]; if(g && g.g===c.g) g.n++; else groups.push({ g:c.g, n:1 }); });
  const arrow = k => k===rankSort.key ? ` <span class="arrow">${rankSort.dir==='asc'?'▲':'▼'}</span>` : ' <span class="arrow">↕</span>';
  const thead = document.querySelector('#rankTable thead');
  thead.innerHTML =
    `<tr><th rowspan="2" style="cursor:default;">#</th><th rowspan="2" data-sort="label" class="sortable${rankSort.key==='label'?' active':''}" id="rankColLabel">${level==='zone'?'ภาค':'DC'}${arrow('label')}</th>` +
    groups.map(g=>`<th colspan="${g.n}" class="grp">${g.g}</th>`).join('') + `</tr>` +
    `<tr id="rankHeadRow">` + cols.map(c=>`<th data-sort="${c.k}" class="sortable${c.k===rankSort.key?' active':''}">${c.t}${arrow(c.k)}</th>`).join('') + `</tr>`;
  const tbody = document.getElementById('rankBody');
  tbody.innerHTML = rows.map((r,i)=>{
    const nameCell = level==='zone' ? `<span class="zone-link" data-key="${r.key}">${r.label}</span>` : `<span>${r.label}</span><small class="cx-loc">${f.zone}</small>`;
    return `<tr data-key="${r.key}" data-level="${level}"><td>${i+1}</td><td>${nameCell}</td>` +
      cols.map(c=>{
        const v = r[c.k];
        const style = c.pct ? ` style="color:${gradeColor(v, TARGETS[c.target])}; font-weight:700;"` : (c.bad && v>0 ? ' class="num badn"' : '');
        return `<td class="num"${style}>${c.f(v)}${rankDeltaHTML(c, r)}</td>`;
      }).join('') + `</tr>`;
  }).join('') || `<tr><td colspan="${cols.length+2}" style="text-align:center; color:var(--gray); padding:24px;">ไม่มีข้อมูลตามเงื่อนไขที่เลือก</td></tr>`;
  tbody.querySelectorAll('.zone-link').forEach(el=>{
    el.addEventListener('click', ()=>{ document.getElementById('fZone').value = el.dataset.key; rebuildFilterOptions(); onFilterChange(); });
  });
};

wirePeriod();
/* ============================== EXTRA PAGES (Stages 5–6) ==============================
   settings (admin only) · detail (bill list) · insight (ผลการวิเคราะห์) · active filter chips.
   All numbers reuse analyze() / recordKpiFlags() / filterRecords(), so they always agree with the overview. */
const XTABS = {};
const xEsc = s => String(s===null||s===undefined?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function saveBlob(filename, blob){
  if(typeof window.__testSave === 'function') return window.__testSave(filename, blob);
  const url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=> URL.revokeObjectURL(url), 4000);
}
function goTab(tab){ currentTab = tab; renderAll(); window.scrollTo({ top:0 }); }
function setZoneDc(zone, dc){
  document.getElementById('fZone').value = zone || ''; rebuildFilterOptions();
  document.getElementById('fDC').value = dc || ''; onFilterChange();
}
function periodStamp(){
  const f = getFilters();
  if(perIsActive(f)) return PER.kind==='month' ? PER.start.slice(0,7) : PER.kind==='week' ? PER.start+'-week' : PER.start;
  return (f.start||'start') + '_to_' + (f.end||'end');
}

/* ---------------- active filter chips ---------------- */
let DETAIL_ITEM = null; // { dim, value, label } from the analysis page
function renderChips(){
  const box = document.getElementById('filterChips'); if(!box) return;
  const f = getFilters(), out = [];
  const chip = (label, val, act) => `<span class="chip"><b>${label}</b> ${xEsc(val)}${act?`<button type="button" data-chip="${act}" aria-label="ล้าง ${label}">✕</button>`:''}</span>`;
  if(f.zone) out.push(chip('ภาค', f.zone, 'zone'));
  if(f.dc) out.push(chip('DC', document.getElementById('fDC').selectedOptions[0]?.textContent || f.dc, 'dc'));
  if(f.product) out.push(chip('สินค้า', f.product==='CC' ? 'CC · Cold Chain' : 'AB · ทั่วไป', 'product'));
  if(!perIsActive(f) && (f.start || f.end)) out.push(chip('ช่วง', (f.start||'…') + ' – ' + (f.end||'…'), 'range'));
  if(DETAIL_ITEM && currentTab === 'detail') out.push(chip(DIMS[DETAIL_ITEM.dim].t, DETAIL_ITEM.label, 'item'));
  if(EXCLUDED_DC.size) out.push(`<span class="chip admin-info"><b>ตัดออก</b> ${EXCLUDED_DC.size} DC</span>`);
  box.innerHTML = out.join('');
}
document.addEventListener('click', e=>{
  const b = e.target.closest('[data-chip]'); if(!b) return;
  const k = b.dataset.chip;
  if(k==='zone') setZoneDc('', '');
  else if(k==='dc') setZoneDc(getFilters().zone, '');
  else if(k==='product') document.querySelector('#seg-group button[data-v=""]').click();
  else if(k==='range') selectPeriod(PER.kind);
  else if(k==='item'){ DETAIL_ITEM = null; renderAll(); }
});

/* ---------------- dimensions & metrics (analysis + detail) ---------------- */
const DIMS = {
  zone:   { t:'ภาค',       key:r=>r.zone,         label:(k)=>k },
  dc:     { t:'DC',        key:r=>r.dcCode,       label:(k,rs)=>rs[0].dcName || k },
  route:  { t:'เส้นทาง',    key:r=>r.route,        label:(k)=>k },
  driver: { t:'คนขับ',      key:r=>r.driverName,   label:(k)=>k },
  plate:  { t:'ทะเบียนรถ',  key:r=>r.vehiclePlate, label:(k)=>k },
};
const METRICS = {
  kpi3:   { t:'KPI3 อัตราเข้ารับสำเร็จ',   v:a=>a.kpi3, pct:true, worse:'low', rate:true },
  kpi2:   { t:'KPI2 อัตราตรงวันนัด',       v:a=>a.kpi2, pct:true, worse:'low', rate:true },
  kpi1:   { t:'KPI1 อัตราเข้ารับได้ทั้งหมด', v:a=>a.kpi1, pct:true, worse:'low', rate:true },
  f3:     { t:'บิลไม่สำเร็จ KPI3',         v:a=>a.kpi3FailCount, worse:'high' },
  f2:     { t:'บิลไม่สำเร็จ KPI2',         v:a=>a.kpi2FailCount, worse:'high' },
  cc:     { t:'บิลยกเลิกโดยบริษัท',        v:a=>a.companyCancelled, worse:'high' },
  staff:  { t:'ไม่สำเร็จ: สาเหตุพนักงาน',    v:a=>a.failStaff, worse:'high' },
};
let INS = { dim:'dc', metric:'kpi3', min:20 };
function itemLocation(rs){
  const m = new Map(); rs.forEach(r=> m.set(r.dcCode, (m.get(r.dcCode)||0)+1));
  const top = [...m.entries()].sort((a,b)=>b[1]-a[1])[0][0];
  const r0 = rs.find(r=>r.dcCode===top);
  return { zone:r0.zone, dc:r0.dcName, dcs:m.size };
}
function insightRows(f){
  const D = DIMS[INS.dim], M = METRICS[INS.metric];
  const group = list => { const g = new Map(); list.forEach(r=>{ const k = D.key(r); if(k===null||k===undefined||k==='') return; (g.get(k) || g.set(k, []).get(k)).push(r); }); return g; };
  const cur = group(filterRecords(f));
  const pr = prevRangeFor(f);
  const prev = pr ? group(filterRecords({ ...f, start:pr.start, end:pr.end })) : new Map();
  let rows = [...cur.entries()].map(([k, rs])=>{
    const a = analyze(rs), loc = itemLocation(rs), p = prev.has(k) ? M.v(analyze(prev.get(k))) : null;
    return { key:k, label:D.label(k, rs), n:rs.length, v:M.v(a), p, loc };
  }).filter(r=> r.v!==null && r.v!==undefined && !isNaN(r.v) && (!M.rate || r.n >= INS.min));
  rows.sort((a,b)=> M.worse==='low' ? (a.v-b.v) || (b.n-a.n) : (b.v-a.v) || (b.n-a.n));
  return rows;
}
XTABS.insight = function(f){
  ['insDim','insMetric','insMin'].forEach(id=>{ const el = document.getElementById(id); el.value = String({insDim:INS.dim, insMetric:INS.metric, insMin:INS.min}[id]); });
  document.getElementById('insMinWrap').style.display = METRICS[INS.metric].rate ? '' : 'none';
  const M = METRICS[INS.metric], rows = insightRows(f), top = rows.slice(0, 100);
  const max = Math.max(1e-9, ...top.map(r=> M.pct ? (100 - r.v) : r.v));
  const showDc = INS.dim !== 'dc'; // the item itself is the DC
  document.getElementById('insHead').innerHTML = `<tr><th>#</th><th>${DIMS[INS.dim].t}</th><th>ภาค</th>${showDc?'<th>DC</th>':''}<th>บิล</th><th>${M.t}</th><th>เทียบช่วงก่อน</th></tr>`;
  document.getElementById('insBody').innerHTML = top.map((r,i)=>{
    const w = Math.max(2, (M.pct ? (100 - r.v) : r.v) / max * 100);
    const d = r.p===null ? null : r.v - r.p, bad = d!==null && (M.worse==='low' ? d < 0 : d > 0);
    const dTxt = d===null ? '–' : Math.abs(d) < (M.pct?0.05:0.5) ? '▬' : `${d>0?'▲':'▼'} ${M.pct?Math.abs(d).toFixed(1)+'pt':fmtNum(Math.abs(d))}`;
    return `<tr data-ins="${xEsc(r.key)}"><td><span class="rk ${i<3?'top':''}">${i+1}</span></td><td class="ins-name">${xEsc(r.label)}</td>
      <td>${xEsc(INS.dim==='zone'?r.label:r.loc.zone)}</td>${!showDc?'':`<td>${INS.dim==='zone'?`${r.loc.dcs} DC`:xEsc(r.loc.dc)+(r.loc.dcs>1?` <small class="cx-loc">+${r.loc.dcs-1} DC</small>`:'')}</td>`}
      <td class="num">${fmtNum(r.n)}</td>
      <td class="num ins-v"><span class="ins-bar" style="width:${w}%"></span><b>${M.pct?fmtPct(r.v):fmtNum(r.v)}</b></td>
      <td class="num ${d===null||dTxt==='▬'?'':bad?'badt':'good'}">${dTxt}</td></tr>`;
  }).join('') || `<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:22px;">ไม่มีรายการที่ผ่านเงื่อนไข (ลองลดจำนวนบิลขั้นต่ำ)</td></tr>`;
  document.getElementById('insNote').textContent = `${fmtNum(rows.length)} รายการ · เรียงจากแย่ไปดี · แสดงสูงสุด 100 อันดับ` + (M.rate ? ` · เฉพาะรายการที่มีอย่างน้อย ${INS.min} บิล` : '') + ' · กดแถวเพื่อดูรายละเอียด';
};
function wireInsight(){
  document.getElementById('insDim').addEventListener('change', e=>{ INS.dim = e.target.value; renderAll(); });
  document.getElementById('insMetric').addEventListener('change', e=>{ INS.metric = e.target.value; renderAll(); });
  document.getElementById('insMin').addEventListener('change', e=>{ INS.min = +e.target.value; renderAll(); });
  document.getElementById('insBody').addEventListener('click', e=>{
    const tr = e.target.closest('tr[data-ins]'); if(!tr) return;
    const k = tr.dataset.ins;
    if(INS.dim==='zone'){ currentTab='overview'; setZoneDc(k, ''); return; }
    if(INS.dim==='dc'){ const r = RECORDS.find(x=>x.dcCode===k); currentTab='overview'; setZoneDc(r ? r.zone : '', k); return; }
    DETAIL_ITEM = { dim:INS.dim, value:k, label:tr.querySelector('.ins-name').textContent };
    goTab('detail');
  });
}

/* ---------------- bill detail list ---------------- */
let DET = { status:'all', q:'', limit:200, sort:{ k:'confirmDateISO', dir:-1 } };
const DET_STATUS = {
  all:     { t:'ทั้งหมด',              f:()=>true },
  kpi3:    { t:'ไม่สำเร็จ (KPI3)',       f:r=> recordKpiFlags(r).inBase && recordKpiFlags(r).kpi3Fail },
  kpi2:    { t:'ไม่ตรงวันนัด (KPI2)',     f:r=> recordKpiFlags(r).inBase && recordKpiFlags(r).kpi2Fail },
  company: { t:'ยกเลิกโดยบริษัท (KPI1)', f:r=> !recordKpiFlags(r).inBase },
  cancel:  { t:'ยกเลิกทั้งหมด',          f:r=> r.cancelled },
  pending: { t:'รอผล',                 f:r=> recordKpiFlags(r).failBucket==='pending' },
};
function detReason(r){
  if(r.cancelled) return r.cancelSubRaw || r.cancelReasonDetail || r.cancelMainRaw || 'ยกเลิก';
  if(r.pickupResult==='fail') return r.failSubRaw || r.failReasonDetail || r.failMainRaw || 'รับไม่สำเร็จ';
  if(r.pickupResult==='success' && !r.onTime) return 'รับสำเร็จแต่ไม่ตรงวันนัด';
  return '';
}
function detResult(r){
  const fl = recordKpiFlags(r);
  if(!fl.inBase) return '<span class="tag bad">ยกเลิกโดยบริษัท</span>';
  if(r.cancelled) return '<span class="tag">ยกเลิก</span>';
  if(r.pickupResult==='success') return r.onTime ? '<span class="tag ok">สำเร็จ</span>' : '<span class="tag bad">สำเร็จ ไม่ตรงวัน</span>';
  if(r.pickupResult==='fail') return fl.kpi3Fail ? '<span class="tag bad">ไม่สำเร็จ</span>' : '<span class="tag">ไม่สำเร็จ (ลูกค้า)</span>';
  return '<span class="tag bad">รอผล</span>';
}
const DET_COLS = [
  ['billNo','เลขที่บิล'], ['confirmDateISO','วันนัดรับ'], ['createDateISO','วันสร้างบิล'], ['zone','ภาค'], ['dcName','DC'], ['productGroup','สินค้า'],
  ['_res','ผล'], ['_why','สาเหตุ'], ['driverName','คนขับ'], ['vehiclePlate','ทะเบียน'], ['route','เส้นทาง'], ['qty','ชิ้น'], ['fee','ค่าขนส่ง'],
];
function detailRows(f){
  let rows = filterRecords(f).filter(DET_STATUS[DET.status].f);
  if(DETAIL_ITEM) rows = rows.filter(r=> String(DIMS[DETAIL_ITEM.dim].key(r)) === String(DETAIL_ITEM.value));
  const q = DET.q.trim().toLowerCase();
  if(q) rows = rows.filter(r=> [r.billNo, r.driverName, r.vehiclePlate, r.route, r.dcName, r.zone].some(v=> v && String(v).toLowerCase().includes(q)));
  const k = DET.sort.k, d = DET.sort.dir;
  rows.sort((a,b)=>{ const x = a[k]??'', y = b[k]??''; return (x>y?1:x<y?-1:0)*d; });
  return rows;
}
XTABS.detail = function(f){
  document.querySelectorAll('#detStatus button').forEach(b=> b.classList.toggle('active', b.dataset.s===DET.status));
  const rows = detailRows(f), show = rows.slice(0, DET.limit);
  document.getElementById('detHead').innerHTML = '<tr>' + DET_COLS.map(([k,t])=>`<th${k[0]==='_'?'':` class="sortable${DET.sort.k===k?' active':''}" data-dsort="${k}"`}>${t}${DET.sort.k===k?(DET.sort.dir>0?' ▲':' ▼'):''}</th>`).join('') + '</tr>';
  document.getElementById('detBody').innerHTML = show.map(r=>`<tr>
    <td>${xEsc(r.billNo)}</td><td>${xEsc(r.confirmDateISO)}</td><td>${xEsc(r.createDateISO||'')}</td><td>${xEsc(r.zone)}</td><td>${xEsc(r.dcName)}</td><td>${r.productGroup}</td>
    <td>${detResult(r)}</td><td class="det-why">${xEsc(detReason(r))}</td><td>${xEsc(r.driverName||'')}</td><td>${xEsc(r.vehiclePlate||'')}</td><td class="det-why">${xEsc(r.route||'')}</td>
    <td class="num">${fmtNum(r.qty)}</td><td class="num">${fmtNum(r.fee)}</td></tr>`).join('') || `<tr><td colspan="${DET_COLS.length}" style="text-align:center;color:var(--muted);padding:22px;">ไม่มีบิลตามเงื่อนไข</td></tr>`;
  const qty = rows.reduce((s,r)=>s+r.qty,0), fee = rows.reduce((s,r)=>s+r.fee,0);
  document.getElementById('detCount').textContent = `${fmtNum(rows.length)} บิล · ${fmtNum(qty)} ชิ้น · ฿${fmtNum(fee)}` + (rows.length > show.length ? ` · แสดง ${fmtNum(show.length)} แถวแรก` : '');
  document.getElementById('detMore').style.display = rows.length > show.length ? '' : 'none';
};
function wireDetail(){
  document.getElementById('detStatus').innerHTML = Object.entries(DET_STATUS).map(([k,v])=>`<button type="button" data-s="${k}">${v.t}</button>`).join('');
  document.getElementById('detStatus').addEventListener('click', e=>{ const b = e.target.closest('button'); if(!b) return; DET.status = b.dataset.s; DET.limit = 200; renderAll(); });
  let t = null;
  document.getElementById('detQ').addEventListener('input', e=>{ clearTimeout(t); t = setTimeout(()=>{ DET.q = e.target.value; DET.limit = 200; renderAll(); }, 250); });
  document.getElementById('detMore').addEventListener('click', ()=>{ DET.limit += 500; renderAll(); });
  document.getElementById('detHead').addEventListener('click', e=>{ const th = e.target.closest('[data-dsort]'); if(!th) return; const k = th.dataset.dsort; DET.sort = DET.sort.k===k ? { k, dir:-DET.sort.dir } : { k, dir: (k==='qty'||k==='fee')?-1:1 }; renderAll(); });
  document.getElementById('detXlsx').addEventListener('click', ()=>{
    const rows = detailRows(getFilters());
    const aoa = [DET_COLS.map(c=>c[1]), ...rows.map(r=>[r.billNo, r.confirmDateISO, r.createDateISO||'', r.zone, r.dcName, r.productGroup,
      detResult(r).replace(/<[^>]+>/g,''), detReason(r), r.driverName||'', r.vehiclePlate||'', r.route||'', r.qty, r.fee])];
    const wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(aoa); XLSX.utils.book_append_sheet(wb, ws, 'รายการบิล');
    saveBlob(`NIMEX-D2D-Bills-${periodStamp()}.xlsx`, new Blob([XLSX.write(wb, { type:'array', bookType:'xlsx' })]));
  });
}

/* ---------------- settings (admin only) ---------------- */
let SET_VIEW = '';      // '' = landing, else a section id
let SET_DCQ = '';
let SET_DRAFT_DC = null;
function dataAnomalies(){
  const out = [];
  const files = (META.uploadedFiles||[]);
  const dup = files.reduce((s,x)=>s+(x.dup||0),0);
  if(dup) out.push(['บิลเดียวกันมีหลายแถวในไฟล์', fmtNum(dup)+' แถว', 'รวมเป็น 1 บิล ใช้ค่าล่าสุดของแต่ละคอลัมน์']);
  const exc = {}; files.forEach(x=> Object.entries(x.reasons||{}).forEach(([k,v])=> exc[k]=(exc[k]||0)+v));
  Object.entries(exc).forEach(([k,v])=> out.push(['แถวที่ไม่นำมาคำนวณ: '+k, fmtNum(v)+' แถว', 'ตัดออก (เช่น รหัส DC ที่ไม่มีในตารางภาค)']));
  files.filter(x=> x.reportEnd && x.maxCreate && x.maxCreate > x.reportEnd).forEach(x=>
    out.push([`หัวรายงานระบุวันที่ไม่ตรงข้อมูล: ${x.name}`, `หัวรายงานถึง ${x.reportEnd} · ข้อมูลจริงถึง ${x.maxCreate}`, 'ระบบคำนวณถึงวันสิ้นสุดล่าสุดของทุกไฟล์ ควรแก้หัวรายงานให้ตรง']));
  const due = notYetDueCount();
  if(due) out.push(['บิลนัดรับหลังวันสิ้นสุดรายงาน', fmtNum(due)+' บิล', `ยังไม่นำมาคำนวณ จนกว่าจะมีรายงานที่ครอบคลุม (คำนวณถึง ${REPORT_END_DATE})`]);
  // days with unusually few bills (Mon–Sat, < 55% of the median of that weekday)
  const byDay = new Map(); RECORDS.forEach(r=>{ if(!REPORT_END_DATE || r.confirmDateISO <= REPORT_END_DATE) byDay.set(r.confirmDateISO, (byDay.get(r.confirmDateISO)||0)+1); });
  const byDow = {}; byDay.forEach((n,d)=>{ const w = pDate(d).getDay(); if(w) (byDow[w] = byDow[w]||[]).push(n); });
  const med = a => { const s = a.slice().sort((x,y)=>x-y); return s[Math.floor(s.length/2)]; };
  const low = [...byDay.entries()].filter(([d,n])=>{ const w = pDate(d).getDay(); return w && byDow[w].length >= 3 && n < med(byDow[w]) * 0.55; }).sort();
  if(low.length) out.push(['วันที่มีบิลน้อยผิดปกติ (จ.–ส.)', low.map(([d,n])=> `${pLabelRange(d,d)} (${fmtNum(n)})`).join(', '), 'แสดงตามจริง เช่น วันแรกของข้อมูล หรือเหตุน้ำท่วม 28–29 ก.ย.']);
  const noReason = RECORDS.filter(r=> cxStage(r) && /none$/.test(cxReason(r).group)).length;
  if(noReason) out.push(['บิลยกเลิกที่ไม่ระบุสาเหตุ', fmtNum(noReason)+' บิล', 'แสดงเป็นแถว "ไม่ระบุสาเหตุ" ในหน้าบิลยกเลิก']);
  const b031 = RECORDS.filter(r=> cxKind(r)==='b031' && !r.hasB01).length;
  if(b031) out.push(['B031 รับไม่ได้ แต่ไม่มีเวลายืนยัน B01', fmtNum(b031)+' บิล', 'นับเป็น "ยกเลิกก่อนเข้ารับ" ตามกติกาคอลัมน์ G']);
  const dcs = new Map(); RECORDS.forEach(r=>{ if(!r.createDateISO) return; const o = dcs.get(r.dcCode) || dcs.set(r.dcCode, { n:0, c:0, name:r.dcName, zone:r.zone }).get(r.dcCode); o.n++; if(cxStage(r)) o.c++; });
  const hi = [...dcs.values()].filter(o=> o.n >= 20 && o.c/o.n >= 0.9);
  if(hi.length) out.push(['DC ที่บิลยกเลิกเกือบทั้งหมด (≥90%)', hi.map(o=> `${o.name} (${o.zone}) ${fmtNum(o.c)}/${fmtNum(o.n)}`).join(', '), 'ตรวจว่ายังเปิดรับงานอยู่หรือไม่ · ตัดออกได้ที่ "DC ที่ไม่นำมาคำนวณ"']);
  const lateOnly = RECORDS.filter(r=> (!REPORT_END_DATE || r.confirmDateISO <= REPORT_END_DATE) && recordKpiFlags(r).failBucket==='lateOnly').length;
  if(lateOnly) out.push(['รับสำเร็จแต่ไม่ตรงวันนัดแรก', fmtNum(lateOnly)+' บิล', 'นับเป็นไม่ตรงวันนัดใน KPI2 (เลื่อนนัดโดยไม่มีสาเหตุลูกค้า) · การเลื่อนเพราะลูกค้าถือว่าตรงวันนัด']);
  const pend = RECORDS.filter(r=> (!REPORT_END_DATE || r.confirmDateISO <= REPORT_END_DATE) && recordKpiFlags(r).failBucket==='pending').length;
  if(pend) out.push(['บิลที่ยังไม่มีผลเข้ารับ (รอผล)', fmtNum(pend)+' บิล', 'นับเป็นไม่สำเร็จใน KPI2/KPI3 ตามสูตรเดิม จนกว่าจะอัปโหลดไฟล์ที่มีผล']);
  return out;
}
function dcImpactList(){
  const m = new Map();
  RECORDS.forEach(r=>{ const o = m.get(r.dcCode) || m.set(r.dcCode, { code:r.dcCode, name:r.dcName, zone:r.zone, n:0, c:0 }).get(r.dcCode); o.n++; if(cxStage(r)) o.c++; });
  return [...m.values()].sort((a,b)=> b.n - a.n);
}
const SET_SECTIONS = {
  data:    { t:'ข้อมูลในระบบ',        ic:'🗂️', sum:()=>`${fmtNum(RECORDS.length)} บิล · ${(META.uploadedFiles||[]).length} ไฟล์` },
  check:   { t:'ตรวจสอบข้อมูล',       ic:'🔎', sum:()=>{ const n = dataAnomalies().length; return n ? `${n} เรื่องที่ควรดู` : 'ไม่พบความผิดปกติ'; } },
  targets: { t:'เป้าหมาย KPI',         ic:'🎯', sum:()=>`KPI1 ${TARGETS.kpi1}% · KPI2 ${TARGETS.kpi2}% · KPI3 ${TARGETS.kpi3}%` },
  dcs:     { t:'DC ที่ไม่นำมาคำนวณ',    ic:'🚫', sum:()=> EXCLUDED_DC.size ? `${EXCLUDED_DC.size} DC` : 'ไม่มี (คำนวณทุก DC)' },
  cols:    { t:'คอลัมน์ตารางหลัก',      ic:'📋', sum:()=>`${SETTINGS.rankCols.length} คอลัมน์${SETTINGS.rankDeltas?' · มี ▲▼':''}` },
  lost:    { t:'รายได้ที่หายไป (ประมาณ)', ic:'💸', sum:()=> SETTINGS.lostBasis==='bill' ? 'เฉลี่ยบาทต่อบิล' : 'เฉลี่ยบาทต่อชิ้น' },
  access:  { t:'สิทธิ์ผู้ดูแล',          ic:'🔐', sum:()=> window.NIMEX_ONLINE ? 'ตรวจรหัสที่ Apps Script' : 'รหัสเก็บเป็น hash ในไฟล์' },
};
XTABS.settings = function(){
  if(!isUnlocked){ currentTab = 'overview'; renderAll(); return; }
  const box = document.getElementById('settingsBody');
  if(!SET_VIEW){
    box.innerHTML = `<div class="set-grid">` + Object.entries(SET_SECTIONS).map(([k,s])=>`<div class="panel set-card"><div class="set-ic">${s.ic}</div><div class="panel-title">${s.t}</div><div class="panel-note">${xEsc(s.sum())}</div><button class="btn btn-outline btn-sm" data-setv="${k}">ตั้งค่า ›</button></div>`).join('') + `</div>`;
    return;
  }
  const back = `<button class="btn btn-outline btn-sm" data-setv="">‹ กลับหน้าตั้งค่า</button>`;
  const head = t => `<div class="set-head">${back}<h2>${t}</h2></div>`;
  let h = '';
  if(SET_VIEW==='data'){
    const files = META.uploadedFiles || [];
    h = head('ข้อมูลในระบบ') + `<div class="panel"><div class="set-actions">
        <label class="btn" for="fileInput">⬆ อัปโหลดไฟล์ Excel</label>
        ${window.NIMEX_ONLINE?'':'<button class="btn btn-outline" data-setact="savefile">💾 บันทึกแดชบอร์ด (ไฟล์ HTML)</button>'}
        <button class="btn btn-outline" data-setact="rawxlsx">⬇ ส่งออกข้อมูล (Excel)</button>
        ${window.NIMEX_ONLINE?'':'<button class="btn btn-outline" data-setact="clear">🗑 ล้างข้อมูล</button>'}</div>
      <p class="panel-note" style="text-align:left">อัปโหลดรายงาน "NIMEX ... รายงานระบบ Booking และเข้ารับ" ได้หลายไฟล์พร้อมกัน บิลที่ซ้ำกับของเดิมจะใช้ค่าใหม่แทน · ส่งออกข้อมูล = บิลตามตัวกรองปัจจุบัน</p>
      <div class="tw"><table class="cx-t"><thead><tr><th class="cx-first">ไฟล์</th><th>อัปโหลดเมื่อ</th><th>บิล</th><th>แถวซ้ำ</th><th>ตัดออก</th><th>หัวรายงานถึง</th><th>วันสร้างบิลในไฟล์</th></tr></thead><tbody>` +
      (files.map(x=>`<tr><td>${xEsc(x.name)}</td><td>${x.at?new Date(x.at).toLocaleString('th-TH'):'–'}</td><td class="num">${fmtNum(x.rows)}</td><td class="num">${x.dup!==undefined?fmtNum(x.dup):'–'}</td><td class="num">${x.excluded!==undefined?fmtNum(x.excluded):'–'}</td><td>${x.reportEnd||'–'}</td><td>${x.minCreate?x.minCreate+' – '+x.maxCreate:'–'}</td></tr>`).join('') || '<tr><td colspan="7" style="text-align:center;color:var(--muted)">ยังไม่มีประวัติไฟล์</td></tr>') +
      `</tbody></table></div><p class="panel-note" style="text-align:left">รวม ${fmtNum(RECORDS.length)} บิล · คำนวณถึง ${REPORT_END_DATE||'–'} · อัปเดตล่าสุด ${META.lastUpdated?new Date(META.lastUpdated).toLocaleString('th-TH'):'–'}</p></div>`;
  }
  if(SET_VIEW==='check'){
    const A = dataAnomalies();
    h = head('ตรวจสอบข้อมูล') + `<div class="panel"><p class="panel-note" style="text-align:left">ระบบไม่แก้ข้อมูลเอง รายการด้านล่างบอกว่าพบอะไร และระบบจัดการอย่างไร</p><div class="tw"><table class="cx-t set-t"><thead><tr><th class="cx-first">เรื่อง</th><th>จำนวน / รายละเอียด</th><th>ระบบจัดการอย่างไร</th></tr></thead><tbody>` +
      (A.map(a=>`<tr><td>${xEsc(a[0])}</td><td>${xEsc(a[1])}</td><td>${xEsc(a[2])}</td></tr>`).join('') || '<tr><td colspan="3" style="text-align:center">ไม่พบความผิดปกติ</td></tr>') + `</tbody></table></div></div>`;
  }
  if(SET_VIEW==='targets'){
    h = head('เป้าหมาย KPI') + `<div class="panel"><p class="panel-note" style="text-align:left">เป้าหมายใช้กำหนดสีและข้อความ "เป้า" เท่านั้น ไม่เปลี่ยนสูตรคำนวณ</p><div class="set-form">` +
      ['kpi1','kpi2','kpi3'].map(k=>`<label class="field"><span>${KPI_NAMES[k]}</span><input type="number" min="0" max="100" step="0.1" id="tg-${k}" value="${TARGETS[k]}"></label>`).join('') +
      `</div><button class="btn" data-setact="savetargets">บันทึกเป้าหมาย</button></div>`;
  }
  if(SET_VIEW==='dcs'){
    if(!SET_DRAFT_DC) SET_DRAFT_DC = new Set(EXCLUDED_DC);
    const q = SET_DCQ.trim().toLowerCase();
    const list = dcImpactList().filter(o=> !q || (o.name+o.zone+o.code).toLowerCase().includes(q));
    h = head('DC ที่ไม่นำมาคำนวณ') + `<div class="panel"><p class="panel-note" style="text-align:left">ติ๊ก DC ที่ไม่ต้องการนำมาคำนวณทุกหน้า (เช่น DC ที่ปิดรับงาน) · เรียงตามจำนวนบิลมากไปน้อย · ค่าเริ่มต้นคือไม่ตัด DC ใดออก</p>
      <div class="tools"><input type="search" id="dcq" placeholder="ค้นหา DC หรือภาค" value="${xEsc(SET_DCQ)}" aria-label="ค้นหา DC"><span class="panel-note">เลือกแล้ว ${SET_DRAFT_DC.size} DC</span></div>
      <div class="checks">` + list.map(o=>`<label><input type="checkbox" data-dcx="${o.code}"${SET_DRAFT_DC.has(o.code)?' checked':''}> <span><b>${xEsc(o.name)}</b> <small>${xEsc(o.zone)} · ${fmtNum(o.n)} บิล · ยกเลิก ${fmtPct(o.n?o.c/o.n*100:null)}</small></span></label>`).join('') +
      `</div><div class="set-actions"><button class="btn" data-setact="savedcs">บันทึก</button><button class="btn btn-outline" data-setact="cleardcs">ไม่ตัด DC ใดออก</button></div></div>`;
  }
  if(SET_VIEW==='cols'){
    const groups = [...new Set(RANK_COLS.map(c=>c.g))];
    h = head('คอลัมน์ตารางหลัก') + `<div class="panel"><p class="panel-note" style="text-align:left">เลือกตัวชี้วัดที่จะแสดงในตารางอันดับภาค/DC หัวตารางจะจัดกลุ่ม 2 ชั้นให้อัตโนมัติ</p>` +
      groups.map(g=>`<h3 class="set-g">${g}</h3><div class="checks">` + RANK_COLS.filter(c=>c.g===g).map(c=>`<label><input type="checkbox" data-col="${c.k}"${SETTINGS.rankCols.includes(c.k)?' checked':''}> ${c.t}</label>`).join('') + `</div>`).join('') +
      `<label class="set-toggle"><input type="checkbox" id="colDeltas"${SETTINGS.rankDeltas?' checked':''}> แสดง ▲▼ เทียบช่วงก่อนใต้คอลัมน์ KPI</label>
      <div class="set-actions"><button class="btn" data-setact="savecols">บันทึก</button><button class="btn btn-outline" data-setact="defcols">คืนค่าเริ่มต้น</button></div></div>`;
  }
  if(SET_VIEW==='lost'){
    h = head('รายได้ที่หายไป (ประมาณ)') + `<div class="panel"><p class="panel-note" style="text-align:left">บิลยกเลิกในรายงานมีค่าขนส่ง 0 บาท ระบบจึงประเมินจากค่าเฉลี่ยของบิลที่ไม่ยกเลิก ในภาค + ประเภทสินค้า + เดือนเดียวกัน</p>
      <div class="checks"><label><input type="radio" name="lostb" value="piece"${SETTINGS.lostBasis!=='bill'?' checked':''}> เฉลี่ยบาทต่อชิ้น × ชิ้นที่ยกเลิก</label><label><input type="radio" name="lostb" value="bill"${SETTINGS.lostBasis==='bill'?' checked':''}> เฉลี่ยบาทต่อบิล × บิลที่ยกเลิก</label></div>
      <div class="set-actions"><button class="btn" data-setact="savelost">บันทึก</button></div></div>`;
  }
  if(SET_VIEW==='access'){
    h = head('สิทธิ์ผู้ดูแล') + `<div class="panel">` + (window.NIMEX_ONLINE
      ? `<p class="panel-note" style="text-align:left">ระบบออนไลน์ตรวจรหัสที่ Google Apps Script (Script Properties ชื่อ ADMIN_KEY) เปลี่ยนรหัสได้ที่หน้า Apps Script › Project Settings › Script Properties</p>`
      : `<p class="panel-note" style="text-align:left">ไฟล์นี้เก็บรหัสเป็นค่า hash เท่านั้น และป้องกันได้ระดับหน้าจอ (ผู้ที่เปิดดูโค้ดยังเห็นข้อมูลได้) เปลี่ยนรหัสแล้วกด "บันทึกแดชบอร์ด" เพื่อได้ไฟล์ที่ใช้รหัสใหม่</p><button class="btn" data-setact="pw">🔑 เปลี่ยนรหัสผ่าน</button>`) +
      `<div class="set-actions"><button class="btn btn-outline" data-setact="logout">ออกจากโหมดผู้ดูแล</button></div></div>`;
  }
  box.innerHTML = h;
};
function wireSettings(){
  const area = document.getElementById('settingsArea');
  area.addEventListener('click', async e=>{
    const v = e.target.closest('[data-setv]');
    if(v){ SET_VIEW = v.dataset.setv; SET_DRAFT_DC = null; SET_DCQ = ''; renderAll(); window.scrollTo({ top:0 }); return; }
    const b = e.target.closest('[data-setact]'); if(!b) return;
    const a = b.dataset.setact;
    try{
      if(a==='savefile') document.getElementById('btnSaveDash').click();
      if(a==='clear') document.getElementById('btnClear').click();
      if(a==='pw') openPwModal();
      if(a==='logout') document.getElementById('btnUnlock').click();
      if(a==='rawxlsx'){
        const rows = filterRecords(getFilters());
        const head = ['เลขที่บิล','วันนัดรับ','วันสร้างบิล','ภาค','รหัส DC','DC','สินค้า','สถานะบิล','ยกเลิก','ผลเข้ารับ','ตรงวันนัด','สาเหตุยกเลิก','สาเหตุย่อยยกเลิก','สาเหตุรับไม่ได้','สาเหตุย่อยรับไม่ได้','ยืนยัน B01','คนขับ','ทะเบียน','เส้นทาง','ชิ้น','ค่าขนส่ง'];
        const aoa = [head, ...rows.map(r=>[r.billNo, r.confirmDateISO, r.createDateISO||'', r.zone, r.dcCode, r.dcName, r.productGroup, r.billStatus||'', r.cancelled?'ใช่':'', r.pickupResult||'', r.onTime?'ใช่':'', r.cancelMainRaw||'', r.cancelSubRaw||'', r.failMainRaw||'', r.failSubRaw||'', r.hasB01?'ใช่':'', r.driverName||'', r.vehiclePlate||'', r.route||'', r.qty, r.fee])];
        const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(aoa), 'ข้อมูล');
        saveBlob(`NIMEX-D2D-Data-${periodStamp()}.xlsx`, new Blob([XLSX.write(wb, { type:'array', bookType:'xlsx' })]));
      }
      if(a==='savetargets'){
        const t = {}; for(const k of ['kpi1','kpi2','kpi3']){ const n = +document.getElementById('tg-'+k).value; if(!(n>0 && n<=100)){ toast('เป้าหมายต้องอยู่ระหว่าง 0–100'); return; } t[k] = n; }
        await saveSettings({ targets:t }); toast('บันทึกเป้าหมายแล้ว');
      }
      if(a==='savedcs'){ await saveSettings({ excludedDCs:[...SET_DRAFT_DC] }); SET_DRAFT_DC = null; toast('บันทึกแล้ว'); }
      if(a==='cleardcs'){ SET_DRAFT_DC = new Set(); await saveSettings({ excludedDCs:[] }); SET_DRAFT_DC = null; toast('คำนวณทุก DC แล้ว'); }
      if(a==='savecols'){
        const cols = RANK_COLS.map(c=>c.k).filter(k=> document.querySelector(`[data-col="${k}"]`).checked);
        if(!cols.length){ toast('เลือกอย่างน้อย 1 คอลัมน์'); return; }
        await saveSettings({ rankCols:cols, rankDeltas:document.getElementById('colDeltas').checked }); toast('บันทึกคอลัมน์แล้ว');
      }
      if(a==='defcols'){ await saveSettings({ rankCols:SETTINGS_DEFAULT.rankCols.slice(), rankDeltas:true }); toast('คืนค่าเริ่มต้นแล้ว'); }
      if(a==='savelost'){ const v2 = document.querySelector('input[name="lostb"]:checked').value; await saveSettings({ lostBasis:v2 }); toast('บันทึกแล้ว'); }
    }catch(err){ console.error(err); toast('บันทึกไม่สำเร็จ: ' + (err && err.message || err)); }
  });
  area.addEventListener('change', e=>{ const c = e.target.dataset && e.target.dataset.dcx; if(c){ e.target.checked ? SET_DRAFT_DC.add(c) : SET_DRAFT_DC.delete(c); const s = area.querySelector('.tools .panel-note'); if(s) s.textContent = `เลือกแล้ว ${SET_DRAFT_DC.size} DC`; } });
  area.addEventListener('input', e=>{ if(e.target.id==='dcq'){ SET_DCQ = e.target.value; const pos = e.target.selectionStart; renderAll(); const n = document.getElementById('dcq'); if(n){ n.focus(); try{ n.setSelectionRange(pos,pos); }catch(x){} } } });
}

wireInsight();
wireDetail();
wireSettings();
/* ============================== SHARE & EXPORT (Stage 7) ==============================
   Every file uses the current filters + period. Images are pure SVG with the Prompt font embedded and the logo
   inlined as a data URL (no html2canvas: it breaks Thai vowels). English file names only. */
const XSECS = [
  ['kpi','KPI หลัก'], ['trend','แนวโน้ม 3 KPI'], ['zone','อันดับภาค / DC'], ['reason','สาเหตุไม่สำเร็จ'],
  ['cancel','บิลยกเลิก'], ['insight','ผลการวิเคราะห์'],
];
const xPicked = new Set(['kpi','trend','zone','cancel']);
const XL = { ink:'#0b1f3f', muted:'#55657f', line:'#dbe3f0', panel:'#ffffff', s:['#1d57b8','#b8860b','#6e93d6','#b8334a','#2f8f8f'], bad:'#b8334a', good:'#1d57b8' };
const xe = s => String(s===null||s===undefined?'':s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const GRADE = v => v===COLORS.green ? '#1d57b8' : v; // live palette -> export (light) palette
function xGradeColor(value, target){ if(value===null||value===undefined||isNaN(value)) return '#8a9ab5'; const d = target - value; return d<=0 ? '#123f8c' : d<=1 ? '#d4a72c' : d<=2 ? '#d9822b' : '#b8334a'; }
function xGradeEmoji(value, target){ if(value===null||value===undefined||isNaN(value)) return '⚪'; const d = target - value; return d<=0 ? '🔵' : d<=1 ? '🟡' : d<=2 ? '🟠' : '🔴'; }
const MD = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'];

/* ---------- data (same functions the pages use) ---------- */
function xScopeLabel(){
  const f = getFilters(), parts = [];
  parts.push(f.zone ? 'ภาค ' + f.zone : 'ทุกภาค');
  if(f.dc) parts.push(document.getElementById('fDC').selectedOptions[0]?.textContent || f.dc);
  parts.push(f.product === 'CC' ? 'CC · Cold Chain' : f.product === 'AB' ? 'AB · ทั่วไป' : 'สินค้าทั้งหมด');
  return parts.join(' · ');
}
function xPeriodLabels(){
  const f = getFilters(), pr = prevRangeFor(f);
  const kindTH = { day:'วัน', week:'สัปดาห์', month:'เดือน' }[PER.kind];
  const cur = perIsActive(f) ? `${kindTH} ${pLabelRange(PER.start, PER.end)}` : (f.start ? pLabelRange(f.start, f.end||f.start) : 'ทุกช่วงเวลา');
  return { cur, prev: pr ? pLabelRange(pr.start, pr.end) : '' };
}
function xKpis(){
  const f = getFilters(), K = computeKpiSet(f), o = K.overall, p = K.prev;
  const pct = (l,k)=>({ l, v:o[k], txt:fmtPct(o[k]), sub:`เป้า ${TARGETS[k]}% · AB ${fmtPct(K.ab[k])} · CC ${fmtPct(K.cc[k])}`, d: p ? o[k]-p[k] : null, pct:true, good: p ? (o[k]-p[k]) >= 0 : null, prevTxt: p ? fmtPct(p[k]) : '', bar: xGradeColor(o[k], TARGETS[k]), emoji: xGradeEmoji(o[k], TARGETS[k]), target:TARGETS[k] });
  const num = (l,k,cur)=>({ l, v:o[k], txt:(cur?'฿':'')+fmtNum(o[k]), sub:`AB ${(cur?'฿':'')+fmtNum(K.ab[k])} · CC ${(cur?'฿':'')+fmtNum(K.cc[k])}`, d: p ? o[k]-p[k] : null, pct:false, good:null, prevTxt: p ? (cur?'฿':'')+fmtNum(p[k]) : '', bar:'#d4af37' });
  return { list:[ pct('KPI1 เข้ารับได้ทั้งหมด','kpi1'), pct('KPI2 ตรงวันนัด','kpi2'), pct('KPI3 เข้ารับสำเร็จ','kpi3'),
                  num('จำนวนบิล','total'), num('จำนวนกล่อง','totalQty'), num('รายได้รวม','totalFee',true) ], hasPrev: !!p };
}
function xTrend(){ const f = getFilters(); return dropSundayRows(buildTrend(trendScope(f), currentPeriod), currentPeriod); }
function xZone(){
  const f = getFilters(), level = f.zone ? 'dc' : 'zone';
  const scope = { product:f.product, start:f.start, end:f.end, zone:f.zone, dc:'' };
  const rows = sortRankRows(buildRanking(filterRecords(level==='dc' ? scope : { ...scope, zone:'' }), level), rankSort);
  computeRankPrev(f, level);
  return { level, rows: rows.map(r=>({ ...r, p: __rankPrev ? __rankPrev.get(r.key) : null })) };
}
function xReason(){ const f = getFilters(); return { k:reasonKpiKey, rows:getFailReasonBreakdown(filterRecords(f), reasonKpiKey) }; }
function xCancel(){
  const f = getFilters(), pr = prevRangeFor(f);
  const cur = cxScope(f, f.start, f.end), prev = pr ? cxScope(f, pr.start, pr.end) : [];
  const A = cxAgg(cur), P = prev.length ? cxAgg(prev) : null;
  const m = new Map(); cur.forEach(r=>{ if(!cxStage(r)) return; const x = cxReason(r); const k = x.sub; const o = m.get(k) || { n:0, g:x.group, st:cxStage(r) }; o.n++; m.set(k, o); });
  const reasons = [...m.entries()].map(([k,o])=>({ l:k, n:o.n, g:o.g })).sort((a,b)=>b.n-a.n);
  return { A, P, reasons };
}
function xInsight(){ return { M:METRICS[INS.metric], D:DIMS[INS.dim], rows:insightRows(getFilters()) }; }

/* ---------- emoji text for LINE / email ---------- */
function xSummaryText(){
  const pl = xPeriodLabels(), L = ['📊 NIMEX D2D Operation Report', `🗓️ ${pl.cur}${pl.prev?'  (เทียบ '+pl.prev+')':''}`, `📍 ${xScopeLabel()}`];
  const sec = t => { L.push(''); L.push(t); };
  if(xPicked.has('kpi')){
    const K = xKpis(); sec('🎯 ผลสำคัญ');
    K.list.forEach((k,i)=>{
      const tr = k.d===null ? '' : k.pct ? (Math.abs(k.d)<0.05 ? ' ➖ เท่าเดิม' : k.d>0 ? ` ✅ ▲${Math.abs(k.d).toFixed(1)}pt` : ` ⚠️ ▼${Math.abs(k.d).toFixed(1)}pt`) : (k.d===0 ? '' : ` (${k.d>0?'▲':'▼'}${fmtNum(Math.abs(k.d))})`);
      L.push(`${k.pct ? k.emoji : ['📦','📦','💰'][i-3]} ${k.l}: ${k.txt}${k.pct?` (เป้า ${k.target}%)`:''}${tr}`);
    });
  }
  if(xPicked.has('zone')){
    const Z = xZone(), worst = Z.rows.filter(r=>r.kpi3!==null).slice().sort((a,b)=>a.kpi3-b.kpi3).slice(0,3);
    sec(`🗺️ ${Z.level==='zone'?'ภาค':'DC'}ที่ KPI3 ต่ำสุด`);
    worst.forEach((r,i)=> L.push(`${MD[i]} ${r.label} (${fmtNum(r.total)} บิล): ${fmtPct(r.kpi3)}${r.p&&r.p.kpi3!==null?` (${r.kpi3>=r.p.kpi3?'▲':'▼'}${Math.abs(r.kpi3-r.p.kpi3).toFixed(1)}pt)`:''}`));
  }
  if(xPicked.has('reason')){
    const R = xReason(); sec(`❗ สาเหตุไม่สำเร็จ (${KPI_NAMES[R.k].split(' · ')[0]})`);
    if(!R.rows.length) L.push('✅ ไม่มีบิลไม่สำเร็จ');
    R.rows.slice(0,3).forEach((r,i)=> L.push(`${MD[i]} ${r.label}: ${fmtNum(r.count)} บิล`));
  }
  if(xPicked.has('cancel')){
    const C = xCancel(), A = C.A, P = C.P; sec('🧾 บิลยกเลิก (ตามวันที่สร้างบิล)');
    L.push(`🚫 ยกเลิก ${fmtNum(A.cBills)} จาก ${fmtNum(A.bills)} บิล (${fmtPct(A.rateBills)})${P?(A.rateBills<=P.rateBills?' ✅ ':' ⚠️ ')+(A.rateBills>=P.rateBills?'▲':'▼')+Math.abs(A.rateBills-P.rateBills).toFixed(1)+'pt':''}`);
    L.push(`⏱️ ก่อนเข้ารับ ${fmtNum(A.before)} · หลังเข้ารับ ${fmtNum(A.after)} บิล`);
    L.push(`💸 รายได้ที่หายไป (ประมาณ) ฿${fmtNum(A.cFee)}`);
    C.reasons.slice(0,3).forEach((r,i)=> L.push(`${MD[i]} ${r.l}: ${fmtNum(r.n)} บิล`));
  }
  if(xPicked.has('insight')){
    const I = xInsight(); sec(`🔎 ผลการวิเคราะห์: ${I.D.t} แย่สุดตาม ${I.M.t}`);
    I.rows.slice(0,3).forEach((r,i)=> L.push(`${MD[i]} ${r.label}${INS.dim!=='zone'?` (${r.loc.zone}${INS.dim!=='dc'?' / '+r.loc.dc:''})`:''}: ${I.M.pct?fmtPct(r.v):fmtNum(r.v)}`));
  }
  return L.join('\n');
}

/* ---------- SVG building blocks (light palette, fixed sizes) ---------- */
const F = 'font-family="Prompt,sans-serif"';
function xNiceMax(v){ if(v<=0) return 1; const e = Math.pow(10, Math.floor(Math.log10(v))), n = v/e; return (n<=1?1:n<=2?2:n<=5?5:10)*e; }
function xLine({ labels, series, fmt, W, H, yMin=null, yMax=null }){
  const m = { l:58, r:14, t:14, b:34 }, iw = W-m.l-m.r, ih = H-m.t-m.b, all = series.flatMap(s=>s.vals).filter(Number.isFinite);
  const mn = yMin!==null ? yMin : Math.min(0, ...all), mx = yMax!==null ? yMax : xNiceMax(Math.max(...all, 0));
  const y = v => m.t + ih*(1-(Math.max(mn, Math.min(mx, v))-mn)/((mx-mn)||1)), x = i => m.l + (labels.length>1 ? iw*i/(labels.length-1) : iw/2);
  let s = `<svg viewBox="0 0 ${W} ${H}" ${F}>`;
  for(let k=0;k<=4;k++){ const v = mn+(mx-mn)*k/4; s += `<line x1="${m.l}" x2="${W-m.r}" y1="${y(v)}" y2="${y(v)}" stroke="${XL.line}"/><text x="${m.l-8}" y="${y(v)+5}" text-anchor="end" font-size="13" fill="${XL.muted}">${xe(fmt(v))}</text>`; }
  const step = Math.ceil(labels.length / (W<700?6:12));
  labels.forEach((l,i)=>{ if(i%step===0 || i===labels.length-1) s += `<text x="${x(i)}" y="${H-10}" text-anchor="middle" font-size="12.5" fill="${XL.muted}">${xe(l)}</text>`; });
  series.forEach(se=>{ let d='', on=false; se.vals.forEach((v,i)=>{ if(!Number.isFinite(v)){ on=false; return; } d += (on?'L':'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1); on=true; });
    s += `<path d="${d}" fill="none" stroke="${se.color}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>`;
    se.vals.forEach((v,i)=>{ if(Number.isFinite(v)) s += `<circle cx="${x(i)}" cy="${y(v)}" r="${i===se.vals.length-1?4.5:2.6}" fill="${se.color}" stroke="#fff" stroke-width="1.2"/>`; }); });
  return s + '</svg>';
}
function xHbars({ items, W, fmt, labelW=260, rh=34 }){
  const H = items.length*rh+6, mx = Math.max(1, ...items.map(i=>i.v)), ri = W-labelW-110;
  let s = `<svg viewBox="0 0 ${W} ${H}" ${F}>`;
  items.forEach((it,i)=>{ const yy = i*rh+(rh-20)/2, w = Math.max(3, it.v/mx*ri);
    s += `<text x="${labelW-10}" y="${yy+15}" text-anchor="end" font-size="15" fill="${XL.ink}">${xe(it.l.length>34?it.l.slice(0,33)+'…':it.l)}</text><rect x="${labelW}" y="${yy}" width="${w}" height="20" rx="5" fill="${it.c||XL.bad}"/><text x="${labelW+w+8}" y="${yy+15}" font-size="15" font-weight="600" fill="${XL.ink}">${xe(fmt(it.v))}</text>`; });
  return s + '</svg>';
}
function xTable(cols, data, W, h){
  const rh = h ? Math.max(26, Math.min(48, h/(data.length+1))) : 34, fs = rh>=40 ? 17 : rh>=32 ? 15 : 13.5, base = Math.round(rh/2 + fs*.36), tw = cols.reduce((s,c)=>s+c.w,0);
  let x = 0; const xs = cols.map(c=>{ const a = x; x += c.w/tw*W; return a; });
  let s = `<rect width="${W}" height="${rh}" rx="7" fill="#0a2a5e"/>`;
  cols.forEach((c,i)=>{ const cw = c.w/tw*W, tx = c.r ? xs[i]+cw-10 : c.c ? xs[i]+cw/2 : xs[i]+10; s += `<text x="${tx}" y="${base}" text-anchor="${c.r?'end':c.c?'middle':'start'}" font-size="${fs-.5}" font-weight="600" fill="#fff">${xe(c.t)}</text>`; });
  data.forEach((r,j)=>{ const y = (j+1)*rh; if(j%2) s += `<rect y="${y}" width="${W}" height="${rh}" fill="#f2f5fb"/>`;
    cols.forEach((c,i)=>{ const cw = c.w/tw*W, tx = c.r ? xs[i]+cw-10 : c.c ? xs[i]+cw/2 : xs[i]+10;
      if(c.rank){ const R = Math.min(12, rh/2-3); s += `<circle cx="${tx}" cy="${y+rh/2}" r="${R}" fill="${j<3?'#b8334a':'#6e93d6'}"/><text x="${tx}" y="${y+rh/2+4.5}" text-anchor="middle" font-size="13" font-weight="600" fill="#fff">${j+1}</text>`; return; }
      s += `<text x="${tx}" y="${y+base}" text-anchor="${c.r?'end':c.c?'middle':'start'}" font-size="${fs}" font-weight="${c.b?600:400}" fill="${c.col?c.col(r):XL.ink}">${xe(c.f(r))}</text>`; }); });
  return { s, h: h ? Math.max(h, (data.length+1)*rh) : (data.length+1)*rh };
}
function xEmbed(svg, x, y, w){ const m = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/), sc = w/+m[1]; return { s:`<g transform="translate(${x} ${y}) scale(${sc})">${svg.replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'')}</g>`, h:+m[2]*sc }; }
const XICON = {
  kpi:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>', trend:'<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
  zone:'<path d="M12 22s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>', reason:'<path d="M12 3L2 20h20zM12 10v4M12 17v.5"/>',
  cancel:'<path d="M6 3h9l4 4v14H6z"/><path d="M9.5 11.5l5 5M14.5 11.5l-5 5"/>', insight:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  bill:'<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2zM9 8h6M9 12h6"/>', box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>', money:'<circle cx="12" cy="12" r="9"/><path d="M15 8.5H10.5a2 2 0 000 4h3a2 2 0 010 4H9M12 6v12"/>', truck:'<path d="M2 6h12v10H2zM14 9h4l4 4v3h-8z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
};
const xI = (n,x,y,s,col,sw=2)=>`<g transform="translate(${x} ${y}) scale(${s/24})" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${XICON[n]}</g>`;

/* ---------- section pieces: {t, s, h} drawn at width w (optionally stretched to height h) ---------- */
function xPiece(k, w, o={}){
  const h = o.h, n = o.n || 5;
  if(k==='kpi'){
    const K = xKpis(), gap = 12, cols = 3, cw = (w-(cols-1)*gap)/cols, natCh = 132, ch = h ? Math.max(natCh, (h-gap)/2) : natCh, ics = ['truck','truck','truck','bill','box','money'];
    let s = '';
    K.list.forEach((t,i)=>{ const x = i%cols*(cw+gap), y = Math.floor(i/cols)*(ch+gap);
      const arrow = t.d===null ? '' : t.pct ? (Math.abs(t.d)<0.05 ? '▬ 0pt' : `${t.d>0?'▲':'▼'} ${Math.abs(t.d).toFixed(1)}pt`) : (Math.abs(t.d)<0.5 ? '▬' : `${t.d>0?'▲':'▼'} ${fmtNum(Math.abs(t.d))}`);
      const acol = t.d===null ? '#cfdcf2' : !t.pct ? '#cfdcf2' : Math.abs(t.d)<0.05 ? '#cfdcf2' : t.d>0 ? '#a9c8ff' : '#ffb3bf';
      s += `<g transform="translate(${x} ${y})"><rect width="${cw}" height="${ch}" rx="14" fill="#0a2a5e"/><path d="M0 ${ch-5}h${cw}v0c0 3-2 5-5 5H5c-3 0-5-2-5-5z" fill="${t.bar}"/><circle cx="26" cy="26" r="15" fill="#d4af37"/>${xI(ics[i],16,16,20,'#0a2a5e',2.2)}
        <text x="${cw/2}" y="${ch*.24}" text-anchor="middle" font-size="16" fill="#e6d79c">${xe(t.l)}</text>
        <text x="${cw/2}" y="${ch*.53}" text-anchor="middle" font-size="36" font-weight="600" fill="#fff">${xe(t.txt)}</text>
        <text x="${cw/2}" y="${ch*.53+26}" text-anchor="middle" font-size="13.5" fill="#cfdcf2">${xe(t.sub)}</text>
        ${arrow?`<text x="${cw/2}" y="${ch-16}" text-anchor="middle" font-size="14" fill="${acol}">${xe(arrow)}${t.prevTxt?` · ก่อนหน้า ${xe(t.prevTxt)}`:''}</text>`:''}</g>`; });
    return { t:'KPI หลัก', s, h: 2*ch+gap };
  }
  if(k==='trend'){
    const rows = xTrend(), H = h ? Math.round(h) : Math.round(Math.max(220, w*.28));
    const e = xEmbed(xLine({ labels:rows.map(r=>r.label), series:[{ name:'KPI1', color:XL.s[0], vals:rows.map(r=>r.kpi1) }, { name:'KPI2', color:XL.s[1], vals:rows.map(r=>r.kpi2) }, { name:'KPI3', color:XL.s[2], vals:rows.map(r=>r.kpi3) }], fmt:v=>v.toFixed(0)+'%', W:w, H, yMin:80, yMax:100 }), 0, 0, w);
    return { t:'แนวโน้ม 3 KPI (น้ำเงิน = KPI1 · ทอง = KPI2 · ฟ้า = KPI3)', s:e.s, h:e.h };
  }
  if(k==='zone'){
    const Z = xZone(), R = Z.rows.slice(0, o.n ? Math.max(n, 12) : 12);
    const wide = w >= 900;
    const d3 = r => r.p && r.p.kpi3!==null && r.kpi3!==null ? (Math.abs(r.kpi3-r.p.kpi3)<0.05 ? '▬' : `${r.kpi3>r.p.kpi3?'▲':'▼'} ${Math.abs(r.kpi3-r.p.kpi3).toFixed(1)}`) : '–';
    const cols = [{ t:'#', w:.7, c:1, rank:1, f:()=>'' }, { t:Z.level==='zone'?'ภาค':'DC', w:2.4, b:1, f:r=>r.label }, { t:'บิล', w:1.2, r:1, f:r=>fmtNum(r.total) }];
    if(wide) cols.push({ t:'รายได้ (฿)', w:1.7, r:1, f:r=>fmtNum(r.totalFee) });
    cols.push({ t:'KPI1', w:1.35, r:1, f:r=>fmtPct(r.kpi1), col:r=>xGradeColor(r.kpi1,TARGETS.kpi1) }, { t:'KPI2', w:1.35, r:1, f:r=>fmtPct(r.kpi2), col:r=>xGradeColor(r.kpi2,TARGETS.kpi2) },
      { t:'KPI3', w:1.35, r:1, b:1, f:r=>fmtPct(r.kpi3), col:r=>xGradeColor(r.kpi3,TARGETS.kpi3) }, { t:'±KPI3', w:1.25, r:1, f:d3, col:r=> !r.p||r.p.kpi3===null||r.kpi3===null||Math.abs(r.kpi3-r.p.kpi3)<0.05 ? XL.muted : r.kpi3>r.p.kpi3 ? XL.good : XL.bad });
    const t = xTable(cols, R, w, h);
    return { t:`อันดับ${Z.level==='zone'?'ภาค':'DC ในภาค '+getFilters().zone} · เรียงตาม${rankSortLabel()}`, s:t.s, h:t.h };
  }
  if(k==='reason'){
    const R = xReason(), items = R.rows.slice(0, n>5 ? 10 : 6).map(r=>({ l:r.label, v:r.count }));
    if(!items.length) return { t:'สาเหตุไม่สำเร็จ', s:`<text x="${w/2}" y="40" text-anchor="middle" font-size="18" fill="${XL.muted}">ไม่มีบิลไม่สำเร็จในช่วงนี้</text>`, h: h || 60 };
    const rh = h ? Math.min(56, (h-6)/items.length) : 34, e = xEmbed(xHbars({ items, W:w, fmt:v=>fmtNum(v)+' บิล', labelW:Math.min(330, w*.42), rh }), 0, 0, w);
    return { t:`สาเหตุไม่สำเร็จ — ${KPI_NAMES[R.k]}`, s:e.s, h: h || e.h };
  }
  if(k==='cancel'){
    const C = xCancel(), A = C.A, P = C.P, gap = 12, cw = (w-3*gap)/4, ch = 96;
    const tiles = [['บิลยกเลิก', fmtNum(A.cBills), `${fmtPct(A.rateBills)} ของบิล`+(P?` · ${A.rateBills>=P.rateBills?'▲':'▼'}${Math.abs(A.rateBills-P.rateBills).toFixed(1)}pt`:'')], ['ก่อนเข้ารับ', fmtNum(A.before), 'ยังไม่ยืนยัน B01'], ['หลังเข้ารับ', fmtNum(A.after), 'ยืนยัน B01 แล้ว'], ['รายได้ที่หายไป', '฿'+fmtNum(A.cFee), 'ประมาณการ']];
    let s = ''; tiles.forEach(([l,v,sub],i)=>{ s += `<g transform="translate(${i*(cw+gap)} 0)"><rect width="${cw}" height="${ch}" rx="12" fill="#f2f5fb" stroke="#dbe3f0"/><text x="${cw/2}" y="28" text-anchor="middle" font-size="15" fill="${XL.muted}">${xe(l)}</text><text x="${cw/2}" y="62" text-anchor="middle" font-size="27" font-weight="600" fill="${i===3||i===0?XL.bad:XL.ink}">${xe(v)}</text><text x="${cw/2}" y="84" text-anchor="middle" font-size="13" fill="${XL.muted}">${xe(sub)}</text></g>`; });
    const items = C.reasons.slice(0, n>5 ? 8 : 5).map(r=>({ l:r.l, v:r.n, c:(r.g==='nim'||r.g==='b031staff') ? XL.bad : XL.s[0] }));
    const rest = h ? Math.max(120, h - ch - 18) : null, rh = rest ? Math.min(52, (rest-6)/Math.max(1,items.length)) : 32;
    const e = items.length ? xEmbed(xHbars({ items, W:w, fmt:v=>fmtNum(v)+' บิล', labelW:Math.min(330, w*.42), rh }), 0, ch+18, w) : { s:'', h:0 };
    return { t:'บิลยกเลิก (ตามวันที่สร้างบิล) · แดง = Nim Express / พนักงาน', s:s+e.s, h: h || (ch+18+e.h) };
  }
  if(k==='insight'){
    const I = xInsight(), R = I.rows.slice(0, n);
    const cols = [{ t:'#', w:.7, c:1, rank:1, f:()=>'' }, { t:I.D.t, w:3.2, b:1, f:r=>r.label }];
    if(INS.dim!=='zone') cols.push({ t:'ภาค', w:1.6, f:r=>r.loc.zone });
    if(INS.dim!=='zone' && INS.dim!=='dc') cols.push({ t:'DC', w:2.2, f:r=>r.loc.dc });
    cols.push({ t:'บิล', w:1, r:1, f:r=>fmtNum(r.n) }, { t:I.M.t, w:2.2, r:1, b:1, f:r=>I.M.pct?fmtPct(r.v):fmtNum(r.v), col:()=>XL.bad });
    const t = xTable(cols, R, w, h);
    return { t:`ผลการวิเคราะห์: ${I.D.t} แย่สุดตาม ${I.M.t}`, s:t.s, h:t.h };
  }
}
const XCARD = { top:54, pad:20 };
function xCard(p, k, x, y, w, h){
  return `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="16" fill="#fff" stroke="#dbe3f0"/><rect x="${w*.15}" y="-1.2" width="${w*.7}" height="2.4" fill="#d4af37"/><circle cx="${w/2}" cy="0" r="19" fill="#0a2a5e" stroke="#d4af37" stroke-width="2"/>${xI(k, w/2-11, -11, 22, '#f0d57a')}<text x="${w/2}" y="${XCARD.top-12}" text-anchor="middle" font-size="18" font-weight="600" fill="#0a2a5e">${xe(p.t)}</text><g transform="translate(${XCARD.pad} ${XCARD.top})">${p.s}</g></g>`;
}
let __xLogo = null;
async function xLogo(){
  if(__xLogo) return __xLogo;
  const src = document.querySelector('.rail .lg img').getAttribute('src');
  if(src.startsWith('data:')) return (__xLogo = src);
  const b = await (await fetch(src)).blob();
  return (__xLogo = await new Promise(r=>{ const fr = new FileReader(); fr.onload = ()=> r(fr.result); fr.readAsDataURL(b); }));
}
function xHead(W, H0, id, LOGO){
  const pw = H0>120 ? 250 : 156, ph = H0-46, ly = (H0-5-ph)/2, m = 24, pl = xPeriodLabels(), L = [pl.cur, pl.prev ? 'เทียบ ' + pl.prev : '', xScopeLabel()].filter(Boolean), big = H0>120;
  const dots = [.3,.42,.58,.7].map((f,i)=>`<circle cx="${W*f}" cy="${H0-20-(i%2)*14}" r="4" fill="#d4af37"/>`).join('');
  return `<defs><linearGradient id="${id}" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#071f4a"/><stop offset=".5" stop-color="#143f8c"/><stop offset="1" stop-color="#071f4a"/></linearGradient></defs><rect width="${W}" height="${H0}" fill="url(#${id})"/>
  <path d="M${W*.24} ${H0-20}C${W*.3} ${H0-46} ${W*.36} ${H0-6} ${W*.42} ${H0-34}S${W*.54} ${H0-8} ${W*.58} ${H0-20}S${W*.68} ${H0-44} ${W*.76} ${H0-20}" fill="none" stroke="#6e93d6" stroke-width="2" stroke-dasharray="6 7" opacity=".55"/>${big?dots:''}<rect y="${H0-5}" width="${W}" height="5" fill="#d4af37"/>
  <rect x="${m}" y="${ly}" width="${pw}" height="${ph}" rx="14" fill="#fff"/><image x="${m+10}" y="${ly+8}" width="${pw-20}" height="${ph-16}" href="${LOGO}" preserveAspectRatio="xMidYMid meet"/>
  <text x="${W/2}" y="${big?74:46}" text-anchor="middle" font-size="${big?(W<1300?34:40):30}" font-weight="600" fill="#fff">NIMEX D2D Operation Report</text><text x="${W/2}" y="${big?108:74}" text-anchor="middle" font-size="${big?21:16}" fill="#e6d79c">สรุปผลการเข้ารับสินค้า D2D</text>
  <rect x="${W-m-pw}" y="${ly}" width="${pw}" height="${ph}" rx="14" fill="rgba(255,255,255,.1)" stroke="#d4af37"/>${L.map((t,i)=>`<text x="${W-m-pw/2}" y="${ly+ph/2+(i-(L.length-1)/2)*(big?28:19)+(big?7:5)}" text-anchor="middle" font-size="${i?(big?15:12):(big?19:14)}" font-weight="${i?400:600}" fill="#fff">${xe(t)}</text>`).join('')}`;
}
const xFoot = (W, H, h)=>`<rect y="${H-h}" width="${W}" height="${h}" fill="#0a2a5e"/><rect y="${H-h}" width="${W}" height="3" fill="#d4af37"/><text x="${W/2}" y="${H-h/2+6}" text-anchor="middle" font-size="14" fill="#dfe8f7">วันทำการ จันทร์–เสาร์ (อาทิตย์นับรวมแต่ไม่แสดง) · KPI ตัดสาเหตุลูกค้า · บิลยกเลิกนับตามวันที่สร้างบิล</text>`;
function xWrap(W, H, inner){ return { svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><style>${document.getElementById('fontcss').textContent}text{font-family:Prompt,sans-serif}</style><rect width="${W}" height="${H}" fill="#eef2f9"/>${inner}</svg>`, W, H }; }
/* long PNG: sections stacked at natural height */
function xCompose(keys, LOGO){
  const W = 1240, m = 26, head = 176, foot = 46, ch = XCARD.top + XCARD.pad, inner = W-2*m-2*XCARD.pad;
  let y = head + m + 10, b = '';
  keys.forEach(k=>{ const p = xPiece(k, inner); b += xCard(p, k, m, y, W-2*m, p.h + ch); y += p.h + ch + m + 10; });
  const H = y + foot; return xWrap(W, H, xHead(W, head, 'cg', LOGO) + b + xFoot(W, H, foot));
}
/* A4 portrait 2480×3508, always one page: full-width blocks for kpi/trend, the rest in two equal-height columns,
   content stretched so margins stay equal */
function xInfoMeasure(keys, W){
  const m = 28, g = 28, head = 176, foot = 46, ch = XCARD.top + XCARD.pad, inner = W-2*m, hw = (inner-g)/2;
  const fullK = keys.filter(k=> k==='kpi' || k==='trend'), halfK = keys.filter(k=> !fullK.includes(k));
  if(halfK.length === 1){ fullK.push(halfK[0]); halfK.length = 0; }
  const Fb = fullK.map(k=>({ k, nh:xPiece(k, inner-2*XCARD.pad).h })), C = [[],[]], cH = [0,0];
  halfK.forEach(k=>{ const nh = xPiece(k, hw-2*XCARD.pad).h, c = cH[0] <= cH[1] ? 0 : 1; C[c].push({ k, nh }); cH[c] += nh + ch + (C[c].length>1 ? g : 0); });
  const colH = Math.max(...cH), blocks = Fb.length + (colH ? 1 : 0), used = head + foot + g*(blocks+1) + Fb.reduce((s,f)=>s+f.nh+ch,0) + colH;
  return { W, m, g, head, foot, ch, inner, hw, Fb, C, cH, colH, used };
}
function xInfographic(keys, LOGO){
  const ratio = 3508/2480; let lo = 1080, hi = 2200, best = xInfoMeasure(keys, lo);
  if(best.used > lo*ratio){ for(let i=0;i<8;i++){ const mid = (lo+hi)/2, T = xInfoMeasure(keys, mid); if(T.used <= mid*ratio){ hi = mid; best = T; } else lo = mid; } if(best.used > best.W*ratio) best = xInfoMeasure(keys, hi); }
  const T = best, { W, m, g, head, foot, ch, inner, hw, Fb, C, colH } = T, H = Math.round(W*ratio), spare = Math.max(0, H - T.used), base = Fb.reduce((s,f)=>s+f.nh,0) + colH || 1, fct = 1 + spare/base;
  let y = head + g, b = '';
  Fb.forEach(x=>{ const h = x.nh*fct, p = xPiece(x.k, inner-2*XCARD.pad, { h }); b += xCard(p, x.k, m, y, inner, h+ch); y += h + ch + g; });
  const colFinal = colH*fct;
  C.forEach((c,ci)=>{ if(!c.length) return; const gaps = (c.length-1)*g, chr = c.length*ch, sum = c.reduce((s,x)=>s+x.nh,0), sc = (colFinal-gaps-chr)/sum; let yy = y;
    c.forEach(x=>{ const h = x.nh*sc, p = xPiece(x.k, hw-2*XCARD.pad, { h }); b += xCard(p, x.k, m+ci*(hw+g), yy, hw, h+ch); yy += h + ch + g; }); });
  return xWrap(W, H, xHead(W, head, 'hg', LOGO) + b + xFoot(W, H, foot));
}
/* one full-bleed 16:9 slide per section */
function xSlide(k, LOGO){
  const W = 1600, H = 900, head = 104, foot = 40, m = 28, cw = W-2*m, top = head + m, cardH = H-head-foot-2*m, h = cardH - XCARD.top - XCARD.pad;
  const p = xPiece(k, cw-2*XCARD.pad, { h, n:10 }); return xWrap(W, H, xHead(W, head, 'sg', LOGO) + xCard(p, k, m, top, cw, cardH) + xFoot(W, H, foot));
}
function xToPng(c, scale, exact){
  return new Promise((res, rej)=>{
    if(c.W*c.H*scale*scale > 16e6) scale = Math.sqrt(16e6/(c.W*c.H));
    const u = URL.createObjectURL(new Blob([c.svg], { type:'image/svg+xml' })), im = new Image();
    im.onload = ()=> setTimeout(()=>{ const cv = document.createElement('canvas'); cv.width = exact ? exact.w : Math.round(c.W*scale); cv.height = exact ? exact.h : Math.round(c.H*scale);
      const x = cv.getContext('2d'); x.drawImage(im, 0, 0, cv.width, cv.height); URL.revokeObjectURL(u); cv.toBlob(b=> b ? res(b) : rej(new Error('png')), 'image/png'); }, 150);
    im.onerror = rej; im.src = u;
  });
}
const xBlob64 = b => new Promise(r=>{ const f = new FileReader(); f.onload = ()=> r(f.result); f.readAsDataURL(b); });
/* Excel: one sheet per section */
function xSheets(){
  const out = [], pl = xPeriodLabels();
  if(xPicked.has('kpi')){ const K = xKpis(); out.push(['KPI', [['ช่วง', pl.cur], ['เทียบ', pl.prev], ['ขอบเขต', xScopeLabel()], [], ['ตัวชี้วัด','ค่า','ช่วงก่อน','ผลต่าง','รายละเอียด'], ...K.list.map(k=>[k.l, k.v===null?'':+(+k.v).toFixed(2), k.prevTxt, k.d===null?'':+k.d.toFixed(2), k.sub])]]); }
  if(xPicked.has('trend')){ const rows = xTrend(); out.push(['แนวโน้ม', [['ช่วงเวลา','บิล','KPI1 (%)','KPI2 (%)','KPI3 (%)','KPI1 ไม่สำเร็จ','KPI2 ไม่สำเร็จ','KPI3 ไม่สำเร็จ'], ...rows.map(r=>[r.label, r.total, r.kpi1===null?'':+r.kpi1.toFixed(2), r.kpi2===null?'':+r.kpi2.toFixed(2), r.kpi3===null?'':+r.kpi3.toFixed(2), r.kpi1FailCount, r.kpi2FailCount, r.kpi3FailCount])]]); }
  if(xPicked.has('zone')){ const Z = xZone(); out.push([Z.level==='zone'?'ภาค':'DC', [[Z.level==='zone'?'ภาค':'DC','บิล','กล่อง','รายได้','KPI1 (%)','KPI2 (%)','KPI3 (%)','KPI1 ช่วงก่อน','KPI2 ช่วงก่อน','KPI3 ช่วงก่อน','ยกเลิกโดยบริษัท','ไม่สำเร็จ: พนักงาน','รอผล'],
    ...Z.rows.map(r=>[r.label, r.total, r.totalQty, r.totalFee, ...['kpi1','kpi2','kpi3'].map(k=> r[k]===null?'':+r[k].toFixed(2)), ...['kpi1','kpi2','kpi3'].map(k=> r.p && r.p[k]!==null ? +r.p[k].toFixed(2) : ''), r.companyCancelled, r.failStaff, r.pendingCount])]]); }
  if(xPicked.has('reason')){ const R = xReason(); out.push(['สาเหตุไม่สำเร็จ', [['สาเหตุ ('+KPI_NAMES[R.k]+')','บิล'], ...R.rows.map(r=>[r.label, r.count])]]); }
  if(xPicked.has('cancel')){ const C = xCancel(), A = C.A; out.push(['บิลยกเลิก', [['ตัวชี้วัด','ค่า'], ['บิลทั้งหมด (สร้างในช่วง)', A.bills], ['บิลยกเลิก', A.cBills], ['% ยกเลิก', +(+A.rateBills||0).toFixed(2)], ['ก่อนเข้ารับ', A.before], ['หลังเข้ารับ', A.after], ['รายได้ที่หายไป (ประมาณ)', Math.round(A.cFee)], [], ['สาเหตุย่อย','บิล','กลุ่ม'], ...C.reasons.map(r=>[r.l, r.n, r.g])]]); }
  if(xPicked.has('insight')){ const I = xInsight(); out.push(['ผลการวิเคราะห์', [['อันดับ', I.D.t, 'ภาค', 'DC', 'บิล', I.M.t], ...I.rows.map((r,i)=>[i+1, r.label, r.loc.zone, INS.dim==='zone'?'':r.loc.dc, r.n, I.M.pct ? +r.v.toFixed(2) : r.v])]]); }
  return out;
}
function xStamp(){ const f = getFilters(); let s = 'NIMEX-D2D-' + periodStamp(); if(f.zone) s += '-Zone' + (ZONE_ORDER.indexOf(f.zone)+1); if(f.dc) s += '-DC' + f.dc; if(f.product) s += '-' + f.product; return s; }

/* ---------- the share sheet ---------- */
function openExport(){
  document.getElementById('xChecks').innerHTML = XSECS.map(([k,t])=>`<label><input type="checkbox" data-xsec="${k}"${xPicked.has(k)?' checked':''}> ${t}</label>`).join('');
  document.getElementById('xText').value = xSummaryText();
  document.getElementById('xMsg').textContent = `${xPeriodLabels().cur} · ${xScopeLabel()}`;
  document.getElementById('xModal').classList.add('show');
}
const xSay = m => { document.getElementById('xMsg').textContent = m; };
async function doExport(a){
  const keys = XSECS.map(s=>s[0]).filter(k=> xPicked.has(k));
  if(a==='copy'){ const t = document.getElementById('xText'); try{ await navigator.clipboard.writeText(t.value); xSay('คัดลอกแล้ว นำไปวางใน LINE หรืออีเมลได้เลย'); }catch(e){ t.select(); xSay('เลือกข้อความแล้ว กดคัดลอกจากเมนูของเครื่อง'); } return; }
  if(!keys.length){ xSay('เลือกอย่างน้อย 1 ส่วนก่อน'); return; }
  const btns = document.querySelectorAll('#xModal [data-x]'); btns.forEach(b=> b.disabled = true); xSay('กำลังสร้างไฟล์…');
  try{
    await document.fonts.ready; const LOGO = await xLogo(), st = xStamp();
    if(a==='xlsx'){ const wb = XLSX.utils.book_new(); xSheets().forEach(([n,d])=>{ const ws = XLSX.utils.aoa_to_sheet(d); ws['!cols'] = (d.find(r=>r.length>2)||d[0]).map((_,i)=>({ wch: i ? 14 : 30 })); XLSX.utils.book_append_sheet(wb, ws, n.slice(0,31)); }); saveBlob(st + '.xlsx', new Blob([XLSX.write(wb, { type:'array', bookType:'xlsx' })])); }
    if(a==='png'){ saveBlob(st + '.png', await xToPng(xCompose(keys, LOGO), 2)); }
    if(a==='info'){ const c = xInfographic(keys, LOGO); saveBlob(st + '-Infographic.png', await xToPng(c, 2480/c.W, { w:2480, h:3508 })); }
    if(a==='pptx'){
      if(typeof PptxGenJS === 'undefined') throw new Error('lib');
      const p = new PptxGenJS(); p.layout = 'LAYOUT_WIDE'; const pl = xPeriodLabels();
      const t = p.addSlide(); t.background = { color:'0A2A5E' };
      t.addShape(p.ShapeType.roundRect, { x:5.17, y:.9, w:3, h:2.1, fill:{ color:'FFFFFF' }, line:{ color:'FFFFFF' }, rectRadius:.12 });
      t.addImage({ data:LOGO, x:5.37, y:1.05, w:2.6, h:1.8, sizing:{ type:'contain', w:2.6, h:1.8 } });
      t.addText('NIMEX D2D Operation Report', { x:0, y:3.4, w:13.33, h:.9, align:'center', color:'FFFFFF', fontFace:'Tahoma', fontSize:36, bold:true });
      t.addShape(p.ShapeType.rect, { x:4.67, y:4.4, w:4, h:.04, fill:{ color:'D4AF37' }, line:{ color:'D4AF37' } });
      t.addText(`สรุปผลการเข้ารับสินค้า D2D · ${pl.cur}`, { x:0, y:4.6, w:13.33, h:.7, align:'center', color:'FFFFFF', fontFace:'Tahoma', fontSize:24 });
      t.addText(xScopeLabel() + (pl.prev ? ' · เทียบ ' + pl.prev : ''), { x:0, y:5.3, w:13.33, h:.6, align:'center', color:'E6D79C', fontFace:'Tahoma', fontSize:20 });
      for(const k of keys){ const u = await xBlob64(await xToPng(xSlide(k, LOGO), 1.5)); p.addSlide().addImage({ data:u, x:0, y:0, w:'100%', h:'100%' }); }
      saveBlob(st + '.pptx', new Blob([await p.write({ outputType:'arraybuffer' })]));
    }
    xSay('ดาวน์โหลดไฟล์แล้ว');
  }catch(e){ console.error(e); xSay(e && e.message==='lib' ? 'โหลดตัวช่วยสร้าง PowerPoint ไม่สำเร็จ ลองเปิดหน้าใหม่' : 'สร้างไฟล์ไม่สำเร็จ ลองเลือกส่วนน้อยลง'); }
  btns.forEach(b=> b.disabled = false);
}
function wireExport(){
  const m = document.getElementById('xModal');
  m.addEventListener('change', e=>{ const k = e.target.dataset && e.target.dataset.xsec; if(!k) return; e.target.checked ? xPicked.add(k) : xPicked.delete(k); document.getElementById('xText').value = xSummaryText(); });
  m.addEventListener('click', e=>{ if(e.target === m || e.target.closest('[data-xclose]')){ m.classList.remove('show'); return; } const b = e.target.closest('[data-x]'); if(b) doExport(b.dataset.x); });
  document.getElementById('btnShare').addEventListener('click', openExport);
  document.getElementById('btnExport').addEventListener('click', openExport);
}

wireExport();
/* ============================== ONLINE DATA LAYER (Stage 8) ==============================
   Rows travel between the page and the Google Sheet as arrays of text in ROW_COLS order.
   dcName / zone are not stored: they come from ZONE_MAP when the page loads, exactly like an upload. */
const ROW_COLS = ['billNo','dcCode','productGroup','confirmDateISO','cancelled','cancelReasonGroup','cancelReasonDetail','pickupResult',
  'failReasonGroup','failReasonDetail','onTime','qty','fee','driverName','vehiclePlate','route','hasB01','createDateISO','billStatus',
  'cancelMainRaw','cancelSubRaw','failMainRaw','failSubRaw'];
const ROW_BOOL = new Set(['cancelled','onTime','hasB01']), ROW_NUM = new Set(['qty','fee']);
const ROW_NULLABLE = new Set(['cancelReasonGroup','cancelReasonDetail','pickupResult','failReasonGroup','failReasonDetail','driverName','vehiclePlate','route','createDateISO']);
function encodeRow(r){
  return ROW_COLS.map(k=>{ const v = r[k]; if(ROW_BOOL.has(k)) return v ? '1' : ''; if(v===null || v===undefined) return ''; return String(v); });
}
function decodeRow(a, idx){
  const r = {};
  ROW_COLS.forEach(k=>{ const v = a[idx[k]]; const s = v===null || v===undefined ? '' : String(v);
    r[k] = ROW_BOOL.has(k) ? s==='1' || s==='true' : ROW_NUM.has(k) ? (parseFloat(s) || 0) : (s==='' && ROW_NULLABLE.has(k) ? null : s); });
  const z = ZONE_BY_CODE[r.dcCode];
  r.dcName = z ? z.name : r.dcCode; r.zone = z ? z.zone : '';
  return r;
}
function decodeBootRows(B){
  const cols = B.cols || ROW_COLS, idx = {}; cols.forEach((c,i)=> idx[c] = i);
  return (B.rows || []).map(a=> decodeRow(a, idx)).filter(r=> r.billNo && r.confirmDateISO && r.zone);
}
// a bill belongs to its creation day; a re-upload replaces whole creation days
const rowDayKey = r => r.createDateISO || ('K:' + r.confirmDateISO);


/* ============================== INIT ============================== */
function checkLibsLoaded(){
  const missing = [];
  if(typeof XLSX === 'undefined') missing.push('XLSX (อ่านไฟล์ Excel)');
  if(typeof Chart === 'undefined') missing.push('Chart.js (วาดกราฟ)');
  if(missing.length){
    const banner = document.createElement('div');
    banner.style.cssText = 'background:#FDECEC;border:1.5px solid #F3B4B4;color:#8A1F2B;padding:12px 20px;font-size:13px;font-weight:600;text-align:center;';
    banner.textContent = `⚠ โหลดไลบรารีไม่สำเร็จ: ${missing.join(', ')} — กรุณารีเฟรชหน้านี้ใหม่ (หรือเช็คการเชื่อมต่ออินเทอร์เน็ต) ฟังก์ชันที่เกี่ยวข้องจะใช้งานไม่ได้จนกว่าจะโหลดสำเร็จ`;
    document.body.insertBefore(banner, document.body.firstChild);
    console.error('[D2D Dashboard] Missing libraries:', missing);
    return false;
  }
  return true;
}

async function init(){
  const libsOk = checkLibsLoaded();
  if(window.__BOOT){ // online: data comes from the Google Sheet (boot.js)
    RECORDS = decodeBootRows(window.__BOOT);
    META = Object.assign({ lastUpdated:null, uploadedFiles:[], reportEndDateISO:null }, window.__BOOT.meta || {});
    REPORT_END_DATE = META.reportEndDateISO || null;
    dataQuality = { excluded:0, reasons:{} };
    applyPermissionUI(); loadSettings(); rebuildFilterOptions(); renderAll();
    if(isUnlocked && !RECORDS.length){ const m = document.getElementById('emptyStateAdminMsg'); if(m) m.textContent = 'ตั้งค่าครั้งแรก: เลือกไฟล์ seed.json หรือรายงาน Excel เพื่อนำเข้าข้อมูล ระบบจะแสดงผลสรุปให้ตรวจก่อนบันทึก'; }
    maybePromptAdmin();
    return;
  }
  await loadFromStorage();
  // A saved copy of the dashboard carries its data inside the file. Start from it when nothing is
  // stored yet, or when the embedded snapshot is newer than what is stored.
  const seed = await readSeed();
  if(seed){
    const seedTs = (seed.meta && seed.meta.lastUpdated) || '';
    if(!RECORDS.length || seedTs > (META.lastUpdated || '')){
      RECORDS = seed.records;
      META = Object.assign({ lastUpdated:null, uploadedFiles:[], reportEndDateISO:null }, seed.meta || {});
      REPORT_END_DATE = META.reportEndDateISO || null;
    }
  }
  dataQuality = { excluded:0, reasons:{} }; // recomputed only on new upload; kept 0 across reloads
  applyPermissionUI();
  loadSettings();
  rebuildFilterOptions();
  renderAll();
  if(!libsOk){ toast('บางไลบรารีโหลดไม่สำเร็จ ดูแถบแจ้งเตือนด้านบน'); }
}
init();

/* NIMEX shell: cover, side rail, gold product segment, theme toggle. Reuses the app's own state and renderAll(). */
(function(){
  function hideCover(){ var c=document.getElementById('cover'); if(c){ c.style.display='none'; } document.body.classList.remove('cover-on'); if(typeof maybePromptAdmin==='function') maybePromptAdmin(); }
  if(document.getElementById('cover').style.display !== 'none') document.body.classList.add('cover-on');
  document.getElementById('btnEnter').addEventListener('click', hideCover);
  document.querySelector('#cover .fg').addEventListener('click', hideCover);
  document.addEventListener('keydown', function(e){ if(e.key==='Enter' && document.body.classList.contains('cover-on')) hideCover(); });

  document.querySelector('.rail').addEventListener('click', function(e){
    var b=e.target.closest('.tab-btn'); if(!b) return;
    currentTab=b.dataset.tab; renderAll(); window.scrollTo({top:0});
  });
  document.getElementById('tabBar').addEventListener('click', function(e){ if(e.target.closest('.tab-btn')) window.scrollTo({top:0}); });

  var fP=document.getElementById('fProduct'), grp=document.getElementById('seg-group');
  function syncGroup(){ grp.querySelectorAll('button').forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.v===fP.value)); }); }
  grp.addEventListener('click', function(e){
    var b=e.target.closest('button'); if(!b) return;
    fP.value=b.dataset.v; syncGroup(); fP.dispatchEvent(new Event('change'));
  });
  document.getElementById('btnReset').addEventListener('click', function(){ setTimeout(syncGroup,0); });
  syncGroup();

  document.getElementById('btnTheme').addEventListener('click', function(){
    var next=isDarkTheme()?'light':'dark';
    document.documentElement.setAttribute('data-theme', next);
    try{ localStorage.setItem('nimex-d2d-theme', next); }catch(e){}
    applyThemeColors(); renderAll();
  });
  if(window.matchMedia){ var mq=window.matchMedia('(prefers-color-scheme: dark)'); var h=function(){ if(!document.documentElement.getAttribute('data-theme')){ applyThemeColors(); renderAll(); } }; if(mq.addEventListener) mq.addEventListener('change',h); }
})();

