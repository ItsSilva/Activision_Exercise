class SupportBanner extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'description', 'button', 'image']
    }

    constructor() {
        super()
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/supportBanner/supportBanner.css">
        <section>
            <div class='support-banner'>
                <div class='support-banner-text'>
                    <h1>${this.title}</h1>
                    <p>${this.description}</p>
                    <button>${this.button}</button>
                </div>
                <div class='support-banner-img'>
                    <img src="${this.image}" alt="Support Banner Image" />
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('support-banner', SupportBanner)
export default SupportBanner