// *****************************************HOME PAGE SECTION1****************************************************
let rightbutton = document.querySelector("#right");
let leftbutton = document.querySelector("#left");
let images = document.querySelectorAll(".img-itm");

start = 0
end = 0
console.log(images)
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

// *****************************************HOME PAGE SECTION1 MOBILE****************************************************
let rightbuttonm = document.querySelector("#rightm");
let leftbuttonm = document.querySelector("#leftm");
let imagesm = document.querySelectorAll(".img-itmm");

start = 0
end = 0
console.log(images)
rightbuttonm.addEventListener("click",()=>{
    if(start!=(images.length-1)){
        start = start + 1
        end = start
    }
    imagesm.forEach(element => {
        element.style.transform = `translateX(-${start*100}%)`
    })
})

leftbuttonm.addEventListener("click",()=>{
    if(end!=0){
        end = end - 1
        start = end
    }
    imagesm.forEach(element => {
        element.style.transform = `translateX(-${end*100}%)`
    })
})

//  *****************************************HAMBERGER SECTION****************************************************
let Kindle = document.querySelectorAll(".Kindle");
let Amazon_music = document.querySelectorAll(".Amazon_music");
let Amazon_appstore = document.querySelectorAll(".Amazon_appstore");
let Electronics = document.querySelectorAll(".Electronics");
let Gift_Cards = document.querySelectorAll(".Gift_Cards");
let Computers = document.querySelectorAll(".Computers");
let Smart_home = document.querySelectorAll(".Smart_home");
let Arts_carfts = document.querySelectorAll(".Arts_carfts");
let Amazon_live = document.querySelectorAll(".Amazon_live");
let International_shopping = document.querySelectorAll(".International_shopping");


let all = document.querySelectorAll("*")
let hamberger = document.querySelector(".hamberger")
let hambergerm = document.querySelector(".hambergerm")
let leftsection = document.querySelectorAll(".left")
let rightsection = document.querySelectorAll(".right")
let xmark = document.querySelector(".xmark")
let xmarkm = document.querySelector(".xmarkm")
let hamicon = document.querySelector("#hamberger")
let hamiconm = document.querySelector(".hamb");

hamicon.addEventListener("click",()=>{
    hamberger.style.transform = "translateX(100%)"

})
hamiconm.addEventListener("click",()=>{
    hambergerm.style.transform = "translateX(100%)"

})

xmark.addEventListener("click", ()=>{
    hamberger.style.transform = "translateX(-100%)"
})
xmarkm.addEventListener("click", ()=>{
    hambergerm.style.transform = "translateX(-100%)"
})

function slideleft(){
    leftsection[0].style.transform = "translateX(-100%)"
    rightsection[0].style.transform = "translateX(-100%)"
    leftsection[1].style.transform = "translateX(-100%)"
    rightsection[1].style.transform = "translateX(-100%)"

}
function slideright(){
    leftsection[0].style.transform = "translateX(0%)"
    rightsection[0].style.transform = "translateX(0%)"
    leftsection[1].style.transform = "translateX(0%)"
    rightsection[1].style.transform = "translateX(0%)"

}

Kindle[0].addEventListener("click",()=>{
    
    Kindle[1].style.display = "block"
    slideleft()

})
Kindle[2].addEventListener("click", ()=>{
    slideright()
    Kindle[1].style.display = "none"
})
Kindle[3].addEventListener("click",()=>{
    
    Kindle[4].style.display = "block"
    slideleft()

})
Kindle[5].addEventListener("click", ()=>{
    slideright()
    Kindle[4].style.display = "none"
})


Amazon_appstore[0].addEventListener("click",()=>{
    
    Amazon_appstore[1].style.display = "block"
    slideleft()

})
Amazon_appstore[2].addEventListener("click", ()=>{
    slideright()
    Amazon_appstore[1].style.display = "none"
})
Amazon_appstore[3].addEventListener("click",()=>{
    
    Amazon_appstore[4].style.display = "block"
    slideleft()

})
Amazon_appstore[5].addEventListener("click", ()=>{
    slideright()
    Amazon_appstore[4].style.display = "none"
})


