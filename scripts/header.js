class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
        <div class="headerdiv">
          <span>
              <a class='site-title' href="#"><span>Flairy Domain</span></a>
          </span>
          <div class="mobile-burger">
              <a href="javascript:void(0);" class="burger" onclick="navigationbar()">
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



  