class Navbar extends HTMLElement {

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
        <header>

            <div>
                <a href="index.html">Skip To Main Content</a>
            </div>

            <nav>
                <ul>
                    <li>Games</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Support</li>
                </ul>
            </nav>

            <div>

                <div>
                    <a href="index.html">Register</a>
                </div>

                <div>
                    <a href="index.html">Log In</a>
                </div>

            </div>

        </header>
        `;
    }
}
customElements.define('navbar-component', Navbar);
export default Navbar;