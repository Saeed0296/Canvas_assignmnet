var canvas = document.getElementById("image-canvas");
var context = canvas.getContext("2d");

window.onload = function () 
{
    var imgObject = new Image();
    imgObject.onload = function ()
    {
        context.drawImage(imgObject,0,0,canvas.width, canvas.height);
    };
    imgObject.src = "./images/image.jpg"
};

function addCaptionTop()
{
    var input = document.getElementById("header-text");
    var input_text = input.value;
    var item = document.getElementById("caption-top");
    item.innerHTML = input_text;
}

function addCaptionBottom()
{
    var input = document.getElementById("footer-text");
    var input_text = input.value;
    var item = document.getElementById("caption-bottom");
    item.innerHTML = input_text;
}

document.querySelector('.btn').addEventListener('click', download);

function download()
{
    var img = canvas.toDataURL();
    var link = document.createElement("a");
    link.href = img;
    link.download = "image.png";
    link.click();
}

function textOnPicture() 
{
    context.font = "20px sans-serif";
    context.fillStyle = "white";
    var input = document.getElementById("pic-text");
    var input_text = input.value;
    context.fillText(input_text, canvas.width / 5, canvas.height / 2);
}