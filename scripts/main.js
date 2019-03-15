$(document).ready(function() {
    var plinks = [{
        name: 'instagram',
        plink: 'https://instagram.com/dylan_adshead3'
    }, {
        name: 'peep playlist',
        plink: 'https://soundcloud.com/user-687059614/sets/rip-peep'
	}, {	
	    name: 'gnome',
        plink: 'https://www.youtube.com/watch?v=z-zxaKQfW6s'
	}, {	
		name: 'twitch',
        plink: 'http://twitch.tv/sparksfnbr'
	}, {	
	    name: 'beans',
        plink: 'https://ak4.picdn.net/shutterstock/videos/16048504/thumb/1.jpg'
       }, ];
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 15000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })
});