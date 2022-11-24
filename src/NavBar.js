export function NavBar({ add }) {
  // let [addCart, setAddCart] = useState(0);
  // function add() {
  //   setAddCart((prv) => prv + 1);
  // }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          React Hooks
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>

          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
            Cart: <span className="font-weight-bold mx-1">{add}</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
