// alert weapon
let alertTitleWeapon = "בטרם פעולה כלשהי, נקוט את אמצעי הבטיחות המפורטים להלן :";
let alertTextWeapon1 = `1) טרם הבדיקה הטכנית נדרש לבצע בדיקת פריקה לכלי הנשק עפ"י הוראות מבק"א <br> 2) אסורה הימצאות תחמושת למעט תחמושת תרגול (כדורי תרגול) באזור התיקון והטיפול בכלי הנשק. <br>
3) מחסן כלי הנשק חייב להיות מאוורר בעת העבודה. <br> 4) ניקוי כלי הנשק יבוצע בתערובת 9345 בלבד. <br>`;
let alertTextWeapon2 = ` 5) במחסן הנשק או במקום תיקון הנשק ניתן לפרוק כלי נשק אישיים ואקדחים לתוך ארגז חול ים.
מידות הארגז (אורך x רוחב או קוטר) יהיו לפחות 40 ס"מ וגובה שכבת החול יהיה לפחות 40 ס"מ. החול יהיה יבש וללא גושים. את הארגז יש לצבוע בצבע בולט (אדום, צהוב) ולשלט אותו בשלט עמיד מעץ או ממתכת - "עמדת פריקה, אין להשליך פסולת". <br>
6) אסור לטבול את המחסנית בתערובת ניקוי ואסור לשמנה כשהיא טעונה כדורים. <br> 7) לאחר סיום הבדיקות הטכניות נצור את כלי הנשק בהתאם להוראות מבק"א`;
// arr subject
var arrSubjectWeapon = ["טיפול יומי", "טיפול מעמיק (שבועי)", "טיפול ובדיקה בעת זיכוי"];
// arr execution
var arrExecutionWeapon = [`א) פרק את כלי הנשק פירוק ראשוני מותר למפעיל כאמור בהו"ק נק"ל/א-2000 והקפד על הפרדת מכללי כלי הנשק מכלי נשק אחרים. <br> ב) נקה את כלי הנשק באמצעות אבזרים ייעודים ותקינים. <br> ג) נקה פיח, חול, אבק ושמן ישן באמצעות מגבוני שימון. אם כלי הנשק מלוכלך מאוד, נקה אותו בתערובת ניקוי 9345, המורכבת מ- 90% ספירט לבן ו- 10% שמן מונע חלודה. <br> ד) נקה את קדח הקנה באחת מהשיטות האלה : <br> <span class="bold">1) באמצעות שרביט ניקוי</span> <br> א) הכנס את השרביט ללא פלנלית לתוך הקנה מצד הלוע עד ליציאת השרביט מבית הבליעה <br> ב) הכנס פלנלית ברוחב המתאים (מלבן אחד לנשק 5.56 מ"מ ושני מלבנים לנשק 7.62 מ"מ) ומשוך השרביט לאחר לניקוי הקנה. <br> `,
    `<span class="bold">א) לכלי נשק ואבזרים ברשות המפעיל</span> <br> 1) בצע טיפול מפעיל. <br> 2) פרק את כלי הנשק פירוק משני כאמור בהו"ק נק"ל/א-2000, הפרד את מכללי כלי הנשק מכלי נשק אחרים ובדוק כמפורט להלן : <br> 3) ודא שלימות החלקים <br> 4) ודא שקדח הקנה פנוי ואין בו פגמים כגון משקעים, נפיחות ואיכול. <br> 5) בדוק התאמה של המספרים הטבועים. <br> 6) בדוק חזותית נקיון המחסנית והתחמושת בתוכה מחול, שמן וכו'. <br> 7) ודא ניקיון ושלימות של הכדורים העליונים במחסנית וקפיציות הכדורים בלחיצה ע"ג הכדורים במחסנית. <br> 8) ברוס"ר וברוס"ק M16 ובגליל הסר את המתפסים, נקה אותם ונקה את הקנה חיצונית. <br> 9) הרכב את הכלי ובצע בדיקת תפעול ידנית. <br>`,
    `א) לאחר הטיפול המעמיק, ייבדק כלי הנשק כשהוא מפורק, נקי ויבש ע"י המפקד הישיר של החייל, כלהלן: <br> 1) מצב הטיפול בכלי הנשק, נקיונו ושלימות חלקיו. <br> 2) וידוא שלא הוחלפו חלקים או מכללים בעלי מספר טבוע. <br> ב) בתום הביקורת, שמן את החלקים והרכב את כלי הנשק.`];
