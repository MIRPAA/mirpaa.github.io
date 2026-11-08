(function(){

/* ====== DATA ======
   Fill phone / whatsapp / email / web / hours / photo for each person.
   Empty fields are hidden automatically. photo: a data: URI or published file path. */
const CLINIC={wa:'972559507741',waText:'055-950-7741'};
const TEAM=[
  {id:'dafna',short:'ד״ר נסלרוט',photo:'/img/dafna.jpg',grp:'med',ic:'d-peds',c:'var(--navy)',ini:'ד״נ',name:'ד״ר דפנה נסלרוט',title:'מומחית ברפואת ילדים וברפואת ספורט',
   teaser:'מומחית ברפואת ילדים וברפואת ספורט, עם דגש על רפואה מונעת.',
   about:['ד״ר דפנה נסלרוט היא מומחית ברפואת ילדים, ורופאת ספורט מוסמכת. היא למדה רפואה באוניברסיטת תל אביב ועובדת כרופאת קהילה בקופ״ח מאוחדת ומכבי.','ד״ר נסלרוט עוסקת ברפואה מונעת, מתנדבת בעמותת מדעת ובפרויקט ווטסאפדוק. במקביל לעבודה במרפאה היא עוסקת בהדרכת סטודנטים, במחקר וברפואת ספורט.'],
   help:['ביקורי מחלה','מעקב גדילה והתפתחות','רפואה מונעת','תינוקות ויילודים','ייעוץ להורים','אישורים לגן ולבית ספר'],ages:'מלידה ועד 18',
   book:'maccabi'},
  {id:'orly',short:'ד״ר אוחנה',photo:'/img/orly.jpg',grp:'med',ic:'d-peds',c:'var(--coral)',ini:'א״א',name:'ד״ר אורלי אוחנה',title:'מומחית ברפואת ילדים',
   teaser:'רופאה בכירה במחלקת ילדים ג׳ בבית החולים שניידר, המשלבת רפואה קלינית, מחקר והוראה.',
   about:['ד״ר אורלי אוחנה היא מומחית ברפואת ילדים ובוגרת לימודי רפואה באוניברסיטת תל אביב. לצד העבודה במרפאה, היא עובדת כרופאה בכירה במחלקת ילדים ג׳ בבית החולים שניידר.','בעבודתה היא משלבת בין רפואה קלינית, מחקר והוראה.','לאורך עבודתה צברה ניסיון בטיפול בילדים ובמתבגרים במגוון רחב של מצבים רפואיים – החל מבעיות שכיחות ברפואת ילדים ועד למצבים מורכבים הדורשים בירור ומעקב מעמיק.'],
   help:['ביקורי מחלה','מעקב גדילה והתפתחות','בירור ומעקב במצבים מורכבים','ילדים ומתבגרים','ייעוץ להורים','אישורים לגן ולבית ספר'],ages:'מלידה ועד 18',
   book:'maccabi'},
  {id:'shai',short:'ד״ר שמש',photo:'/img/shai.jpg',grp:'med',ic:'d-ent',c:'var(--steel)',ini:'ש״ש',name:'ד״ר שי שמש',title:'מומחה אף, אוזן, גרון',
   teaser:'רופא בכיר במרכז הרפואי וולפסון, אחראי תחום הטיפול בנחירות ודום נשימה חסימתי.',
   about:['ד״ר שי שמש הוא רופא בכיר במרכז הרפואי וולפסון, אחראי תחום הטיפול בנחירות ודום נשימה חסימתי, וכן מרפאה נוספת העוסקת בניתוחים אנדוסקופיים של האף והסינוסים. בקהילה ד״ר שמש עובד עם קופת חולים מכבי, כללית מושלם, ורפואה פרטית.','ד״ר שמש הוא בוגר לימודי רפואה בפקולטה לרפואה של אוניברסיטת מסריק בברנו, צ׳כיה. במהלך שנות לימודיו עבר השתלמויות בתחומים מגוונים ברפואת אף, אוזן וגרון, וכן השתלמות עמיתים בתחום ניתוחי נחרה ודום נשימה במונטריי שבמקסיקו ובפורלי שבאיטליה, אצל מנתחים מובילים בתחום הנחירות ודום הנשימה החסימתי.','את התמחות־העל ברפואה וכירורגיה של האף, הסינוסים ובסיס הגולגולת ביצע במרכז הרפואי א.ר.ם, בהנחייתו של פרופ׳ רועי לנדסברג.','שפות: עברית ואנגלית.'],
   help:['נחירות ודום נשימה חסימתי','שקדים ואדנואידים','כפתורים (צינוריות אוורור)','מחיצת האף והקונכיות','סינוסים','דלקות אוזניים חוזרות'],
   sections:[
     {h:'ניתוחים למבוטחי מכבי',items:['ניתוחי האף: מחיצה, קונכיות, אנדוסקופיה של הסינוסים','ניתוחים לדום נשימה חסימתי: פרינגופלסטיקה (עיצוב הלוע), בסיס לשון ולרינקס','ניתוחי ילדים: שקדים, אדנואידים, כפתורים']},
     {h:'חברות בארגונים מקצועיים',items:['ההסתדרות הרפואית בישראל (הר״י)','האיגוד הישראלי לרפואת אף, אוזן וגרון וניתוחי ראש צוואר','החוג הרינולוגי הישראלי','החברה הישראלית לרפואת א.א.ג. ילדים','חבר האקדמיה האירופאית לרפואת שינה']}
   ],
   book:'maccabi',bookNote:'בקריית אונו ד״ר שמש מקבל מטופלי מכבי בלבד. קביעת התורים מתבצעת דרך מוקד זימון התורים של מכבי או באפליקציה.',bookFact:'מכבי בלבד'},
  {id:'leah',short:'ד״ר אלקובי',photo:'/img/leah.jpg',grp:'med',ic:'d-adhd',c:'#f3c9c4',ini:'ל״א',name:'ד״ר לאה אלקובי',title:'מומחית לרפואת ילדים, אבחון וטיפול בקשב וריכוז',
   teaser:'מומחית לרפואת ילדים, מורשית משרד הבריאות לאבחון וטיפול בהפרעות קשב וריכוז.',
   about:['ד״ר לאה אלקובי היא מומחית לרפואת ילדים, מורשית משרד הבריאות לאבחון וטיפול בהפרעות קשב וריכוז.','במרפאת Kashuv היא מאבחנת ומלווה ילדים ובני נוער בגילאי 6–18, ומקבלת במרפאה בימי חמישי, 8:00–14:00.'],
   help:['אבחון הפרעות קשב וריכוז','טיפול ומעקב'],ages:'6–18',
   sections:[{h:'תחומי טיפול',items:['אבחון הפרעות קשב וריכוז','טיפול ומעקב בהפרעות קשב וריכוז','ילדים ובני נוער בגילאי 6–18']}],
   book:'direct',bookUrl:'https://kashuvclinic.setmore.com/',wa:'050-784-4810',web:'https://kashuv.netlify.app/card/',notice:'נא לא לשלוח מידע רפואי בהודעות.'},
  {id:'nofar',short:'נופר',photo:'/img/nofar.jpg',grp:'ther',ic:'d-art',c:'#f3d38c',ini:'נ״ב',name:'נופר ברקני רמות',title:'מטפלת רגשית באמנות (M.A.)',
   teaser:'טיפול רגשי המשלב שיח ויצירה, לילדים, למתבגרים ולהורים.',
   about:['נופר ברקני רמות היא בעלת תואר ראשון במדעי ההתנהגות ותואר שני בטיפול באמצעות הבעה ויצירה, עם התמחות באמנות חזותית. יש לה הכשרה בטיפול דיאדי ובהדרכת הורים, וניסיון משמעותי בעבודה טיפולית במערכות ציבוריות ובמסגרות רב־תחומיות.','הטיפול משלב שיח רגשי עם תהליכי יצירה, מתוך אמונה שהאמנות מאפשרת גישה עדינה, עמוקה ולעיתים בלתי אמצעית לעולמו הפנימי של האדם. המרחב הטיפולי מציע מקום בטוח, קשוב ולא שיפוטי, המאפשר ביטוי רגשי, עיבוד חוויות, חיזוק תחושת מסוגלות והתבוננות פנימית רגישה ובהירה.','הטיפול מתאים לילדים, מתבגרים והורים סביב קשיים רגשיים, חרדה, שינויים בחיים, אתגרי ויסות וביטוי עצמי, דימוי עצמי, קשיים חברתיים, וכן צורך במרחב אישי או משפחתי לעיבוד, חיבור וצמיחה.'],
   help:['קשיים רגשיים','חרדה','שינויים בחיים','ויסות וביטוי עצמי','דימוי עצמי','קשיים חברתיים','טיפול דיאדי','הדרכת הורים'],ages:'ילדים, מתבגרים והורים',
   book:'direct',phone:'054-229-9189',wa:'054-229-9189',web:'https://www.haclinic.co.il'},
  {id:'fanny',short:'פאני',photo:'/img/fanny.jpg',grp:'ther',ic:'d-cbt',c:'var(--navy)',ini:'פ״ט',name:'פאני לביא־טרבלסי',title:'פסיכותרפיסטית CBT, יועצת חינוכית ומדריכת הורים',
   teaser:'טיפול רגשי ו־CBT לילדים ולמתבגרים, והדרכת הורים.',
   about:['נעים מאוד. אני פאני לביא טרבלסי, יועצת חינוכית (M.A), פסיכותרפיסטית בגישת CBT, ומדריכת הורים מוסמכת ממכון אדלר. בעלת ניסיון של למעלה מ־23 שנים של עבודה מערכתית במערכת החינוך ובעבודת טיפול פרטנית עם ילדים, מתבגרים, הורים וצוותים חינוכיים.','אני מאמינה שתהליך טיפולי אמיתי מתרחש מתוך שותפות מלאה ושקיפות הדדית.','לא לוותר – לא על הילד, לא על ההורה, ולא על התקווה לשינוי. יחד, בצעד אחר צעד, נוכל לבנות מציאות חדשה שבה יש מקום לרגש, להבנה ולכוחות פנימיים שממתינים לצאת לאור.'],
   sections:[
     {h:'תחומי התמחות',items:['פסיכותרפיה קוגניטיבית־התנהגותית (CBT)','טיפול רגשי לילדים ומתבגרים (גילאי 6–18)','הדרכת הורים','קשיים רגשיים והתנהגותיים','חרדות','בעיות חברתיות','ויסות רגשי','התפרצויות כעס וקושי בגבולות']},
     {h:'עקרונות מנחים בגישה הטיפולית',items:['יצירת מרחב טיפולי בטוח, בגובה העיניים','הדרכת ההורים ומעורבותם בתהליך הטיפולי','בניית קשר אמון עם הילד וההורה','הקשבה בלתי שיפוטית','שילוב בין ידע מקצועי לכלים פרקטיים','התאמה אישית של תהליך הטיפול לפי צרכי המטופל']}
   ],
   book:'direct',phone:'050-220-4828',wa:'050-220-4828',email:'fannylt5555@gmail.com'},
  {id:'tal',short:'הדס',photo:'/img/hadas.jpg',grp:'ther',ic:'d-slp',c:'#9fb4bf',ini:'ה״ט',name:'הדס טל',title:'קלינאית תקשורת, יועצת הנקה IBCLC ומומחית אכילה',
   teaser:'קלינאית תקשורת ויועצת הנקה מוסמכת, מומחית לקשיי אכילה בתינוקות וילדים.',
   about:['אמא לשלושה, קלינאית תקשורת ויועצת הנקה מוסמכת (IBCLC), המתמחה כבר למעלה מעשור בתחום האכילה בתינוקות וילדים.','המפגש עם הרגעים הראשונים של הקשר בין הורה לתינוק, סביב האכלה, ריתק אותי – ומשם התפתח מסע מקצועי שלם של האכלה, קשר והתפתחות.','במהלך השנים הקמתי ואני מרכזת מרפאה רב-מקצועית להפרעות אכילה בגיל הרך. עבדתי שנים במכונים להתפתחות הילד, וביססתי את תפקיד קלינאית התקשורת בפגייה. לצד זאת, אני עובדת כבר כ-15 שנים עם ילדים עם מורכבויות נוירו-התפתחותיות. כיום אני גם מרצה בקריה האקדמית אונו, משתתפת בכנסים מקצועיים ומדריכה צוותים ואנשי מקצוע בתחום.','בטיפול אני משלבת גישות מבוססות ומוסמכות כגון SOS, SOFFI, IBCLC ו-Fascial Manipulation (Stecco). אני מאמינה שטיפול באכילה הוא תהליך הדרגתי הדורש זמן והתמדה. הוא מבוסס על מתן ידע, כלים ותמיכה להורים, ועל יצירת סביבה בטוחה ומכילה עבור הילד. כאשר הילד מתקדם בקצב שלו, בתוך מרחב נטול שיפוטיות, מתפתחת בהדרגה תחושת ביטחון סביב האוכל – ומשם צומחות הסקרנות, הלמידה ולבסוף היכולת שלו לאכול בהנאה.'],
   help:['קשיי הנקה','בררנות וסרבנות אכילה','רפלקס הקאה מוגבר','מעבר למוצקים','קשיי אכילה ובליעה'],ages:'תינוקות וילדים',
   sections:[
     {h:'תחומי טיפול',items:['קשיי הנקה','בררנות וסרבנות אכילה','רפלקס הקאה מוגבר','מעבר למוצקים','ליווי משפחות בקשיי אכילה בתינוקות וילדים']},
     {h:'הכשרה וניסיון',items:['קלינאית תקשורת ויועצת הנקה מוסמכת IBCLC','מטפלת Fascial Manipulation (Stecco) – שלב 1','מרכזת המרפאה להפרעות אכילה בגיל הרך, המרכז הרפואי "שמיר"','מומחית בטיפול במסגרות שיקומיות לתינוקות וילדים','מרצה אקדמית – הקריה האקדמית אונו, קורסי אחיות וכנסים מקצועיים','מדריכה קלינית – תפקודי אכילה ובליעה, התפתחות ושיקום','15 שנות ניסיון']}
   ],
   book:'direct',phone:'054-770-8967',wa:'054-770-8967',email:'play.eat.slp@gmail.com',web:'https://www.playeatslp.com'},
  {id:'lital',short:'ליטל',photo:'/img/lital.jpg',grp:'ther',ic:'d-psy',c:'#b9c9a9',ini:'ל״י',name:'ליטל יצחק אמסלם',title:'פסיכולוגית, מטפלת בגישת CBT',
   teaser:'טיפול בילדים, מתבגרים ומבוגרים בגישה הקוגניטיבית־התנהגותית (CBT) ובגישה אינטגרטיבית.',
   about:['ליטל יצחק אמסלם מטפלת בילדים, מתבגרים ומבוגרים בגישה הקוגניטיבית־התנהגותית (CBT) ובגישה אינטגרטיבית.'],
   help:['חרדה','דיכאון','קשיים חברתיים','ויסות חושי ורגשי','הדרכת הורים'],ages:'ילדים, מתבגרים ומבוגרים',
   sections:[{h:'ניסיון מקצועי',items:['טיפול בילדים ובני נוער במקרים של חרדה, דיכאון וקשיים חברתיים','טיפול פרטני והדרכת הורים על רקע קשיי ויסות חושי ורגשי, ASD, ‏ODD ו־ADHD','טיפול וליווי במסגרות חינוך רגילות ובחינוך המיוחד, לרבות כיתת תקשורת ובית ספר רגשי־התנהגותי לנערות','ליווי לקראת ועדות אפיון וזכאות','הדרכה וליווי של קבוצות ילדים ונוער ושל צוותים חינוכיים']}]},
];
const RIBBON=[
  {ic:'t-peds',t:'רפואת ילדים',go:true,cc:'#9fb4bf',ar:.78,br:'50% 50% 46% 46%/62% 62% 38% 38%',tip:'ד״ר נסלרוט · ד״ר אוחנה'},
  {ic:'t-ear',t:'אף, אוזן, גרון',id:'shai',cc:'#b9c9a9',ar:.92,br:'50%',tip:'ד״ר שי שמש'},
  {ic:'t-focus',t:'קשב וריכוז',id:'leah',cc:'#f3c9c4',ar:.72,br:'50% 50% 50% 50%/70% 70% 30% 30%',tip:'ד״ר לאה אלקובי'},
  {ic:'t-art',t:'טיפול באומנות',id:'nofar',cc:'#f3d38c',ar:.86,br:'48% 52% 50% 50%/55% 60% 40% 45%',tip:'נופר ברקני רמות'},
  {ic:'t-family',t:'הדרכת הורים ו־CBT',id:'fanny',cc:'#a3b38e',ar:.7,br:'50% 50% 45% 45%/75% 75% 25% 25%',tip:'פאני לביא־טרבלסי'},
  {ic:'t-speech',t:'קלינאות תקשורת',id:'tal',cc:'#9fb4bf',ar:.92,br:'50%',tip:'הדס טל'},
  {ic:'t-baby',t:'הדרכת הנקה',id:'tal',cc:'#f2b9a5',ar:.8,br:'50% 50% 46% 46%/62% 62% 38% 38%',tip:'הדס טל'},
  {ic:'t-heart',t:'טיפול פסיכולוגי',id:'lital',cc:'#b9c9a9',ar:.74,br:'50% 50% 50% 50%/68% 68% 32% 32%',tip:'ליטל יצחק אמסלם'}
];

const byId=Object.fromEntries(TEAM.map(p=>[p.id,p]));

/* ====== helpers ====== */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const svg=(id,cls='')=>`<svg class="${cls}" aria-hidden="true" focusable="false"><use href="#${id}"/></svg>`;
const initials=p=>esc(p.ini.replace('״',''));
const avatar=p=>`<span class="avatar" style="--c:${p.c}" aria-hidden="true">${p.photo?`<img src="${esc(p.photo)}" alt="">`:initials(p)}</span>`;
const PAGE=window.PAGE||null;
const teamHref=id=>PAGE?'/team/'+id+'/':'#team-'+id;
const homeHref=sec=>PAGE?'/#'+sec:'#'+sec;
const waLink=text=>`https://wa.me/${CLINIC.wa}?text=${encodeURIComponent(text)}`;
const NEWTAB='(נפתח בכרטיסייה חדשה)';
const announcer=$('#announcer');
function announce(msg){announcer.textContent='';setTimeout(()=>{announcer.textContent=msg},60);}
/* external links: tell screen-reader users the link opens a new tab */
function markNewTab(root=document){root.querySelectorAll('a[target="_blank"]:not([data-nt])').forEach(a=>{a.dataset.nt='1';
  if(a.hasAttribute('aria-label'))a.setAttribute('aria-label',a.getAttribute('aria-label')+' '+NEWTAB);
  else a.insertAdjacentHTML('beforeend',`<span class="sr-only"> ${NEWTAB}</span>`);});}
function copyText(btn,text,what){
  const done=()=>{const orig=btn.firstChild.textContent;btn.firstChild.textContent='הועתק';btn.classList.add('done');announce(`${what} הועתק`);setTimeout(()=>{btn.firstChild.textContent=orig;btn.classList.remove('done')},1800)};
  const fallback=()=>{const el=btn.parentElement.querySelector('.v');if(el){const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);}announce(`לא ניתן להעתיק אוטומטית. ${what} מסומן, אפשר להעתיק אותו ידנית.`);};
  try{navigator.clipboard.writeText(text).then(done,fallback)}catch(e){fallback()}
}
document.addEventListener('click',e=>{const b=e.target.closest('.copy');if(b)copyText(b,b.dataset.copy,b.dataset.what||'הטקסט')});
if($('#waRentQuick'))$('#waRentQuick').href=waLink('שלום, אני מעוניין/ת בפרטים על השכרת חדר טיפול במרפאה');

/* inert helper for modal dialogs */
const bgRegions=()=>[$('#hdr'),$('#main'),document.querySelector('footer'),$('.wa-fab'),$('#skipLink')];
function setInert(on){bgRegions().forEach(el=>{if(!el)return;if(on)el.setAttribute('inert','');else el.removeAttribute('inert');});}
function trapTab(e,box){if(e.key!=='Tab')return;const f=[...box.querySelectorAll('a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])')].filter(x=>x.offsetParent!==null);if(!f.length)return;const first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}

/* ====== skip link (does not change the route) ====== */
$('#skipLink').addEventListener('click',e=>{e.preventDefault();const h=document.querySelector('.view:not([hidden]) h1')||$('#main');h.focus();h.scrollIntoView();});

/* ====== header / mobile menu ====== */
const hdr=$('#hdr'),burger=$('#burger'),nav=$('#nav'),mq=matchMedia('(max-width:900px)');
addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>30),{passive:true});
function setMenu(o,returnFocus,kbd){nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',String(o));$('#burgerLabel').textContent=o?'סגירת התפריט':'פתיחת התפריט';
  if(o&&kbd){const f=nav.querySelector('a');f&&setTimeout(()=>f.focus(),30);}else if(returnFocus)burger.focus();}
