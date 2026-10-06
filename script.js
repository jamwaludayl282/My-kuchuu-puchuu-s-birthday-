const startButton = document.getElementById("beginStoryButton");
const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

const letterButton = document.getElementById("letterButton");
const letterContent = document.getElementById("letterContent");

let musicPlaying = false;


/* =========================
   START STORY
========================= */

startButton.addEventListener("click", async () => {

    const firstStory = document.querySelector(".story-section");

    try {
        await backgroundMusic.play();

        musicPlaying = true;

        if (musicButton) {
            musicButton.classList.add("playing");
        }

    } catch (error) {
        console.error("Music could not start:", error);
    }

    if (firstStory) {
        firstStory.scrollIntoView({
            behavior: "smooth"
        });
    }

});


/* =========================
   MUSIC
========================= */

musicButton.addEventListener("click", async () => {

    if (!musicPlaying) {

        try {

            await backgroundMusic.play();

            musicPlaying = true;

            musicButton.textContent = "♫";

        } catch (error) {

            console.log("Music could not start:", error);

        }

    } else {

        backgroundMusic.pause();

        musicPlaying = false;

        musicButton.textContent = "♪";

    }

});


/* =========================
   LOVE LETTER
========================= */

letterButton.addEventListener("click", () => {

    const isOpen = letterContent.classList.contains("show");

    if (!isOpen) {

        letterContent.classList.add("show");

        letterButton.textContent = "Close My Letter";

        letterContent.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } else {

        letterContent.classList.remove("show");

        letterButton.textContent = "Open My Letter";

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".story-card, .special-content, .dialogue-section, .proposal-story, .crush-content, .letter-section, .birthday-message"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});

/* =========================
   PHOTO LIGHTBOX
========================= */

const photoCards = document.querySelectorAll(".photo-card");

const photoLightbox =
    document.getElementById("photoLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");

const lightboxCounter =
    document.getElementById("lightboxCounter");

const lightboxCaption =
    document.getElementById("lightboxCaption");


let currentPhotoIndex = 0;


const photoCaptions = [
    "The beginning of our little collection ❤️",
    "One of my favorite memories.🥹",
    "Fairy tale? Nahh She's my Fairy.🫣",
    "Best form of cuteness.😚",
    "Just you being you.❤️",
    "Prettiest smile on planet earth.😋",
    "Those eyes gonna kill me one day.👀",
    "K-POP idols never gonna achieve this Face Card.😮‍💨",
    "Yess Boss. I will do it.😎",
    "How did I get this lucky?🥹",
    "Mother is that you?🥹",
    "Just another reason I love you.😋",
    "My Flower girl.🌸",
    "Even the greatest artist can't capture this beauty.🥹",
    "Mother of all cuteness.🛐🥹",
    "Ahhh veryyy Hot Mommyyy.🥵",
    "why so kuchuu puchuuu cutieee.😭🥹🌸🩵",
    "And I'll always choose you all over again & again & again.🥹💍",
    "Power couple for sure.😌🩵",
    "My Prettiest Birthday Girl.🥹🩵"
];


function openPhoto(index) {

    currentPhotoIndex = index;

    const image =
        photoCards[index].querySelector("img");

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightboxCounter.textContent =
        `${index + 1} / ${photoCards.length}`;

    lightboxCaption.textContent =
        photoCaptions[index] ||
        "A beautiful memory ❤️";

    photoLightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closePhoto() {

    photoLightbox.classList.remove("active");

    document.body.style.overflow = "";
}


function showNextPhoto() {

    currentPhotoIndex++;

    if (currentPhotoIndex >= photoCards.length) {
        currentPhotoIndex = 0;
    }

    openPhoto(currentPhotoIndex);
}


function showPreviousPhoto() {

    currentPhotoIndex--;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photoCards.length - 1;
    }

    openPhoto(currentPhotoIndex);
}


/* Open photo */

photoCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        openPhoto(index);

    });

});


/* Close */

lightboxClose.addEventListener(
    "click",
    closePhoto
);


/* Next */

lightboxNext.addEventListener(
    "click",
    showNextPhoto
);


/* Previous */

