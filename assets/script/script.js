var swiperTop = new Swiper(".scrollImgNone", {
  mousewheel: {
    sensitivity: 1,
  },
  slidesPerView: 1.5,
  freeMode: {
    sensitivity: 100,
  },
});

function myFunction(x320, x990, x768) {
  if (x320.matches) {
    var swiperTop = new Swiper(".scrollImg", {
      mousewheel: {
        sensitivity: 1,
      },
      slidesPerView: 1.5,
      freeMode: {
        sensitivity: 100,
      },
    });
    const navMenuToggle = () => {
      $(".dropdown-clicked").click(function (e) {
        e.preventDefault();
        $("header .dropdown-item").fadeIn();
      });
      $(".dropdown-item-a-first").click(function (e) {
        e.preventDefault();
        $("header .dropdown-item").fadeOut();
      });
      $(".hover-ul-a")
        .mouseover(function (e) {
          $("header .dropdown-item-ul").css({
            display: "block",
            opacity: 1,
          });
        })
        .mouseout(function (e) {
          $("header .dropdown-item-ul").css({
            display: "none",
            opacity: 0,
          });
        });
      $(".header-right-bars").click(function (e) {
        $("header .header-top").css({
          top: "0",
        });
      });
      $(".header-top .exit").click(function (e) {
        $("header .header-top").css({
          top: "-250vh",
        });
      });
    };
    navMenuToggle();
  } else if (x768.matches) {
    console.log("768");
    window.addEventListener("load", function (e) {
      gsap.registerPlugin(ScrollTrigger);

      setTimeout(() => {
        $(".elephant-header").animate(
          {
            opacity: 1,
          },
          500
        );
      }, 2500);

      // copied from other page !
      const navMenuToggle = () => {
        $(".dropdown-clicked").click(function (e) {
          e.preventDefault();
          $("header .dropdown-item").fadeIn();
        });
        $(".dropdown-item-a-first").click(function (e) {
          e.preventDefault();
          $("header .dropdown-item").fadeOut();
        });
        $(".hover-ul-a")
          .mouseover(function (e) {
            $("header .dropdown-item-ul").css({
              display: "block",
              opacity: 1,
            });
          })
          .mouseout(function (e) {
            $("header .dropdown-item-ul").css({
              display: "none",
              opacity: 0,
            });
          });
        $(".header-right-bars").click(function (e) {
          $("header .header-top").css({
            top: "0",
          });
        });
        $(".header-top .exit").click(function (e) {
          $("header .header-top").css({
            top: "-130vh",
          });
        });
      };
      navMenuToggle();
      //

      const headerAnimation = () => {
        $(".elephant-header").animate(
          {
            right: "15px",
            top: "580px",
            transform: "scale(132%)",
            opacity: 0,
          },
          1
        );

        $("body, html").animate(
          {
            scrollTop: 0,
          },
          400
        );

        const tlAn = ScrollTrigger.create({
          trigger: ".header-title",
        });
        let tl = gsap.timeline({
          animation: tlAn,
          defaults: { duration: 0.3 },
        });

        tl.from(".headerNav", {
          top: "+=30",
          opacity: 0,
        });

        document.querySelectorAll(".headerTitle").forEach((title) => {
          tl.from(title, {
            marginTop: 20,
            opacity: 0,
            ease: "ease-in",
          });
        });

        tl.to(".elephant-header", {
          transform: "scale(1)",
          opacity: 1,
          top: 605,
          right: 0,
          duration: 0.7,
        }).to(
          ".elephant-img-h",
          {
            marginTop: 0,
            duration: 0.7,
          },
          "-=0.5"
        );
      };
      headerAnimation();

      const mainAnimation = () => {
        const mainContent = document.querySelector(".main-underline");
        let tlMain = gsap.timeline({
          scrollTrigger: {
            trigger: ".mainTitle",
            start: "0% 100%",
            toggleActions: "restart pause reverse pause",
            end: () => "+=" + mainContent.offsetHeight,
            scrub: 1,
          },
        });

        tlMain
          .from(".elephant-header", {
            right: 0,
            top: 605,
            transform: "scale(100%)",
            duration: 1,
          })
          .to(
            ".elephant-face",
            {
              top: "+=15",
              duration: 1,
            },
            "-=1"
          )
          .to(
            ".elephant-ears",
            {
              top: "-=5",
              duration: 1,
            },
            "-=1"
          );

        const underlineAnimation = () => {
          const mainText = document.querySelector(".main-text");
          const underlines = mainText.querySelectorAll("span");
          let tlUnderline = gsap.timeline({
            scrollTrigger: {
              trigger: ".main-underline",
              start: "100% 70%",
              end: "+=4500",
              scrub: 2,
              pin: ".main-underline",
              toggleActions: "restart pause reverse pause",
            },
          });

          document.querySelectorAll(".line-block").forEach((block, index) => {
            tlUnderline
              .to(block, {
                marginLeft: 0,
                opacity: 1,
                duration: 0.5,
              })
              .to(underlines[index], {
                width: "95%",
                duration: 0.5,
              });
          });

          let elephantOpacity = gsap.timeline({
            scrollTrigger: {
              trigger: ".results",
              start: "top 90%",
              end: "+=1300",
              scrub: 1,
            },
          });

          elephantOpacity
            .to(".elephant-header", {
              zIndex: 3,
              transform: "scale(150%)",
              opacity: 0,
              duration: 1,
            })
            .to(
              ".elephant-face",
              {
                top: "-=15",
                duration: 1,
              },
              "-=1"
            );
        };
        underlineAnimation();
      };
      mainAnimation();

      const resultsAnimation = () => {
        const resSlide = document.querySelectorAll(".result-slide");
        const imgBox = document.querySelectorAll(".img-box");

        const resTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".result-slide",
            scrub: true,
            pin: ".right-img",
            start: "top top",
            end: () => "+=" + (resSlide[0].offsetHeight + 20) * 3,
            snap: 1 / (imgBox.length + 0.02),
            markers: true,
          },
        });

        resTl.to(imgBox[0], {
          height: 0,
          duration: 1,
          ease: "ease-in",
        });
        resTl.to(imgBox[1], {
          height: 0,
          duration: 1,
          ease: "ease-in",
        });
        resTl.to(imgBox[2], {
          height: 0,
          duration: 1,
          ease: "ease-in",
        });
      };
      resultsAnimation();

      const feedbackAnimation1 = () => {
        gsap.to(".feedback-1", {
          paddingTop: 180,
          paddingBottom: 60,
          scrollTrigger: {
            trigger: ".feedback-1",
            start: "top 80%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-1").offsetHeight * 1.8,
          },
        });
        gsap.to(".elephant-img-bo-1", {
          y: "+=150",
          scrollTrigger: {
            trigger: ".feedback-1",
            start: "top 35%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-1").offsetHeight * 3,
          },
        });
        const elephImg = gsap.timeline({
          scrollTrigger: {
            trigger: ".form-footer-1",
            start: "30px 100%",
            scrub: true,
            end: "+=300",
          },
        });

        elephImg.to(".elephant-img-bo-1", {
          scale: 0.65,
          right: -175,
          top: -20,
          duration: 2,
        });

        elephImg.to(
          ".elephant-img-1",
          {
            opacity: 1,
            duration: 2,
          },
          "-=1"
        );
      };
      feedbackAnimation1();

      const sectionResultAnimation = () => {
        const tl_3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".section_result_1",
            start: "30% 0%",
            end: "+=6000",
            scrub: 1,
            pin: true,
          },
        });
        tl_3.to(".section_result", {
          x: 350,
          y: -90,
          duration: 1,
        });
        tl_3.to(".section_result", {
          x: 550,
          y: -90,
          duration: 1,
          delay: 1,
        });
        tl_3.from(
          [".info .ResultP1"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 2,
            duration: 1,
          },
          0
        );
        tl_3.from(
          [".rubl_div111"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 3,
            duration: 1,
          },
          0
        );
        tl_3.to(
          [".info .ResultP1"],
          2,
          {
            opacity: 0,
            x: 50,
            delay: 4,
            duration: 1,
          },
          0
        );
        tl_3.from(
          [".info .ResultP2"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 5,
            duration: 1,
          },
          0
        );
        tl_3.from(
          [".Diograms"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 5,
            duration: 1,
          },
          0
        );
        tl_3.to(
          [".section_result"],
          4,
          {
            opacity: 1,
            x: 0,
            delay: 7,
            duration: 2,
          },
          0
        );
        tl_3.to(
          [".info .ResultP2"],
          2,
          {
            opacity: 0,
            x: 50,
            delay: 7,
            duration: 1,
          },
          0
        );

        gsap.from(".bottom_bottom", {
          opacity: 0,
          y: -150,
          duration: 1,
          scrollTrigger: {
            trigger: ".section_result_1",
            start: "60% 30%",
            scrub: 1,
            end: "+=100",
          },
        });
      };
      sectionResultAnimation();

      const digitalAnimation = () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".digital_title",
            start: "0% 90%",
            scrub: 2,
            end: () =>
              "+=" +
              document.querySelector(".digital_title").offsetHeight * 1.3,
          },
        });

        tl.from(".dital-title", {
          opacity: 0,
          duration: 1,
        }).to(
          ".dig-cen-title",
          {
            marginLeft: 240,
            duration: 1,
          },
          "-=0.9"
        );

        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".digital-body",
            start: "10% 15%",
            scrub: true,
            pin: ".digital",
            end: () => "+=" + 800,
          },
        });

        tl2
          .from(".progress-box", {
            opacity: 0,
          })
          .from(
            ".progress",
            {
              width: 0,
            },
            "-=0.5"
          );

        gsap.from([".bottom-box"], {
          y: 30,
          opacity: 0,
          scrollTrigger: {
            trigger: ".digital-progress",
            start: "0% 10%",
            scrub: 1,
          },
        });

        const arrC = [
          "#379BAD",
          "#318DA7",
          "#2E86A3",
          "#2C7FA0",
          "#29789D",
          "#267199",
          "#236A96",
          "#206393",
          "#1D5B90",
          "#1B558D",
        ];

        document
          .querySelector(".nps-modal")
          .querySelectorAll(".review")
          .forEach((el, idx) => {
            el.style.background = arrC[idx];
          });

        $(".footer-button").on("click", function (e) {
          gsap.to(".nps-modal", {
            display: "flex",
            opacity: 1,
            duration: 0.5,
          });
          document.addEventListener("click", function (e) {
            if (
              e.target.className === "nps-modal" ||
              e.target.className === "modal-close" ||
              e.target.className.animVal === "modal-x"
            ) {
              gsap.to(".nps-modal", {
                opacity: 0,
                display: "none",
                duration: 0.5,
              });
            }
          });
        });
      };
      digitalAnimation();

      // ============================ strategy animation start

      const strategyAnimation = () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".strategy-title",
            scrub: 2,
            start: "0% 90%",
            end: "+=400",
          },
        });
        tl.from([".title-top", ".title-center", ".title-bottom"], {
          opacity: 0,
        }).from(
          ".title-center",
          {
            marginLeft: 0,
          },
          "-=0.4"
        );

        const tlCard = gsap.timeline({
          scrollTrigger: {
            trigger: ".strategy-card",
            start: "0% 87%",
            scrub: 1,
            ease: "ease-out",
            end: () =>
              "+=" +
              document.querySelector(".strategy-card").offsetHeight * 1.35,
          },
        });

        tlCard.to([".card-left", ".card-right", ".card-bottom"], {
          top: "60%",
          left: "50%",
          transform: "translateX(-50%)",
          duration: 2,
        });

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".title-center",
            start: "50px 0%",
            scrub: 1,
            pin: ".strategy",
            end: () =>
              "+=" + document.querySelector(".strategy").offsetHeight * 7,
          },
        });

        tl2
          .to(".card-right", {
            opacity: 1,
            duration: 1,
          })
          .to(".card-right", {
            opacity: 1,
            duration: 1,
          })
          .to(".card-center", {
            width: 142,
            height: 142,
            opacity: 1,
            duration: 1.7,
          })
          .to(".card-center", {
            width: 333,
            height: 223,
            duration: 1,
          })
          .to(
            [".card-left", ".card-right", ".card-bottom"],
            {
              display: "none",
              duration: 1,
            },
            "-=0.5"
          )
          .to(".center-card-img", {
            opacity: 1,
            duration: 1,
          })
          .to(".strategy-dark", {
            height: "110vh",
            duration: 1,
          })
          .from(".icon", {
            top: "+=100",
            opacity: 0,
            duration: 1,
          })
          .from(".dark-banners", {
            y: 120,
            opacity: 0,
            duration: 1,
          })
          .to(".dark-banners", {
            opacity: 1,
          })
          .to(".dark-lines", {
            opacity: 1,
            duration: 1,
          })
          .to(".dark-lines", {
            opacity: 1,
          });
      };
      strategyAnimation();

      // ============================ feedback animation 2 start
      const feedbackAnimation2 = () => {
        gsap.to(".feedback-2", {
          paddingTop: 260,
          paddingBottom: 60,
          scrollTrigger: {
            trigger: ".feedback-2",
            start: "top 80%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-2").offsetHeight * 2.5,
          },
        });
        gsap.to(".elephant-img-bo-2", {
          y: "+=150",
          scrollTrigger: {
            trigger: ".feedback-2",
            start: "top 35%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-2").offsetHeight * 2.5,
          },
        });
        const elephImg = gsap.timeline({
          scrollTrigger: {
            trigger: ".form-footer-2",
            start: "30px 100%",
            scrub: true,
            end: "+=300",
          },
        });

        elephImg.to(".elephant-img-bo-2", {
          scale: 0.7,
          right: -155,
          top: 30,
          duration: 3,
        });

        elephImg.to(
          ".elephant-img-2",
          {
            opacity: 1,
            duration: 2,
          },
          "-=1"
        );
      };
      feedbackAnimation2();

      const keysSection = () => {
        // gsap.to(".swiper-wrapper", {
        //   x: -2635,
        //   duration: 1,
        //   scrollTrigger: {
        //     trigger: ".sort",
        //     start: "50px 0%",
        //     scrub: 1,
        //     pin: ".keys",
        //     end: () =>
        //       "+=" + document.querySelector(".swiper-slide").offsetHeight * 3,
        //   },
        // });
        var swiper = new Swiper(".swiper-container", {
          pagination: { el: ".swiper-pagination", clickable: true },
          slidesPerView: 1.5,
          freeMode: { sensitivity: 10 },
        });
      };
      keysSection();

      const footerScript = () => {
        $(".footerCenterBigLinks2").slideUp();

        $(".footerCenterBottomTitle2").on("click", function (e) {
          e.preventDefault();
          $(this)
            .toggleClass("active")
            .siblings(".footerCenterBigLinks2")
            .slideToggle();
          $(this)
            .parent()
            .siblings()
            .find(".footerCenterBottomTitle2")
            .removeClass("active")
            .siblings(".footerCenterBigLinks2")
            .slideUp();
          $("footer").css({ height: "118vh" });
          // $(this).toggleClass('active');
          // $(this).siblings('p').slideToggle();
          // $(this).parent().siblings().find('h3').removeClass('.active');
          // $(this).parent().siblings().find('p').slideUp();
        });

        gsap.to(".footer", {
          paddingTop: 180,
          scrollTrigger: {
            trigger: ".footer",
            start: "0% 90%",
            scrub: true,
            end: () => "+=" + document.querySelector(".footer").offsetHeight,
          },
        });
      };
      footerScript();
    });
  } else if (x990.matches) {
    console.log("990");
    window.addEventListener("load", function (e) {
      gsap.registerPlugin(ScrollTrigger);

      setTimeout(() => {
        $(".elephant-header").animate(
          {
            opacity: 1,
          },
          500
        );
      }, 2500);

      // copied from other page !
      const navMenuToggle = () => {
        $(".dropdown-clicked").click(function (e) {
          e.preventDefault();
          $("header .dropdown-item").fadeIn();
        });
        $(".dropdown-item-a-first").click(function (e) {
          e.preventDefault();
          $("header .dropdown-item").fadeOut();
        });
        $(".hover-ul-a")
          .mouseover(function (e) {
            $("header .dropdown-item-ul").css({
              display: "block",
              opacity: 1,
            });
          })
          .mouseout(function (e) {
            $("header .dropdown-item-ul").css({
              display: "none",
              opacity: 0,
            });
          });
        $(".header-right-bars").click(function (e) {
          $("header .header-top").css({
            top: "0",
          });
        });
        $(".header-top .exit").click(function (e) {
          $("header .header-top").css({
            top: "-130vh",
          });
        });
      };
      navMenuToggle();
      //

      const headerAnimation = () => {
        $(".elephant-header").animate(
          {
            right: "60px",
            top: "350px",
            transform: "scale(132%)",
            opacity: 0,
          },
          1
        );

        $("body, html").animate(
          {
            scrollTop: 0,
          },
          400
        );

        const tlAn = ScrollTrigger.create({
          trigger: ".header-title",
        });
        let tl = gsap.timeline({
          animation: tlAn,
          defaults: { duration: 0.3 },
        });

        tl.from(".headerNav", {
          top: "+=30",
          opacity: 0,
        });

        document.querySelectorAll(".headerTitle").forEach((title) => {
          tl.from(title, {
            marginTop: 20,
            opacity: 0,
            ease: "ease-in",
          });
        });

        tl.to(".elephant-header", {
          transform: "scale(1)",
          opacity: 1,
          top: 385,
          right: 0,
          duration: 0.7,
        }).to(
          ".elephant-img-h",
          {
            marginTop: 0,
            duration: 0.7,
          },
          "-=0.5"
        );
      };
      headerAnimation();

      const mainAnimation = () => {
        const mainContent = document.querySelector(".main-underline");
        let tlMain = gsap.timeline({
          scrollTrigger: {
            trigger: ".mainTitle",
            start: "0% 100%",
            toggleActions: "restart pause reverse pause",
            end: () => "+=" + mainContent.offsetHeight,
            scrub: 1,
          },
        });

        tlMain
          .from(".elephant-header", {
            right: 0,
            top: 385,
            transform: "scale(100%)",
            duration: 1,
          })
          .to(
            ".elephant-face",
            {
              top: "+=15",
              duration: 1,
            },
            "-=1"
          )
          .to(
            ".elephant-ears",
            {
              top: "-=5",
              duration: 1,
            },
            "-=1"
          );

        const underlineAnimation = () => {
          const mainText = document.querySelector(".main-text");
          const underlines = mainText.querySelectorAll("span");
          let tlUnderline = gsap.timeline({
            scrollTrigger: {
              trigger: ".main-underline",
              start: "100% 100%",
              end: "+=4500",
              scrub: 2,
              pin: ".main-underline",
              toggleActions: "restart pause reverse pause",
            },
          });

          document.querySelectorAll(".line-block").forEach((block, index) => {
            tlUnderline
              .to(block, {
                marginLeft: 0,
                opacity: 1,
                duration: 0.5,
              })
              .to(underlines[index], {
                width: "95%",
                duration: 0.5,
              });
          });

          let elephantOpacity = gsap.timeline({
            scrollTrigger: {
              trigger: ".results",
              start: "top 90%",
              end: "+=1300",
              scrub: 1,
            },
          });

          elephantOpacity
            .to(".elephant-header", {
              zIndex: 3,
              transform: "scale(150%)",
              opacity: 0,
              duration: 1,
            })
            .to(
              ".elephant-face",
              {
                top: "-=15",
                duration: 1,
              },
              "-=1"
            );
        };
        underlineAnimation();
      };
      mainAnimation();

      const resultsAnimation = () => {
        const resSlide = document.querySelectorAll(".result-slide");
        const imgBox = document.querySelectorAll(".img-box");

        const resTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".result-slide",
            scrub: true,
            pin: ".right-img",
            start: "top top",
            end: () => "+=" + (resSlide[0].offsetHeight + 20) * 3,
            snap: 1 / (imgBox.length + 0.02),
          },
        });

        resTl.to(imgBox[0], {
          height: 0,
          duration: 1,
          ease: "ease-in",
        });
        resTl.to(imgBox[1], {
          height: 0,
          duration: 1,
          ease: "ease-in",
        });
        resTl.to(imgBox[2], {
          height: 0,
          duration: 1,
          ease: "ease-in",
        });
      };
      resultsAnimation();

      const feedbackAnimation1 = () => {
        gsap.to(".feedback-1", {
          paddingTop: 180,
          paddingBottom: 60,
          scrollTrigger: {
            trigger: ".feedback-1",
            start: "top 80%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-1").offsetHeight * 1.8,
          },
        });
        gsap.to(".elephant-img-bo-1", {
          y: "+=150",
          scrollTrigger: {
            trigger: ".feedback-1",
            start: "top 35%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-1").offsetHeight * 3,
          },
        });
        const elephImg = gsap.timeline({
          scrollTrigger: {
            trigger: ".form-footer-1",
            start: "30px 100%",
            scrub: true,
            end: "+=300",
          },
        });

        elephImg.to(".elephant-img-bo-1", {
          scale: 0.65,
          right: -175,
          top: -20,
          duration: 2,
        });

        elephImg.to(
          ".elephant-img-1",
          {
            opacity: 1,
            duration: 2,
          },
          "-=1"
        );
      };
      feedbackAnimation1();

      const sectionResultAnimation = () => {
        const tl_3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".section_result_1",
            start: "30% 0%",
            end: "+=6000",
            scrub: 1,
            pin: true,
          },
        });
        tl_3.to(".section_result", {
          x: 350,
          y: -90,
          duration: 1,
        });
        tl_3.to(".section_result", {
          x: 550,
          y: -90,
          duration: 1,
          delay: 1,
        });
        tl_3.from(
          [".info .ResultP1"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 2,
            duration: 1,
          },
          0
        );
        tl_3.from(
          [".rubl_div111"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 3,
            duration: 1,
          },
          0
        );
        tl_3.to(
          [".info .ResultP1"],
          2,
          {
            opacity: 0,
            x: 50,
            delay: 4,
            duration: 1,
          },
          0
        );
        tl_3.from(
          [".info .ResultP2"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 5,
            duration: 1,
          },
          0
        );
        tl_3.from(
          [".Diograms"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 5,
            duration: 1,
          },
          0
        );
        tl_3.to(
          [".section_result"],
          4,
          {
            opacity: 1,
            x: 0,
            delay: 7,
            duration: 2,
          },
          0
        );
        tl_3.to(
          [".info .ResultP2"],
          2,
          {
            opacity: 0,
            x: 50,
            delay: 7,
            duration: 1,
          },
          0
        );

        gsap.from(".bottom_bottom", {
          opacity: 0,
          y: -150,
          duration: 1,
          scrollTrigger: {
            trigger: ".section_result_1",
            start: "60% 30%",
            scrub: 1,
            end: "+=100",
          },
        });
      };
      sectionResultAnimation();

      const digitalAnimation = () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".digital_title",
            start: "0% 90%",
            scrub: 2,
            end: () =>
              "+=" +
              document.querySelector(".digital_title").offsetHeight * 1.3,
          },
        });

        tl.from(".dital-title", {
          opacity: 0,
          duration: 1,
        }).to(
          ".dig-cen-title",
          {
            marginLeft: 320,
            duration: 1,
          },
          "-=0.9"
        );

        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".digital-body",
            start: "10% 15%",
            scrub: true,
            pin: ".digital",
            end: () => "+=" + 800,
          },
        });

        tl2
          .from(".progress-box", {
            opacity: 0,
          })
          .from(
            ".progress",
            {
              width: 0,
            },
            "-=0.5"
          );

        gsap.from([".bottom-box"], {
          y: 30,
          opacity: 0,
          scrollTrigger: {
            trigger: ".digital-progress",
            start: "0% 10%",
            scrub: 1,
          },
        });

        const arrC = [
          "#379BAD",
          "#318DA7",
          "#2E86A3",
          "#2C7FA0",
          "#29789D",
          "#267199",
          "#236A96",
          "#206393",
          "#1D5B90",
          "#1B558D",
        ];

        document
          .querySelector(".nps-modal")
          .querySelectorAll(".review")
          .forEach((el, idx) => {
            el.style.background = arrC[idx];
          });

        $(".footer-button").on("click", function (e) {
          gsap.to(".nps-modal", {
            display: "flex",
            opacity: 1,
            duration: 0.5,
          });
          document.addEventListener("click", function (e) {
            if (
              e.target.className === "nps-modal" ||
              e.target.className === "modal-close" ||
              e.target.className.animVal === "modal-x"
            ) {
              gsap.to(".nps-modal", {
                opacity: 0,
                display: "none",
                duration: 0.5,
              });
            }
          });
        });
      };
      digitalAnimation();

      // ============================ strategy animation start

      const strategyAnimation = () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".strategy-title",
            scrub: 2,
            start: "0% 90%",
            end: "+=400",
          },
        });
        tl.from([".title-top", ".title-center", ".title-bottom"], {
          opacity: 0,
        }).from(
          ".title-center",
          {
            marginLeft: 0,
          },
          "-=0.4"
        );

        const tlCard = gsap.timeline({
          scrollTrigger: {
            trigger: ".strategy-card",
            start: "0% 87%",
            scrub: 1,
            ease: "ease-out",
            end: () =>
              "+=" +
              document.querySelector(".strategy-card").offsetHeight * 1.35,
          },
        });

        tlCard.to([".card-left", ".card-right", ".card-bottom"], {
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          duration: 2,
        });

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".title-center",
            start: "50px 0%",
            scrub: 1,
            pin: ".strategy",
            end: () =>
              "+=" + document.querySelector(".strategy").offsetHeight * 7,
          },
        });

        tl2
          .to(".card-right", {
            opacity: 1,
            duration: 1,
          })
          .to(".card-right", {
            opacity: 1,
            duration: 1,
          })
          .to(".card-center", {
            opacity: 1,
            duration: 1.7,
          })
          .to(".card-center", {
            width: 363,
            height: 253,
            duration: 1,
          })
          .to(
            [".card-left", ".card-right", ".card-bottom"],
            {
              display: "none",
              duration: 1,
            },
            "-=0.5"
          )
          .to(".center-card-img", {
            opacity: 1,
            duration: 1,
          })
          .to(".strategy-dark", {
            height: "110vh",
            duration: 1,
          })
          .from(".icon", {
            top: "+=100",
            opacity: 0,
            duration: 1,
          })
          .from(".dark-banners", {
            y: 120,
            opacity: 0,
            duration: 1,
          })
          .to(".dark-banners", {
            opacity: 1,
          })
          .to(".dark-lines", {
            opacity: 1,
            duration: 1,
          })
          .to(".dark-lines", {
            opacity: 1,
          });
      };
      strategyAnimation();

      // ============================ feedback animation 2 start
      const feedbackAnimation2 = () => {
        gsap.to(".feedback-2", {
          paddingTop: 260,
          paddingBottom: 60,
          scrollTrigger: {
            trigger: ".feedback-2",
            start: "top 80%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-2").offsetHeight * 2.5,
          },
        });
        gsap.to(".elephant-img-bo-2", {
          y: "+=150",
          scrollTrigger: {
            trigger: ".feedback-2",
            start: "top 35%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-2").offsetHeight * 2.5,
          },
        });
        const elephImg = gsap.timeline({
          scrollTrigger: {
            trigger: ".form-footer-2",
            start: "30px 100%",
            scrub: true,
            end: "+=300",
          },
        });

        elephImg.to(".elephant-img-bo-2", {
          scale: 0.7,
          right: -155,
          top: 30,
          duration: 3,
        });

        elephImg.to(
          ".elephant-img-2",
          {
            opacity: 1,
            duration: 2,
          },
          "-=1"
        );
      };
      feedbackAnimation2();

      const keysSection = () => {
        // gsap.to(".swiper-wrapper", {
        //   x: -2635,
        //   duration: 1,
        //   scrollTrigger: {
        //     trigger: ".sort",
        //     start: "50px 0%",
        //     scrub: 1,
        //     pin: ".keys",
        //     end: () =>
        //       "+=" + document.querySelector(".swiper-slide").offsetHeight * 3,
        //   },
        // });
        var swiper = new Swiper(".swiper-container", {
          pagination: { el: ".swiper-pagination", clickable: true },
          slidesPerView: 1.5,
          freeMode: { sensitivity: 10 },
        });
      };
      keysSection();

      const footerScript = () => {
        $(".footerCenterBigLinks2").slideUp();

        $(".footerCenterBottomTitle2").on("click", function (e) {
          e.preventDefault();
          $(this)
            .toggleClass("active")
            .siblings(".footerCenterBigLinks2")
            .slideToggle();
          $(this)
            .parent()
            .siblings()
            .find(".footerCenterBottomTitle2")
            .removeClass("active")
            .siblings(".footerCenterBigLinks2")
            .slideUp();
          $("footer").css({ height: "118vh" });
          // $(this).toggleClass('active');
          // $(this).siblings('p').slideToggle();
          // $(this).parent().siblings().find('h3').removeClass('.active');
          // $(this).parent().siblings().find('p').slideUp();
        });

        gsap.to(".footer", {
          paddingTop: 180,
          scrollTrigger: {
            trigger: ".footer",
            start: "0% 90%",
            scrub: true,
            end: () => "+=" + document.querySelector(".footer").offsetHeight,
          },
        });
      };
      footerScript();
    });
  } else {
    window.addEventListener("load", function (e) {
      gsap.registerPlugin(ScrollTrigger);

      setTimeout(() => {
        $(".elephant-header").animate(
          {
            opacity: 1,
          },
          500
        );
      }, 2500);

      // copied from other page !
      const navMenuToggle = () => {
        $(".dropdown-clicked").click(function (e) {
          e.preventDefault();
          $("header .dropdown-item").fadeIn();
        });
        $(".dropdown-item-a-first").click(function (e) {
          e.preventDefault();
          $("header .dropdown-item").fadeOut();
        });
        $(".hover-ul-a")
          .mouseover(function (e) {
            $("header .dropdown-item-ul").css({
              display: "block",
              opacity: 1,
            });
          })
          .mouseout(function (e) {
            $("header .dropdown-item-ul").css({
              display: "none",
              opacity: 0,
            });
          });
        $(".header-right-bars").click(function (e) {
          $("header .header-top").css({
            top: "0",
          });
        });
        $(".header-top .exit").click(function (e) {
          $("header .header-top").css({
            top: "-130vh",
          });
        });
      };
      navMenuToggle();
      //

      const headerAnimation = () => {
        $(".elephant-header").animate(
          {
            right: "110px",
            top: "120px",
            transform: "scale(65%)",
            opacity: 0,
          },
          1
        );

        const tlAn = ScrollTrigger.create({
          trigger: ".header-title",
        });
        let tl = gsap.timeline({
          animation: tlAn,
          defaults: { duration: 0.3 },
        });

        tl.from(".headerNav", {
          top: "+=30",
          opacity: 0,
        });

        document.querySelectorAll(".headerTitle").forEach((title) => {
          tl.from(title, {
            marginTop: 20,
            opacity: 0,
            ease: "ease-in",
          });
        });

        tl.to(".elephant-header", {
          transform: "scale(100%)",
          opacity: 1,
          top: 250,
          right: 0,
          duration: 0.7,
        }).to(
          ".elephant-img-h",
          {
            marginTop: "0px",
            duration: 0.7,
          },
          "-=0.5"
        );

        console.log($(".elephant-img"));
      };
      headerAnimation();

      const mainAnimation = () => {
        const mainContent = document.querySelector(".main-underline");
        let tlMain = gsap.timeline({
          scrollTrigger: {
            trigger: ".mainTitle",
            start: "0% 100%",
            toggleActions: "restart pause reverse pause",
            end: () => "+=" + mainContent.offsetHeight,
            scrub: 1,
          },
        });

        tlMain
          .from(".elephant-header", {
            right: 0,
            top: 250,
            transform: "scale(100%)",
            duration: 1,
          })
          .to(
            ".elephant-face",
            {
              top: "+=30",
              duration: 1,
            },
            "-=1"
          )
          .to(
            ".elephant-ears",
            {
              top: "-=10",
              duration: 1,
            },
            "-=1"
          );

        const underlineAnimation = () => {
          const mainText = document.querySelector(".main-text");
          const underlines = mainText.querySelectorAll("span");
          let tlUnderline = gsap.timeline({
            scrollTrigger: {
              trigger: ".main-underline",
              start: "100% 100%",
              end: "+=4500",
              scrub: 2,
              pin: ".main-underline",
              toggleActions: "restart pause reverse pause",
            },
          });

          document.querySelectorAll(".line-block").forEach((block, index) => {
            tlUnderline
              .to(block, {
                marginLeft: 0,
                opacity: 1,
                duration: 0.5,
              })
              .to(underlines[index], {
                width: "95%",
                duration: 0.5,
              });
          });

          let elephantOpacity = gsap.timeline({
            scrollTrigger: {
              trigger: ".results",
              start: "top 90%",
              end: "+=1300",
              scrub: 1,
            },
          });

          elephantOpacity
            .to(".elephant-header", {
              zIndex: 3,
              transform: "scale(150%)",
              opacity: 0,
              duration: 1,
            })
            .to(
              ".elephant-face",
              {
                top: "-=15",
                duration: 1,
              },
              "-=1"
            );
        };
        underlineAnimation();
      };
      mainAnimation();

      const resultsAnimation = () => {
        const resSlide = document.querySelectorAll(".result-slide");
        const imgBox = document.querySelectorAll(".img-box");

        const resTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".result-slide",
            scrub: true,
            pin: ".right-img",
            start: "top top",
            end: () => "+=" + (resSlide[0].offsetHeight + 20) * 3,
            snap: 1 / (imgBox.length + 0.02),
          },
        });

        resTl.to(imgBox[0], {
          height: 0,
          duration: 1,
          ease: "ease-in",
        });
        resTl.to(imgBox[1], {
          height: 0,
          duration: 1,
          ease: "ease-in",
        });
        resTl.to(imgBox[2], {
          height: 0,
          duration: 1,
          ease: "ease-in",
        });
      };
      resultsAnimation();

      const feedbackAnimation1 = () => {
        gsap.to(".feedback-1", {
          paddingTop: 260,
          paddingBottom: 60,
          scrollTrigger: {
            trigger: ".feedback-1",
            start: "top 80%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-1").offsetHeight * 2.5,
          },
        });
        gsap.to(".elephant-img-bo-1", {
          y: "+=150",
          scrollTrigger: {
            trigger: ".feedback-1",
            start: "top 35%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-1").offsetHeight * 3,
          },
        });
        const elephImg = gsap.timeline({
          scrollTrigger: {
            trigger: ".form-footer-1",
            start: "30px 100%",
            scrub: true,
            end: "+=300",
          },
        });

        elephImg.to(".elephant-img-bo-1", {
          scale: 1,
          right: -40,
          top: 30,
          duration: 2,
        });

        elephImg.to(
          ".elephant-img-1",
          {
            opacity: 1,
            duration: 2,
          },
          "-=1"
        );
      };
      feedbackAnimation1();

      const sectionResultAnimation = () => {
        const tl_3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".section_result_1",
            start: "top -50%",
            end: "+=6000",
            scrub: 1,
            pin: true,
          },
        });
        tl_3.to(".section_result", {
          x: 350,
          y: -90,
          duration: 1,
        });
        tl_3.to(".section_result", {
          x: 550,
          y: -90,
          duration: 1,
          delay: 1,
        });
        tl_3.from(
          [".info .ResultP1"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 2,
            duration: 1,
          },
          0
        );
        tl_3.from(
          [".rubl_div111"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 3,
            duration: 1,
          },
          0
        );
        tl_3.to(
          [".info .ResultP1"],
          2,
          {
            opacity: 0,
            x: 50,
            delay: 4,
            duration: 1,
          },
          0
        );
        tl_3.from(
          [".info .ResultP2"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 5,
            duration: 1,
          },
          0
        );
        tl_3.from(
          [".Diograms"],
          2,
          {
            opacity: 0,
            x: -50,
            delay: 5,
            duration: 1,
          },
          0
        );
        tl_3.to(
          [".section_result"],
          4,
          {
            opacity: 1,
            x: 0,
            delay: 7,
            duration: 2,
          },
          0
        );
        tl_3.to(
          [".info .ResultP2"],
          2,
          {
            opacity: 0,
            x: 50,
            delay: 7,
            duration: 1,
          },
          0
        );

        gsap.from(".bottom_bottom", {
          opacity: 0,
          y: -150,
          duration: 1,
          scrollTrigger: {
            trigger: ".section_result_1",
            start: "60% 30%",
            scrub: 1,
            end: "+=100",
          },
        });
      };
      sectionResultAnimation();

      const digitalAnimation = () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".digital_title",
            start: "0% 90%",
            scrub: 2,
            end: () =>
              "+=" +
              document.querySelector(".digital_title").offsetHeight * 1.3,
          },
        });

        tl.from(".dital-title", {
          opacity: 0,
          duration: 1,
        }).to(
          ".dig-cen-title",
          {
            marginLeft: 390,
            duration: 1,
          },
          "-=0.9"
        );

        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".digital-body",
            start: "0% 53%",
            scrub: 1,
            pin: ".digital",
            end: () => "+=" + 600,
          },
        });

        tl2
          .from(".progress-box", {
            opacity: 0,
          })
          .from(
            ".progress",
            {
              width: 0,
            },
            "-=0.5"
          );

        gsap.from([".bottom-box"], {
          y: 30,
          opacity: 0,
          scrollTrigger: {
            trigger: ".digital-progress",
            start: "0% 10%",
            scrub: 1,
          },
        });

        const arrC = [
          "#379BAD",
          "#318DA7",
          "#2E86A3",
          "#2C7FA0",
          "#29789D",
          "#267199",
          "#236A96",
          "#206393",
          "#1D5B90",
          "#1B558D",
        ];

        document
          .querySelector(".nps-modal")
          .querySelectorAll(".review")
          .forEach((el, idx) => {
            el.style.background = arrC[idx];
          });

        $(".footer-button").on("click", function (e) {
          gsap.to(".nps-modal", {
            display: "flex",
            opacity: 1,
            duration: 0.5,
          });
          document.addEventListener("click", function (e) {
            if (
              e.target.className === "nps-modal" ||
              e.target.className === "modal-close" ||
              e.target.className.animVal === "modal-x"
            ) {
              gsap.to(".nps-modal", {
                opacity: 0,
                display: "none",
                duration: 0.5,
              });
            }
          });
        });
      };
      digitalAnimation();

      // ============================ strategy animation start

      const strategyAnimation = () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".strategy-title",
            scrub: 2,
            start: "0% 90%",
            end: "+=400",
          },
        });
        tl.from([".title-top", ".title-center", ".title-bottom"], {
          opacity: 0,
        }).from(
          ".title-center",
          {
            marginLeft: 0,
          },
          "-=0.4"
        );

        const tlCard = gsap.timeline({
          scrollTrigger: {
            trigger: ".strategy-card",
            start: "0% 87%",
            scrub: 1,
            ease: "ease-out",
            end: () =>
              "+=" +
              document.querySelector(".strategy-card").offsetHeight * 1.35,
          },
        });

        tlCard.to([".card-left", ".card-right", ".card-bottom"], {
          top: "1%",
          left: "50%",
          transform: "translateX(-50%)",
          duration: 2,
        });

        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".title-center",
            start: "50px 0%",
            scrub: 1,
            pin: ".strategy",
            end: () =>
              "+=" + document.querySelector(".strategy").offsetHeight * 7,
          },
        });

        tl2
          .to(".card-right", {
            opacity: 1,
            duration: 1,
          })
          .to(".card-right", {
            opacity: 1,
            duration: 1,
          })
          .to(".card-center", {
            opacity: 1,
            duration: 1.7,
          })
          .to(".card-center", {
            width: 490,
            height: 340,
            duration: 1,
          })
          .to(
            [".card-left", ".card-right", ".card-bottom"],
            {
              display: "none",
              duration: 1,
            },
            "-=0.5"
          )
          .to(".center-card-img", {
            opacity: 1,
            duration: 1,
          })
          .to(".strategy-dark", {
            height: "110vh",
            duration: 1,
          })
          .from(".icon", {
            top: "+=100",
            opacity: 0,
            duration: 1,
          })
          .from(".dark-banners", {
            y: 120,
            opacity: 0,
            duration: 1,
          })
          .to(".dark-banners", {
            opacity: 1,
          })
          .to(".dark-lines", {
            opacity: 1,
            duration: 1,
          })
          .to(".dark-lines", {
            opacity: 1,
          });
      };
      strategyAnimation();

      // ============================ feedback animation 2 start
      const feedbackAnimation2 = () => {
        gsap.to(".feedback-2", {
          paddingTop: 260,
          paddingBottom: 60,
          scrollTrigger: {
            trigger: ".feedback-2",
            start: "top 80%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-2").offsetHeight * 2.5,
          },
        });
        gsap.to(".elephant-img-bo-2", {
          y: "+=150",
          scrollTrigger: {
            trigger: ".feedback-2",
            start: "top 35%",
            scrub: true,
            end: () =>
              "+=" + document.querySelector(".feedback-2").offsetHeight * 2.5,
          },
        });
        const elephImg = gsap.timeline({
          scrollTrigger: {
            trigger: ".form-footer-2",
            start: "30px 100%",
            scrub: true,
            end: "+=300",
          },
        });

        elephImg.to(".elephant-img-bo-2", {
          scale: 1,
          right: -40,
          top: 30,
          duration: 3,
        });

        elephImg.to(
          ".elephant-img-2",
          {
            opacity: 1,
            duration: 2,
          },
          "-=1"
        );
      };
      feedbackAnimation2();

      const keysSection = () => {
        // gsap.to(".swiper-wrapper", {
        //   x: -2635,
        //   duration: 1,
        //   scrollTrigger: {
        //     trigger: ".sort",
        //     start: "50px 0%",
        //     scrub: 1,
        //     pin: ".keys",
        //     end: () =>
        //       "+=" + document.querySelector(".swiper-slide").offsetHeight * 3,
        //   },
        // });
        var swiper = new Swiper(".swiper-container", {
          pagination: { el: ".swiper-pagination", clickable: true },
          slidesPerView: 1.5,
          freeMode: { sensitivity: 10 },
        });
      };
      keysSection();

      const footerScript = () => {
        $(".footerCenterBigLinks2").slideUp();

        $(".footerCenterBottomTitle2").on("click", function (e) {
          e.preventDefault();
          $(this)
            .toggleClass("active")
            .siblings(".footerCenterBigLinks2")
            .slideToggle();
          $(this)
            .parent()
            .siblings()
            .find(".footerCenterBottomTitle2")
            .removeClass("active")
            .siblings(".footerCenterBigLinks2")
            .slideUp();
          $("footer").css({ height: "118vh" });
          // $(this).toggleClass('active');
          // $(this).siblings('p').slideToggle();
          // $(this).parent().siblings().find('h3').removeClass('.active');
          // $(this).parent().siblings().find('p').slideUp();
        });

        gsap.to(".footer", {
          paddingTop: 180,
          scrollTrigger: {
            trigger: ".footer",
            start: "0% 90%",
            scrub: true,
            end: () => "+=" + document.querySelector(".footer").offsetHeight,
          },
        });
      };
      footerScript();
    });
  }
}

// // Create a MediaQueryList object
const media320 = window.matchMedia("(max-width: 767px)");
const media990 = window.matchMedia("(max-width: 1559px)");
const media768 = window.matchMedia("(max-width: 989px)");

// Call the match function at run time:
myFunction(media320, media990, media768);

// Add the match function as a listener for state changes:
media990.addListener(myFunction);
media768.addListener(myFunction);
media320.addListener(myFunction);
