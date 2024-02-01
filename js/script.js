const ratio = 0.1;

const options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: ratio
}

function reveal (entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(reveal, options);
document.querySelectorAll("[class*='reveal-'").forEach(function (r){
    observer.observe(r)
})

function progressBar (entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.remove("emptypb");
            entry.target.classList.add("progressanim");
            observer.unobserve(entry.target)
        }
    })
}

const observerpb = new IntersectionObserver(progressBar, options);
document.querySelectorAll("[class*='pb'").forEach(function (r){
    observerpb.observe(r)
})