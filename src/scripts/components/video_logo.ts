function InitVideoLogo() {
  const videos = document.querySelectorAll<HTMLVideoElement>(
    ".logo-container video"
  );

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      /**
       * NOTE:
       * ========
       * When the user first loads the page
       * and hovers this without clicking on the
       * page, this will through an error. Its
       * not a fatal error, just leaving a note
       */
      video.play();
    });
    video.addEventListener("mouseleave", () => {
      video.currentTime = 0;
      video.pause();
    });
  });
}

try {
  InitVideoLogo();
} catch (e) {
  console.log(`Could not init video logo: ${e as any}`);
}
