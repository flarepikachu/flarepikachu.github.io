class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <ul>
          <li><a class='direlink' href="index.html"><span>Overview</span></a></li>
          <li>
              <button class="dropdown-btn"><i class="fa-solid fa-place-of-worship fa-fw"></i>Guilds
                  
              </button>
              <div class="dropdown-container">
              <a class='test' href="guilds/guilds.html"><span>Overview</span></a>
              <a class='test' href="guilds/chat.html"><span>Guild Chat</span></a>
              <a class='test' href="guilds/levels.html"><span>Guild Levels and EXP</span></a>
              <a class='test' href="guilds/bank.html"><span>Guild Bank</span></a>
              <a class='test' href="guilds/upgrades.html"><span>Guild Upgrades</span></a>
              <a class='test' href="guilds/settings.html"><span>Guild Settings and Permissions</span></a>
              </div>
          </li>
          <li>
              <button class="dropdown-btn"><i class="fa-solid fa-money-bill-wave fa-fw"></i></i>Thing
                  
              </button>
              <div class="dropdown-container">
              <a class='test' href="#"><span>Link 1</span></a>
              <a class='test' href="#"><span>Link 2</span></a>
              <a class='test' href="#"><span>Link 3</span></a>
              </div>
          </li>
          <li>
              <button class="dropdown-btn">Thing
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
              <a class='test' href="#"><span>Link 1</span></a>
              <a class='test' href="#"><span>Link 2</span></a>
              <a class='test' href="#"><span>Link 3</span></a>
              </div>
          </li>
          <li>
              <button class="dropdown-btn">Thing
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
              <a class='test' href="#"><span>Link 1</span></a>
              <a class='test' href="#"><span>Link 2</span></a>
              <a class='test' href="#"><span>Link 3</span></a>
              </div>
          </li>
          <li>
              <button class="dropdown-btn">Thing
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
              <a class='test' href="#"><span>Link 1</span></a>
              <a class='test' href="#"><span>Link 2</span></a>
              <a class='test' href="#"><span>Link 3</span></a>
              </div>
          </li>
          <li>
              <button class="dropdown-btn">Thing
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
              <a class='test' href="#"><span>Link 1</span></a>
              <a class='test' href="#"><span>Link 2</span></a>
              <a class='test' href="#"><span>Link 3</span></a>
              </div>
          </li>
          <li>
              <button class="dropdown-btn">Thing
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-container">
              <a class='test' href="#"><span>Link 1</span></a>
              <a class='test' href="#"><span>Link 2</span></a>
              <a class='test' href="#"><span>Link 3</span></a>
              </div>
          </li>
      </ul>
      `;
    }
  }
  
  customElements.define('header-component', Header);



  