var arrSubjectNegev = ["פירוק", "הרכבה", "טיפול מונע (יומי)", "טיפול שבועי"];
var arrExecutionNegev = ["פרק את הנגב פירוק חייל, לפי הסדר הבא: <br> פתח מכסה גוף, פרק קנה, הוצא קת, קפיץ מחזיר ומחלק.",
    "הרכב את הנגב, לפי הסדר הבא: <br> הכנס קנה, הכנס מחלק, קפיץ מחזיר ובסוף נכניס את הקת.",
    "אחזקה מונעת נכונה מתחילה בהקפדה על הטיפול היומי. הטיפול חייב להתבצע יום יום גם אם אין כלי הנשק נמצא בשימוש שוטף. <br> 1) בצע פירוק המותר למפעיל. <br> 2) נקה את כל חלקי המערכת הנעה בפלנלית ספוגה בשמן 9105. <br> 3) העבר פלנלית ספוגה בשמן מונע חלודה דרך קדח הקנה. חזור על פעולה זו, עד שהפלנלית תישאר ללא סימני פיח או לכלוך. <br> 4) נקה היטב את שאר חלקי המקלע, לרבות הדורגלים, מכסה גוף, צילינדר הגזים ובית ווסת הגזים, באמצעות פלנלית ספוגה בשמן מונע חלודה. <br> 5) השתמש במפתח כל-בו לניקוי הפיח מטבעות בוכנת הגזים, מווסת הגזים ובית וסת הגזים. ",
    `הטיפול השבועי במקלע האחיד יבוצע כמו הטיפול היומי, ובתוספת פעולות אלה: <br> 1) בדוק בראייה את פני-הסדן וודא שנקב-המקור עגול ואינו פגום. <br> 2) את המקלע יש לפרק בהתאם לפירוק המותר לחייל ולבצע בו את הטיפול הדרוש, כמפורט להלן. <br> 3) נקה את קדח-הקנה, בעזרת שרבים או משחלת עם פלנלית. <br> 4) נקה את קדח הקנה על-ידי העברת פלנלית ספוגת שמן מונע- חלודה מס' 9105 <br> 5) נקה את בית-הבליעה באמצעות חומר ניקוי ופלנלית ספוגת שמן <br> הערה: לאחר ירייה יש לנקות את הקנה שלושה ימים בזה אחר זה לפחות, בעזרת שמן  <br> 6) נקה את וסת-הגזים, את בית-וסת-הגזים ואת ראש הבוכנה משיירי-פיח שנצטברו עליהם, בעזרת המגרדות המתאימות.`];

var arrSubjectMag = ["פירוק", "הרכבה", "טיפול יומי", "טיפול שבועי"];
var arrExecutionMag = ["פרק את המאג פירוק חייל, לפי הסדר הבא: <br> פרק קנה, הוצא קת, קפיץ מחזיר ומחלק.",
    "הרכב את המאג, לפי הסדר הבא: <br> הכנס קנה, הכנס מחלק, קפיץ מחזיר ובסוף נכניס את הקת.",
    "1) נגב את כל החלקים המפורקים - משמן, מאבק או מכל זוהמה אחרת - במטלית (או בפלנלית)  <br> 2) נקה את קדח-הקנה <br> 3) נקה את בית-הבליעה <br> 4)  נגב את כל חלקי-מערכת-הגזים ובדוק",
    `הטיפול השבועי במקלע האחיד יבוצע כמו הטיפול היומי, ובתוספת פעולות אלה: <br> 1) בדוק בראייה את פני-הסדן וודא שנקב-המקור עגול ואינו פגום. <br> 2) את המקלע יש לפרק בהתאם לפירוק המותר לחייל ולבצע בו את הטיפול הדרוש, כמפורט להלן. <br> 3) נקה את קדח-הקנה, בעזרת שרבים או משחלת עם פלנלית. <br> 4) נקה את קדח הקנה על-ידי העברת פלנלית ספוגת שמן מונע- חלודה מס' 9105 <br> 5) נקה את בית-הבליעה באמצעות חומר ניקוי ופלנלית ספוגת שמן <br> הערה: לאחר ירייה יש לנקות את הקנה שלושה ימים בזה אחר זה לפחות, בעזרת שמן  <br> 6) נקה את וסת-הגזים, את בית-וסת-הגזים ואת ראש הבוכנה משיירי-פיח שנצטברו עליהם, בעזרת המגרדות המתאימות.`];

