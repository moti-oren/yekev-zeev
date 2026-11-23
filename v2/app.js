'use strict';
const translations={
en:{tastingCta:"Plan a group tasting",aboutLink:"The winery and its wines",kosher:"Kosher lemehadrin wines",skip:'Skip to content',navAbout:'The winery',navGallery:'In pictures',navContact:'Contact us',place:'KIRYAT YEARIM · JUDEAN HILLS',hero:'Wine brings<br>people together.',intro:"Thoughtfully hosted wine tastings for groups, arranged in advance. Private tastings for couples may also be available — ask Zeev.",discover:'Discover the winery',talk:'Get in touch with Zeev',since:'A passion born in 2011',heroAlt:'A crate of freshly harvested grapes being carried in the vineyard',photoCaption:'It all begins in the vineyard.',storyLabel:'THE WINERY',storyTitle:'A winemaker in the Judean hills.',winemaker:'Winemaker',storyLead:'Welcome to Domaine du Loup, also known as Yekev Zeev.',story1:'Zeev Zyzek founded the winery in 2011 in Kiryat Yearim, in the Judean hills near Jerusalem. His love of God’s creations and his connection to the study of Torah and Talmud inspire his exploration of the world of wine.',story2:"Grapes are carefully selected from vineyards in the region and the Golan. Cabernet Sauvignon, Merlot, Petite Syrah and Carignan each express their own character. Time in French oak barrels helps their personality develop. The winery also makes white wines and a Port-style wine.",storyNote:'We look forward to meeting you and sharing our passion.',galleryLabel:"THE TASTINGS",galleryTitle:"The pleasure of sharing wine.",galleryIntro:"Welcoming gatherings around the winery’s wines. Get in touch with Zeev to arrange a group tasting.",morePhotos:'See all photographs',contactLabel:"YOUR WINE TASTING",contactTitle:"Let’s plan your tasting.",contactIntro:"To arrange a group tasting, write to Zeev and tell him about your gathering. You can also ask about private tastings for couples.",location:'Kiryat Yearim · Judean Hills · Israel',map:'Find us on the map ↗',firstName:'First name',lastName:'Last name',email:'Email',phone:'Phone (optional)',message:'Your message',referral:'How did you hear about us? (optional)',formNote:'This form prepares an email in your email app. You can review it before sending.',send:'Prepare my email ↗',top:'Back to top ↑',close:'Close photograph',galleryAlt:'Wine tasting at Domaine du Loup — photograph',status:'Your email app has been requested to open. If nothing happens, email yekevzeev@gmail.com directly. Your message has not been sent by this website.',description:"Domaine du Loup in Kiryat Yearim: group tastings by appointment, kosher lemehadrin wines, red and white wines and a Port-style wine."},
he:{tastingCta:"לתיאום טעימות עם זאב",aboutLink:"על היקב והיינות",kosher:"יינות כשרים למהדרין",skip:'דילוג לתוכן',navAbout:'היקב שלנו',navGallery:'בתמונות',navContact:'יצירת קשר',place:'קריית יערים · הרי יהודה',hero:'יין טוב.<br>אנשים טובים.<br>סיפור משותף.',intro:"אירועי טעימות יין מפנקים לקבוצות, ברמה גבוהה ובתיאום מראש. לעיתים מתקיימות גם טעימות פרטיות לזוגות — דברו עם זאב.",discover:'להכיר את היקב',talk:'לדבר עם זאב',since:'אהבה ליין, מאז 2011',heroAlt:'ארגז ענבים שנבצרו, נישא בין שורות הגפנים',photoCaption:'הכול מתחיל בכרם.',storyLabel:'הסיפור שלנו',storyTitle:'יקב אישי בהרי יהודה.',winemaker:'יינן',storyLead:'ברוכים הבאים ליקב זאב, הידוע גם בשם <bdi lang="fr" dir="ltr">Domaine du Loup</bdi>.',story1:'זאב זיזעק הקים את היקב בשנת 2011 בקריית יערים, בהרי יהודה הסמוכים לירושלים. אהבתו ליצירותיו של ה׳ וחיבורו ללימוד התורה והתלמוד מלווים את מסעו אל עולם היין.',story2:"הענבים נבחרים בקפידה מכרמי האזור ומרמת הגולן. קברנה סוביניון, מרלו, פטיט סירה וקריניאן מביאים כל אחד אופי משלו. היישון בחביות עץ אלון צרפתי מאפשר ליין להתפתח ולהעמיק. לצד היינות האדומים, היקב מייצר גם יינות לבנים ויין בסגנון פורט.",storyNote:'נשמח להכיר אתכם ולחלוק איתכם את האהבה שלנו ליין. לחיים!',galleryLabel:"טעימות ומפגשים",galleryTitle:"נפגשים סביב היין.",galleryIntro:"מפגשים מפנקים סביב יינות היקב, באווירה אישית ונעימה. לתיאום טעימות לקבוצה, דברו עם זאב.",morePhotos:'לכל התמונות',contactLabel:"לתיאום טעימות",contactTitle:"נתאם לכם מפגש סביב היין.",contactIntro:"לתיאום אירוע טעימות לקבוצה, כתבו לזאב וספרו מעט על המפגש שתרצו. אפשר לברר גם על טעימות פרטיות לזוגות.",location:'קריית יערים · הרי יהודה · ישראל',map:'למיקום במפה ↗',firstName:'שם פרטי',lastName:'שם משפחה',email:'דוא״ל',phone:'טלפון (לא חובה)',message:'ההודעה שלכם',referral:'איך שמעתם עלינו? (לא חובה)',formNote:'הטופס מכין הודעה בתוכנת הדואר שלכם. תוכלו לעבור עליה לפני השליחה.',send:'הכנת הודעת דוא״ל ↗',top:'בחזרה למעלה ↑',close:'סגירת התמונה',galleryAlt:'טעימת יין ביקב זאב — תמונה',status:'נשלחה בקשה לפתוח את תוכנת הדואר שלכם. אם לא נפתח דבר, כתבו ישירות אל yekevzeev@gmail.com. ההודעה לא נשלחה דרך האתר.',description:"יקב זאב בקריית יערים: טעימות מפנקות לקבוצות בתיאום מראש, יינות כשרים למהדרין, יינות אדומים ולבנים ויין בסגנון פורט."}
};
const fr={};
document.querySelectorAll('[data-i]').forEach(el=>fr[el.dataset.i]=el.innerHTML);
fr.heroAlt=document.querySelector('[data-alt]').alt;
Object.assign(fr,{close:'Fermer la photo',galleryAlt:'Dégustation au Domaine du Loup — photo',status:'Votre messagerie a été sollicitée. Si elle ne s’ouvre pas, écrivez directement à yekevzeev@gmail.com. Aucun message n’a été envoyé par ce site.',description:document.querySelector('meta[name="description"]').content});
translations.fr=fr;
const query=new URLSearchParams(location.search).get('lang');
let saved;try{saved=localStorage.getItem('yekev-language')}catch{}
let lang=Object.hasOwn(translations,query)?query:Object.hasOwn(translations,saved)?saved:'fr';
// All personal photographs, with one entry per image and translated descriptions.
const galleryPhotos=[
 {
  "id": "sharing",
  "src": "photos/shared-tasting.jpg",
  "width": 1600,
  "height": 1200,
  "caption": {
   "fr": "Des dégustations en groupe",
   "en": "Group wine tastings",
   "he": "טעימות יין לקבוצות"
  },
  "alt": {
   "fr": "Un groupe réuni autour de la table pour une dégustation de vin",
   "en": "A group gathered around the table for a wine tasting",
   "he": "מפגש טעימות יין סביב שולחן משותף"
  }
 },
 {
  "id": "bottle",
  "src": "photos/white-wine.jpg",
  "width": 1200,
  "height": 1600,
  "caption": {
   "fr": "Les vins du domaine",
   "en": "The wines of the winery",
   "he": "יינות היקב"
  },
  "alt": {
   "fr": "Une bouteille de Gewurztraminer–Viognier 2024 du Domaine du Loup, étiquette de face",
   "en": "A bottle of Domaine du Loup Gewurztraminer–Viognier 2024 with its front label visible",
   "he": "בקבוק גוורצטרמינר–ויונייה 2024 של יקב זאב, עם התווית הקדמית"
  }
 },
 {
  "id": "vineyard",
  "src": "photos/vineyard-work.jpg",
  "width": 1200,
  "height": 1600,
  "caption": {
   "fr": "Le travail à la vigne",
   "en": "Working in the vineyard",
   "he": "העבודה בכרם"
  },
  "alt": {
   "fr": "Observation au réfractomètre au milieu des vignes",
   "en": "Looking through a refractometer among the vines",
   "he": "בדיקה ברפרקטומטר בין שורות הגפנים"
  }
 },
 {
  "id": "harvest",
  "src": "photos/harvest.jpg",
  "width": 1200,
  "height": 1600,
  "caption": {
   "fr": "Au moment des vendanges",
   "en": "At harvest time",
   "he": "בזמן הבציר"
  },
  "alt": {
   "fr": "Une cagette de raisins fraîchement récoltés portée dans les vignes",
   "en": "A crate of freshly harvested grapes carried among the vines",
   "he": "ארגז ענבים שנבצרו, נישא בין שורות הגפנים"
  }
 },
 {
  "id": "har-adar-1",
  "src": "har-adar-1.jpg",
  "width": 1800,
  "height": 1200,
  "caption": {
   "fr": "Le service du vin",
   "en": "Pouring the wine",
   "he": "מוזגים את היין"
  },
  "alt": {
   "fr": "Du vin rouge servi à des participants lors d’une dégustation en plein air",
   "en": "Red wine being poured for guests at an outdoor tasting",
   "he": "מזיגת יין אדום למשתתפים בטעימה באוויר הפתוח"
  }
 },
 {
  "id": "har-adar-2",
  "src": "har-adar-2.jpg",
  "width": 1800,
  "height": 1200,
  "caption": {
   "fr": "Un échange autour d’un verre",
   "en": "A conversation over wine",
   "he": "שיחה סביב כוס יין"
  },
  "alt": {
   "fr": "Une conversation autour de bouteilles du domaine pendant une dégustation",
   "en": "A conversation around the winery’s bottles during a tasting",
   "he": "שיחה סביב בקבוקי היקב במהלך מפגש טעימות"
  }
 },
 {
  "id": "har-adar-3",
  "src": "har-adar-3.jpg",
  "width": 1800,
  "height": 1200,
  "caption": {
   "fr": "Une dégustation en plein air",
   "en": "An outdoor wine tasting",
   "he": "טעימות באוויר הפתוח"
  },
  "alt": {
   "fr": "Des participants réunis autour d’une table avec les vins du domaine",
   "en": "Guests gathered around a table with the winery’s wines",
   "he": "משתתפים סביב שולחן עם יינות היקב"
  }
 },
 {
  "id": "tasting",
  "src": "har-adar-4.jpg",
  "width": 1800,
  "height": 1200,
  "caption": {
   "fr": "Un instant de dégustation",
   "en": "A moment of tasting",
   "he": "רגע של טעימה"
  },
  "alt": {
   "fr": "Un dégustateur portant un verre de vin à son nez en plein air",
   "en": "A taster bringing a glass of wine to his nose outdoors",
   "he": "טעימת יין באוויר הפתוח, עם כוס המובאת אל האף"
  }
 },
 {
  "id": "har-adar-5",
  "src": "har-adar-5.jpg",
  "width": 1800,
  "height": 1200,
  "caption": {
   "fr": "Les vins face aux collines",
   "en": "Wine and a view of the hills",
   "he": "יינות מול נוף הגבעות"
  },
  "alt": {
   "fr": "Deux bouteilles du Domaine du Loup et un verre de vin devant un paysage de collines",
   "en": "Two Domaine du Loup bottles and a glass of wine overlooking the hills",
   "he": "שני בקבוקי יקב זאב וכוס יין על רקע נוף גבעות"
  }
 },
 {
  "id": "har-adar-6",
  "src": "har-adar-6.jpg",
  "width": 1800,
  "height": 1200,
  "caption": {
   "fr": "La table de dégustation",
   "en": "The tasting table",
   "he": "שולחן הטעימות"
  },
  "alt": {
   "fr": "Des bouteilles du domaine, des verres et des accompagnements sur une table en bois",
   "en": "Winery bottles, glasses and refreshments on a wooden table",
   "he": "בקבוקי היקב, כוסות וכיבוד על שולחן עץ"
  }
 },
 {
  "id": "har-adar-7",
  "src": "har-adar-7.jpg",
  "width": 1800,
  "height": 1200,
  "caption": {
   "fr": "Une rencontre autour des vins",
   "en": "Gathering around the wines",
   "he": "נפגשים סביב יינות היקב"
  },
  "alt": {
   "fr": "Un homme assis derrière les bouteilles du domaine et la table de dégustation",
   "en": "A man seated behind the winery’s bottles and tasting table",
   "he": "אדם יושב מאחורי בקבוקי היקב ושולחן הטעימות"
  }
 },
 {
  "id": "har-adar-8",
  "src": "har-adar-8.jpg",
  "width": 1800,
  "height": 1200,
  "caption": {
   "fr": "Les bouteilles du domaine",
   "en": "The winery’s bottles",
   "he": "בקבוקי היקב"
  },
  "alt": {
   "fr": "Des bouteilles du Domaine du Loup disposées près de verres sur la table",
   "en": "Domaine du Loup bottles arranged beside glasses on the table",
   "he": "בקבוקי יקב זאב לצד כוסות על שולחן הטעימות"
  }
 },
 {
  "id": "har-adar-9",
  "src": "har-adar-9.jpg",
  "width": 1800,
  "height": 1200,
  "caption": {
   "fr": "Le partage et les échanges",
   "en": "Sharing and conversation",
   "he": "משתפים ומשוחחים"
  },
  "alt": {
   "fr": "Des participants échangent autour de la table lors d’une dégustation en extérieur",
   "en": "Guests talking around the table during an outdoor tasting",
   "he": "שיחה בין משתתפים סביב השולחן במפגש טעימות בחוץ"
  }
 },
 {
  "id": "tent",
  "src": "photos/group-tasting-tent.jpg",
  "width": 1200,
  "height": 1600,
  "caption": {
   "fr": "Une dégustation en groupe",
   "en": "A group tasting",
   "he": "מפגש טעימות לקבוצה"
  },
  "alt": {
   "fr": "Des participants autour d’une table de dégustation sous une tente",
   "en": "Guests around a tasting table inside a tent",
   "he": "משתתפים סביב שולחן טעימות בתוך אוהל"
  }
 },
 {
  "id": "cellar",
  "src": "photos/cellar-tasting.jpg",
  "width": 1086,
  "height": 1448,
  "caption": {
   "fr": "Une dégustation entre les cuves",
   "en": "A tasting among the tanks",
   "he": "טעימה בין מכלי יין"
  },
  "alt": {
   "fr": "Trois personnes dégustent du vin entre des cuves en inox",
   "en": "Three people tasting wine among stainless-steel tanks",
   "he": "שלושה אנשים טועמים יין בין מכלי נירוסטה"
  }
 },
 {
  "id": "cheese",
  "src": "photos/wine-and-cheese.jpg",
  "width": 1600,
  "height": 1204,
  "caption": {
   "fr": "Les vins à table",
   "en": "Wine at the table",
   "he": "היינות סביב השולחן"
  },
  "alt": {
   "fr": "Des bouteilles du domaine et des plateaux de fromages sur une table de dégustation",
   "en": "Winery bottles and cheese platters on a tasting table",
   "he": "בקבוקי היקב ומגשי גבינות על שולחן טעימות"
  }
 },
 {
  "id": "table-detail",
  "src": "photos/tasting-table-detail.jpg",
  "width": 1600,
  "height": 1204,
  "caption": {
   "fr": "Les détails du partage",
   "en": "Details of the gathering",
   "he": "פרטים ממפגש טעימות"
  },
  "alt": {
   "fr": "Des verres, des bouteilles de vin et des fromages sur la table",
   "en": "Glasses, wine bottles and cheese on the table",
   "he": "כוסות, בקבוקי יין וגבינות על השולחן"
  }
 },
 {
  "id": "back-label",
  "src": "photos/white-wine-back-label.jpg",
  "width": 1200,
  "height": 1600,
  "caption": {
   "fr": "L’étiquette du vin blanc",
   "en": "The white wine’s back label",
   "he": "התווית האחורית של היין הלבן"
  },
  "alt": {
   "fr": "Le dos d’une bouteille de Gewurztraminer–Viognier du Domaine du Loup",
   "en": "The back label of a Domaine du Loup Gewurztraminer–Viognier bottle",
   "he": "התווית האחורית של בקבוק גוורצטרמינר–ויונייה של יקב זאב"
  }
 },
 {
  "id": "paris-tasting",
  "src": "photos/tasting-in-paris.jpg",
  "width": 1600,
  "height": 1204,
  "caption": {
   "fr": "Un instant à Paris",
   "en": "A moment in Paris",
   "he": "רגע בפריז"
  },
  "alt": {
   "fr": "Une personne tenant une bouteille du domaine devant la tour Eiffel",
   "en": "A person holding a winery bottle in front of the Eiffel Tower",
   "he": "אדם אוחז בבקבוק של היקב על רקע מגדל אייפל"
  }
 },
 {
  "id": "paris-syrah",
  "src": "photos/petite-syrah-in-paris.jpg",
  "width": 1204,
  "height": 1600,
  "caption": {
   "fr": "La Petite Syrah à Paris",
   "en": "Petite Syrah in Paris",
   "he": "פטיט סירה בפריז"
  },
  "alt": {
   "fr": "Une bouteille de Petite Syrah 2023 du Domaine du Loup devant la tour Eiffel",
   "en": "A Domaine du Loup Petite Syrah 2023 bottle in front of the Eiffel Tower",
   "he": "בקבוק פטיט סירה 2023 של יקב זאב על רקע מגדל אייפל"
  }
 },
 {
  "id": "paris",
  "src": "photos/wines-in-paris.jpg",
  "width": 1204,
  "height": 1600,
  "caption": {
   "fr": "Les vins du domaine à Paris",
   "en": "The winery’s wines in Paris",
   "he": "יינות היקב בפריז"
  },
  "alt": {
   "fr": "Deux bouteilles du Domaine du Loup devant la tour Eiffel à Paris",
   "en": "Two Domaine du Loup bottles in front of the Eiffel Tower in Paris",
   "he": "שני בקבוקי יקב זאב על רקע מגדל אייפל בפריז"
  }
 },
 {
  "id": "selection",
  "src": "photos/tasting-selection.jpg",
  "width": 1204,
  "height": 1600,
  "caption": {
   "fr": "Une sélection pour la dégustation",
   "en": "A selection for tasting",
   "he": "מבחר יינות לטעימה"
  },
  "alt": {
   "fr": "Une sélection de bouteilles du Domaine du Loup disposées sur une table de dégustation",
   "en": "A selection of Domaine du Loup bottles arranged on a tasting table",
   "he": "מבחר בקבוקי יקב זאב על שולחן טעימות"
  }
 }
];
const more=document.getElementById('more-photos');
galleryPhotos.slice(3).forEach(photo=>{
 const figure=document.createElement('figure');figure.dataset.photo=photo.id;
 const a=document.createElement('a');a.href='assets/'+photo.src;
 const img=document.createElement('img');img.src=a.href;img.loading='lazy';img.decoding='async';img.width=photo.width;img.height=photo.height;
 a.append(img);figure.append(a,document.createElement('figcaption'));more.append(figure);
});
function setLanguage(next){
 lang=next;const t=translations[lang];document.documentElement.lang=lang;document.documentElement.dir=lang==='he'?'rtl':'ltr';
 document.querySelectorAll('[data-i]').forEach(el=>{el.innerHTML=t[el.dataset.i]});
 document.querySelectorAll('[data-alt]').forEach(el=>el.alt=t[el.dataset.alt]);
 document.querySelectorAll('.gallery-grid figure').forEach(figure=>{
  const photo=galleryPhotos.find(photo=>photo.id===figure.dataset.photo);
  figure.querySelector('img').alt=photo.alt[lang];figure.querySelector('figcaption').textContent=photo.caption[lang];
 });
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
// Remember the resolved language even when the URL has no language parameter.
// Fragment navigation can also fire popstate; it must not reset the language.
history.replaceState({...history.state,language:lang},'',location.href);
let languageRoute=location.pathname+location.search;
document.querySelectorAll('.languages a').forEach(a=>a.addEventListener('click',e=>{if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();setLanguage(a.lang);const url=new URL(location.href);url.searchParams.set('lang',a.lang);history.pushState({...history.state,language:a.lang},'',url);languageRoute=location.pathname+location.search}));
addEventListener('popstate',event=>{
 const route=location.pathname+location.search;
 // A hash-only history change is navigation within the current language.
 if(route!==languageRoute){
  const value=new URLSearchParams(location.search).get('lang');
  const previous=event.state?.language;
  const next=Object.hasOwn(translations,value)?value:Object.hasOwn(translations,previous)?previous:lang;
  if(next!==lang)setLanguage(next);
  languageRoute=route;
 }
 // Browsers may create fragment entries without copying the previous state.
 history.replaceState({...history.state,language:lang},'',location.href);
});
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
 const counter=document.createElement('bdi');counter.dir='ltr';counter.textContent=(currentImage+1)+' / '+galleryLinks.length;
 document.getElementById('image-caption').replaceChildren(document.createTextNode(caption+' · '),counter);
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

// Mark the section crossing a reading line 30% down the viewport.
// The logo and introduction have no navigation item, so they clear the marker.
const navigationLinks=[...document.querySelectorAll('.nav a')];
const navigationSections=[...document.querySelectorAll('main > section[id]')];
function updateNavigationLocation(){
 const readingLine=innerHeight*.3;
 const current=navigationSections.find(section=>{
  const bounds=section.getBoundingClientRect();
  return bounds.top<=readingLine&&bounds.bottom>readingLine;
 });
 navigationLinks.forEach(link=>{
  if(current&&link.hash==='#'+current.id)link.setAttribute('aria-current','location');
  else link.removeAttribute('aria-current');
 });
}
if('IntersectionObserver' in window){
 let navigationObserver;
 function observeNavigationSections(){
  navigationObserver?.disconnect();
  const top=Math.floor(innerHeight*.3);
  const bottom=innerHeight-top-1;
  navigationObserver=new IntersectionObserver(updateNavigationLocation,{
   rootMargin:`-${top}px 0px -${bottom}px 0px`,threshold:0
  });
  navigationSections.forEach(section=>navigationObserver.observe(section));
  updateNavigationLocation();
 }
 observeNavigationSections();
 let navigationResizeFrame;
 addEventListener('resize',()=>{
  cancelAnimationFrame(navigationResizeFrame);
  navigationResizeFrame=requestAnimationFrame(observeNavigationSections);
 });
}else{
 addEventListener('scroll',updateNavigationLocation,{passive:true});
 addEventListener('resize',updateNavigationLocation);
 updateNavigationLocation();
}
