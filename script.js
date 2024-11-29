const main = document.querySelector("body");
const cursorAnim = document.querySelector(".cursor");

main.addEventListener("mousemove", (dets) => {
  gsap.to(".cursor", {
    x: dets.clientX,
    y: dets.clientY,
  });
});

const homeAnimation = () => {
  const tl = gsap.timeline();
  tl.from("nav .logo, nav h3", {
    y: -30,
    opacity: 0,
    duration: 0.3,
    delay: 0.5,
    stagger: 0.2,
  });
  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part1 p", {
    y: -30,
    opacity: 0,
    duration: 0.3,
  });
  tl.from(".center-part1 button,nav button", {
    duration: 0.2,
    opacity: 0,
  });
  tl.from(
    ".center-part2 img",
    {
      duration: 0.5,
      opacity: 0,
    },
    "-=1"
  );
  tl.from(
    ".bottom-section img",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    },
    "-=1"
  );
};

const scrollerAnimation = () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#services-section",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "bottom top",
      scrub: 2,
    },
  });
  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  // line1

  tl2.from(
    ".elem.left.line1",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "line1animation"
  );
  tl2.from(
    ".elem.right.line1",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "line1animation"
  );

  // line2
  tl2.from(
    ".elem.left.line2",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "line2animation"
  );
  tl2.from(
    ".elem.right.line2",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "line2animation"
  );
  tl2.from(
    ".contact-element h2",
    {
      y: 40,
      opacity: 0,
      duration: 0.2,
    },
    "contact-anim"
  );
  tl2.from(
    ".contact-element p,.contact-element button",
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
    },
    "contact-anim"
  );
  tl2.from(
    ".contact-img img",
    {
      x: 100,
      opacity: 0,
      duration: 0.3,
    },
    "contact-anim"
  );
  tl2.from("#caseStudy-section .services h3", {
    x: -300,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from("#caseStudy-section .services p", {
    x: 300,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".caseBox-container .caseBox1",
    {
      y: 200,
      opacity: 0,
      duration: 0.2,
    },
    "caseBoxAnim"
  );
  tl2.from(
    ".caseBox-container .caseBox2",
    {
      opacity: 0,
      duration: 0.5,
    },
    "caseBoxAnim"
  );
  tl2.from(
    ".caseBox-container .caseBox3",
    {
      x: -200,
      opacity: 0,
      duration: 0.2,
    },
    "caseBoxAnim"
  );
};

homeAnimation();
scrollerAnimation();