let executionWeaponCommander = `א) לאחר הטיפול המעמיק, ייבדק כלי הנשק כשהוא מפורק, נקי ויבש ע"י המפקד הישיר של החייל, כלהלן: <br> 1) מצב הטיפול בכלי הנשק, נקיונו ושלימות חלקיו. <br> 2) וידוא שלא הוחלפו חלקים או מכללים בעלי מספר טבוע. <br> ב) בתום הביקורת, שמן את החלקים והרכב את כלי הנשק.`;
let arrExecutaionLong = [`2) <span class="bold">באמצעות משחולת</span> <br> א) הכנס פלנלית ברוחב המתאים (מלבן אחד ל5.56 מ"מ ו- 2 מלבנים ל- 7.62 מ"מ) ללולאה הקרובה למשקולת. <br> ב) השחל המשקולת לקנה מצד בית הבליעה ומשוך החבל מצד הלוע בקו ישר עם כיוון הקנה. <br> ג) אם הפלנלית נתקעה בבית הבליעה, היעזר בלולאה שבקצה החבל ומשוך המשחולת לאחור. <br> ד) נקה את בית הבליעה באמצעות מברשת פליז ייעודית.`,
    `<br> ה) נקה את מערכת הגזים באמצעות האבזרים הייעודים. <br> ו) סוך את קדח הקנה באמצעות פיסת פלנלית, שרוחבה שליש מהדרוש לניקוי קדח הקנה והיא רוויה בשמן 9105. <br> ז) ודא תנועה חופשית של הנוקר ע"י הנעת הבריח ידנית. <br> ח) שמן את מכללי הנשק המתכתיים בשכבה דקה במגבוני שימון או בפלנלית שהוטבלה בשמן. <br> ט) הרכב את כלי הנשק תוך הקפדה שלא להחליף את מכלליו במכללים של כלי נשק אחרים. <br> י) בצע בדיקת תפעול תוך נקיטת אמצעי הזהירות המתאימים.`,
    ` <span class="bold">ב) לכלי נשק בנשקייה</span> <br> 1) ודא חזותית היעדר חלודה בכלי נשק, בדגש על הקנה. אם קיימת, הסר אותה בעזרת פלנלית ספוגה בשמן או בתערובת ניקוי 9345 ושמן את אזורי החלודה בשכבה דקה. <br> 2) ודא היעדר לכלוך, פיח וחלודה בזווד, בערכות הנשק ובתיקי הכל-בו. אם יש ליקויים, בצע טיפול מתאים ושמן בשכבה דקה. <br> <br> <b>בקש מהמפקד שיבצע בדיקה ויחתום בעמוד הבא</b>`,
    `א) ודא שהחייל ביצע פירוק משני כאמור בהו"ק נק"ל/א-2000, תוך הקפדה על הפרדת מכללי הנשק מכלי נשק אחרים, וודא חזותית : <br> 1) הועבר חוטר <br> 2) היעדר פיח בכלי הנשק, לרבות בבריח והבוכנה. <br> 3) היעדר חלודה <br> 4) הנשק נקי ומשומן כראוי. <br> 5) היעדר לכלוך, פיח וחלודה בזווד, בערכות הנשק ובתיקי הכל-בו. <br> ב) בתום הטיפול יש לבצע בדיקת תקינות כאמור בסעיף 5) להלן ע"י טכנאי נק"ל.`];
