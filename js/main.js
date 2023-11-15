// Edit Menu
var navMenu = document.querySelector(".nav-menu")
var closeNav = document.querySelector(".close-menu")
var openNav = document.querySelector('.open-nav')
closeNav.onclick = () => {
    // e.preventDefualt()

    navMenu.classList.add('close')
    navMenu.classList.remove('open')
};

openNav.onclick = () => {
    console.log("totot");
    navMenu.classList.add('open')
    navMenu.classList.remove('close')
}


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


// dispaly menu projects
var openMenuProjects = document.querySelector('.projects-open-menu')
var menuProjects = document.querySelector('.nav-menu-all-projects')
var rotateArrow = document.querySelector('.projects-open-menu i')

openMenuProjects.onclick = (e) => {
    e.preventDefault()
    menuProjects.classList.toggle("show")
    rotateArrow.classList.toggle('rotate')
}

// active hover in menu projects
var allProjectsLinks = document.querySelectorAll('.all-projects-links .link')
var allProjectsImages = document.querySelectorAll('.all-projects-show-img img')


for (let link of allProjectsLinks) {

    link.addEventListener("mouseenter", function () {
        // 1. Remove Class from All Lis
        for (let link of allProjectsLinks) {
            link.classList.remove('active');
        }
        for (let img of allProjectsImages) {
            img.classList.remove('active');
        }

        // 2. Add Class to Relevant Li
        this.classList.add('active');

        for (let img of allProjectsImages) {
            if(img.getAttribute('data-section') == this.getAttribute('data-section')) {
                img.classList.add("active")
            }
        }


        // console.log(this.getAttribute('data-section'));

        // for (let img of allProjectsImages) {
        //     console.log(img.getAttribute('data-section'));
        // }


    });

}

//              ^
// change image ^

