

let rfunc = () => {
    let rainbow = ["red", "orange", "yellow", "yellowish blue", "blue", "indigo", "violet"]

    rainbow[3] = 'green'

    for (i = 0; i < rainbow.length; i++) {
        console.log(rainbow[i])
    }
}




rfunc()
