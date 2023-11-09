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