burger.addEventListener('click',e=>setMenu(!nav.classList.contains('open'),false,e.detail===0));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!burger.contains(e.target))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false,true);}});
nav.addEventListener('focusout',e=>{if(mq.matches&&nav.classList.contains('open')&&e.relatedTarget&&!nav.contains(e.relatedTarget)&&e.relatedTarget!==burger)setMenu(false);});
mq.addEventListener('change',()=>setMenu(false));
const navLinks=[...nav.querySelectorAll('[data-nav]')];
const setActive=id=>navLinks.forEach(l=>{const on=l.dataset.nav===id;l.classList.toggle('active',on);if(on)l.setAttribute('aria-current',id==='rent'?'page':'true');else l.removeAttribute('aria-current');});
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting&&view==='home')setActive(en.target.id)}),{rootMargin:'-45% 0px -50% 0px'});
['clinic','team','contact','directions'].forEach(id=>{const s=document.getElementById(id);if(s)io.observe(s);});

/* ====== disciplines (trees) ====== */
const rib=$('#ribbon');
if(rib){rib.innerHTML='';}
if(rib)RIBBON.forEach((r,k)=>{const li=document.createElement('li');const a=document.createElement('div');a.className='tree';
  a.innerHTML=`<span class="canopy" style="--cc:${r.cc};--ar:${r.ar};--br:${r.br}">${svg(r.ic)}</span><svg class="trunk" viewBox="0 0 30 64" aria-hidden="true" focusable="false"><path d="M15 64V6M15 30l-8-10M15 24l7-9" stroke-width="4" stroke-linecap="round" fill="none"/></svg><b>${r.t}</b>`;
  li.appendChild(a);rib.appendChild(li);});

