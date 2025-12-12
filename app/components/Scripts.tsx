'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function Scripts() {
    useEffect(() => {
        // This will run after all scripts are loaded
        const initializeYear = () => {
            const yearElement = document.getElementById('year');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear().toString();
            }
        };

        // Initialize year immediately
        initializeYear();
    }, []);

    return (
        <>
            <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="beforeInteractive" />
            <Script src="/assets/js/vendor/modernizr-3.11.7.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/vendor/jquery-3.6.0.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/vendor/jquery-migrate-3.3.2.min.js" strategy="beforeInteractive" />
            <Script src="/assets/js/vendor/bootstrap.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/magnificpopup.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/swiper-bundle.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/easypiechart.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/tilt.jquery.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/odometer.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/isotope.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/imagesloaded.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/waypoint.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/wow.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/fancybox.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/plugins/parallax.js" strategy="afterInteractive" />
            <Script src="/assets/js/main.js" strategy="afterInteractive" />
            <Script src="/assets/js/pages/home.js" strategy="afterInteractive" />

            <Script id="contact-form" strategy="afterInteractive">
                {`
          $(document).ready(function() {
            $("#newsletter-form").off();
            
            $("#contactForm").submit(function (e) {
              e.preventDefault();
              let btn = $(this).find("button");
              btn.prop("disabled", true).html("Please wait...");
              
              $.ajax({
                url: "/assets/php/contact.php",
                type: "POST",
                data: $(this).serialize(),
                success: function (response) {
                  btn.prop("disabled", false).html("Submit now");
                  if (response.includes("success")) {
                    Swal.fire({
                      icon: "success",
                      title: "Message Sent Successfully!",
                      text: "Our team will contact you soon.",
                    }).then(() => {
                      window.location.href = "/";
                    });
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Failed!",
                      text: "Something went wrong. Try again.",
                    });
                  }
                },
                error: function () {
                  btn.prop("disabled", false).html("Submit now");
                }
              });
            });
            
            $("#newsletter-form").submit(function(e){
              e.preventDefault();
              let btn = $(this).find("button");
              btn.prop("disabled", true).html("Please wait...");
              
              $.ajax({
                url: "/assets/php/newsletter.php",
                type: "POST",
                data: $(this).serialize(),
                success: function(response){
                  btn.prop("disabled", false).html('<img src="/assets/images/icon/icon-5.png">');
                  if(response.includes("success")){
                    Swal.fire({
                      icon: "success",
                      title: "Subscribed Successfully!",
                      text: "Thank you for joining our network!",
                    }).then(() => {
                      window.location.href = "/";
                    });
                  } else {
                    Swal.fire({
                      icon: "error",
                      title: "Subscription Failed!",
                      text: "Please try again.",
                    });
                  }
                },
                error: function() {
                  btn.prop("disabled", false).html('<img src="/assets/images/icon/icon-5.png">');
                }
              });
            });
          });
        `}
            </Script>
        </>
    );
}
