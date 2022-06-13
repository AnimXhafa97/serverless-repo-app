// start coding your function here!

function running_late(date) {
    const arg = new Date(date)
    const latecheck = new Date(arg.getFullYear(), arg.getMonth(), arg.getDate(), '10', '00', '00', '000')

    if (arg > latecheck) {
        return 'It is late!'
    } else {
        return 'It is still early!'
    }
}
running_late('December 17, 1995 9:59:59:999')


exports.running_late = running_late;