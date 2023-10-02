// module.exports = function toReadable (number) {

// }

module.exports = function toReadable(number) {
    const digits = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ];
    const tens = [
        "",
        "",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
    ];

    if (number === 0) return "zero";
    function translateToString(number) {
        let str = "";
        if (number < 20) {
            return (str = digits[number]);
        }
        if (number < 100) {
            return (str =
                tens[(number - (number % 10)) / 10] + " " + digits[number % 10]);
        }
        if (number < 1000) {
            return (str =
                digits[Math.trunc(number / 100)] +
                " Hundred " +
                translateToString(number % 100));
        }
        if (number < 10000) {
            return (str =
                digits[Math.trunc(number / 1000)] +
                " Thousand " +
                translateToString(number % 1000));
        }
        if (number < 1000000) {
            return (str =
                translateToString(Math.trunc(number / 1000)) +
                " Thousand " +
                translateToString(number % 1000));
        }
        if (number < 100000000) {
            return (str =
                translateToString(Math.trunc(number / 1000000)) +
                " Million " +
                translateToString(number % 1000000));
        }
        if (number < 10000000000) {
            return (str =
                translateToString(Math.trunc(number / 1000000000)) +
                " Billion " +
                translateToString(number % 1000000000));
        }
        return str;
    }
    let res = translateToString(number);
    return res.trim().toLowerCase();
};


