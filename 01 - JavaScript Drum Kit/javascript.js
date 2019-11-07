window.addEventListener("DOMContentLoaded", function() {
    const timeAtWindowOpen = Date.now();
    const trackLength = 11.28576;
    const audioFiles = document.getElementsByTagName('audio');
    const keys = document.getElementsByClassName('key')

    
    const isInstrumentPlaying = (audio) => {
        let instrument = document.querySelectorAll(`audio[class="${audio.classList.value}"]`)
        let instrumentPlaying = false;
        instrument.forEach(option => {
            if (!option.paused) {
                instrumentPlaying = true;
            } else {
                return;
            }
        })
        return instrumentPlaying;
    }

    const pausePlayingInstrument = (audio) => {
        let instrument = document.querySelectorAll(`audio[class="${audio.classList.value}"]`)
        instrument.forEach(option => {
            if (!option.paused) {
                option.pause();
            } else {
                return;
            }
        })
    }

    const handleKeydown = (event) => {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
        if (!audio) return;

        if (isInstrumentPlaying(audio)) {
            pausePlayingInstrument(audio);
            audio.play();
        } else {
            audio.currentTime = 0;
            audio.play();
        }

    }

    window.addEventListener('keydown', handleKeydown);

})