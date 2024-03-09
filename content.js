const domLoaded = () => {
    document.body.onkeydown = e => {
        //do not interfere with navigating jio in-video slider
        if (isJioSlickSlider(e)) {
            return;
        }

        const videos = document.getElementsByTagName('video');

        console.log('videos ', videos);

        if (videos.length > 0) {
            const video = videos[0];

            const seek = time => {
                e.stopImmediatePropagation();
                video.currentTime += time;
            }

            switch (e.key) {
                case 'ArrowRight':
                    seek(10);
                    break;
                case 'ArrowLeft':
                    seek(-10);
                    break;
                default:
                    break;
            }
        }
    }
}

const isJioSlickSlider = e => {
    return e.target.className.toLowerCase().includes('slick-');
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(domLoaded, 1);
} else {
    document.addEventListener("DOMContentLoaded", domLoaded);
}