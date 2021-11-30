<?php

   //Update these links for your site
    $favicon = '<link rel="icon" href="https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/300/favicon.ico">';

    $logo = '<a href="/"><img src="https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/300/saber-logo-services.png" alt="[company]" title="[company]" border="0" width="200"></a>';

?>



<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>[[title]]</title>
        <meta name="description" content="[[description]]">
        <meta name="keywords" content="[[keywords]]">
        <?php echo $favicon; ?>
        <link rel="alternate" title="News and Events" href="/feeds.xml" type="application/rss+xml" />
   <meta name="ahrefs-site-verification" content="06b55c0e0b6410adb261079a7020da80954b263f5aa13211d5454e27cc1e28a6">
   [[custom_core_v3_9]]
        <!-- Fonts and icons -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link media="print" onload="this.media='all'" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">
     
     


     

        <?php
  if ($_SERVER['REQUEST_URI'] == "/free-estimate/confirmation.html") {
  ?>

<script>

  fbq('track', 'Lead');

</script>

  <? } ?>
        <link rel="preconnect" href="https://in.hotjar.com">
        <link rel="preconnect" href="https://vars.hotjar.com">
        <link rel="preconnect" href="https://use.typekit.net">
    </head>
    <body>
        <div id="steel-template">
        <div class="container" id="header">
                    <div class="row collapse">
                        <div class="large-3 columns" id="logo">
                            <a href="/">
                            <div id="videosList">           
                                <div class="video">
                                    <video class="thevideo" loop preload="none">
                                      <source src="https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/300/SaberLogo-NoBorder.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            </a>
                            <p class="roar">Hover to hear me roar!</p>
                        </div>
                        <div class="large-4 columns">
                          <div id="cta-refer" class="row">
                            <div class="small-10 small-offset-1 medium-8 medium-offset-3 columns refer-button">
                              <a href="/about-us/refer.html"><p>Previous Customer? <span>Refer us and receive $100!</span></p></a>
                            </div>
                          </div>
                        </div>
                        <div class="large-5 columns" id="phone">
                            <?php
                                $iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
                                $android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
                                if($iphone || $android  == true)
                              {
                            ?>
                                <a href="tel:<?php echo $phonenumber; ?>" class="phone_link">

                            <?
                            }
                            else
                            { ?>

                                <a href="/free-estimate.html" class="phone_link">
                            <?php
                            }
                            ?>
                                <?php
                                    $times = get_open_time();
                                    if($times or isset($_GET['open']))
                                    {
                                        ?>

                                    <div class="opensign"><span>open</span></div>

                                <?php
                                }
                                    ?>

                                [phone]

                            </a>
                            <p onclick="location.href='/service-area.html';" style="cursor:pointer;" id="header-service-area">Serving Anaheim, Long Beach, San Diego & [territory]</p>

                        </div>
                    </div>
                </div>
<!---------- TOP NAV ------------------------------->

<?php
 $superNav = new nav();
    $superNav->superSplitAboutWork = true;
    $superNav->superMode = 'top';
    $superNav->superItems = array(
    'Services' => array(
        'target' => 'services'
    ),
    'Our Work' => array(
        'target' => 'work',
    ),
    48417 => array(
            'target' => 'about',
            'show_about_link' => false
        ),
    'Service Area' => array(
        'target' => 'map',
    ),
    'Free Estimate*' => array(
        'class' => 'quote',
        'target' => 'contact'
    )
);

echo $superNav->generateSuperMarkup();
?>

<!--------- END TOP NAV ---------------------------->

