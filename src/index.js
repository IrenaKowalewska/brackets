module.exports = function check(str, bracketsConfig) {
    let arrToStr = str.split('');

    for (let i = 0; i < arrToStr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (arrToStr[i] === bracketsConfig[j][0] && arrToStr[i + 1] === bracketsConfig[j][1]) {
                arrToStr.splice(i, 2);
                i=-1;
                j=-1;
            }
        }
        if (arrToStr.length === 0) {
            return true;
        }
    }
    return false;
}
