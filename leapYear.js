function leapYear(year) {
  if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    console.log("This is leap year");
  } else {
    console.log("Not a leap year");
  }
}

leapYear(1800);
