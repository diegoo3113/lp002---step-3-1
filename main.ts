let favoriteIcons: IconNames[] = [IconNames.Heart, IconNames.Cow, IconNames.Diamond, IconNames.Fabulous, IconNames.TShirt]

for (let i = 0; i < favoriteIcons.length; i++) {     
    basic.showIcon(favoriteIcons[i])
    basic.pause(100)
}


