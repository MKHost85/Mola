// change image in Ideas
var toLeft = document.querySelector('.ideas .idea-content-2 .to-left')
var toRight = document.querySelector('.ideas .idea-content-2 .to-right')
var imageMain = document.querySelector('.ideas .idea-content-2 .image-main')
var toLeftSmallMedia = document.querySelector('.ideas .idea-content-2 .to-left-small')
var toRightSmallMedia = document.querySelector('.ideas .idea-content-2 .to-right-small')
// larg media
toLeft.onclick = () => {
    imageMain.classList.add('left')
}
toRight.onclick = () => {
    imageMain.classList.remove('left')

}

// small media
toLeftSmallMedia.onclick = () => {
    imageMain.classList.add('left')
}
toRightSmallMedia.onclick = () => {
    imageMain.classList.remove('left')
}


// Scroll X AllProjects
const sliderProjects = document.querySelector(".list-projects");
const preventClickProjects = (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
}
let isDownProjects = false;
let isDraggedProjects = false;
let startXProjects;
let scrollLeftProjects;

sliderProjects.addEventListener("mousedown", e => {
    isDownProjects = true;
    sliderProjects.classList.add("active");
    startXProjects = e.pageX - sliderProjects.offsetLeft;
    scrollLeftProjects = sliderProjects.scrollLeft;
});
sliderProjects.addEventListener("mouseleave", () => {
    isDownProjects = false;
    sliderProjects.classList.remove("active");
});
sliderProjects.addEventListener("mouseup", (e) => {
    isDownProjects = false;
    const elements = document.querySelectorAll(".r-art-con");
    if (isDraggedProjects) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", preventClickProjects);
        }
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeEventListener("click", preventClickProjects);
        }
    }
    sliderProjects.classList.remove("active");
    isDraggedProjects = false;
});
sliderProjects.addEventListener("mousemove", e => {
    if (!isDownProjects) return;
    isDraggedProjects = true;
    e.preventDefault();
    const x = e.pageX - sliderProjects.offsetLeft;
    const walk = (x - startXProjects) * 2;
    sliderProjects.scrollLeft = scrollLeftProjects - walk;
    console.log(walk);
});


// Scroll X in Auther
const sliderAuther = document.querySelector(".anthor-art-con");
const preventClickAuther = (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
}
let isDownAuther = false;
let isDraggedAuther = false;
let startXAuther;
let scrollLeftAuther;

sliderAuther.addEventListener("mousedown", e => {
    isDownAuther = true;
    sliderAuther.classList.add("active");
    startXAuther = e.pageX - sliderAuther.offsetLeft;
    scrollLeftAuther = sliderAuther.scrollLeft;
});
sliderAuther.addEventListener("mouseleave", () => {
    isDownAuther = false;
    sliderAuther.classList.remove("active");
});
sliderAuther.addEventListener("mouseup", (e) => {
    isDownAuther = false;
    const elements = document.querySelectorAll(".r-art-con");
    if (isDraggedAuther) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", preventClickAuther);
        }
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeEventListener("click", preventClickAuther);
        }
    }
    sliderAuther.classList.remove("active");
    isDraggedAuther = false;
});
sliderAuther.addEventListener("mousemove", e => {
    if (!isDownAuther) return;
    isDraggedAuther = true;
    e.preventDefault();
    const x = e.pageX - sliderAuther.offsetLeft;
    const walk = (x - startXAuther) * 2;
    sliderAuther.scrollLeft = scrollLeftAuther - walk;
    console.log(walk);
});
