

function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src=""
                alt="ChinChinLogo"
                width="30px"
                height="35px"
              />
              ChinChin
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                className="navbar-toggler-icon svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              </svg>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link px-3" href="">Beer</a>
                <a className="nav-link px-3" href="">Wine</a>
                <a className="nav-link px-3" href="">Vodka</a>
                <a className="nav-link px-3" href="">Whiskey</a>
                <a className="nav-link px-3" href="">Cart 1</a>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;