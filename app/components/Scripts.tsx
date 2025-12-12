'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function Scripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize year in footer
    const initializeYear = () => {
      const yearElement = document.getElementById('year');
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear().toString();
      }
    };

    // Initialize jQuery-dependent scripts
    const initializeJQueryScripts = () => {
      // Check if jQuery is available
      if (typeof window === 'undefined' || typeof (window as any).$ === 'undefined' || typeof (window as any).jQuery === 'undefined') {
        console.warn('jQuery not loaded yet, retrying...');
        setTimeout(initializeJQueryScripts, 100);
        return;
      }

      const $ = (window as any).$;
      const jQuery = (window as any).jQuery;

      // Reinitialize WOW animations if on home page
      if (pathname === '/' && typeof (window as any).WOW !== 'undefined') {
        try {
          new (window as any).WOW({
            once: true,
            mobile: false,
          }).init();
        } catch (e) {
          console.log('WOW already initialized');
        }
      }

      // Reinitialize form handlers
      try {
        $('#newsletter-form').off('submit');
        $('#contactForm').off('submit');

        $('#contactForm').on('submit', function (e: any) {
          e.preventDefault();
          const form = e.currentTarget;
          const btn = $(form).find('button');
          btn.prop('disabled', true).html('Please wait...');

          $.ajax({
            url: '/assets/php/contact.php',
            type: 'POST',
            data: $(form).serialize(),
            success: function (response: string) {
              btn.prop('disabled', false).html('Submit now');
              if (response.includes('success')) {
                if (typeof (window as any).Swal !== 'undefined') {
                  (window as any).Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully!',
                    text: 'Our team will contact you soon.',
                  }).then(() => {
                    window.location.href = '/';
                  });
                }
              } else {
                if (typeof (window as any).Swal !== 'undefined') {
                  (window as any).Swal.fire({
                    icon: 'error',
                    title: 'Failed!',
                    text: 'Something went wrong. Try again.',
                  });
                }
              }
            },
            error: function () {
              btn.prop('disabled', false).html('Submit now');
            }
          });
        });

        $('#newsletter-form').on('submit', function (e: any) {
          e.preventDefault();
          const form = e.currentTarget;
          const btn = $(form).find('button');
          btn.prop('disabled', true).html('Please wait...');

          $.ajax({
            url: '/assets/php/newsletter.php',
            type: 'POST',
            data: $(form).serialize(),
            success: function (response: string) {
              btn.prop('disabled', false).html('<img src="/assets/images/icon/icon-5.png">');
              if (response.includes('success')) {
                if (typeof (window as any).Swal !== 'undefined') {
                  (window as any).Swal.fire({
                    icon: 'success',
                    title: 'Subscribed Successfully!',
                    text: 'Thank you for joining our network!',
                  }).then(() => {
                    window.location.href = '/';
                  });
                }
              } else {
                if (typeof (window as any).Swal !== 'undefined') {
                  (window as any).Swal.fire({
                    icon: 'error',
                    title: 'Subscription Failed!',
                    text: 'Please try again.',
                  });
                }
              }
            },
            error: function () {
              btn.prop('disabled', false).html('<img src="/assets/images/icon/icon-5.png">');
            }
          });
        });
      } catch (error) {
        console.error('Error initializing form handlers:', error);
      }
    };

    // Initialize immediately
    initializeYear();

    // Initialize jQuery scripts with a small delay to ensure all scripts are loaded
    const timer = setTimeout(() => {
      initializeJQueryScripts();
    }, 500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined' && typeof (window as any).$ !== 'undefined') {
        const $ = (window as any).$;
        $('#newsletter-form').off('submit');
        $('#contactForm').off('submit');
      }
    };
  }, [pathname]); // Re-run when pathname changes

  return (
    <>
      {/* Load jQuery and dependencies first with beforeInteractive */}
      <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="beforeInteractive" />
      <Script src="/assets/js/vendor/modernizr-3.11.7.min.js" strategy="beforeInteractive" />
      <Script
        src="/assets/js/vendor/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log('jQuery loaded');
        }}
      />
      <Script src="/assets/js/vendor/jquery-migrate-3.3.2.min.js" strategy="beforeInteractive" />

      {/* Load other scripts after jQuery is available */}
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

      {/* Form handlers - wait for window load to ensure jQuery is ready */}
      <Script id="contact-form" strategy="afterInteractive">
        {`
          (function() {
            function initializeForms() {
              // Check if jQuery is loaded
              if (typeof window.$ === 'undefined' || typeof window.jQuery === 'undefined') {
                console.warn('jQuery not loaded yet, retrying...');
                setTimeout(initializeForms, 100);
                return;
              }
              
              var $ = window.$;
              
              $(document).ready(function() {
                $("#newsletter-form").off();
                
                $("#contactForm").submit(function (e) {
                  e.preventDefault();
                  var btn = $(this).find("button");
                  btn.prop("disabled", true).html("Please wait...");
                  
                  $.ajax({
                    url: "/assets/php/contact.php",
                    type: "POST",
                    data: $(this).serialize(),
                    success: function (response) {
                      btn.prop("disabled", false).html("Submit now");
                      if (response.includes("success")) {
                        if (typeof Swal !== 'undefined') {
                          Swal.fire({
                            icon: "success",
                            title: "Message Sent Successfully!",
                            text: "Our team will contact you soon.",
                          }).then(function() {
                            window.location.href = "/";
                          });
                        }
                      } else {
                        if (typeof Swal !== 'undefined') {
                          Swal.fire({
                            icon: "error",
                            title: "Failed!",
                            text: "Something went wrong. Try again.",
                          });
                        }
                      }
                    },
                    error: function () {
                      btn.prop("disabled", false).html("Submit now");
                    }
                  });
                });
                
                $("#newsletter-form").submit(function(e){
                  e.preventDefault();
                  var btn = $(this).find("button");
                  btn.prop("disabled", true).html("Please wait...");
                  
                  $.ajax({
                    url: "/assets/php/newsletter.php",
                    type: "POST",
                    data: $(this).serialize(),
                    success: function(response){
                      btn.prop("disabled", false).html('<img src="/assets/images/icon/icon-5.png">');
                      if(response.includes("success")){
                        if (typeof Swal !== 'undefined') {
                          Swal.fire({
                            icon: "success",
                            title: "Subscribed Successfully!",
                            text: "Thank you for joining our network!",
                          }).then(function() {
                            window.location.href = "/";
                          });
                        }
                      } else {
                        if (typeof Swal !== 'undefined') {
                          Swal.fire({
                            icon: "error",
                            title: "Subscription Failed!",
                            text: "Please try again.",
                          });
                        }
                      }
                    },
                    error: function() {
                      btn.prop("disabled", false).html('<img src="/assets/images/icon/icon-5.png">');
                    }
                  });
                });
              });
            }
            
            // Start initialization when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initializeForms);
            } else {
              initializeForms();
            }
          })();
        `}
      </Script>
    </>
  );
}