lightboxPrev.addEventListener(
    "click",
    showPreviousPhoto
);


/* Click outside image */

photoLightbox.addEventListener(
    "click",
    (event) => {

        if (event.target === photoLightbox) {

            closePhoto();

        }

    }
);


/* Keyboard */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !photoLightbox.classList.contains("active")
        ) {
            return;
        }


        if (event.key === "Escape") {

            closePhoto();

        }


        if (event.key === "ArrowRight") {

            showNextPhoto();

        }


        if (event.key === "ArrowLeft") {

            showPreviousPhoto();

        }

    }
);

/* =========================
   VIDEO LIGHTBOX
========================= */

const videoCards =
    document.querySelectorAll(".video-card");

const videoLightbox =
    document.getElementById("videoLightbox");

const lightboxVideo =
    document.getElementById("lightboxVideo");

const videoLightboxClose =
    document.getElementById("videoLightboxClose");

const videoLightboxPrev =
    document.getElementById("videoLightboxPrev");

const videoLightboxNext =
    document.getElementById("videoLightboxNext");

const videoCounter =
    document.getElementById("videoCounter");

const videoCaption =
    document.getElementById("videoCaption");


let currentVideoIndex = 0;


const videoSources = [
    "assets/videos/video-01.mp4",
    "assets/videos/video-02.mp4",
    "assets/videos/video-03.mp4",
    "assets/videos/video-04.mp4",
    "assets/videos/video-05.mp4",
    "assets/videos/video-06.mp4"
];


const videoCaptions = [
    "You see this? My favourite one 😋",
    "A little wholesomemoment with you 😚",
    "Just us. And that's enough. ❤️",
    "In Garima Zone 😮‍💨",
    "A cute moment with you ❤️",
    "Ohhhh myyyy Mommyyyyy 🥵🥵"
];


function openVideo(index) {

    currentVideoIndex = index;

    lightboxVideo.pause();

    lightboxVideo.src =
        videoSources[index];

    lightboxVideo.load();

    videoCounter.textContent =
        `${index + 1} / ${videoSources.length}`;

    videoCaption.textContent =
        videoCaptions[index];

    videoLightbox.classList.add("active");

    document.body.style.overflow = "hidden";

    lightboxVideo.play().catch(() => {
        console.log("Video playback requires user interaction.");
    });
}


function closeVideo() {

    lightboxVideo.pause();

    lightboxVideo.removeAttribute("src");

    lightboxVideo.load();

    videoLightbox.classList.remove("active");

    document.body.style.overflow = "";
}


function showNextVideo() {

    currentVideoIndex++;

    if (
        currentVideoIndex >= videoSources.length
    ) {
        currentVideoIndex = 0;
    }

    openVideo(currentVideoIndex);
}


function showPreviousVideo() {

    currentVideoIndex--;

    if (currentVideoIndex < 0) {
        currentVideoIndex =
            videoSources.length - 1;
    }

    openVideo(currentVideoIndex);
}


/* Open video */

videoCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        openVideo(index);

    });

});


/* Close */

videoLightboxClose.addEventListener(
    "click",
    closeVideo
);


/* Next */

videoLightboxNext.addEventListener(
    "click",
    showNextVideo
);


/* Previous */

videoLightboxPrev.addEventListener(
    "click",
    showPreviousVideo
);


/* Click outside */

videoLightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === videoLightbox
        ) {

            closeVideo();

        }

    }
);


/* Keyboard */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !videoLightbox.classList.contains("active")
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeVideo();

        }


        if (event.key === "ArrowRight") {

            showNextVideo();

        }


        if (event.key === "ArrowLeft") {

            showPreviousVideo();

        }

    }
);

/* =========================
   BEGIN OUR STORY
========================= */

const beginStoryButton =
    document.getElementById("beginStoryButton");

const openingScreen =
    document.getElementById("openingScreen");


if (beginStoryButton) {

    beginStoryButton.addEventListener(
        "click",
        () => {

            openingScreen.classList.add(
                "opening-screen-exit"
            );

            setTimeout(() => {

                openingScreen.style.display =
                    "none";

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 900);

        }
    );

}