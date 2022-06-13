// start coding your function here!

function find_max(arr) {

    const max = Math.max(...arr)
    //console.log(max)
    return max
}

find_max([1, 2, 3, 4, 5, 6, 100, 54, 3])

exports.find_max = find_max;