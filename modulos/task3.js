export function ageCalculator(year, month, day) {
    const fechaactual = new Date()
    const cumpleaños = new Date( Number(year) , Number(month) - 1 ,Number(day))
    let edad = fechaactual.getFullYear() - cumpleaños.getFullYear();

    const yaCumplioAños = fechaactual.getMonth() > cumpleaños.getMonth() || (fechaactual.getMonth() === cumpleaños.getMonth() && fechaactual.getDate() >= cumpleaños.getDate());
if (!yaCumplioAños) {
    edad--;
}

    return edad;
}