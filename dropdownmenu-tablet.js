class dropdown extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="mobilemenu">
        <ul>
            <li><a class='direlink' href="index.html">
                    <i class="fa-solid fa-magnifying-glass fa-fw"></i>
                    <span>Overview</span></a></li>
            <li>
        
            <li>
                <a class="fullwidth" href="javascript:void(0);" onclick="guildsdd()">
                    <i class="fa-solid fa-place-of-worship fa-fw">
                    </i>
                    Guilds
                </a>
                <script>
                    function guildsdd() {
                        var x = document.getElementById("guilds-dropdown");
                        if (x.style.display === "block") {
                            x.style.display = "none";
                        } else {
                            x.style.display = "block";
                        }
                    }
                </script>
            </li>
            <div id="guilds-dropdown">
                <ul>
                    <li>
                        <a class='fullwidtha' href="guilds/guilds.html"><span>Overview</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/chat.html"><span>Guild Chat</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/levels.html"><span>Guild Levels and EXP</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/bank.html"><span>Guild Bank</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/upgrades.html"><span>Guild Upgrades</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/settings.html"><span>Guild Settings and Permissions</span></a>
                    </li>
                </ul>
            </div>
                <li>
                    <a class="fullwidth" href="javascript:void(0);" onclick="moneydd()">
                        <i class="fa-solid fa-money-bill-wave fa-fw">
                        </i>
                        Currency
                    </a>
                    <script>
                        function moneydd() {
                            var x = document.getElementById("money-dropdown");
                            if (x.style.display === "block") {
                                x.style.display = "none";
                            } else {
                                x.style.display = "block";
                            }
                        }
                    </script>
                </li>
            <div id="money-dropdown">
                <ul>
                    <li>
                        <a class='fullwidtha' href="guilds/guilds.html"><span>Overview</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/chat.html"><span>Guild Chat</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/levels.html"><span>Guild Levels and EXP</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/bank.html"><span>Guild Bank</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/upgrades.html"><span>Guild Upgrades</span></a>
                    </li>
                    <li>
                        <a class='fullwidtha' href="guilds/settings.html"><span>Guild Settings and Permissions</span></a>
                    </li>
                </ul>
            </div>
            </li>
            <li>
                <button class="dropdown-btn"><i class="fa-solid fa-broom fa-fw"></i></i>Weapons
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
  
  customElements.define('dropdowntablet-component', dropdown);



  