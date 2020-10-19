input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    Chance += 3
    basic.showNumber(Chance)
    while (Chance > 0) {
        if (true) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            Chance += -1
            basic.showNumber(Chance)
        }
        Chance = -1
    }
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    basic.showIcon(IconNames.Sad)
})
let Chance = 0
basic.showIcon(IconNames.EigthNote)
