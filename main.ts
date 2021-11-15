radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
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
