namespace SpriteKind {
    export const Door = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000102000000000000000000000000000001020000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101010101010101010101010101010101`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile4], TileScale.Sixteen)))
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000020100000000000000000000000000000201000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101010101010101010101010101010101`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen)))
})
let mySprite = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000020100000000000000000000000000000201000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101010101010101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
