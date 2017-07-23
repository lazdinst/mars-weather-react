var Navbar = (props) => {

  return(
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" onClick={(e) => {
              props.getMarsWeatherData(e);
            }}>
              <img alt="Mars Weather" width="25px" src="https://image.flaticon.com/icons/svg/181/181779.svg"/>
            </a>
          </div>
        </div>
      </nav>
  );
}

window.Navbar = Navbar;