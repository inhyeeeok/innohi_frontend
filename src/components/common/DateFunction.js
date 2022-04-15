const now = new Date();
const years = now.getFullYear();
const months = now.getMonth() + 1;
const days = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
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