Amazon_live[0].addEventListener("click",()=>{
    
    Amazon_live[1].style.display = "block"
    slideleft()

})
Amazon_live[2].addEventListener("click", ()=>{
    slideright()
    Amazon_live[1].style.display = "none"
})
Amazon_live[3].addEventListener("click",()=>{
    
    Amazon_live[4].style.display = "block"
    slideleft()

})
Amazon_live[5].addEventListener("click", ()=>{
    slideright()
    Amazon_live[4].style.display = "none"
})


Amazon_music[0].addEventListener("click",()=>{
    
    Amazon_music[1].style.display = "block"
    slideleft()

})
Amazon_music[2].addEventListener("click", ()=>{
    slideright()
    Amazon_music[1].style.display = "none"
})
Amazon_music[3].addEventListener("click",()=>{
    
    Amazon_music[4].style.display = "block"
    slideleft()

})
Amazon_music[5].addEventListener("click", ()=>{
    slideright()
    Amazon_music[4].style.display = "none"
})


Electronics[0].addEventListener("click",()=>{
    
    Electronics[1].style.display = "block"
    slideleft()

})
Electronics[2].addEventListener("click", ()=>{
    slideright()
    Electronics[1].style.display = "none"
})
Electronics[3].addEventListener("click",()=>{
    
    Electronics[4].style.display = "block"
    slideleft()

})
Electronics[5].addEventListener("click", ()=>{
    slideright()
    Electronics[4].style.display = "none"
})


Computers[0].addEventListener("click",()=>{
    
    Computers[1].style.display = "block"
    slideleft()

})
Computers[2].addEventListener("click", ()=>{
    slideright()
    Computers[1].style.display = "none"
})
Computers[3].addEventListener("click",()=>{
    
    Computers[4].style.display = "block"
    slideleft()

})
Computers[5].addEventListener("click", ()=>{
    slideright()
    Computers[4].style.display = "none"
})



Gift_Cards[0].addEventListener("click",()=>{
    
    Gift_Cards[1].style.display = "block"
    slideleft()

})
Gift_Cards[2].addEventListener("click", ()=>{
    slideright()
    Gift_Cards[1].style.display = "none"
})
Gift_Cards[3].addEventListener("click",()=>{
    
    Gift_Cards[4].style.display = "block"
    slideleft()

})
Gift_Cards[5].addEventListener("click", ()=>{
    slideright()
    Gift_Cards[4].style.display = "none"
})



Smart_home[0].addEventListener("click",()=>{
    
    Smart_home[1].style.display = "block"
    slideleft()

})
Smart_home[2].addEventListener("click", ()=>{
    slideright()
    Smart_home[1].style.display = "none"
})
Smart_home[3].addEventListener("click",()=>{
    
    Smart_home[4].style.display = "block"
    slideleft()

})
Smart_home[5].addEventListener("click", ()=>{
    slideright()
    Smart_home[4].style.display = "none"
})


Arts_carfts[0].addEventListener("click",()=>{
    
    Arts_carfts[1].style.display = "block"
    slideleft()

})
Arts_carfts[2].addEventListener("click", ()=>{
    slideright()
    Arts_carfts[1].style.display = "none"
})
Arts_carfts[3].addEventListener("click",()=>{
    
    Arts_carfts[4].style.display = "block"
    slideleft()

})
Arts_carfts[5].addEventListener("click", ()=>{
    slideright()
    Arts_carfts[4].style.display = "none"
})


International_shopping[0].addEventListener("click",()=>{
    
    International_shopping[1].style.display = "block"
    slideleft()

})
International_shopping[2].addEventListener("click", ()=>{
    slideright()
    International_shopping[1].style.display = "none"
})
International_shopping[3].addEventListener("click",()=>{
    
    International_shopping[4].style.display = "block"
    slideleft()

})
International_shopping[5].addEventListener("click", ()=>{
    slideright()
    International_shopping[4].style.display = "none"
})

