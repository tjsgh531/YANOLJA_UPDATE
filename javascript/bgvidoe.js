export class BGVideo{
    constructor(){
        this.video = document.querySelector('.video');
        this.videoSrc = document.querySelector('.BGVideo');
        setTimeout(this.videoTransition.bind(this),300);
    }


    // async animation(){
        
    //     requestAnimationFrame(this.animation.bind(this));
    // }

    videoTransition(){
        const videoStyle = this.video.style;

        videoStyle.transition="border-radius,width,height 1s,1.3s,2s easy-in-out,easy-in-out,easy-in-out  ";
        videoStyle.borderRadius = "0"
        videoStyle.width = `${window.innerWidth}px`;
        videoStyle.height = "840px"; 
    }

    
}