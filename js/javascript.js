function change2UnderHtml() {
    document.getElementById("html-jpg").src = ("./img/under-html.jpg");
}

function changeHtml() {
    document.getElementById("html-jpg").src = ("./img/html.jpg");
}

function change2UnderCss() {
    document.getElementById("css-jpg").src = ("./img/under-css.jpg");
}

function changeCss() {
    document.getElementById("css-jpg").src = ("./img/css.jpg");
}

function change2UnderJs() {
    document.getElementById("js-jpg").src = ("./img/under-js.jpg");
}

function changeJs() {
    document.getElementById("js-jpg").src = ("./img/js.jpg");
}


function change2UnderMYsql() {
    document.getElementById("mysql-jpg").src = ("./img/under-mysql.jpg");
}

function changeMYsql() {
    document.getElementById("mysql-jpg").src = ("./img/mysql.jpg");
}

function change2UnderPhp() {
    document.getElementById("php-jpg").src = ("./img/under-php.jpg");
}

function changePhp() {
    document.getElementById("php-jpg").src = ("./img/php.jpg");
}

function change2UnderPyton() {
    document.getElementById("pyton-jpg").src = ("./img/under-pyton.jpg");
}

function changePyton() {
    document.getElementById("pyton-jpg").src = ("./img/pyton.jpg");
}

setTimeout(() => {
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.display = 'none';
}, 2500);



const textElement = document.getElementById('text');
let charIndex = 0;

const textToType1 = "<!DOCTYPE html>";
const textToType2 = "<html lang='en'>";
const textToType3 = " <meta charset='UTF-8'>";
const textToType4 = "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
const textToType5 = " <title>Personal Website: Mo Ansari</title>";
const textToType6 = "<link rel='styleshee' type='text/css' href='./css/res3t.css'>";
const textToType7 = "<link rel='stylesheet' type='text/css' href='./css/style.css'>";
const textToType8 = "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' />";
const textToType9 = "<script src='./js/javascript.js'></script>";
const textToType10 = "</head>";
const textToType11 = "<body> <header> <div id='container' >";
const textToType12 = "  <h1 id='header-name' style='text-shadow: #000000a8 0.1em 0.1em 0.2em'>MO . ANSARI</h1>";
const textToType13 = " <nav id='nav-container'>";
const textToType14 = " <ul class='horizontal-list'>";
const textToType15 = " <li><a href='./index.html'><i class='fa-solid fa-house'></i>&nbsp;Home&nbsp;</a></li>";
const textToType16 = " <li><a href='./about.html'><i class='fa-solid fa-address-card'></i>&nbsp;About&nbsp;</a></li>";
const textToType17 = "<li><a href='#'><i class='fa-regular fa-folder-open'></i>&nbsp;Portfolio&nbsp;</a></li>";

function typeText1() {
    
    if (charIndex < textToType1.length) {
        document.getElementById('text1').textContent += textToType1.charAt(charIndex);
        charIndex++;
        setTimeout(typeText1, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText2, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText2() {
    if (charIndex < textToType2.length) {
        document.getElementById('text2').textContent += textToType2.charAt(charIndex);
        charIndex++;
        setTimeout(typeText2, 75); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText3, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText3() {
    if (charIndex < textToType3.length) {
        document.getElementById('text3').textContent += textToType3.charAt(charIndex);
        charIndex++;
        setTimeout(typeText3, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText4, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText4() {
    if (charIndex < textToType4.length) {
        document.getElementById('text4').textContent += textToType4.charAt(charIndex);
        charIndex++;
        setTimeout(typeText4, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText5, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText5() {
    if (charIndex < textToType5.length) {
        document.getElementById('text5').textContent += textToType5.charAt(charIndex);
        charIndex++;
        setTimeout(typeText5, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText6, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText6() {
    if (charIndex < textToType6.length) {
        document.getElementById('text6').textContent += textToType6.charAt(charIndex);
        charIndex++;
        setTimeout(typeText6, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText6, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText6() {
    if (charIndex < textToType6.length) {
        document.getElementById('text6').textContent += textToType6.charAt(charIndex);
        charIndex++;
        setTimeout(typeText6, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText7, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText7() {
    if (charIndex < textToType7.length) {
        document.getElementById('text7').textContent += textToType7.charAt(charIndex);
        charIndex++;
        setTimeout(typeText7, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText8, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText8() {
    if (charIndex < textToType8.length) {
        document.getElementById('text8').textContent += textToType8.charAt(charIndex);
        charIndex++;
        setTimeout(typeText8, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText9, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText9() {
    if (charIndex < textToType9.length) {
        document.getElementById('text9').textContent += textToType9.charAt(charIndex);
        charIndex++;
        setTimeout(typeText9, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText10, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText10() {
    if (charIndex < textToType10.length) {
        document.getElementById('text10').textContent += textToType10.charAt(charIndex);
        charIndex++;
        setTimeout(typeText10, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText11, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText11() {
    if (charIndex < textToType11.length) {
        document.getElementById('text11').textContent += textToType11.charAt(charIndex);
        charIndex++;
        setTimeout(typeText11, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText12, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText12() {
    if (charIndex < textToType12.length) {
        document.getElementById('text12').textContent += textToType12.charAt(charIndex);
        charIndex++;
        setTimeout(typeText12, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText13, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText13() {
    if (charIndex < textToType13.length) {
        document.getElementById('text13').textContent += textToType13.charAt(charIndex);
        charIndex++;
        setTimeout(typeText13, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText14, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText14() {
    if (charIndex < textToType14.length) {
        document.getElementById('text14').textContent += textToType14.charAt(charIndex);
        charIndex++;
        setTimeout(typeText14, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText15, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText15() {
    if (charIndex < textToType15.length) {
        document.getElementById('text15').textContent += textToType15.charAt(charIndex);
        charIndex++;
        setTimeout(typeText15, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText16, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText16() {
    if (charIndex < textToType16.length) {
        document.getElementById('text16').textContent += textToType16.charAt(charIndex);
        charIndex++;
        setTimeout(typeText16, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText17, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
    }
}

function typeText17() {
    if (charIndex < textToType17.length) {
        document.getElementById('text17').textContent += textToType17.charAt(charIndex);
        charIndex++;
        setTimeout(typeText17, 70); // زمان تایپ هر حرف (اینجا 70 میلی‌ثانیه)
    } else {
        // تمام تایپ متن اول انجام شده، اکنون می‌توانیم متن دوم را تایپ کنیم
        charIndex = 0; // صفر کردن شمارنده
        setTimeout(typeText1, 600); // اگر نیاز به تاخیر دارید (اینجا 600 میلی‌ثانیه)
        for (let j = 1; j <= 17; j++) {
            document.getElementById('text'+j).textContent=(null);
        }
        
    }
}

// شروع تایپ متن اول وقتی صفحه بارگذاری شده است
window.addEventListener('load', typeText1);
