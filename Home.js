document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("home-video");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play(); // Play the video when in view
                } else {
                    video.pause(); // Pause the video when out of view
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    observer.observe(video);
});
