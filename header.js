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
        </div>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);



  