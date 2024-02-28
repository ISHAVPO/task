var str = ['J', 'Z', 'D', 'Q', 'L', 'W', 'A', 'H', 'Y', 'K', 'G', 'N', 'V', 'R', 'P', 'X', 'C', 'M', 'F', 'O', 'U', 'S', 'I', 'E', 'T', 'B'];

for (var i = 0; i < str.length - 1; i++) {
    for (var j = i+1; j< str.length; j++) {

        if (str[i] > str[j]) {
            var temp = str[i];
            str[i] = str[j];
            str[j] = temp;

        }
    }
}
console.log(str)
