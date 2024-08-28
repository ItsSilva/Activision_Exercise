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
        <link rel="stylesheet" href="./src/components/navbar/navbar.css">
        <header class = 'container'>

            <div class = 'container-logo-img'>
                <a href=""><img src="./src/utils/img/Activision.svg.png" alt="Activision Logo"></a>
            </div>

            <nav>
                <ul class = 'container-list'>
                    <li>Games</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Support</li>
                </ul>
            </nav>

            <div class = 'button'>

                <div class = 'button-register'>
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