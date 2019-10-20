module.exports = {
    /**
     * 生成 时间+8位随机字符 格式的id
     */
    generateId(now) {
        const charMap = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
        return `${formatedNow(now)}${[0, 0, 0, 0, 0, 0, 0, 0].reduce((result) => {
            return result + charMap[Math.floor(Math.random() * charMap.length)]
        }, '')}`
    },
}


function formatedNow(now) {
    return `${now.getFullYear()}${formatDigit(now.getMonth()+1)}${formatDigit(now.getDate())}${formatDigit(now.getHours())}${formatDigit(now.getMinutes())}${formatDigit(now.getSeconds())}`
}
function formatDigit(number) {
    if (typeof number !== 'number') {
        return number
    }
    return number < 10 ? `0${number}` : `${number}`
}
