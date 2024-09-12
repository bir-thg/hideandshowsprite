namespace SpriteKind {
    export const invisible = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`leer`)
    mySprite.setKind(SpriteKind.invisible)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`MySprite`)
    mySprite.setKind(SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.showLongText("Uiuiuiui!", DialogLayout.Bottom)
})
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`baeume`)
mySprite = sprites.create(assets.image`MySprite`, SpriteKind.Player)
let mySaeule = sprites.create(assets.image`saeule`, SpriteKind.Enemy)
mySaeule.setPosition(152, 55)
mySprite.setStayInScreen(true)
mySprite.setBounceOnWall(true)
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
controller.moveSprite(mySprite, 100, 100)
forever(function () {
	
})