let procedureExamen = [`א) הנשק מחויב בבחינה חודשית שמתבצעת אחת לחודש - כל השנה, בתיאום סמ"פ מול בוחן נשק/ בוחנת אופטיקה בתחילת כל חודש בהתאם ללו"ז הפלוגה. <br> ב) הבחינות יסתיימו עד תאריך ה-20 לאותו חודש ולא מעבר לכך. <br> ג) במהלך הבחינה כלל הנשקים יהיו מופרדים מהאופטיקה ומסודרים על שולחנות. <br> ד) כל נשק/ אמצעי אופטיקה שנמצא לא תקין במהלך הבחינה נחשבה לא כשיר ויש להביאו במידית לנשקייה לצורך תיקון. במידה והנשק/ אמצעי אופטיקה הושבת יש לזכות אותו באותו יום אל מול נגד לוג'. <br> ה) סמ"פ הוא מנהל מערך הצל"ם בפלוגה והוא מדבר ישירות עם הבוחנים ומקבל מענה מיידי. <br> ו) תותב לעולם לא מחליף מ.ק פורק כלל הנשקים חייבים להיות עם מ.ק פורק בכל זמן נתון (נשק ללא מ.ק פורק נחשב לנשק טעון) <br>`,
    ` ז) חל איסור מוחלט להשתמש בשיפצורים שאינם מאושרים ע"י הצבא <br> ח) חל איסור מוחלט להרכיב/ לפרק חלקים מהנשק - רק בוחן מוסך לעשות זאת, עבירה זו נחשבת לעבריינות בנשק <br> ט) טיפול יומי מבוצע ע"י החייל (שימון מכלולים נעים והעברת חוטר מידי יום), טיפול שבועי- סילור, ייבוש והעברת חוטר בסיום ווידוא הנקיון והרכבת המכללים ע"י מפקד המסגרת <br> י) אירועים חריגים כגון: פיצוצי נשק, דריסות ונזקים אחרים יש לדווח מידית לבוחן הנשק ואין לנסות לגעת, לתקן, לפרק, להזיז טרם הגעת בוחן הנשק לבדיקה במקום האירוע ותחקיר ראשוני.`];
let ultraChosen;
let isAlert = false;
let isExecutaionLong = false;
let saveJ;
let enterCommander = false;
let negevVideoLength = [{ startVideoNum: 1, manyVideos: 1 }, { startVideoNum: 2, manyVideos: 2 }, { startVideoNum: 3, manyVideos: 1 }];
let magVideoLength = [{ startVideoNum: 1, manyVideos: 1 }, { startVideoNum: 2, manyVideos: 1 }]
window.addEventListener("load", () => {
    document.getElementById("sheerClear").addEventListener("touchmove", openAlert);
});

// alert weapon
const openAlert = (event) => {
    // hidden
    document.getElementById("explantionPage").style.visibility = "hidden";
    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("startPage").style.visibility = "hidden";
    document.getElementById("aSide").style.display = "none";
    document.getElementById("treatmentpageEx").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("back").style.visibility = "hidden";
    document.getElementById("ultraBack").style.visibility = "hidden";
    // visible 
    document.getElementById("alert").style.visibility = "visible";
    document.getElementById("startButAlert").style.visibility = "visible";

    document.getElementById("butTextAlert").innerText = "אני בטוח שהבנתי";

    document.getElementById("titlePuma").classList.remove("titlePuma1");
    document.getElementById("titlePuma").classList.add("ExTitlePuma");
    isAlert = true;
    document.getElementById("titlePuma").innerText = "אמצעי בטיחות";
    document.getElementById("alertVideo").style.visibility = "visible";

    document.getElementById("startButAlert").removeEventListener("click", start2);
    document.getElementById("startButAlert").addEventListener("click", procedure);
    document.getElementById("butTextAlert").style.padding = "0vh";
}

// exam procedure
const procedure = (event) => {
    document.getElementById("startPage2").style.visibility = "hidden";
    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("startButAlert").style.visibility = "hidden";
    document.getElementById("alertVideo").style.visibility = "hidden";
    document.getElementById("explantionPage").style.visibility = "hidden";


    // ultra back
    document.getElementById("ultraBack").style.visibility = "visible";
    document.getElementById("ultraBack").removeEventListener("click", procedure);
    document.getElementById("ultraBack").addEventListener("click", openAlert);

    document.getElementById("titlePuma").innerText = "נהלי בחינה";
    document.getElementById("butTextAlert").innerText = "אני על זה";
    document.getElementById("alertVideo").style.visibility = "hidden";
    document.getElementById("treatmentpageEx").style.visibility = "visible";
    document.getElementById("treatmentpageEx").innerHTML = procedureExamen[0];
    document.getElementById("startButAlert").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "visible";
    // func next נהלי בחינה
    _listenerNext1 = function () {
        document.getElementById("startButAlert").style.visibility = "visible";
        document.getElementById("treatmentpageEx").innerHTML = procedureExamen[1];
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("back").style.right = "15vw";
        document.getElementById("back").style.visibility = "visible";
        document.getElementById("back").addEventListener("click", () => {
            document.getElementById("treatmentpageEx").innerHTML = procedureExamen[0];
            document.getElementById("next").style.visibility = "visible";
            document.getElementById("back").style.visibility = "hidden";
        });
    };
    document.getElementById("next").addEventListener("click", _listenerNext1);

    document.getElementById("butTextAlert").style.padding = "1.5vh";
    document.getElementById("startButAlert").removeEventListener("click", procedure);
    document.getElementById("startButAlert").addEventListener("click", start2);
}

