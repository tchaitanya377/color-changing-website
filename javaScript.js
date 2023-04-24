const randomColorChange = document.querySelectorAll('.items');
const randomColors ='#' + Math.floor(Math.random() * 16777215).toString(16);
for (let i = 0; i < randomColorChange.length; i++) {
    randomColorChange[i].style.color = randomColors;
}
const randomColorBody = document.querySelector('.randomColor')
const randomColorsBody ='#' + Math.floor(Math.random() * 16777215).toString(16);
randomColorBody.style.backgroundColor = randomColorsBody
const ColorChangeRandomHeading = document.querySelector('.ColorChangeRandom')
const ColorChangeRandomText = document.querySelector('.ColorChangeRandomText')
const randomColorsHeading ='#' + Math.floor(Math.random() * 16777215).toString(16);
ColorChangeRandomHeading.style.color = randomColorsHeading
ColorChangeRandomText.style.color = randomColorsHeading
// ColorChangeButton
const ColorChangeButtonbutton = document.querySelector('.ColorChange');
const ColorChangeButtonText = document.querySelector('.ColorChangeButtonText');
const ColorChangeButtonBackbroundColor = document.querySelector('#ColorChangeButton')
const ColorChangeButtonHeading = document.querySelector('.ColorChangeButtonHeading')
ColorChangeButtonbutton.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    ColorChangeButtonText.style.color = randomColor;
    ColorChangeButtonHeading.style.color = randomColor;
});

ColorChangeButtonbutton.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    ColorChangeButtonBackbroundColor.style.backgroundColor = randomColor;
});


//Color chang with input
const backgroundColorInput = document.querySelector('#background-color-input');
const textColorInput = document.querySelector('#text-color-input');
const ColorChangeColorPicker = document.querySelector('#ColorChangeColorPicker');
const ColorChangeColorPickerText = document.querySelector('.ColorChangeColorPickerText');

backgroundColorInput.addEventListener('input', function() {
    ColorChangeColorPicker.style.backgroundColor = backgroundColorInput.value;
});

textColorInput.addEventListener('input', function() {
    ColorChangeColorPickerText.style.color = textColorInput.value;
});


//
const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#900C3F", "#581845"];

		// Loop through all the color elements and set their background color to a random color from the array
		const colorElements = document.querySelectorAll(".color");
		colorElements.forEach(function(colorElement) {
			const randomIndex = Math.floor(Math.random() * colors.length);
			const randomColor = colors[randomIndex];
			colorElement.style.backgroundColor = randomColor;
		});