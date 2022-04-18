const now = new Date();
const years = now.getFullYear();
let months = new String(now.getMonth() + 1);
months = months >= 10 ? months : '0' + months;
let days =  new String(now.getDate());
days = days >= 10 ? days : '0' + days;
const hours = now.getHours();
let minutes = now.getMinutes();
minutes = minutes >= 10 ? minutes : '0' + minutes;
const seconds = now.getSeconds();

export const getToday = (shape) => {
    console.log(shape)
    if (shape === 'yyyy') {
        return '' + years;
    } else if (shape === 'yyyymm') {
        return '' + years + months;
    } else if (shape === 'yyyymmdd') {
        return '' + years + months + days;
    } else if (shape === 'yyyymmddhh') {
        return '' + years + months + days + hours;
    } else if (shape === 'yyyymmddhh24mi') {
        return '' + years + months + days + hours + minutes;
    } else if (shape === 'yyyymmddhh24miss') {
        return '' + years + months + days + hours + minutes + seconds;
    }
}