// choose a weapon
const start2 = (event) => {
    // hidden
    document.getElementById("startPage2").style.visibility = "hidden";
    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("startButAlert").style.visibility = "hidden";
    document.getElementById("alertVideo").style.visibility = "hidden";

    document.getElementById("startButAlert").style.visibility = "hidden";
    document.getElementById("explantionPage").style.visibility = "hidden";
    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("startPage").style.visibility = "hidden";
    document.getElementById("aSide").style.display = "none";
    document.getElementById("treatmentpageEx").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("back").style.visibility = "hidden";
    // visible
    document.getElementById("startPage2").style.visibility = "visible";

    isAlert = false;
    document.getElementById("titlePuma").innerText = "בחר סוג נשק";
    document.getElementById("titlePuma").classList.remove("titlePuma1");
    document.getElementById("titlePuma").classList.add("ExTitlePuma");
    document.getElementById("Mag").addEventListener("click", start);
    document.getElementById("Weapon").addEventListener("click", start);
    document.getElementById("Negev").addEventListener("click", start);

    // ultra back
    document.getElementById("ultraBack").removeEventListener("click", openAlert);
    document.getElementById("ultraBack").removeEventListener("click", start2);
    document.getElementById("ultraBack").addEventListener("click", procedure);
}

// explanation page
const start = (event) => {
    // hidden
    document.getElementById("back").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("treatmentpage").style.visibility = "hidden";
    document.getElementById("startPage2").style.visibility = "hidden";
    document.getElementById("startPage2").style.visibility = "hidden";
    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("startButAlert").style.visibility = "hidden";
    document.getElementById("alertVideo").style.visibility = "hidden";
    // visible
    document.getElementById("explantionPage").style.display = "inline-block";

    if (!isAlert && event.currentTarget.id !== "ultraBack") {
        ultraChosen = event.currentTarget.id;
    }

    document.getElementById("alert").style.visibility = "hidden";
    document.getElementById("titlePuma").innerText = "נשקים";
    document.getElementById("startPage2").style.visibility = "hidden";
    document.getElementById("sheerClear").removeEventListener("touchmove", start);
    document.getElementById("startPage").style.visibility = "hidden";
    document.getElementById("explantionPage").style.visibility = "visible";
    document.getElementById("titlePuma").classList.remove("titlePuma1");
    document.getElementById("titlePuma").classList.add("ExTitlePuma");
    document.getElementById("startBut").addEventListener("click", tretmentPage);

    // ultra back
    document.getElementById("ultraBack").removeEventListener("click", start);
    document.getElementById("ultraBack").removeEventListener("click", procedure);
    document.getElementById("ultraBack").addEventListener("click", start2);
}

