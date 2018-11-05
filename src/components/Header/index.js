import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  state = {
    user : 'Nguyen'
  };
  render() {
    return (
        <header className="header">
          <div className="container">
            <div className="header__wrap">
              <a href="/" className="header__logo">
                <img src="http://rtsolutionz.com/raven/demo-zando/zando-black/images/logo-white.png" alt="Logo"/>
              </a>
              <nav className="nav">
                <ul className="nav__list">
                  <li className="nav__item">
                    <Link to='home'>Home</Link>
                  </li>
                  <li className="nav__item">
                    <Link to='home'>Projects</Link>
                  </li>
                  <li className="nav__item">
                    <Link to='home'>Add New Project</Link>
                  </li>
                  <li className="nav__item">
                    ${(this.state.user) ? <Link to='home'>Hi {this.state.user}, Logout</Link> : <Link to='home'>Login</Link>}

                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    )
  }
}

export default Header;