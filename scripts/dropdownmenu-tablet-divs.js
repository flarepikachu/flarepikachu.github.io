class dropdown2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="mobilemenu">
                <ul>
                    <li>
                        <a class='fullwidth' href="/index.html">
                            <i class="fa-solid fa-magnifying-glass fa-fw">
                            </i><span>Overview</span></a>
                    </li>
                    <li>

                    <li id="guilds">
                        <a class="fullwidth nopad" href="javascript:void(0);" onclick="guildsdd()">
                            <i class="fa-solid fa-place-of-worship fa-fw"></i><span>Guilds</span></a>
                    </li>

                    <li>
                        <div id="guilds-dropdown">
                            <ul>
                                <li>
                                    <a class='fullwidtha' href="/guilds/guilds.html"><span>Overview</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/guilds/chat.html"><span>Guild Chat</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/guilds/levels.html"><span>Guild Levels and EXP</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/guilds/bank.html"><span>Guild Bank</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/guilds/upgrades.html"><span>Guild Upgrades</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/guilds/settings.html"><span>Guild Settings and
                                            Permissions</span></a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li id="money">
                        <a class="fullwidth nopad" href="javascript:void(0);" onclick="moneydd()">
                            <i class="fa-solid fa-money-bill-wave fa-fw"></i><span>Currency</span>
                        </a>
                    </li>

                    <li>
                        <div id="money-dropdown">
                            <ul>
                                <li>
                                    <a class='fullwidtha' href="/currency/currency.html"><span>Overview</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/currency/coins.html"><span>Coins</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/currency/guild-coins.html"><span>Guild Coins</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/currency/fairy-essence.html"><span>Fairy Essence</span></a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li id="weapons">
                        <a class="fullwidth nopad" href="javascript:void(0);" onclick="weaponsdd()">
                            <i class="fa-solid fa-broom fa-fw"></i><span>Weapons</span>
                        </a>
                    </li>

                    <li>
                        <div id="weapons-dropdown">
                            <ul>
                                <li><a class='fullwidtha' href="/weapons/weapons.html"><span>Overview</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/obtain.html"><span>Obtaining Weapons</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/rarity.html"><span>Rarity & Titles</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/shards.html"><span>Synthetic Shards</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/fragments.html"><span>Legend Fragments</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/weapon-upgrades.html"><span>Weapon Upgrades</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/star-pieces.html"><span>Star Pieces</span></a></li>
                            </ul>
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
                        <a class="fullwidth" href="javascript:void(0);" onclick="moneydd()">
                            <i class="fa-solid fa-money-bill-wave fa-fw">
                            </i>
                            Currency
                        </a>
                    </li>

                    <li>
                        <a class="fullwidth" href="javascript:void(0);" onclick="moneydd()">
                            <i class="fa-solid fa-money-bill-wave fa-fw">
                            </i>
                            Currency
                        </a>
                    </li>

                    <li>
                        <a class="fullwidth" href="javascript:void(0);" onclick="moneydd()">
                            <i class="fa-solid fa-money-bill-wave fa-fw">
                            </i>
                            Currency
                        </a>
                    </li>

                    <li>
                        <button class="dropdown-btn">
                        </button>
                        <div class="dropdown-container">
                            <a class='test' href="#"><span>Link 1</span></a>
                            <a class='test' href="#"><span>Link 2</span></a>
                            <a class='test' href="#"><span>Link 3</span></a>
                        </div>
                    </li>
                    <li>
                        <button class="dropdown-btn"><i class="fa-solid fa-fire-burner fa-fw"></i>Masterworks Fair
                        </button>
                        <div class="dropdown-container">
                            <a class='test' href="#"><span>Link 1</span></a>
                            <a class='test' href="#"><span>Link 2</span></a>
                            <a class='test' href="#"><span>Link 3</span></a>
                        </div>
                    </li>
                    <li>
                        <button class="dropdown-btn"><i class="fa-solid fa-parachute-box fa-fw"></i>Supply Drop Susan
                        </button>
                        <div class="dropdown-container">
                            <a class='test' href="#"><span>Link 1</span></a>
                            <a class='test' href="#"><span>Link 2</span></a>
                            <a class='test' href="#"><span>Link 3</span></a>
                        </div>
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
            </div>
      `;
    }
  }
  
  customElements.define('mobile-divs', dropdown2);



  