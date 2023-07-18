

const videoElement =  document.querySelector('#bg')
const textElement = document.querySelector('#title')
textElement.addEventListener('click',()=>{
    const videoSrc = videoElement.src.toString()

    if(videoSrc.includes('wapor')){
        videoElement.src = './assets/Media/sun.mp4'
    }
    if(videoSrc.includes('sun')){
        videoElement.src = './assets/Media/waporvawe.mp4'
    }
   })
