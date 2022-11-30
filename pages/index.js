const colorCodeElement = document.querySelector('.color-code'),
  colorChangerButton = document.querySelector('.color-changer'),
  container = document.querySelector('.container')

const hexArr = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function generateHex() {
  let hexColor = '#'

  for (let i = 0; i < 6; i++) {
    hexColor = hexColor + hexArr[getRandomNumber()]
  }

  return hexColor
}

function getRandomNumber() {
  return Math.floor(Math.random() * hexArr.length)
}

function changeColor() {
  const backgroundColor = generateHex()

  colorCodeElement.style.color = backgroundColor
  container.style.backgroundColor = backgroundColor
  colorCodeElement.textContent = backgroundColor
}

colorChangerButton.addEventListener('click', changeColor)

generateHex()
