export class Nav{
    constructor(){
        this.nav = document.querySelector('.nav');
        this.submenu = document.querySelectorAll('.submenu');
        this.background = document.querySelector('.navBackground');
        this.isMouseLeave = true;
        

        this.nav.addEventListener('mouseenter', this.isMouse.bind(this));
        this.nav.addEventListener('mouseleave',this.leaveMouse.bind(this));
    }

    isMouse(){
        console.log('mouseenter');
        let submenuHeight = 0;
        this.nav.style.color = 'black';
        this.submenu.forEach(element => {
            element.classList.remove('disappear');
            if(submenuHeight < element.clientHeight) submenuHeight = element.clientHeight;
        });

        this.BGheight = this.nav.clientHeight + submenuHeight -14;
        this.background.style.height = `${this.BGheight}px`;


        this.submenu.forEach(element => {
            element.classList.remove('hide');
        });

        
    }

    leaveMouse(e){
        this.nav.style.color = 'white';
        this.submenu.forEach(element => {
            element.classList.add('hide');
            element.classList.add('disappear');
        });

        this.BGheight = 0;

        this.background.style.height = `${this.BGheight}px`; 
        this.nav.style.height =  `auto`;
  
    }
}