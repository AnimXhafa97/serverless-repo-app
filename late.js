// start coding your function here!

function running_late(date) {
    const arg = new Date(date)
    const latecheck = new Date(arg.getFullYear(), arg.getMonth(), arg.getDate(), '22', '00', '00', '000')

    if (arg > latecheck) {
        //console.log('Late')

        return 'It is late!'
    } else {
        //console.log('Early')

        return 'It is still early!'
    }
}
running_late('December 17, 1995 21:24:00')


exports.running_late = running_late;