let photoIndex = 0;
images = document.getElementsByClassName("photo");
dots = document.getElementsByClassName("dot");

function changeImage(index){
    images[0].classList.remove("first-photo");
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove("active");
        dots[i].classList.remove("active-dot");
    }

    photoIndex += index;

    if(photoIndex > images.length - 1){
        photoIndex = 0;
    }
    else if(photoIndex < 0){
        photoIndex = images.length - 1;
    }

    images[photoIndex].classList.add("active");
    dots[photoIndex].classList.add("active-dot");
}

function getId(event){
    if(event.target.id == ""){
        return;
    }
    images[0].classList.remove("first-photo");
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove("active");
        dots[i].classList.remove("active-dot");
    }
    photoIndex = Number(event.target.id);
    images[photoIndex].classList.add("active");
    dots[photoIndex].classList.add("active-dot");
}