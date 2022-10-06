class dropdown1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <ul>
          <li><a class='direlink' href="/index.html">
              <i class="fa-solid fa-magnifying-glass fa-fw"></i>
              <span>Overview</span></a></li>
          <li>
              <button class="dropdown-btn">
              <i class="fa-solid fa-place-of-worship fa-fw"></i>
              Guilds
              </button>
              <div class="dropdown-container dropdown-container-guilds">
              <a class='test' href="/guilds/guilds.html"><span>Overview</span></a>
              <a class='test' href="/guilds/commands.html"><span>Guild Commands</span></a>
              <a class='test' href="/guilds/chat.html"><span>Guild Chat</span></a>
              <a class='test' href="/guilds/levels.html"><span>Guild Levels and EXP</span></a>
              <a class='test' href="/guilds/bank.html"><span>Guild Bank</span></a>
              <a class='test' href="/guilds/upgrades.html"><span>Guild Upgrades</span></a>
              <a class='test' href="/guilds/settings.html"><span>Guild Settings and Permissions</span></a>
              </div>
          </li>
          <li>
              <button class="dropdown-btn"><i class="fa-solid fa-money-bill-wave fa-fw"></i></i>
              Currency
              </button>
              <div class="dropdown-container dropdown-container-currency">
              <a class='test' href="/currency/currency.html"><span>Overview</span></a>
              <a class='test' href="/currency/coins.html"><span>Coins</span></a>
              <a class='test' href="/currency/guild-coins.html"><span>Guild Coins</span></a>
              <a class='test' href="/currency/fairy-essence.html"><span>Fairy Essence</span></a>
              </div>
          </li>
          <li>
            <button class="dropdown-btn"><i class="fa-solid fa-broom fa-fw"></i></i>Weapons
              </button>
              <div class="dropdown-container dropdown-container-weapons">
              <a class='test' href="/weapons/weapons.html"><span>Overview</span></a>
              <a class='test' href="/weapons/obtain.html"><span>Obtaining Weapons</span></a>
              <a class='test' href="/weapons/rarity.html"><span>Rarity & Titles</span></a>
              <a class='test' href="/weapons/shards.html"><span>Synthetic Shards</span></a>
              <a class='test' href="/weapons/fragments.html"><span>Legend Fragments</span></a>
              <a class='test' href="/weapons/weapon-upgrades.html"><span>Weapon Upgrades</span></a>
              <a class='test' href="/weapons/star-pieces.html"><span>Star Pieces</span></a>
              </div>
          </li>

          <li><a class='direlink' href="/masterworks-fair/masterworks-fair.html">
              <i class="fa-solid fa-fire-burner fa-fw"></i>
              <span>Masterworks Fair</span></a>
          </li>

          <li><a class='direlink' href="/susan/susan.html">
              <i class="fa-solid fa-parachute-box fa-fw"></i>
              <span>Supply Drop Susan</span></a>
          </li>

          <li>
            <button class="dropdown-btn"><i class="fa-solid fa-piggy-bank fa-fw"></i>Level Rewards
              </button>
              <div class="dropdown-container">
              <a class='test' href="#"><span>Link 1</span></a>
              <a class='test' href="#"><span>Link 2</span></a>
              <a class='test' href="#"><span>Link 3</span></a>
              </div>
          </li>
          <li>
            <button class="dropdown-btn"><i class="fa-solid fa-gem fa-fw"></i>Achievements
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
  
  customElements.define('dropdown-component', dropdown1);



  