var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = prompt("Enter Your Age in Years");
     floatDays = parseFloat(floatAge * 365.25);
     floatMonths = parseFloat(floatAge * 12);
     intWeeks = parseInt(floatDays / 7);
     intFortnights = parseInt(floatDays / 14);
     /*All in one alert bellow */
     alert("Age in Years = " + floatAge + " Age in Months = " + floatMonths +
           " Age in Weeks = " + intWeeks + " Age in Fortnights = " + intFortnights +
           " Age in Days = " + floatDays);
     