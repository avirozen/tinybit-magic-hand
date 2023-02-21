let dsitance = 0
basic.showIcon(IconNames.Heart)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
basic.forever(function () {
    dsitance = Tinybit.Ultrasonic_Car()
    if (dsitance <= 5) {
        Tinybit.RGB_Car_Big2(0, 0, 255)
    } else if (dsitance > 5 && dsitance < 15) {
        Tinybit.RGB_Car_Big2(0, 255, 0)
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    }
})
basic.forever(function () {
    if (dsitance <= 5) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 60)
    } else if (dsitance > 5 && dsitance < 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 60)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
basic.forever(function () {
    if (dsitance <= 5) {
        basic.showArrow(ArrowNames.North)
    } else if (dsitance > 5 && dsitance < 15) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.clearScreen()
    }
})
