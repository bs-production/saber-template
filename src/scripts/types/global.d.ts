import Embla from "embla-carousel";

declare global {
  interface Window {
    EmblaCarousel: typeof Embla;
  }
}
