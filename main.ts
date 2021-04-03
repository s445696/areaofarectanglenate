game.splash("Today we will calculate the area of a rectangle!")
let length = game.askForNumber("Enter the length in cm:")
let width = game.askForNumber("Enter the width in cm")
let area = length * width
game.splash("The area of a rectangle with the length" + length + "cm and width" + width + "cm is " + area + "cm squared. ")
let perimeter = 2 * length + 2 * width
game.splash("The perimeter of a rectangle with the length" + length + "cm and width" + width + "cm is " + perimeter + "cm squared. ")
game.reset()
