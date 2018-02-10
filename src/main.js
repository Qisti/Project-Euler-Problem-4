function getPalindrome() {
    var hasil, y,
        x = 999,
        largest = 0;

    while (x > 99) {
        y = x;
        while (y > 99) {
            hasil = x * y;
            if (hasil <= largest) break;
            if (hasil.toString() === hasil.toString().split("").reverse().join(""))
                largest = hasil;
            y--;
        }
        x--;
    }

    return largest;
}

module.exports = getPalindrome();