<?php if ($thePage == "index") { ?>

<div class="container" id="main-message">
  <div class="main-slide slide1"><div class="row"><div class="medium-10 columns main-text"><h2>california's residential &amp; commercial<span>foundation repair experts<br><a class="button" href="/free-estimate.html" title="Contact us">Free Estimate*</a></span></h2></div></div></div>
  <div class="main-slide slide2"><div class="row"><div class="medium-10 columns main-text"><h2>foundation cracks?<span>we can help!<br><a class="button" href="/free-estimate.html" title="Contact us">Free Estimate*</a></span></h2></div></div></div>
  <div class="main-slide slide3"><div class="row"><div class="medium-10 columns main-text"><h2>concrete leveling?<span>we can help!<br><a class="button" href="/free-estimate.html" title="Contact us">Free Estimate*</a></span></h2></div></div></div>
  <div class="main-slide slide4"><div class="row"><div class="medium-10 columns main-text"><h2>crawl space repair?<span>we can help!<br><a class="button" href="/free-estimate.html" title="Contact us">Free Estimate*</a></span></h2></div></div></div>
</div><!-- end main message -->


<div class="container">
    <div>
        <div>

<?php
}
elseif (stristr($thePage,"free-estimate"))
{
    ?>
    <div class="container" id="page-wrap">
        <div class="row">
            <div class="columns free-estimate" id="content-wrap">

<?php
}
else
{
    ?>

        <?php
        if (stristr($thePage,"about-us"))
        {
            ?>
                    <div id="about" class="silo-page-wrap">

        <?php
        }
        elseif (stristr($thePage,"basement-waterproofing"))
        {
            ?>
                    <div id="waterproofing" class="silo-page-wrap">

        <?php
        }
        elseif (stristr($thePage,"commercial-foundation-contractor"))
        {
            ?>
                    <div id="commercial-foundation" class="silo-page-wrap">

                             <?php
        }
        elseif (stristr($thePage,"seismic"))
        {
            ?>
                    <div id="seismic" class="silo-page-wrap">


        <?php
        }
        elseif (stristr($thePage,"foundation-repair"))
        {
            ?>
                    <div id="foundation" class="silo-page-wrap">

        <?php
        }
        elseif (stristr($thePage,"concrete-lifting"))
        {
            ?>
                    <div id="concrete" class="silo-page-wrap">

        <?php
        }
        elseif (stristr($thePage,"crawl-space-repair"))
        {
            ?>
                    <div id="crawl-space" class="silo-page-wrap">

        <?php
        }
        elseif (stristr($thePage,"sump-pump"))
        {
            ?>
                    <div id="sump-pump" class="silo-page-wrap">

        <?php
        }
        elseif (stristr($thePage,"radon-gas-mitigation"))
        {
            ?>
                    <div id="radon" class="silo-page-wrap">

        <?php
        }
        elseif (stristr($thePage,"flood-vents"))
        {
            ?>
                    <div id="flood-vents" class="silo-page-wrap">

        <?php
        }
        elseif (stristr($thePage,"service-area"))
        {
            ?>
                    <div id="territory" class="silo-page-wrap">

        <?php
        }
        else
        {
            ?>
                    <div id="about" class="silo-page-wrap">

        <?php
        }
        ?>
<div class="container" id="silo-header">
    <div class="row">
        <div class="columns">
            <span class="page-title"><?php echo $cmsPageData['page.name']; ?></span>
        </div>
    </div>
</div><!-- end #silo-header -->
<div class="container" id="page-wrap">
    <div class="row">

        <div class="medium-9 medium-push-3 large-10 large-push-2 columns body" id="content-wrap">
<?php
}
?>
<?php if (($thePage != "index") && ($thePage != "free-estimate") && ($thePage != "free-estimate/confirmation")) { ?>
[[breadcrumbs]]
<?php } ?>
                [[content]]

        </div>

          <?php if ($thePage != "index") { ?>
  <div class="medium-3 medium-pull-9 large-2 large-pull-10 columns" id="subnav-left" data-equalizer-watch>
          [[single_silo_nav]]
  </div>
  <?php
}
?>

        </div>
    </div>
</div>

</div><!-- end #silo-page-wrap -->

<?php if ($thePage != "service-area") { ?>
    <div class="container home" id="service-area">
        <div class="row">
            <div class="large-5 columns">
                <div id="home-city-list">
                    <h2>our service area</h2>
                     [[city_scroll:50]]
                </div>
            </div>
            <div class="large-7 columns widget_map">
                <a href="/service-area.html"><img loading="lazy" decoding="async"  src="https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/300/saber-two-tone-map-2019.png" style="width: 70%;" width="800" height="825"  alt="[company] Service Area"></a>
            </div>
        </div>
    </div><!-- end #service-area -->
    <?php
    }
    ?>

