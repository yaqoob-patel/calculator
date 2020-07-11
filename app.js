// var b = 0;
// while (b < 10) {
//     document.write(b);
//     b++;
// }

// document.write("<br>");

// var c = 0;

// do {
//     document.write(c);
//     c++;
// }
// while (c < 0);


// function yaqoob(a) {

//     alert("Hello " + a)
// }




// function hamza() {
//     var n = document.getElementById("fieldInput");

//     alert("Hello " + n.value);

// n.value = "";
// }

// function para() {

//     var p = document.getElementById("xyz");
//     var n = document.getElementById("fieldInput");
//     p.innerHTML = ("Hello How Are You " + n.value);
// document.write(n.value);

// console.log(n.value);

// }

// para()


var str1;


function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;


}


function allClear() {
    var result = document.getElementById("result");
    result.value = "";
}

function clearLast() {
    var last = document.getElementById("result");
    var str = last.value;
    console.log(str);
    var lastChar = str.slice(0, str.length - 1);
    console.log(lastChar);
    result.value = lastChar;
}

// function vanish0() {
//     document.getElementById("display");
//     result.value = "4";
//     console.log(result.value);

// }

function getResult() {
    var str1;
    var result = document.getElementById("result");
    // console.log(result.value);

    var str = (result.value);
    // console.log(result.value);

    str1 = (str.includes("++") || str.includes("--") || str.includes("//") || str.includes("**"));
    if (str1 === true) {
        console.log(str1)
        result.value = "Err";
    }
    if (str1 === false) {

        for (var i = 0; i <= str.length - 1; i++) {

            if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
                (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 123) ||
                (str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 41) ||
                (str.charCodeAt(i) >= 58 && str.charCodeAt(i) <= 63) ||
                (str.charCodeAt(i) >= 91 && str.charCodeAt(i) <= 95) ||
                (str.charCodeAt(i) >= 123 && str.charCodeAt(i) <= 126)) {
                result.value = "Err";
                console.log(str1);
                console.log(str.charCodeAt(i));
                str1 = true;

            }
        }
    }

    if (str1 === false) {
        result.value = eval(result.value);
        console.log("err3");
        console.log(result.value);

    }
}








