<?php
  global $thePage, $cmsPageData, $siteTokens;
  $siteConfig = new SiteConfig($thePage, $csmPageData, $siteTokens);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>[[title]]</title>

    <meta name="description" content="[[description]]">
    <meta name="keywords" content="[[keywords]]">
    [[top-inject]]
  </head>

  <body class='preload'>
    <nav>
      <!-- Top navigation -->
      <section class="navigation-layout">
        <!-- BG for banner -->
        <div class="banner-bg"></div>
        <div class="banner">
          <span class="serving"> Yes, We Serve [territory] </span>
          <a class="number" href="tel:[[phone]]">[[phone]]</a>
        </div>

        <!-- Super nav -->
        [[top_nav]]

        <div class="logo-container">
          <a href='/'>
            <div class="video-container">
              <video
                class="video"
                loop
                preload="none"
                poster="	https://cdn.treehouseinternetgroup.com/cms_images/300/video_thumb_open.jpg"
              >
                <source
                  src="https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/300/SaberLogo-NoBorder.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <label class="logo-hover">
                <span>Hover to hear me roar!</span>
              </label>
            </div>
            <img
              class="object-contain- object-left- img"
              src="https://cdn.treehouseinternetgroup.com/cms_images/755/logo.png"
            />
          </a>
        </div>
      </section>
    </nav>

    <main>
      <? if($siteConfig->pageType === "CONTENT"): ?>
        <? if($siteConfig->showContentHeader): ?>
        <section class="content-template-header space-section">
          <div class="bg-container">
            <div class="bg-img">
              [[content-header-img]]
            </div>
            <div class="bg-overlay"></div>
          </div>

          <div class="template-header-title">
            <h1><?= $cmsPageData['page.name']; ?></h1>
          </div>
        </section>
        <? endif; ?>

      <section
        class="content-template-article space-section <?= $siteConfig->showSilo ? "" : 'no-silo'; ?> <?= $siteConfig->showBreadcrumbs ? "" : 'no-breadcrumbs'; ?>"
      >
        <? if($siteConfig->showBreadcrumbs): ?>
        <nav aria-label="Breadcrumb" class="content-template-breadcrumbs">
          [[breadcrumbs]]
        </nav>
        <? endif; ?>

        <? if($siteConfig->showSilo): ?>
        <aside class="content-template-silo">
          <div class="content-template-silo-menu">
            <button id="silo-menu-button">
              Open Menu
              <span class="dropdown">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div class="content-template-silo-container" id="silo-container">
            [[single_silo_nav]]
          </div>
        </aside>
        <? endif; ?>

        <article class="content-template-main">
          <? endif; ?>
          [[content]]
          <? if($siteConfig->pageType === "CONTENT"): ?>
        </article>
      </section>
      <? endif; ?>
      
      <? if ($siteConfig->showServiceAreas): ?>
      <!-- Service Areas Section -->
      <section class="service-areas space-section">
        <div class="bg-background"></div>

        <div class="service-area-wrapper">
          <div class="service-area-list">
            <div class="service-area-list-content">
              <h2 class="service-area-title">our service area</h2>
              [[city_scroll:50]]
            </div>
          </div>

          <div class="service-area-map">
            <a href="https://www.saberfoundations.com/service-area.html"
              ><img
                loading="lazy"
                decoding="async"
                src="https://cdn.treehouseinternetgroup.com/cms_images/300/saber-two-tone-map-2019.png"
                style="width: 70%"
                width="800"
                height="825"
                alt="Saber Foundation Repair Service Area"
            /></a>
          </div>
        </div>
      </section>
      <? endif; ?>
      
      <? if($siteConfig->pageType === "HOME"): ?>
      <!-- Cred Section -->
      <section class="cred-section space-section">
        <div class="cred-controls-container">
          <button class="control prev-control"></button>
          <button class="control next-control"></button>
        </div>

        <div class="carousel cred-wrapper">
          <div class="cred-container">
            <div class="cred-slide">
              <picture
                ><source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/carlsbad.prod.avif"
                  type="image/avif" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/carlsbad.prod.webp"
                  type="image/webp" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/carlsbad.prod.jpeg"
                  type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/carlsbad.prod.png"
                  loading="lazy"
                  class="cred-img"
                  alt="Carlsbad Chamber of Commerce"
              /></picture>
            </div>

            <div class="cred-slide">
              <picture
                ><source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/sfs.prod.avif" type="image/avif" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/sfs.prod.webp" type="image/webp" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/sfs.prod.jpeg" type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/sfs.prod.jpg"
                  loading="lazy"
                  class="cred-img"
                  alt="Santa Fe Springs Chamber of Commerce"
              /></picture>
            </div>

            <div class="cred-slide">
              <picture
                ><source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/ebb.prod.avif" type="image/avif" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/ebb.prod.webp" type="image/webp" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/ebb.prod.jpeg" type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/ebb.prod.png"
                  loading="lazy"
                  class="cred-img"
                  alt="Earthquake Brace + Bolt"
              /></picture>
            </div>

            <div class="cred-slide">
              <picture
                ><source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/sdar.prod.avif"
                  type="image/avif" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/sdar.prod.webp"
                  type="image/webp" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/sdar.prod.jpeg" type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/sdar.prod.jpg"
                  loading="lazy"
                  class="cred-img"
                  alt="San Diego Association of Realtors"
              /></picture>
            </div>

            <div class="cred-slide">
              <picture
                ><source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/ocar.prod.avif"
                  type="image/avif" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/ocar.prod.webp"
                  type="image/webp" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/ocar.prod.jpeg" type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/ocar.prod.jpg"
                  loading="lazy"
                  class="cred-img"
                  alt="Orange County Realtors Association of Professionals"
              /></picture>
            </div>

            <div class="cred-slide">
              <picture
                ><source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/bbb.prod.avif" type="image/avif" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/bbb.prod.webp" type="image/webp" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/bbb.prod.jpeg" type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/bbb.prod.png"
                  loading="lazy"
                  class="cred-img"
                  alt="Better Business Bureau"
              /></picture>
            </div>

            <div class="cred-slide">
              <picture
                ><source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/tbs.prod.avif" type="image/avif" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/tbs.prod.webp" type="image/webp" />
                <source srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/tbs.prod.jpeg" type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/tbs.prod.png"
                  loading="lazy"
                  class="cred-img"
                  alt="Basement Systems Certified Dealer Network Member"
              /></picture>
            </div>

            <div class="cred-slide">
              <picture
                ><source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/supportworks.prod.avif"
                  type="image/avif" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/supportworks.prod.webp"
                  type="image/webp" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/supportworks.prod.jpeg"
                  type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/supportworks.prod.jpg"
                  loading="lazy"
                  class="cred-img"
                  alt="Supportworks Dealer Member"
              /></picture>
            </div>

            <div class="cred-slide">
              <picture
                ><source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/cleanspace.prod.avif"
                  type="image/avif" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/cleanspace.prod.webp"
                  type="image/webp" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/cleanspace.prod.jpeg"
                  type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/cleanspace.prod.png"
                  loading="lazy"
                  class="cred-img"
                  alt="Certified CleanSpace Dealer"
              /></picture>
            </div>

            <div class="cred-slide">
              <picture
                ><source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/D_and_B.prod.avif"
                  type="image/avif" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/D_and_B.prod.webp"
                  type="image/webp" />
                <source
                  srcset="https://cdn.treehouseinternetgroup.com/cms_images/300/D_and_B.prod.jpeg"
                  type="image/jpg" />
                <img
                  src="https://cdn.treehouseinternetgroup.com/cms_images/300/D_and_B.prod.jpg"
                  loading="lazy"
                  class="cred-img"
                  alt="Dun &amp; Bradstreet Credibility Corp."
              /></picture>
            </div>
          </div>
        </div>
      </section>
      <? endif; ?>
    </main>

    <footer class="footer">
      <div class="row">
        <div class="large-7 large-push-5 columns">
          <div id="footer-links">
            [[bottom-nav-links]]
          </div>
        </div>
        
        <div class="large-5 large-pull-7 columns">
          <div id="footer-contact">
            <a href="/free-estimate.html" id="footer-btn" class="button">contact us</a>
            <p class="footer-phone">Or call us at
              <span><a href="tel:[[phone]]" class="phone_link">[phone]</a></span>
            </p>
            <p class="footer-address"> [[display_addresses]] </p>
            <p>[license number]</p>  
          </div>
        </div>
      </div>
    </footer>

    [[bottom-inject]]
  </body>
</html>