class NewsCards extends HTMLElement {
    static get observedAttribute (){
        return ['img', 'date','tittle', 'description', 'more'];
    };
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    };
    connectedCallback(){
        this.render();
    };
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
            this[propName] = newValue
        };
    };
    render(){
        this.shadowRoot.innerHTML = `
        <section class = 'container'>
        <div class = 'img-container'>
        <img src="${this.img}" alt="#"/>
        </div>
        <div class = 'text-container'>
        <p>${this.date}</p>
        <h2>${this.tittle}</h2>
        <p>${this.description}</p>
        <button>${this.more}</button>
        </div>
        </section>
        `;
    };
};
customElements.define('news-cards', NewsCards);
export default NewsCards;