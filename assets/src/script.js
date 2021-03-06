document.addEventListener('DOMContentLoaded', function(e) {

    Array.prototype.slice.call(document.getElementsByClassName('video_preview')).forEach( function( preview ) {
        preview.addEventListener('click', function(e) {
            e.target.parentElement.innerHTML = '<iframe src="' + e.target.dataset.embed + '" frameborder=0 allowfullscreen></iframe>';
            var scriptTag = document.createElement('script'); scriptTag.src = 'https://videopress.com/videopress-iframe.js'; scriptTag.async = 'async'; document.body.appendChild(scriptTag);
        })
    });

})
