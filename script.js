// =========================
// PORTFOLIO MASTER SCRIPT
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // MOBILE MENU
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            mobileMenu.classList.toggle("is-active");
        });
    }

    // TYPING EFFECT
    const texts = [
        "Software Engineer",
        "Frontend Developer",
        "UI/UX Enthusiast",
        "Computer Science Student"
    ];

    let count = 0;
    let index = 0;

    function type() {

        const currentText = texts[count];
        const typing = document.querySelector(".typing");

        if (!typing) return;

        typing.textContent =
            currentText.slice(0, index++);

        if (index > currentText.length) {

            setTimeout(() => {

                index = 0;
                count = (count + 1) % texts.length;

            }, 2000);

        }

        setTimeout(type, 100);
    }

    type();

    // SCROLL PROGRESS
    const progress =
        document.querySelector(".scroll-progress");

    window.addEventListener("scroll", () => {

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const current =
            (window.scrollY / total) * 100;

        if (progress)
            progress.style.width =
            current + "%";
    });

    // MOUSE GLOW
    const glow =
        document.querySelector(".mouse-glow");

    document.addEventListener("mousemove", e => {

        if (!glow) return;

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

    // 3D PROJECT CARDS
    document
        .querySelectorAll(".project-card")
        .forEach(card => {

            card.addEventListener("mousemove", e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const rotateY =
                    (x - rect.width / 2) / 15;

                const rotateX =
                    (rect.height / 2 - y) / 15;

                card.style.transform =
                    `perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.04)`;

            });

            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "perspective(1000px) rotateX(0deg) rotateY(0deg)";

                }
            );

        });

    // SCROLL REVEAL
    const revealElements =
        document.querySelectorAll(
            ".skills-box,.project-card,.timeline-item,.cert-card"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

    revealElements.forEach(el => {

        el.classList.add("reveal");

        observer.observe(el);

    });

    // SKILL BARS
    const skills =
        document.querySelectorAll(".progress");

    const skillObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.width =
                        entry.target.dataset.progress;

                }

            });

        });

    skills.forEach(skill => {

        skillObserver.observe(skill);

    });

    // MAGNETIC BUTTONS
    document
        .querySelectorAll(".magnetic-btn")
        .forEach(btn => {

            btn.addEventListener(
                "mousemove",
                e => {

                    const rect =
                        btn.getBoundingClientRect();

                    const x =
                        e.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        e.clientY -
                        rect.top -
                        rect.height / 2;

                    btn.style.transform =
                        `translate(${x * 0.2}px,
                        ${y * 0.2}px)`;

                }
            );

            btn.addEventListener(
                "mouseleave",
                () => {

                    btn.style.transform =
                        "translate(0,0)";

                }
            );

        });

    // HERO PARALLAX
    const hero =
        document.querySelector(".hero-content");

    window.addEventListener(
        "mousemove",
        e => {

            if (!hero) return;

            const x =
                e.clientX / window.innerWidth;

            const y =
                e.clientY / window.innerHeight;

            hero.style.transform =
                `translate(
                ${x * 20}px,
                ${y * 20}px
                )`;

        }
    );

    // GRADIENT TITLE
    const title =
        document.querySelector(".hero-title");

    let hue = 0;

    setInterval(() => {

        if (!title) return;

        hue += 1;

        title.style.background =
            `linear-gradient(
            90deg,
            hsl(${hue},100%,60%),
            hsl(${hue + 100},100%,60%)
            )`;

        title.style.webkitBackgroundClip =
            "text";

        title.style.color =
            "transparent";

    }, 40);

    // BACK TO TOP
    const topBtn =
        document.querySelector(".top-btn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 500)
            topBtn.classList.add("show");
        else
            topBtn.classList.remove("show");

    });

    topBtn?.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // SMOOTH SCROLL
    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();

                    document
                        .querySelector(
                            this.getAttribute("href")
                        )
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

        });

});