function runTimer() {
    let obj = new Date();

    let hour = obj.getHours();
    let minute = obj.getMinutes();
    let second = obj.getSeconds();
    let meridiam = (hour >= 12) ? "PM" : "AM";

    let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let date = obj.getDate();
    let month = monthList[obj.getMonth()];
    let year = obj.getFullYear();

    hour = hour >= 12 ? hour - 12 : hour;
    if (hour === 0 && meridiam === "PM") {
        if (minute === 0 && second === 0) {
            hour = 12;
            meridiam = "NOON"
        }
        else {
            hour = 12;
            meridiam = "PM";
        }
    }


    if (hour === 0 && meridiam === "AM") {
        if (minute === 0 && second === 0) {
            hour = 12;
            meridiam = "MIDNIGHT";
        }
        else {
            hour = 12;
            meridiam = "AM";
        }
    }


    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;


    // document.querySelector('#date').innerHTML = `${date}${month}-${year}`;
    document.querySelector('.hour').innerHTML = `${hour}`;
    document.querySelector('.minute').innerHTML = `${minute}`;
    document.querySelector('.second').innerHTML = `${second}`;
    document.querySelector('#meridiam').innerHTML = `${meridiam}`;
}


setInterval(runTimer, 1000);