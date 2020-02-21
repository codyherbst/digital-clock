const digClock = document.querySelector(".digClock");



let date;
let h;
let m;
let s;

currentTime();

function currentTime() {

    if (document.getElementById("Military").checked) { //this refers to the html document for the military id
        //below sets military time. doing this as conditional because normal radio button is default
        date = new Date();

        //three if statements to check if a 0 is needed for military time

        if (date.getHours() < 10) h = '0' + date.getHours();
        else h = date.getHours();

        if (date.getMinutes() < 10) m = '0' + date.getMinutes();
        else m = date.getMinutes();

        if (date.getSeconds() <10) s = '0' + date.getSeconds();
        else s = date.getSeconds();

        //this sets date and time to show up
        t = h + ":" + m + ":" + s;
        digClock.textContent = t + '  ' + date.toLocaleDateString();
    } else {
        //below sets normal time
        date = new Date();
        t = date.toLocaleTimeString();
        digClock.textContent = t + '  ' + date.toLocaleDateString();
    }
}

var myVar = setInterval(currentTime, 1000);
