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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <header class = 'container'>

        <div class ='logo-and-nav-container'>
            <div class = 'container-logo-img'>
                <a href="./index.html"><img src="./src/utils/img/Activision.svg.png" alt="Activision Logo"></a>
            </div>

            <nav>
                <ul class = 'container-list'>
                    <li>Games</li>
                    <li><i class="fa fa-angle-down"></i>About</li>
                    <li><i class="fa fa-angle-down"></i>Work</li>
                    <li><i class="fa fa-angle-down"></i>Support</li>
                </ul>
            </nav>
        </div>

            <div class = 'button'>

                <div class = 'button-register'>
                    <a href="index.html">Sing up</a>
                </div>

                <div class = 'button-login'>
                    <a href="index.html">LogIn</a>
                </div>

            </div>

        </header>
    `;
    }
}
customElements.define('navbar-component', Navbar);
export default Navbar;