// treatment page
const tretmentPage = (event) => {
    // hidden
    document.getElementById("explantionPage").style.display = "none";
    // visible
    document.getElementById("treatmentpage").style.visibility = "visible";

    document.getElementById("titlePuma").innerText = "שלבי טיפול";

    // ultra back
    document.getElementById("ultraBack").removeEventListener("click", start2);
    document.getElementById("ultraBack").addEventListener("click", start);

    // list of treatment stages
    document.getElementById("itemList").innerHTML = '';
    for (let i = 0; i < window[`arrSubject${ultraChosen}`].length; i++) {
        document.getElementById("itemList").innerHTML += `<div class="conteinerCheckBox" id="conteinerCheckBox"><span id="${i}" class="containerText">${window[`arrSubject${ultraChosen}`][i]}</span>
        <span class="checkmark" id="check-${i}">
            <div id="vi${i}"></div>
        </span>
      </div>`;
    }

    // add event listener to treatment stages
    for (let j = 0; j < window[`arrSubject${ultraChosen}`].length; j++) {
        // add vi when the square is clicked
        document.getElementById(`check-${j}`).addEventListener("click", () => {
            document.getElementById(`check-${j}`).classList.add("checkmark1");
            document.getElementById(`vi${j}`).classList.add("vi");
        });
        // go to explanation page
        document.getElementById(j).addEventListener("click", () => {
            saveJ = j;
            document.getElementById("exBut").style.visibility = "visible";
            document.getElementById("exBut").addEventListener("click", goBack);
            document.getElementById("ultraBack").style.visibility = "hidden";
            document.getElementById("treatmentpage").style.visibility = "hidden";
            document.getElementById("treatmentpageEx").style.visibility = "visible";
            document.getElementById("treatmentpageEx").innerHTML = `${window[`arrExecution${ultraChosen}`][j]}`;
            document.getElementById("commanderBut").style.visibility = "hidden";

            isExecutaionLong = false;

            // long explanation text
            if ((j === 0 || j === 1) && ultraChosen === "Weapon") {
                // saveJ = j;
                document.getElementById("next").removeEventListener("click", _listenerNext1);
                document.getElementById("exBut").style.visibility = "hidden";
                if (j === 1) {
                    document.getElementById("next").style.visibility = "visible";
                    document.getElementById("exBut").style.visibility = "hidden";
                    openVideo(saveJ);
                    _listenerNext2 = function () {
                        document.getElementById("treatmentpageEx").innerHTML = arrExecutaionLong[2];
                        document.getElementById("next").style.visibility = "hidden";
                        document.getElementById("back").style.right = "15vw";
                        document.getElementById("back").style.visibility = "visible";
                        document.getElementById("exBut").style.visibility = "hidden";
                        document.getElementById("commanderBut").style.visibility = "visible";
                        document.getElementById("startButAlert").style.visibility = "hidden";
                        document.getElementById("commanderBut").addEventListener("click", commanderAproval);
                        document.getElementById("back").addEventListener("click", backArrow);
                    };
                    // document.getElementById("next").removeEventListener("click", _listenerNext3);
                    document.getElementById("next").addEventListener("click", _listenerNext2);
                } else {
                    openVideo(saveJ);

                    document.getElementById("next").style.visibility = "visible";
                    _listenerNext3 = function () {
                        document.getElementById("commanderBut").style.visibility = "hidden";
                        if (!isExecutaionLong) { // to page 2
                            isExecutaionLong = true;
                            document.getElementById("treatmentpageEx").innerHTML = arrExecutaionLong[0];
                            document.getElementById("next").style.visibility = "visible";
                            document.getElementById("back").style.right = "15vw";
                        } else { // to page 3
                            isExecutaionLong = false;
                            document.getElementById("treatmentpageEx").innerHTML = arrExecutaionLong[1];
                            document.getElementById("next").style.visibility = "hidden";
                            document.getElementById("exBut").style.visibility = "visible";
                        }
                        document.getElementById("back").style.visibility = "visible";
                        // saveJ = j;
                        document.getElementById("back").addEventListener("click", backArrow);
                    };
                    // document.getElementById("next").removeEventListener("click", _listenerNext2);
                    // document.getElementById("next").removeEventListener("click", _listenerNext1);
                    document.getElementById("next").addEventListener("click", _listenerNext3);
                }
            }
            if (ultraChosen === "Negev") {
                openVideo(saveJ);
            }
            if (ultraChosen === "Mag") {
                openVideo(saveJ);
            }
        });
    }
}

const commanderAproval = () => {
    document.getElementById("treatmentpageEx").innerHTML = arrExecutaionLong[3];
    document.getElementById("back").style.visibility = "hidden";
    document.getElementById("exBut").style.visibility = "visible";
    document.getElementById("exBut").addEventListener("click", goBack);
    document.getElementById("commanderBut").style.visibility = "hidden";
    enterCommander = true;

    openVideo(saveJ);
}

