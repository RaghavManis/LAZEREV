function page1Animation() {
  var nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "21vh",
    });
    tl.to("#nav-part2 h5", {
      display: "block",
    });
    tl.to("#nav-part2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.6,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to("#nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to("#nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.1,
    });
  });
}
function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      // gsap.to(elem.childNodes[3],{
      //   opacity: 1,
      //   scale: 1
      // })

      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].style.scale = 1;
      // console.log(elem.getBoundingClientRect()) ;
    });
    elem.addEventListener("mouseleave", function () {
      // gsap.to(elem.childNodes[3],{
      //   opacity: 0,
      //   scale: 0
      // })
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].style.scale = 0;
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 35,
        y: dets.y - elem.getBoundingClientRect().y - 90,
      });
      // elem.childNodes[3].style.x = dets.x - elem.getBoundingClientRect().x - 20 ;
      // elem.childNodes[3].style.y = dets.y - elem.getBoundingClientRect().y - 50 ;
    });
  });
}
function page3Animation() {
  var page3 = document.querySelector("#page3-center");
  var video = document.querySelector("#myvideo");
  page3.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: " scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    console.log(video);
    video.pause();
    gsap.to(video, {
      transform: " scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}
 
// page1Animation() ;
// page2Animation() ;
page3Animation() ;
