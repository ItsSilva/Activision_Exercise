class Banner extends HTMLElement {

    static get observedAttributes(){

    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
            this[propName] = newValue;
        }
    }
    render(){
        this.shadowRoot.innerHTML = `
        <section>
        <h1>Hi banner component</h1>
        </section>
        `;
    }
}
customElements.define('banner-component', Banner);
export default Banner;