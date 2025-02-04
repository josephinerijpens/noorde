basic.forever(function () {
    let waarde_kompas = 0
    if (waarde_kompas <= 45 && waarde_kompas >= 135) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (waarde_kompas <= 135 && waarde_kompas < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (waarde_kompas < 0 && waarde_kompas < 0) {
    	
    }
})