/* ====== team cards (each opens its own page) ====== */
function card(p){const li=document.createElement('li');
  li.innerHTML=`<a class="tcard" href="${teamHref(p.id)}" data-id="${p.id}"><span class="tc-photo" style="--c:${p.c}" aria-hidden="true">${p.photo?`<img src="${esc(p.photo)}" alt="" loading="lazy">`:`<span>${initials(p)}</span>`}</span><span class="tc-name">${esc(p.name)}</span><span class="tc-ttl">${esc(p.title)}</span><span class="tc-more" aria-hidden="true">לעמוד האישי ${svg('i-arrow')}</span></a>`;return li;}
if($('#teamGrid')){$('#teamGrid').innerHTML='';TEAM.forEach(p=>$('#teamGrid').appendChild(card(p)));}

/* ====== profile page ====== */
function contactRow(icon,label,val,href,note,cls='',srPrefix=''){return `<div class="crow"><span class="ic ${cls}">${svg(icon)}</span><div><b>${label}</b>${href?`<a class="v ltr" href="${esc(href)}"${/^https?:/.test(href)?' target="_blank" rel="noopener"':''}>${srPrefix?`<span class="sr-only">${srPrefix}</span>`:''}${esc(val)}</a>`:`<span class="v ltr">${esc(val)}</span>`}${note?`<small>${note}</small>`:''}</div><button class="copy" type="button" data-copy="${esc(val)}" data-what="${esc(label)}">העתקה<span class="sr-only"> של ${esc(label)}</span></button></div>`;}
function renderProfile(id){
  const p=byId[id],i=TEAM.indexOf(p),prev=TEAM[(i-1+TEAM.length)%TEAM.length],next=TEAM[(i+1)%TEAM.length];
  const intl=n=>'972'+n.replace(/\D/g,'').replace(/^0/,'');
  let rows='';
  if(p.wa)rows+=contactRow('i-wa','וואטסאפ',p.wa,'https://wa.me/'+intl(p.wa),'','wa','שליחת הודעת וואטסאפ ל־');
  if(p.phone&&p.phone!==p.wa)rows+=contactRow('i-phone','טלפון',p.phone,'tel:+'+intl(p.phone),'','','חיוג ל־');
  if(p.email)rows+=contactRow('i-mail','אימייל',p.email,'mailto:'+p.email,'','','שליחת אימייל ל־');
  if(p.web)rows+=contactRow('i-web','אתר',p.web.replace(/^https?:\/\/(www\.)?/,''),p.web,'','','מעבר לאתר ');
  const book=p.book||'clinic';
  let booking;
  if(book==='maccabi')booking=`<p class="muted">${esc(p.bookNote||`תורים אצל ${p.name} נקבעים דרך אתר או אפליקציית מכבי, או במוקד זימון התורים`)}${p.bookNote?'':' <span class="ltr">3555*</span>.'}</p>
      <a class="btn" href="https://www.maccabi4u.co.il/" target="_blank" rel="noopener">${svg('i-cal')}קביעת תור באתר מכבי</a>`;
  else if(book==='direct')booking=`<p class="muted">${p.bookUrl?`לקביעת תור אפשר להזמין תור אונליין או לפנות ישירות אל ${esc(p.name)} בוואטסאפ`:`לקביעת תור אפשר לפנות ישירות אל ${esc(p.name)} בוואטסאפ${p.web?' או דרך האתר':''}`}.${p.notice?' '+esc(p.notice):''}</p>
      <div class="d-actions">${p.bookUrl?`<a class="btn" href="${esc(p.bookUrl)}" target="_blank" rel="noopener">${svg('i-cal')}קביעת תור אונליין</a>`:''}${p.wa?`<a class="btn btn-wa" href="https://wa.me/${intl(p.wa)}?text=${encodeURIComponent('שלום, אשמח לקבוע תור')}" target="_blank" rel="noopener">${svg('i-wa')}הודעת וואטסאפ ל${esc(p.short)}</a>`:''}</div>`;
  else booking=`<p class="muted">לתיאום תור אצל ${esc(p.name)} כתבו לנו בוואטסאפ, ונחזור אליכם עם מועד.</p>
      <a class="btn btn-wa" href="${waLink('שלום, אשמח לקבוע תור אצל '+p.name)}" target="_blank" rel="noopener">${svg('i-wa')}לתיאום תור אצל ${esc(p.short)} בוואטסאפ</a>`;
  const bookFact=p.bookFact||(book==='maccabi'?'דרך מכבי':book==='direct'?'ישירות מול '+p.short:'בתיאום מול המרפאה');
  const facts=[p.ages&&['גילאים',p.ages],['קביעת תור',bookFact],p.edu&&['לימודים',p.edu],p.langs&&['שפות',p.langs],['כתובת','דובדבן 7, קריית אונו, קומה 4']].filter(Boolean);
  const about=(Array.isArray(p.about)?p.about:[p.about]).map(t=>`<p>${esc(t)}</p>`).join('');
  const extra=(p.sections||[]).map((s,k)=>`<section aria-labelledby="sec${k}H"><h2 id="sec${k}H">${esc(s.h)}</h2><ul class="blist">${s.items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`).join('');
  $('#viewProfile').innerHTML=`
  <div class="wrap view-top"><a class="back" href="${homeHref('team')}">${svg('i-arrow')}חזרה לצוות המרפאה</a></div>
  <article class="prof-sec" aria-labelledby="profH1"><div class="wrap prof">
    <div class="prof-photo" style="--c:${p.c}">${p.photo?`<img src="${esc(p.photo)}" alt="תמונה של ${esc(p.name)}">`:`<span aria-hidden="true">${initials(p)}</span>`}</div>
    <header class="prof-head">
      <p class="eyebrow">${p.grp==='med'?'רופאים':'מטפלים בילדים'}</p>
      <h1 id="profH1" tabindex="-1">${esc(p.name)}</h1>
      <p class="p-ttl">${esc(p.title)}</p>
    </header>
    <div class="prof-main">
      <section aria-labelledby="aboutH" class="about"><h2 id="aboutH">קצת עליי</h2>${about}</section>
      ${extra}
    </div>
    <section class="panel prof-book" aria-labelledby="bookH"><h2 id="bookH">קביעת תור</h2>${booking}
      ${rows?`<div class="d-contact">${rows}</div>`:contactRow('i-wa','וואטסאפ המרפאה',CLINIC.waText,'https://wa.me/'+CLINIC.wa,'הודעות וואטסאפ בלבד','wa','שליחת הודעת וואטסאפ ל־')}
    </section>
    <nav class="pn" aria-label="מעבר בין אנשי הצוות">
        <a href="${teamHref(prev.id)}" rel="prev">${svg('i-arrow','flip')}<span><small>הקודם</small>${esc(prev.name)}</span></a>
        <a href="${teamHref(next.id)}" rel="next" class="nx"><span><small>הבא</small>${esc(next.name)}</span>${svg('i-arrow')}</a>
    </nav>
  </div></article>
  <section class="others-sec" aria-labelledby="othersH"><div class="wrap">
    <h2 id="othersH">עוד בצוות המרפאה</h2>
    <ul class="others">${TEAM.filter(o=>o!==p).map(o=>`<li><a class="mini" href="${teamHref(o.id)}">${avatar(o)}<span><b>${esc(o.name)}</b><span>${esc(o.title)}</span></span></a></li>`).join('')}</ul>
  </div></section>`;
  markNewTab($('#viewProfile'));
}

