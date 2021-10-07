function InitCredCarousel() {
  const carouselNode = document.querySelector<HTMLDivElement>(".cred-wrapper");
  const options = {
    loop: true,
  };
  const Embla = window.EmblaCarousel(carouselNode, options);

  const prevButton = document.querySelector<HTMLButtonElement>(
    ".cred-section .prev-control"
  );
  const nextButton = document.querySelector<HTMLButtonElement>(
    ".cred-section .next-control"
  );

  prevButton.addEventListener("click", () => {
    Embla.scrollPrev();
  });

  nextButton.addEventListener("click", () => {
    Embla.scrollNext();
  });
}

try {
  InitCredCarousel();
} catch (e) {
  console.log(`Could not init Carousel: ${e}`);
}
