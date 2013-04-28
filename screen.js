var system   = require('system');
var page = require('webpage').create();

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
	dd = '0' + dd;
} 
if (mm < 10) {
	mm = '0' + mm;
}

today = mm + '_' + dd + '_' + yyyy;

site_simple = system.args[1];
site = 'http://' + system.args[1];

page.viewportSize = { width: 1600, height: 1200 };

page.open(site, function () {
    page.render(site_simple + '-' + today + '.png');
	phantom.exit();
});


