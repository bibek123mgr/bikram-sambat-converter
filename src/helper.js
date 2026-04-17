class CalenderHelper {
   constructor() {
      this.bsCalendar = {
         "2000": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2001": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2002": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2003": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2004": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2005": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2006": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2007": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2008": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
         "2009": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2010": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2011": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2012": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
         "2013": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2014": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2015": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2016": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
         "2017": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2018": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2019": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2020": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
         "2021": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2022": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
         "2023": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2024": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
         "2025": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2026": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2027": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2028": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2029": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
         "2030": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2031": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2032": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2033": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2034": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2035": [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
         "2036": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2037": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2038": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2039": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
         "2040": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2041": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2042": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2043": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
         "2044": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2045": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2046": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2047": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
         "2048": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2049": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
         "2050": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2051": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
         "2052": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2053": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
         "2054": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2055": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2056": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
         "2057": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2058": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2059": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2060": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2061": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2062": [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
         "2063": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2064": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2065": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2066": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
         "2067": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2068": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2069": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2070": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
         "2071": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2072": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
         "2073": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
         "2074": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
         "2075": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2076": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
         "2077": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2078": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
         "2079": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2080": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
         "2081": [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 29, 31],
         "2082": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2083": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
         "2084": [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
         "2085": [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
         "2086": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
         "2087": [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
         "2088": [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
         "2089": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
      }

      this.base = {
         bs: { y: 2000, m: 1, d: 1 },
         ad: { y: 1943, m: 3, d: 14 }
      };

      this.monthsEng = {
         bs: ["Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin", "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"],
         ad: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      };

      this.monthsNep = {
         bs: ["बैशाख", "जेठ", "असार", "श्रावण", "भदौ", "आश्विन", "कार्तिक", "मंसिर", "पौष", "माघ", "फाल्गुन", "चैत्र"],
         ad: ["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"]
      };

      this.weekDays = {
         english: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
         nepali: ["आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"]
      };

      this.nepaliDays = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
   }

   isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
   }

   isInRangeNep(yy, mm, dd) {
      yy = Number(yy);
      mm = Number(mm);
      dd = Number(dd);

      if (yy < 2000 || yy > 2089) {
         return "Supported only between 2000-2089";
      }

      if (mm < 1 || mm > 12) {
         return "Error! month value can be between 1-12 only";
      }

      const yearData = this.bsCalendar[yy];

      if (!yearData) {
         return "Error! year data not found";
      }

      const maxDays = yearData[mm - 1];

      if (!maxDays) {
         return "Error! invalid month data";
      }

      if (dd < 1 || dd > maxDays) {
         return `Error! day value can be between 1-${maxDays} only`;
      }

      return true;
   }

   isInRangeEng(yy, mm, dd) {
      yy = Number(yy);
      mm = Number(mm);
      dd = Number(dd);

      const minY = 1943, minM = 4, minD = 14;
      const maxY = 2033, maxM = 4, maxD = 16;

      if (yy < minY || yy > maxY) {
         return `Supported only between ${minY}-04-14 and ${maxY}-04-16`;
      }

      if (mm < 1 || mm > 12) {
         return "Error! month must be 1-12";
      }

      const md = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      let maxDays = md[mm - 1];

      if (mm === 2 && this.isLeapYear(yy)) {
         maxDays = 29;
      }

      if (dd < 1 || dd > maxDays) {
         return `Error! day must be 1-${maxDays}`;
      }

      if (yy === minY && (mm < minM || (mm === minM && dd < minD))) {
         return "Date is below minimum supported AD date (1943-04-14)";
      }

      if (yy === maxY && (mm > maxM || (mm === maxM && dd > maxD))) {
         return "Date is above maximum supported AD date (2033-04-16)";
      }

      return true;
   }

   adToDays(yyyy, mm, dd) {
      yyyy = Number(yyyy);
      mm = Number(mm);
      dd = Number(dd);

      let days = 0;

      for (let i = 1; i < yyyy; i++) {
         days += this.isLeapYear(i) ? 366 : 365;
      }

      const md = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      for (let i = 1; i < mm; i++) {
         if (i === 2 && this.isLeapYear(yyyy)) {
            days += 29;
         } else {
            days += md[i - 1];
         }
      }

      days += dd;
      return days;
   }

   bsToDays(yyyy, mm, dd) {
      yyyy = Number(yyyy);
      mm = Number(mm);
      dd = Number(dd);

      let days = 0;

      for (let y = this.base.bs.y; y < yyyy; y++) {
         for (let i = 0; i < 12; i++) {
            days += this.bsCalendar[y][i];
         }
      }

      for (let i = 1; i < mm; i++) {
         days += this.bsCalendar[yyyy][i - 1];
      }

      days += (dd - 1);
      return days;
   }

   ad_to_bs(yyyy, mm, dd) {

      let daysDiff =
         this.adToDays(yyyy, mm, dd) -
         this.adToDays(this.base.ad.y, this.base.ad.m, this.base.ad.d);

      let year = this.base.bs.y;
      let month = this.base.bs.m;
      let day = this.base.bs.d;

      while (daysDiff > 0) {
         day++;

         if (day > this.bsCalendar[year][month - 1]) {
            day = 1;
            month++;
         }

         if (month > 12) {
            month = 1;
            year++;
         }

         daysDiff--;
      }

      return { year, month, day };
   }

   bs_to_ad(yyyy, mm, dd) {
      let totalDays =
         this.bsToDays(yyyy, mm, dd) +
         this.adToDays(this.base.ad.y, this.base.ad.m, this.base.ad.d);

      let year = 1;
      let month = 1;
      let day = 1;

      const md = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      while (totalDays > 0) {
         day++;

         let maxDays = md[month - 1];

         if (month === 2 && this.isLeapYear(year)) {
            maxDays = 29;
         }

         if (day > maxDays) {
            day = 1;
            month++;
         }

         if (month > 12) {
            month = 1;
            year++;
         }

         totalDays--;
      }

      return { year, month, day };
   }

   convertEngNumToNepNum(number) {
      return this.nepaliDays[number];
   }

   convertDigitsToDevanagari(array) {
      return array.map(num =>
         num.toString()
            .split("")
            .map(d => this.convertEngNumToNepNum(Number(d)))
            .join("")
      );
   }

   convertAdToBs(dateEnglish) {

      let [year, month, day] = dateEnglish.split("-").map(Number);

      let valid = this.isInRangeEng(year, month, day);
      if (valid !== true) return valid;
      let result = this.ad_to_bs(year, month, day);

      let dev = this.convertDigitsToDevanagari([
         result.year,
         this.pad(result.month),
         this.pad(result.day)
      ]);

      return {
         date: `${result.year}-${this.pad(result.month)}-${this.pad(result.day)}`,
         date_np: dev.join("-"),

         month_eng: this.monthsNep.ad[result.month - 1],
         month_nep: this.monthsEng.ad[result.month - 1],

         day_eng: this.weekDays.nepali[result.day % 7],
         day_nep: this.weekDays.english[result.day % 7]
      };
   }

   convertBsToAd(dateNepali) {

      let [year, month, day] = dateNepali.split("-").map(Number);
      const valid = this.isInRangeNep(year, month, day);
      if (valid !== true) return valid;
      let result = this.bs_to_ad(year, month, day);

      let dev = this.convertDigitsToDevanagari([
         result.year,
         this.pad(result.month),
         this.pad(result.day)
      ]);

      return {
         date: `${result.year}-${this.pad(result.month)}-${this.pad(result.day)}`,
         date_np: dev.join("-"),

         month_eng: this.monthsEng.bs[result.month - 1],
         month_nep: this.monthsNep.bs[result.month - 1],

         day_eng: this.weekDays.nepali[result.day % 7],
         day_nep: this.weekDays.english[result.day % 7]
      };
   }

   pad(num) {
      return num.toString().padStart(2, "0");
   }
}

export default CalenderHelper;