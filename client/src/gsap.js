const sections = gsap.utils.toArray(".about-container section");

    let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".about-container",
        pin: true,
        scrub: 1,
        end: "+=5000",
        // snap: 1 / (sections.length - 1),
        markers: true,
    }
    });