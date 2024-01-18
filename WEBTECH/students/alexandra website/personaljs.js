// Get The Date

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Here we register the days and the months 

function checkTime() {
	var date = new Date();
	var sufix = '';
	var hours = ('0' + date.getHours()).slice(-2);
	var minutes = ('0' + date.getMinutes()).slice(-2);
	var day = date.getDate();
	var month = monthNames[date.getMonth()];
	var weekday = dayNames[date.getDay()];
	//This is pretty self explanetory but we basically get the day and months to be able to display them
	var year = date.getFullYear();
	if (day > 3 && day < 21) sufix = 'th';
	switch (day % 10) {
		case 1:
			sufix = "st";
			break;
		case 2:
			sufix = "nd";
			break;
		case 3:
			sufix = "rd";
			break;
		default:
			sufix = "th";
	}
	document.getElementById('timedisplay').innerHTML = weekday + ' ' + day + sufix + ', ' + month + ' ' + year;
	//Here is how it will be displayed
}
setInterval(checkTime(), 1000); 

//This part of the javascript code exists so that the site can always show the right date when someone clicks on it.
//That way, if the dnd classes get updated and changed and they have a screenshot, it will reveal the date.
//Through that, we are always up to date and avoid misinformation.

