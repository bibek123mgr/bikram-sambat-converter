import CalenderHelper from "./helper.js";

const helper = new CalenderHelper();

class Calender {

    static isValidFormat(date) {
        if (typeof date !== "string") return false;

        const parts = date.split("-");

        if (parts.length !== 3) return false;

        const [y, m, d] = parts;

        if (!y || !m || !d) return false;

        if (y.length !== 4) return false;
        if (m.length < 1 || m.length > 2) return false;
        if (d.length < 1 || d.length > 2) return false;

        if (isNaN(y) || isNaN(m) || isNaN(d)) return false;

        return true;
    }

    static AdToBs(date) {

        if (!this.isValidFormat(date)) {
            return {
                error: "Invalid format. Required format is yyyy-mm-dd"
            };
        }

        return helper.convertAdToBs(date);
    }

    static BsToAd(date) {

        if (!this.isValidFormat(date)) {
            return {
                error: "Invalid format. Required format is yyyy-mm-dd"
            };
        }

        return helper.convertBsToAd(date);
    }
}

export default Calender;