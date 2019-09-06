let myDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
    this.setDate = function (day , month , year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toString = function () {
        return this.day + ' / ' + this.month + ' / ' + this.year;
    }
};
let date = new myDate(2,2,2007);

date.setDay(6);
date.setMonth(6);
date.setYear(2018);

let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();

date.setDate(3,4,2019);

console.log(date.toString());
