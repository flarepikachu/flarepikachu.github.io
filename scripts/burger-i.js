class burgerinsert extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="mobile-burger">
        <a href="javascript:void(0);" class="burger" onclick="navigationbar()">
            <i class="fa-solid fa-bars fa-2xl">
            </i>
        </a>
    </div>
      `;
  }
}

customElements.define('burger-i', burgerinsert);



