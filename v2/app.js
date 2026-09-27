'use strict';
const translations={
en:{skip:'Skip to content',navAbout:'The winery',navGallery:'In pictures',navContact:'Contact us',place:'KIRYAT YEARIM · JUDEAN HILLS',hero:'Wine brings<br>people together.',intro:'A small winery with a heartfelt passion. Step into Zeev’s world, where a love of wine is there to be shared.',discover:'Discover the winery',talk:'Get in touch with Zeev',since:'A passion born in 2011',heroAlt:'An outdoor wine tasting, sharing a bottle around the table',photoCaption:'The pleasure of wine. The joy of sharing it.',storyLabel:'01 / THE WINERY',storyTitle:'A place.<br>A passion.<br>A story to share.',winemaker:'Winemaker',storyLead:'Welcome to Domaine du Loup, also known as Yekev Zeev.',story1:'Zeev Zyzek founded the winery in 2011 in Kiryat Yearim, in the Judean hills near Jerusalem. His love of God’s creations and his connection to the study of Torah and Talmud inspire his exploration of the world of wine.',story2:'Grapes are carefully selected from vineyards in the region and the Golan. Cabernet Sauvignon, Merlot, Petite Syrah and Carignan each express their own character. Time in French oak barrels helps their personality develop.',storyNote:'We look forward to meeting you and sharing our passion.',galleryLabel:'02 / SHARED MOMENTS',galleryTitle:'Around a glass of wine.',galleryIntro:'Wine tastings, conversations and the pleasure of discovery, for newcomers and wine lovers alike.',morePhotos:'See all photographs',contactLabel:'03 / LET’S GET TO KNOW EACH OTHER',contactTitle:'It starts with<br>a conversation.',contactIntro:'Have a question about the winery, our wines or tastings? Write to Zeev.',location:'Kiryat Yearim · Judean Hills · Israel',map:'Find us on the map ↗',firstName:'First name',lastName:'Last name',email:'Email',phone:'Phone (optional)',message:'Your message',referral:'How did you hear about us? (optional)',formNote:'This form prepares an email in your email app. You can review it before sending.',send:'Prepare my email ↗',top:'Back to top ↑',close:'Close photograph',galleryAlt:'Wine tasting at Domaine du Loup — photograph',status:'Your email app has been requested to open. If nothing happens, email yekevzeev@gmail.com directly. Your message has not been sent by this website.',description:'Discover Domaine du Loup, Zeev Zyzek’s boutique winery in Kiryat Yearim in the Judean hills. Its story, wines and tastings.'},
he:{skip:'דילוג לתוכן',navAbout:'היקב שלנו',navGallery:'בתמונות',navContact:'יצירת קשר',place:'קריית יערים · הרי יהודה',hero:'יין טוב.<br>אנשים טובים.<br>סיפור משותף.',intro:'יקב קטן, אהבה גדולה ליין. ברוכים הבאים לעולם של זאב — עולם של טעם, סקרנות ושמחת המפגש.',discover:'להכיר את היקב',talk:'לדבר עם זאב',since:'אהבה ליין, מאז 2011',heroAlt:'מפגש טעימות יין בחוץ, סביב שולחן ובקבוק יין',photoCaption:'ההנאה שביין. השמחה שבמפגש.',storyLabel:'01 / הסיפור שלנו',storyTitle:'מקום.<br>אהבה ליין.<br>סיפור שרוצים לחלוק.',winemaker:'יינן',storyLead:'ברוכים הבאים ליקב זאב, הידוע גם בשם Domaine du Loup.',story1:'זאב זיזעק הקים את היקב בשנת 2011 בקריית יערים, בהרי יהודה הסמוכים לירושלים. אהבתו ליצירותיו של ה׳ וחיבורו ללימוד התורה והתלמוד מלווים את מסעו אל עולם היין.',story2:'הענבים נבחרים בקפידה מכרמי האזור ומרמת הגולן. קברנה סוביניון, מרלו, פטיט סירה וקריניאן מביאים כל אחד אופי משלו. היישון בחביות עץ אלון צרפתי מאפשר ליין להתפתח ולהעמיק.',storyNote:'נשמח להכיר אתכם ולחלוק איתכם את האהבה שלנו ליין. לחיים!',galleryLabel:'02 / רגעים משותפים',galleryTitle:'נפגשים סביב היין.',galleryIntro:'טעימות, שיחות וההנאה שבגילוי — לסקרנים שעושים את הצעד הראשון ולחובבי יין ותיקים.',morePhotos:'לכל התמונות',contactLabel:'03 / נעים להכיר',contactTitle:'הכול מתחיל<br>בשיחה.',contactIntro:'רוצים לשאול על היקב, היינות או הטעימות? כתבו לזאב.',location:'קריית יערים · הרי יהודה · ישראל',map:'למיקום במפה ↗',firstName:'שם פרטי',lastName:'שם משפחה',email:'דוא״ל',phone:'טלפון (לא חובה)',message:'ההודעה שלכם',referral:'איך שמעתם עלינו? (לא חובה)',formNote:'הטופס מכין הודעה בתוכנת הדואר שלכם. תוכלו לעבור עליה לפני השליחה.',send:'הכנת הודעת דוא״ל ↗',top:'בחזרה למעלה ↑',close:'סגירת התמונה',galleryAlt:'טעימת יין ביקב זאב — תמונה',status:'נשלחה בקשה לפתוח את תוכנת הדואר שלכם. אם לא נפתח דבר, כתבו ישירות אל yekevzeev@gmail.com. ההודעה לא נשלחה דרך האתר.',description:'הכירו את יקב זאב בקריית יערים שבהרי יהודה: סיפורו של היינן זאב זיזעק, היינות ומפגשי הטעימות.'}
};
const fr={};
document.querySelectorAll('[data-i]').forEach(el=>fr[el.dataset.i]=el.innerHTML);
fr.heroAlt=document.querySelector('[data-alt]').alt;
Object.assign(fr,{close:'Fermer la photo',galleryAlt:'Dégustation au Domaine du Loup — photo',status:'Votre messagerie a été sollicitée. Si elle ne s’ouvre pas, écrivez directement à yekevzeev@gmail.com. Aucun message n’a été envoyé par ce site.',description:document.querySelector('meta[name="description"]').content});
translations.fr=fr;
const query=new URLSearchParams(location.search).get('lang');
let saved;try{saved=localStorage.getItem('yekev-language')}catch{}
let lang=Object.hasOwn(translations,query)?query:Object.hasOwn(translations,saved)?saved:'fr';
const galleryFiles=['har-adar-2.jpg','har-adar-3.jpg','har-adar-4.jpg','har-adar-5.jpg','har-adar-6.jpg','har-adar-7.jpg','har-adar-8.jpg','har-adar-9.jpg','france.jpg','beautiful-view-wine.jpg'];
const more=document.getElementById('more-photos');
galleryFiles.slice(3).forEach(file=>{const a=document.createElement('a');a.href='assets/'+file;const img=document.createElement('img');img.src=a.href;img.loading='lazy';img.width=1600;img.height=1067;a.append(img);more.append(a)});
function setLanguage(next){
 lang=next;const t=translations[lang];document.documentElement.lang=lang;document.documentElement.dir=lang==='he'?'rtl':'ltr';
 document.querySelectorAll('[data-i]').forEach(el=>{el.innerHTML=t[el.dataset.i]});
 document.querySelectorAll('[data-alt]').forEach(el=>el.alt=t[el.dataset.alt]);
 document.querySelectorAll('.gallery-grid img').forEach((img,i)=>img.alt=t.galleryAlt+' '+(i+1));
 document.querySelectorAll('.languages a').forEach(a=>{if(a.lang===lang)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')});
 document.querySelector('.nav').setAttribute('aria-label',lang==='he'?'ניווט ראשי':lang==='fr'?'Navigation principale':'Main navigation');
 document.querySelector('.languages').setAttribute('aria-label',lang==='he'?'שפה':lang==='fr'?'Langue':'Language');
 document.querySelector('.close').setAttribute('aria-label',t.close);
 document.querySelector('meta[name="description"]').content=t.description;
 document.title=lang==='he'?'יקב זאב · Domaine du Loup':'Domaine du Loup · Yekev Zeev';
 document.getElementById('form-status').textContent='';
 try{localStorage.setItem('yekev-language',lang)}catch{}
}
setLanguage(lang);
document.querySelectorAll('.languages a').forEach(a=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();setLanguage(a.lang);const url=new URL(location.href);url.searchParams.set('lang',a.lang);history.pushState({},'',url)}));
addEventListener('popstate',()=>{const value=new URLSearchParams(location.search).get('lang');setLanguage(Object.hasOwn(translations,value)?value:'fr')});
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit',e=>{
 e.preventDefault();const data=new FormData(e.currentTarget);const t=translations[lang];
 const body=['firstName','lastName','email','phone','message','referral'].filter(key=>data.get(key)).map(key=>t[key]+': '+data.get(key)).join('\n\n');
 const mail='mailto:yekevzeev@gmail.com?subject='+encodeURIComponent('Domaine du Loup · '+data.get('firstName'))+'&body='+encodeURIComponent(body);
 document.getElementById('form-status').textContent=t.status;location.href=mail;
});
const dialog=document.getElementById('lightbox');let opener;let currentImage=0;
const galleryLinks=[...document.querySelectorAll('.gallery-grid a')];
const imageControls={fr:['Photo précédente','Photo suivante'],en:['Previous photograph','Next photograph'],he:['התמונה הקודמת','התמונה הבאה']};
function showImage(index){
 currentImage=(index+galleryLinks.length)%galleryLinks.length;
 const a=galleryLinks[currentImage];const caption=a.querySelector('img').alt;
 dialog.querySelector('img').src=a.href;dialog.querySelector('img').alt=caption;
 document.getElementById('image-caption').textContent=caption+' · '+(currentImage+1)+' / '+galleryLinks.length;
 const rtl=lang==='he';
 dialog.querySelector('.previous').setAttribute('aria-label',imageControls[lang][0]);
 dialog.querySelector('.next').setAttribute('aria-label',imageControls[lang][1]);
 dialog.querySelector('.previous').textContent=rtl?'→':'←';
 dialog.querySelector('.next').textContent=rtl?'←':'→';
}
galleryLinks.forEach((a,index)=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();opener=a;showImage(index);dialog.showModal()}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.querySelector('.previous').addEventListener('click',()=>showImage(currentImage-1));
dialog.querySelector('.next').addEventListener('click',()=>showImage(currentImage+1));
dialog.addEventListener('keydown',e=>{
 if(e.altKey||e.ctrlKey||e.metaKey||!['ArrowLeft','ArrowRight'].includes(e.key))return;
 e.preventDefault();const nextKey=lang==='he'?'ArrowLeft':'ArrowRight';showImage(currentImage+(e.key===nextKey?1:-1));
});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>opener?.focus());
const header=document.querySelector('.header');
new ResizeObserver(()=>document.documentElement.style.setProperty('--header-height',header.getBoundingClientRect().height+'px')).observe(header);
