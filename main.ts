radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        servos.P2.run(50)
        servos.P1.run(-52)
    }
    if (receivedNumber == 1) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        servos.P1.run(50)
        servos.P2.run(-52)
    }
    if (receivedNumber == 2) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        servos.P1.run(24)
        servos.P2.run(11)
    }
    if (receivedNumber == 3) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        servos.P1.run(-13)
        servos.P2.run(-24)
    }
    if (receivedNumber == 4) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        servos.P1.run(0)
        servos.P2.run(0)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.forever(function () {
    basic.showIcon(IconNames.Ghost)
})
