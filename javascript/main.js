import{BGVideo } from "./bgvidoe.js"
import{Nav}from "./nav.js";

class Main{
    constructor(){
        this.Video = new BGVideo();
        this.Nav = new Nav();

        window.addEventListener('resize',this.resize.bind(this));
    }

    resize(){

    }
}

window.onload = () => {
    new Main();
}