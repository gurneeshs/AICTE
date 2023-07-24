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

// *****************************************HOME PAGE SECTION1 MOBILE****************************************************
let rightbuttonm = document.querySelector("#rightm");
let leftbuttonm = document.querySelector("#leftm");
let imagesm = document.querySelectorAll(".img-itmm");

start = 0
end = 0
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

// *****************************************HOME PAGE SECTION2****************************************************
let leftbutton1 = document.querySelectorAll(".lftd")
let rightbutton1 = document.querySelectorAll(".rghtd")
let freq_image = document.querySelectorAll(".image-list")

startf = 0
endf = 0
leftbutton1[0].addEventListener("click", ()=>{
    if(endf!=0){
        endf = endf - 1
        startf = endf
    }
    freq_image[0].style.transform = `translateX(-${endf*40}%)`
})

rightbutton1[0].addEventListener("click", ()=>{
    if(startf!=2){
        startf= startf + 1
        endf = startf
    }
    freq_image[0].style.transform = `translateX(-${startf*40}%)`
})

starthd=0
endhd=0
leftbutton1[1].addEventListener("click", ()=>{
    if(endhd!=0){
        endhd = endhd - 1
        starthd = endhd
    }
    freq_image[1].style.transform = `translateX(-${endhd*48}%)`
})

rightbutton1[1].addEventListener("click", ()=>{
    if(starthd!=4){
        starthd= starthd + 1
        endhd = starthd
    }
    freq_image[1].style.transform = `translateX(-${starthd*48}%)`
})

startdu=0
enddu=0
leftbutton1[2].addEventListener("click", ()=>{
    if(enddu!=0){
        enddu = enddu - 1
        startdu = enddu
    }
    freq_image[2].style.transform = `translateX(-${enddu*51}%)`
})

rightbutton1[2].addEventListener("click", ()=>{
    if(startdu!=5){
        startdu= startdu + 1
        enddu = startdu
    }
    freq_image[2].style.transform = `translateX(-${startdu*51}%)`
})

startit=0
endit=0
leftbutton1[3].addEventListener("click", ()=>{
    if(endit!=0){
        endit = endit - 1
        startit = endit
    }
    freq_image[3].style.transform = `translateX(-${endit*48}%)`
})

rightbutton1[3].addEventListener("click", ()=>{
    if(startit!=10){
        startit= startit + 1
        endit = startit
    }
    freq_image[3].style.transform = `translateX(-${startit*48}%)`
})

started=0
ended=0
leftbutton1[4].addEventListener("click", ()=>{
    if(ended!=0){
        ended = ended - 1
        started = ended
    }
    freq_image[4].style.transform = `translateX(-${ended*48}%)`
})
rightbutton1[4].addEventListener("click", ()=>{
    if(started!=4){
        started= started + 1
        ended = started
    }
    freq_image[4].style.transform = `translateX(-${started*48}%)`
})

startpg=0
endpg=0
leftbutton1[5].addEventListener("click", ()=>{
    if(endpg!=0){
        endpg = endpg - 1
        startpg = endpg
    }
    freq_image[5].style.transform = `translateX(-${endpg*50}%)`
})
rightbutton1[5].addEventListener("click", ()=>{
    if(startpg!=3){
        startpg= startpg + 1
        endpg = startpg
    }
    freq_image[5].style.transform = `translateX(-${startpg*50}%)`
})

startfr=0
endfr=0
leftbutton1[6].addEventListener("click", ()=>{
    if(endfr!=0){
        endfr = endfr - 1
        startfr = endfr
    }
    freq_image[6].style.transform = `translateX(-${endfr*53}%)`
})

rightbutton1[6].addEventListener("click", ()=>{
    if(startfr!=4){
        startfr= startfr + 1
        endfr = startfr
    }
    freq_image[6].style.transform = `translateX(-${startfr*53}%)`
})


// *****************************************HOME PAGE SECTION2 MOBILE****************************************************
let leftbutton2 = document.querySelectorAll(".lftm")
let rightbutton2 = document.querySelectorAll(".rghtm")

startfm = 0
endfm = 0
leftbutton2[0].addEventListener("click", ()=>{
    if(endfm!=0){
        endfm = endfm - 1
        startfm = endfm
    }
    freq_image[7].style.transform = `translateX(-${endfm*38}%)`
})

rightbutton2[0].addEventListener("click", ()=>{
    if(startfm!=3){
        startfm= startfm + 1
        endfm = startfm
    }
    freq_image[7].style.transform = `translateX(-${startfm*38}%)`
})

starthdm=0
endhdm=0
leftbutton2[1].addEventListener("click", ()=>{
    if(endhdm!=0){
        endhdm = endhdm - 1
        starthdm = endhdm
    }
    freq_image[8].style.transform = `translateX(-${endhdm*48}%)`
})

rightbutton2[1].addEventListener("click", ()=>{
    if(starthdm!=4){
        starthdm= starthdm + 1
        endhdm = starthdm
    }
    freq_image[8].style.transform = `translateX(-${starthdm*48}%)`
})


startitm=0
enditm=0
leftbutton2[2].addEventListener("click", ()=>{
    if(enditm!=0){
        enditm = enditm - 1
        startitm = enditm
    }
    freq_image[9].style.transform = `translateX(-${enditm*48}%)`
})

rightbutton2[2].addEventListener("click", ()=>{
    if(startitm!=10){
        startitm= startitm + 1
        enditm = startitm
    }
    freq_image[9].style.transform = `translateX(-${startitm*48}%)`
})


startpgm=0
endpgm=0
leftbutton2[3].addEventListener("click", ()=>{
    if(endpgm!=0){
        endpgm = endpgm- 1
        startpgm = endpgm
    }
    freq_image[10].style.transform = `translateX(-${endpgm*48}%)`
})
rightbutton2[3].addEventListener("click", ()=>{
    if(startpgm!=3){
        startpgm= startpgm + 1
        endpgm = startpgm
    }
    freq_image[10].style.transform = `translateX(-${startpgm*48}%)`
})

startfrm=0
endfrm=0
leftbutton2[4].addEventListener("click", ()=>{
    if(endfrm!=0){
        endfrm = endfrm - 1
        startfrm = endfrm
    }
    freq_image[11].style.transform = `translateX(-${endfrm*48}%)`
})

rightbutton2[4].addEventListener("click", ()=>{
    if(startfrm!=4){
        startfrm= startfrm + 1
        endfrm = startfrm
    }
    freq_image[11].style.transform = `translateX(-${startfrm*48}%)`
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