document.addEventListener('click',e=>{const b=e.target.closest('[data-scroll]');if(!b)return;const t=document.getElementById(b.dataset.scroll);t.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});setTimeout(()=>$('#rentFormH').focus({preventScroll:true}),350);});

/* ====== router: home sections, #team-<id>, #rent, #accessibility, else 404 ====== */
let view='home',firstRoute=true;const BASE_TITLE='מרפאת הילדים בדובדבן';
const VIEWS={home:'#viewHome',profile:'#viewProfile',rent:'#viewRent',a11y:'#viewA11y',nf:'#view404'};
const HOME_IDS=['','top','main','clinic','team','contact','directions'];
function show(v){view=v;Object.entries(VIEWS).forEach(([k,sel])=>{$(sel).hidden=k!==v;});}
function focusHeading(h){if(firstRoute)return;h.focus({preventScroll:true});}
function route(){
  const h=decodeURIComponent(location.hash.slice(1));const wasHome=view==='home';
  if(PAGE){
    if(h.startsWith('team-')&&byId[h.slice(5)]){location.replace(teamHref(h.slice(5)));return;}
    if(h==='rent'||h==='accessibility'){location.replace('/'+h+'/');return;}
    if(PAGE.startsWith('profile:')){const id=PAGE.slice(8);renderProfile(id);show('profile');setActive('team');firstRoute=false;return;}
    if(PAGE==='rent'){show('rent');setActive('rent');firstRoute=false;return;}
    if(PAGE==='a11y'){show('a11y');setActive('');firstRoute=false;return;}
    if(PAGE==='nf'){show('nf');setActive('');firstRoute=false;return;}
  }
  if(window.FORCE_404&&!h){show('nf');setActive('');document.title='העמוד לא נמצא · '+BASE_TITLE;firstRoute=false;return;}
  if(h.startsWith('team-')&&byId[h.slice(5)]){renderProfile(h.slice(5));show('profile');setActive('team');document.title=byId[h.slice(5)].name+' · '+BASE_TITLE;scrollTo(0,0);focusHeading($('#profH1'));firstRoute=false;return;}
  if(h==='rent'){show('rent');setActive('rent');document.title='השכרת מרפאות · '+BASE_TITLE;scrollTo(0,0);focusHeading($('#rentH1'));firstRoute=false;return;}
  if(h==='accessibility'){show('a11y');setActive('');document.title='הצהרת נגישות · '+BASE_TITLE;scrollTo(0,0);focusHeading($('#a11yH1'));firstRoute=false;return;}
  if(!HOME_IDS.includes(h)&&!PAGE){show('nf');setActive('');document.title='העמוד לא נמצא · '+BASE_TITLE;scrollTo(0,0);focusHeading($('#nfH1'));firstRoute=false;return;}
  show('home');if(!PAGE)document.title=BASE_TITLE;
  const el=h&&h!=='top'&&h!=='main'?document.getElementById(h):null;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(el){requestAnimationFrame(()=>{el.scrollIntoView({behavior:wasHome&&!reduce?'smooth':'auto'});const hd=el.querySelector('h2[tabindex]');if(hd&&!firstRoute)hd.focus({preventScroll:true});});}
  else{scrollTo(0,0);if(!wasHome)focusHeading($('#homeH1'));setActive('');}
  firstRoute=false;
}
addEventListener('hashchange',route);route();

