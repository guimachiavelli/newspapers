var system 	= require('system'),
	page 	= require('webpage').create(),
	pro_dir = '/home/ubuntu/newspapers/screenshots/',
	dev_dir = 'screenshots/',
	dir 	= ''
;

var today 	= new Date(),
	dd 		= today.getDate(),
	mm 		= today.getMonth()+1,
	yyyy 	= today.getFullYear(),
	hour 	= today.getHours()
;

var site_simple = system.args[1],
	server 	= system.args[2]
;


if (dd < 10) {
	dd = '0' + dd;
} 
if (mm < 10) {
	mm = '0' + mm;
}
if (hour < 10) {
	hour = '0' + hour;
}

if (server == 'prod') {
	dir = pro_dir;
} else {
	dir = dev_dir;
}

today = hour + '_' + dd + '_' + mm + '_' + yyyy;

site = 'http://' + system.args[1];

page.viewportSize = { width: 1600, height: 1200 };

page.open(site, function () {
    page.render(dir + site_simple + '-' + today + '.png');
	phantom.exit();
});