const openVideo = (indexVideo) => {
    // if there is a video

    document.getElementById("videoFlex").innerHTML = ``;
    if (ultraChosen === "Weapon") {
        document.getElementById("exBut").style.visibility = "visible";
        document.getElementById("play").style.visibility = "visible";
        document.getElementById("playBtn").style.visibility = "visible";
        if (indexVideo === 0) {
            for (let i = 1; i <= 4; i++) {
                document.getElementById("videoFlex").innerHTML += `<video preload="auto" width="427" height="240" controls id="videoExplain${i}" class="videoBlack">
                    <source id="srcVideo" src="assets/videos/daily${i}.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>`;
            }
        }
        else if (indexVideo === 1) {
            console.log("1");
            if (enterCommander) {
                console.log("commander");
                enterCommander = false;
                document.getElementById("videoFlex").innerHTML += `<video preload="auto" width="427" height="240" controls id="videoExplain" class="videoBlack">
                    <source id="srcVideo" src="assets/videos/commander.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>`;
            } else {
                console.log("weekly");
                for (let i = 1; i <= 4; i++) {
                    document.getElementById("videoFlex").innerHTML += `<video preload="auto" width="427" height="240" controls id="videoExplain" class="videoBlack">
                        <source id="srcVideo" src="assets/videos/weekly${i}.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                        </video>`;
                }
            }
        }

    }
    else if (ultraChosen === "Negev") {
        for (let x = negevVideoLength[indexVideo].startVideoNum; x < negevVideoLength[indexVideo].startVideoNum + negevVideoLength[indexVideo].manyVideos; x++) {
            if (negevVideoLength[indexVideo].manyVideos !== 0) {
                document.getElementById("exBut").style.visibility = "visible";
                document.getElementById("play").style.visibility = "visible";
                document.getElementById("playBtn").style.visibility = "visible";
                document.getElementById("videoFlex").innerHTML += `<video preload="auto" width="427" height="240" controls id="videoExplain" class="videoBlack">
                    <source id="srcVideo" src="assets/videos/negev/N${x}.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>`;
            }
        }
    } else if (ultraChosen === "Mag"){
        console.log("sheer");
        for (let y = magVideoLength[indexVideo].startVideoNum; y < magVideoLength[indexVideo].startVideoNum + magVideoLength[indexVideo].manyVideos; y++) {
            if (magVideoLength[indexVideo].manyVideos !== 0) {
                document.getElementById("exBut").style.visibility = "visible";
                document.getElementById("play").style.visibility = "visible";
                document.getElementById("playBtn").style.visibility = "visible";
                document.getElementById("videoFlex").innerHTML += `<video preload="auto" width="427" height="240" controls id="videoExplain" class="videoBlack">
                    <source id="srcVideo" src="assets/videos/Mag/M${y}.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>`;
            }
        }
    }

    document.getElementById("closeBut").addEventListener("click", () => {
        document.getElementById("play").style.visibility = "hidden";
        document.getElementById("exBut").addEventListener("click", goBack);
    });
    // event click button
    document.getElementById("playBtn").addEventListener("click", () => {
        document.getElementById("play").style.visibility = "visible";
    });
}

const backArrow = () => {
    console.log(saveJ);
    if (saveJ === 1) {
        document.getElementById("exBut").style.visibility = "visible";
        document.getElementById("commanderBut").style.visibility = "hidden";
        document.getElementById("treatmentpageEx").innerHTML = `${arrExecutionWeapon[1]}`;
        document.getElementById("back").style.visibility = "hidden";
        document.getElementById("back").removeEventListener("click", backArrow);
    } else {
        if (isExecutaionLong) { // to page 1
            isExecutaionLong = false;
            document.getElementById("treatmentpageEx").innerHTML = `${arrExecutionWeapon[0]}`;
            document.getElementById("back").style.visibility = "hidden";
            document.getElementById("back").removeEventListener("click", backArrow);
        } else { // to page 2
            isExecutaionLong = true;
            document.getElementById("treatmentpageEx").innerHTML = `${arrExecutaionLong[0]}`;
            document.getElementById("back").style.visibility = "visible";
            document.getElementById("back").addEventListener("click", backArrow);
        }
    }
    document.getElementById("next").style.visibility = "visible";
}

const goBack = () => {
    // hidden
    document.getElementById("back").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    // document.getElementById("treatmentpageExTitle").style.visibility = "hidden";
    document.getElementById("treatmentpageEx").style.visibility = "hidden";
    document.getElementById("exBut").style.visibility = "hidden";
    document.getElementById("playBtn").style.visibility = "hidden";
    // visible
    document.getElementById("treatmentpage").style.visibility = "visible";
    document.getElementById("ultraBack").style.visibility = "visible";

    document.getElementById("titlePuma").innerText = "שלבי טיפול";
    // document.getElementById("treatmentpageExTitle").classList.remove("treatmentpageExTitleLong");
    document.getElementById("treatmentpageEx").classList.remove("treatmentpageEx2");
    document.getElementById("treatmentpageEx").classList.add("treatmentpageEx");

    document.getElementById("exBut").style.visibility = "hidden";
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("playBtn").style.visibility = "hidden";

    document.getElementById("ultraBack").addEventListener("click", () => {
        document.getElementById("explantionPage").style.visibility = "visible";
        document.getElementById("treatmentpage").style.visibility = "hidden";
    });

}
