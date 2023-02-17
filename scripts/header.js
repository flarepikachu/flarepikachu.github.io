class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="headerdiv">
          <span>
              <a class='site-title' href="#"><span>Flairy&nbsp;Domain</span></a>
          </span>
          <div class="mobile-burger">
              <a href="javascript:void(0);" class="burger" onclick="navnew()">
                  <i class="fa-solid fa-bars fa-2xl">
                  </i>
              </a>
          </div>
        </div>
    </header>
      `;
  }
}

customElements.define('header-component', Header);

class mobileMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="cover-up" onclick="closemobilemenu();"></div>
      <div class="tablet-background-menu">
        <div class="site-name">Flairy Domain</div>
        <!-- <div class="login">
            <div class="login-1">
                <button class="login-button myass">My Account</button>
            </div>
            <div class="login-2">
                <button class="login-button mysettings">Settings</button>
            </div>
            <div class="login-3">
                <button class="login-button mylogout">Logout</button>
            </div>
        </div> -->
        <div class="menu">
            <dropdown-component></dropdown-component>
    </div>
      `;
  }
}

customElements.define('new-tablet', mobileMenu);

class fontGetter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
      `;
  }
}

customElements.define('font-getter', fontGetter);

class titleMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="title-collections">
                    <div class="collection-header">CLASSIC COLLECTION</div>
                    <div class="classic-collection collection-div">
                        <div class="title-button benevolent"><button onclick="window.location.href='/titles/benevolent.html'"><span class="button-text">Benevolent</span></button></div>
                        <div class="title-button divine"><button onclick="window.location.href='/titles/divine.html'"><span class="button-text">Divine</span></button></div>
                        <div class="title-button enhanced"><button onclick="window.location.href='/titles/enhanced.html'"><span class="button-text">Enhanced</span></button></div>
                        <div class="title-button fervent"><button onclick="window.location.href='/titles/fervent.html'"><span class="button-text">Fervent</span></button></div>
                        <div class="title-button gale"><button onclick="window.location.href='/titles/gale.html'"><span class="button-text">Gale</span></button></div>
                        <div class="title-button gradient"><button onclick="window.location.href='/titles/gradient.html'"><span class="button-text">Gradient</span></button></div>
                        <div class="title-button requiem"><button onclick="window.location.href='/titles/requiem.html'"><span class="button-text">Requiem</span></button></div>
                        <div class="title-button suspicious"><button onclick="window.location.href='/titles/suspicious.html'"><span class="button-text">Suspicious</span></button></div>
                        <div class="title-button stalwart"><button onclick="window.location.href='/titles/stalwart.html'"><span class="button-text">Stalwart</span></button></div>
                        <div class="title-button titanic"><button onclick="window.location.href='/titles/titanic.html'"><span class="button-text">Titanic</span></button></div>
                        <div class="title-button vigorous"><button onclick="window.location.href='/titles/vigorous.html'"><span class="button-text">Vigorous</span></button></div>
                        <div class="title-button vorpal"><button onclick="window.location.href='/titles/vorpal.html'"><span class="button-text">Vorpal</span></button></div>
                    </div>
                    <div class="collection-header">EVENT COLLECTION</div>
                    <div class="classic-collection collection-div">
                    <div class="title-button juggernaut"><button onclick="window.location.href='/titles/juggernaut.html'"><span class="button-text">Juggernaut</span></button></div>
                    <div class="title-button valiant"><button onclick="window.location.href='/titles/valiant.html'"><span class="button-text">Valiant</span></button></div>
                    <div class="title-button arbalest"><button onclick="window.location.href='/titles/arbalest.html'"><span class="button-text">Arbalest</span></button></div>
                    <div class="title-button revered"><button onclick="window.location.href='/titles/revered.html'"><span class="button-text">Revered</span></button></div>
                    </div>

      
      </div>
      `;
  }
}

customElements.define('title-menu', titleMenu);


