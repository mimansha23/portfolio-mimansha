const skillBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const width =
            entry.target.dataset.progress;

            entry.target.style.width = width;

        }

    });

},{threshold:0.4});

skillBars.forEach(bar=>{
    skillObserver.observe(bar);
});
const heroTitle =
document.querySelector(".hero-title");

let hue = 0;

setInterval(()=>{

    hue += 1;

    heroTitle.style.background =
    `linear-gradient(
        90deg,
        hsl(${hue},100%,60%),
        hsl(${hue+100},100%,60%)
    )`;

    heroTitle.style.webkitBackgroundClip="text";
    heroTitle.style.color="transparent";

},30);
window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    loader.classList.add("hide");

    setTimeout(() => {
        loader.remove();
    }, 1000);

});