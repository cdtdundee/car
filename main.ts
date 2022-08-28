radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.analogWritePin(AnalogPin.P0, 100)
    }
    if (receivedNumber == 1) {
        pins.analogWritePin(AnalogPin.P0, 1000)
    }
    if (receivedNumber == 5) {
        pins.analogWritePin(AnalogPin.P0, 500)
    }
    if (receivedNumber == 2) {
        servos.P1.setAngle(0)
    }
    if (receivedNumber == 3) {
        servos.P1.setAngle(180)
    }
    if (receivedNumber == 4) {
        pins.digitalWritePin(DigitalPin.P0, 0)
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
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
})
let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
radio.setGroup(1)
basic.forever(function () {
    for (let index = 0; index <= 2; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Indigo))
        strip.show()
        basic.pause(500)
    }
    for (let index = 0; index <= 2; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        basic.pause(500)
    }
    for (let index = 0; index <= 2; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
        basic.pause(500)
    }
    for (let index = 0; index <= 2; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(500)
    }
})
