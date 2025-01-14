const firstVideo = document.getElementById('first-video');
        const secondVideo = document.getElementById('second-video');

        firstVideo.onended = () => {
            firstVideo.style.display = 'none';
            secondVideo.style.display = 'block';
            secondVideo.play();
        };