/* ====== gallery + lightbox ====== */
const PHOTOS=[
  {src:'/img/waiting.jpg',cap:'חדר ההמתנה במרפאה, עם כיסאות ועצים מעוצבים על הקיר'},
  {src:'/img/sun.jpg',cap:'חדר בדיקה עם ציור שמש על הקיר וכיסאות בצבע כתום'},
  {src:'/img/play.jpg',cap:'פינת משחק וספרים לילדים'},
  {src:'/img/space1.jpg',cap:'חדר בדיקה מואר בעיצוב חלל'},
  {src:'/img/forest.jpg',cap:'חדר רופא עם מדבקות יער על הקיר'},
  {src:'/img/space2.jpg',cap:'חדר בדיקה עם כיור ומדבקות חלל'},
  {src:'/img/g-waiting3.jpg',cap:'חדר ההמתנה, עם עצי עץ צבעוניים על הקיר, כיסאות ושרפרפים לילדים'},
  {src:'/img/g-room.jpg',cap:'חדר רופא עם עמדת עבודה, ארונות ומיטת בדיקה, ומדבקות חלל על הקיר'},
  {src:'/img/g-waiting2.jpg',cap:'פינת ההמתנה ליד המסדרון הוורוד'},
  {src:'/img/g-play2.jpg',cap:'ילדה משחקת במכוניות בפינת המשחק'}
];
const gal=$('#gallery');
if(gal)PHOTOS.forEach((ph,i)=>{const li=document.createElement('li');li.innerHTML=`<button type="button" class="shot"><img src="${ph.src}" alt="" loading="lazy"><span class="sr-only">הגדלת תמונה ${i+1} מתוך ${PHOTOS.length}: ${esc(ph.cap)}</span></button>`;li.firstChild.addEventListener('click',e=>openLb(i,e.currentTarget));gal.appendChild(li);});
const galStep=dir=>gal.scrollBy({left:dir*Math.min(gal.clientWidth*.8,520),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
if(gal){$('#galNext').addEventListener('click',()=>galStep(-1));$('#galPrev').addEventListener('click',()=>galStep(1));}
const lb=$('#lb');let lbI=0,lbFrom=null;
function showLb(i){lbI=(i+PHOTOS.length)%PHOTOS.length;$('#lbImg').src=PHOTOS[lbI].src;$('#lbImg').alt=PHOTOS[lbI].cap;$('#lbCap').textContent=`תמונה ${lbI+1} מתוך ${PHOTOS.length}: ${PHOTOS[lbI].cap}`;}
function openLb(i,from){lbFrom=from;showLb(i);lb.hidden=false;setInert(true);document.body.classList.add('locked');requestAnimationFrame(()=>lb.classList.add('show'));$('#lbX').focus();}
function closeLb(){if(lb.hidden)return;lb.classList.remove('show');lb.hidden=true;setInert(false);document.body.classList.remove('locked');lbFrom&&lbFrom.focus({preventScroll:true});}
$('#lbX').addEventListener('click',closeLb);$('#lbNext').addEventListener('click',()=>showLb(lbI+1));$('#lbPrev').addEventListener('click',()=>showLb(lbI-1));
lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});
lb.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeLb();}else if(e.key==='ArrowLeft'&&e.target.tagName!=='INPUT')showLb(lbI+1);else if(e.key==='ArrowRight')showLb(lbI-1);else trapTab(e,lb);});

