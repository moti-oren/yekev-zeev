# יקב זאב — גרסת עיצוב חדשה

אתר סטטי עם דף HTML אחד, קובץ עיצוב, קובץ JavaScript ותמונות מהאתר הקיים.

## צפייה ושימוש

אפשר לפתוח את `dist/index.html` בדפדפן. להעלאה לאחסון רגיל יש להעלות את **תוכן** תיקיית `dist` לתיקייה הציבורית של האתר, לאחר גיבוי הגרסה הקודמת.

אין צורך בהתקנת ספריות או בתהליך build. האתר הישן והדומיין לא שונו.

## מה כלול

- צרפתית בביקור הראשון, אנגלית ועברית עם כיווניות RTL.
- זיכרון בחירת שפה וקישורים ישירים `?lang=fr`, `?lang=en`, `?lang=he`.
- סיפור היקב, גלריה נפתחת וקישור למפה מהאתר המקורי.
- טופס שמכין הודעת mailto, וכתובת דוא״ל גלויה. אין שרת ששולח הודעות ואין שמירה של פרטי הטופס באתר.
- כותרות סמנטיות, קישור דילוג, תוויות שדות, מיקוד מקלדת, תמיכה בהפחתת תנועה וחלונית תמונות שנסגרת ב-Escape.
- תמונות מוקטנות וטעינה עצלה לגלריה; אין גופנים או ספריות שנטענים מצד שלישי.

## תוכן ועריכה

התוכן והנכסים התבססו על https://yekev-zeev.com/ ועל קובץ השפות שלו, כפי שנקראו ב-27 בספטמבר 2026. הטקסט נערך וקוצר מחדש בשלוש שפות. מומלץ שהיינן יאשר שהפרטים והניסוחים עדיין עדכניים לפני החלפת האתר הציבורי.

הטקסט הצרפתי נמצא ב-`dist/index.html`. תרגומי האנגלית והעברית נמצאים ב-`dist/app.js`. העיצוב נמצא ב-`dist/styles.css`.

## מגבלות והמשך

- בדיקת נגישות מלאה עם קורא מסך טרם בוצעה; אין כאן הצהרה על עמידה מלאה בתקן.
- תרגומי השפות מופעלים ב-JavaScript; ללא JavaScript התוכן הצרפתי וכתובת הדוא״ל זמינים. שיפור SEO מלא לכל שפה יכול לכלול בהמשך כתובות ודפי HTML ייעודיים.
- טופס הפנייה דורש תוכנת דוא״ל מוגדרת. לשליחה ישירה מהאתר נדרש שירות פניות או צד שרת.
- לא פורסמה גרסה מקוונת: רכיב הפרסום המקומי של Sites הפסיק להיות זמין במהלך העבודה. קובצי האתר נשמרו במלואם.

## טקסטורת היין
נוצרה באמצעות כלי יצירת התמונות המובנה. הקובץ: dist/assets/wine-stains.png.
הנחיית היצירה: Transparent decorative wine-stain overlay for an elegant boutique winery website. Wide landscape composition, a single delicate incomplete red-wine glass-base ring cropped by the lower left edge, and three small irregular wine droplets near the upper right edge. Natural dried wine pigment, faint muted burgundy, organic capillary edges, translucent texture. Central 70% completely transparent and empty for an existing logo. No paper, text, logo, glass, objects or shadows. Minimal marks confined to peripheral corners. Standalone texture, not a website mockup.


עדכון טקסטורה: dist/assets/wine-stains-v2.png, נוצרה בכלי התמונות המובנה. הנחיה: Transparent landscape winery overlay, one complete natural dried red wine glass-base ring in the lower left, three irregular elongated wine droplets in upper right, all within canvas margins, clear central 65%, muted garnet pigment, no text, objects or background. מוצגת במצב contain ללא חיתוך.


הגרסה הפעילה משתמשת שוב ב-wine-stains.png המקורי: הכתמים מוצגים מיד ובאופן קבוע, ללא אנימציה וללא וידאו. הטבעת והטיפות מעוגנות בנפרד לשולי מסך הפתיחה כדי למנוע חיתוך עליון.

