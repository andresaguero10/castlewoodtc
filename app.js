








var HeaderVideo = function(settings) {
	if (settings.element.length ===0) {
		return;
	}
	this.init(settings);
}

HeaderVideo.prototype.init = function(settings) {
	this.$element = $(settings.element);
	this.settings = settings;
	this.videoDetails = this.getVideoDetails();
}

$('.header-video').each(function(i, elem) {
	headerVideo = new HeaderVideo({
		element: elem,
		media: '.header-video__media',
		playTrigger: '.video__play-trigger',
		closeTrigger: '.video__close-trigger'
	});
});

HeaderVideo.prototype.getVideoDetails = function() {
	var mediaElement = $(this.settings.media);

	return {
		videoURL: mediaElement.attr('data-video-URL')
		videoHeight: mediaElement.attr('data-video-height'),
        videoWidth: mediaElement.attr('data-video-width')	
    };
};