<?php if (($thePage == "index")) { ?>

                                                  <div class="container" id="cred">
                                                      <?php
                                                            $meta = array();
                                                                $meta['useGeo'] = true;
                                                                $meta['manualAssetPage'] = false;
                                                                $meta['useFeatured'] = false;
                                                                $meta['siloMode'] = false;
                                                                $meta['qty'] = 20;
                                                                $meta['template'] = 5493;
                                                            $templates = array();
                                                            $templates['main'] = array('
                                                                <div class="row" id="inline-affil-slider">
                                                                    [[items]]
                                                                </div>');
                                                              $templates['item'] = array('
                                                                <div class="columns widget-item">
                                                                    <div class="widget-affil-img">
                                                                        [[logo]]
                                                                    </div>
                                                                </div>');
                                                            $title = 'Affiliations';
                                                            require_once('widgets/affiliations_sidebar_widget.php');
                                                            echo($output);
                                                        ?>
                                                  </div><!-- end credibility -->

                                                <?php
                                                  }
                                                ?>

            <div class="container home" id="footer">
                <div class="row">
                    <div class="large-7 large-push-5 columns">
                        <div id="footer-links">
                            <!---------- FOOTER LINKS ------------------------------->

                                <?php
                                $superNav = new nav();
                                $superNav->superMode = 'bottom';
                                echo $superNav->generateSuperMarkup();
                                ?>

                                [[social_footer]]


                            <!--------- END FOOTER LINKS ---------------------------->
                        </div>
                    </div>
                    <div class="large-5 large-pull-7 columns">
                        <div id="footer-contact">
                            <a href="/free-estimate.html" id="footer-btn">contact us</a>
                            <p class="footer-phone">Or call us at
                                <span><a href="tel:<?php echo $phonenumber; ?>" class="phone_link">[phone]</a></span>
                            </p>

                            <p class="footer-address">
                                    [[display_addresses]] </p>
                            <p>[license number]</p>     
                             </div>
                    </div>
                </div>
            </div>
            <a id="scrollToTop"><i class="fa fa-arrow-up" aria-hidden="true"></i>Top</a>
        </div>

        [[custom_core_v3_9_js]]
<script src="/core/js/jquery.thScrollable.js" type="text/javascript" defer></script>
<?php if (($thePage == "index")) { ?>

	<script>
		$('#inline-affil-slider').slick({
			autoplay: true,
			arrows: true,
			infinite: true,
			speed: 1000,
			cssEase: 'ease',
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
			    {
			    breakpoint: 640,
			    settings: {
				    speed: 500,
				    slidesToShow: 1,
				    slidesToScroll: 1
				}
			    }
			]
		    });
	 </script>

<?php } ?>

<?php if (($thePage == "index")) { ?>
        <script>
                $('#main-message').slick({
                        autoplay: true,
                        dots: false,
                        arrows: true,
                        infinite: true,
                        speed: 500,
                        fade: false,
                        cssEase: 'ease',
                        responsive: [
                            {
                              breakpoint: 640,
                              settings: {
                                arrows: false
                              }
                            }
                        ]
                    });
</script>
<?php } ?>

            <script>
                $('ul#top-nav-list li:nth-child(2) .short').removeClass('short');


            </script>


 


<!-- Logo Play -->
<script>
var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play();
    $('video', this).get(0).currentTime = 0; 
}

function hideVideo(e) {
    $('video', this).get(0).pause();
    $('video', this).get(0).currentTime = 5; 
}
</script>

<?php global $isTrafficDirect;
if($isTrafficDirect) {  ?>
    <script src="https://www.apex.live/scripts/invitation.ashx?company=saberfoundation" async></script>
<?php	 } ?>
<?php
  if (!empty($_GET['trk']) AND $thePage = "free-estimate") { ?>
  <style>
  @media screen and (min-width: 641px) {
    #content-wrap>.contact_form .step_4 label {
        width: 100%;
    }
  }
  </style>
  <script>
    var el = document.getElementById('Message-label'),
        elChild = document.createElement('div');
        elChild.innerHTML = `<input type="hidden" value="Who referred you?" name="custom_field_1_name" />
 <label for="custom_field_1">Who referred you? (Name or Code)
   <input type="text" name="custom_field_1"></label>`;
        el.insertBefore(elChild, el.firstChild);
  </script>
<?php
  }
?>
    </body>
</html>