function InitCredCarousel() {
  const carouselNode = document.querySelector<HTMLDivElement>(".cred-wrapper");

  const options = {
    loop: true,
  };

  console.log("hi");
  const Embla = window.EmblaCarousel(carouselNode, options);
}

try {
  InitCredCarousel();
} catch (e) {
  console.log(`Could not init Carousel: ${e}`);
}
