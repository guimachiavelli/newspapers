var system 	= require('system'),
	page 	= require('webpage').create();

var today 	= new Date(),
	dd 		= today.getDate(),
	mm 		= today.getMonth()+1,
	yyyy 	= today.getFullYear(),
	hour 	= today.getHours();

if (dd < 10) {
	dd = '0' + dd;
} 
if (mm < 10) {
	mm = '0' + mm;
}
if (hour < 10) {
	hour = '0' + hour;
}

today = hour + '_' + dd + '_' + mm + '_' + yyyy;

site_simple = system.args[1];
site = 'http://' + system.args[1];

page.viewportSize = { width: 1600, height: 1200 };

page.open(site, function () {
    page.render('screenshots/' + site_simple + '-' + today + '.png');
	phantom.exit();
});


