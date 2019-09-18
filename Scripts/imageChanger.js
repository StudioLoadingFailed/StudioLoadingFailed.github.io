var imgNow = 0;
function ChangeImage() {
    var image = document.getElementById("MainImage");
    if(imgNow == 0){
        image.src = "Pictures/1.png";
        imgNow += 1;
    }
    else if(imgNow == 1){
        image.src = "Pictures/3.png";
        imgNow += 1;
    }
    else if(imgNow == 2)
    {
        image.src = "Pictures/4.png";
        imgNow = 0;
    }
}
setInterval(ChangeImage,4000);