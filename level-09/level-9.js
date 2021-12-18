let rfunc = () => {
    let rainbow = ["red", "orange", "yellow", "yellowish blue", "blue", "indigo", "violet"]

    rainbow[3] = 'green'

    for (i = 0; i < rainbow.length; i++) {
        console.log(rainbow[i])
        if (i % 2 == 0) {
            console.log(rainbow[i])
        }
    }
    // console.log(rainbow[0])
    // console.log(rainbow[2])
    // console.log(rainbow[4])
    // console.log(rainbow[6])
}

rfunc()
