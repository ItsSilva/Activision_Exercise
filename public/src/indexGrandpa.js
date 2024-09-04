import * as components from './components/indexFather.js';
import { newsCardsData } from './data/newsCardsData/newsCardsData.js';

class Container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const container = document.createElement('div'); // Create a container element.
    container.classList.add('news-cards-container'); // Add a class.

    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/newsCards/newsCards.css">
      <navbar-component></navbar-component>

      <banner-component
        img="./src/assets/img/94f5e08d4f2ef3e70d7aa0f9fc3de5b2.jpg"
        alt="Call of Duty Black Ops 6 character"
        logo="./src/assets/img/BlackOps6_Logo_White_BO6.webp"
        description="Forced to go rogue. Hunted form Within. This is Black Ops 6."
        button00="Pre-Order Now"
        button01="Visit site"
      ></banner-component>
      
      <news-logos
        text="Latest News & Articles"
        img="./src/assets/img/Rectangle 876.png"
        img1="./src/assets/img/rectangle872.png"
        img2="./src/assets/img/Rectangle 873.png"
        img3="./src/assets/img/Rectangle 874.png"
        img4="./src/assets/img/Rectangle 875.png"
      ></news-logos>
    `;

    newsCardsData.forEach((e) => {
      const newsCard = document.createElement('news-cards');
      newsCard.setAttribute('image', e.image);
      newsCard.setAttribute('date', e.date);
      newsCard.setAttribute('title', e.title);
      newsCard.setAttribute('description', e.description);
      newsCard.setAttribute('more', 'Read More');
      container.appendChild(newsCard); // Append newsCard to the container.
    });

    this.shadowRoot.appendChild(container); // Append container to shadowRoot.

    this.shadowRoot.innerHTML += `
<link rel="stylesheet" href="./src/components/banner/banner.css">
            <div class="button-view-all">
                <div class="button-login">
                    <a href="index.html">VIEW ALL</a>
                </div>
            </div>

            <support-banner
            title="We're here to help!"
            description='Get answers to frequently asked questions, check server status, and engage with a support expert'
            button='VISIT SUPPORT'
            image='./src/assets/img/Screenshot 2024-09-02 175049.png'>
            </support-banner>

<link rel="stylesheet" href="./src/components/comments/comments.css">
<section class="shadow-container">     
  <h1 class="title-community">Community</h1>   
  <div class="shadow-card-container">
    <comments-banner
      picture="./src/assets/img/457612352_1279991166711562_2135084959069529567_n.jpg"
      username="callofdutyendowment"
      icon="./src/assets/img/toppng.com-white-instagram-icon-instagram-logo-instagram-instagram-icon-white-306x304.png"
    ></comments-banner>

    <comments-banner
      picture="./src/assets/img/457024224_743870651167307_7401446175988037682_n.jpg"
      username="callofdutyendowment"
      icon="./src/assets/img/toppng.com-white-instagram-icon-instagram-logo-instagram-instagram-icon-white-306x304.png"
    ></comments-banner>

    <comments-banner
      picture="./src/assets/img/457632007_18078057127523543_4908097477892020968_n.jpg"
      username="callofdutyendowment"
      icon="./src/assets/img/toppng.com-white-instagram-icon-instagram-logo-instagram-instagram-icon-white-306x304.png"
    ></comments-banner>
  </div>
</section>
    `
  }
}

customElements.define('app-container', Container);