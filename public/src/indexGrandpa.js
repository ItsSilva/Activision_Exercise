import * as components from './components/indexFather.js';

class Container extends HTMLElement {
    constructor(){
        super();
            this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
        <navbar-component></navbar-component>

        <banner-component
        img = "./src/assets/img/94f5e08d4f2ef3e70d7aa0f9fc3de5b2.jpg"
        alt = "Call of Duty Black Ops 6 character"
        logo = "./src/assets/img/BlackOps6_Logo_White_BO6.webp"
        description = "Forced to go rogue. Hunted form Within. This is Black Ops 6."
        button00 = "Pre-Order Now"
        button01 = "Visit site"
        ></banner-component>

         `
    }
}
customElements.define('app-container', Container);