/* ====== theme ====== */
const themeBtn=$('#themeBtn');
const isDark=()=>{const r=document.documentElement.getAttribute('data-theme');return r?r==='dark':matchMedia('(prefers-color-scheme: dark)').matches;};
const syncTheme=()=>themeBtn.setAttribute('aria-pressed',String(isDark()));
themeBtn.addEventListener('click',()=>{document.documentElement.setAttribute('data-theme',isDark()?'light':'dark');syncTheme();announce(isDark()?'מצב כהה הופעל':'מצב בהיר הופעל');});
syncTheme();


/* ====== live Google map (falls back to the static map only where the host blocks embedded frames) ====== */
(function(){const box=$('#mapFrame'),f=document.createElement('iframe');if(!box)return;
  f.title='מפת Google חיה: מיקום מרפאת הילדים, הדובדבן 7, קריית אונו';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';f.allowFullscreen=true;
  f.src='https://maps.google.com/maps?q='+encodeURIComponent('הדובדבן 7, קריית אונו')+'&ll=32.0688675,34.8643738&z=16&hl=iw&output=embed';
  let blocked=false;const drop=()=>{blocked=true;f.remove();box.classList.remove('live');};
  document.addEventListener('securitypolicyviolation',e=>{if(/google/.test(e.blockedURI||'')||String(e.violatedDirective).startsWith('frame'))drop();});
  box.appendChild(f);box.classList.add('live');
  const st=box.querySelector('.map-static');if(st){st.setAttribute('tabindex','-1');}
  setTimeout(()=>{if(!blocked&&st)st.setAttribute('aria-hidden','true');else if(st){st.removeAttribute('tabindex');st.removeAttribute('aria-hidden');}},1500);
})();

markNewTab();
})();
