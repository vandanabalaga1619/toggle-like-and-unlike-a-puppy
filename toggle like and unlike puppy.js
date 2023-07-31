let puppyImageEl = document.getElementById("puppyImage");
let likeIconEl = document.getElementById("likeIcon");
let likeButtonEl = document.getElementById("likeButton");
let puppyImageLiked = false;

function onClickLikeButton() {
    if (puppyImageLiked === false) {
        puppyImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconEl.style.color = "#0967d2";
        likeButtonEl.style.backgroundColor = "#0967d2";
        likeButtonEl.style.color = "#ffffff";
        puppyImageLiked = true;
    } else {
        puppyImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconEl.style.color = "#cbd2d9";
        likeButtonEl.style.backgroundColor = "#cbd2d9";
        likeButtonEl.style.color = "#9aa5b1";
        puppyImageLiked = false;
    }
}