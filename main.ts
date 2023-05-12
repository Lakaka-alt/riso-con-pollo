led.plot(2, 5 * 75)
music.playMelody("- - - - - - - - ", 120)
led.enable(input.buttonIsPressed(Button.A))
basic.showLeds(`
    . # # # .
    . # . # .
    # # # # #
    . # # # .
    . # . # .
    `)
basic.forever(function () {
	
})
