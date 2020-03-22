module.exports = function check(str, bracketsConfig) {
    let strToArr = str.split('');

    for (let i = 0; i < strToArr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (strToArr[i] === bracketsConfig[j][0] && strToArr[i + 1] === bracketsConfig[j][1]) {
                strToArr.splice(i, 2);
                i=-1;
               
            }
        }
        if (strToArr.length === 0) {
            return true;
        }
    }
    return false;
}
