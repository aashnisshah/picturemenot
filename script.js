var background_images = [
	'http://photo.sf.co.ua/g/364/4.jpg',
	'http://cdn.theatlantic.com/assets/media/img/photo/2015/06/2015-audubon-photography-awards/a04_PurpleGallinules/main_1500.jpg',
	'http://www.demilked.com/magazine/wp-content/uploads/2014/03/sony-world-photography-awards-2014-winners-10.jpg',
	'https://d.ibtimes.co.uk/en/full/1431365/2015-sony-world-photography-awards.jpg'
];

var changeimage = function(divNameHide, divNameShow) {
	// debugger
	var background_cover = document.getElementById(divNameHide);
	background_cover.style.display = 'none';

	var background_cover1 = document.getElementById(divNameShow);
	background_cover1.style.display = 'block';

	// console.log('image changed: ' + background_cover.style.backgroundImage);
	// background_cover.style.backgroundImage = "url('" + background_images[2] + "') no-repeat"
	// document.getElementById('content').style.backgroundImage = "url('https://d.ibtimes.co.uk/en/full/1431365/2015-sony-world-photography-awards.jpg') no-repeat";
	// console.log(background_cover.style.backgroundImage);
	console.log('image changed: ' + background_cover.style.backgroundImage);
}