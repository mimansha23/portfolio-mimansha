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