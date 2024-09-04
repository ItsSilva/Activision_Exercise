class Community extends HTMLElement {
    static get observedAttributes() {
        return ['picture', 'username', 'icon']
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
<link rel="stylesheet" href="./src/components/community/community.css">
<section class="card-container">
  <div class="card">
    <img src="${this.picture}" alt="User Picture" class="card-image" />
    <div class="card-content">
      <p class="username">${this.username}</p>
      <img src="${this.icon}" alt="Icon" class="icon" />
    </div>
  </div>
</section>   
        `
    }
}

customElements.define('community-component', Community)
export default Community