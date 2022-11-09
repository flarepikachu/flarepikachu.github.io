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


  