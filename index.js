// *****************************************HOME PAGE SECTION1****************************************************
let rightbutton = document.querySelector("#right");
let leftbutton = document.querySelector("#left");
let images = document.querySelectorAll(".img-itm");

start = 0
end = 0

rightbutton.addEventListener("click",()=>{
    if(start!=(images.length-1)){
        start = start + 1
        end = start
    }
    images.forEach(element => {
        element.style.transform = `translateX(-${start*100}%)`
    })
})

leftbutton.addEventListener("click",()=>{
    if(end!=0){
        end = end - 1
        start = end
    }
    images.forEach(element => {
        element.style.transform = `translateX(-${end*100}%)`
    })
})