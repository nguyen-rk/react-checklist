import React from 'react';
class Home extends React.Component {
  render () {
    return (
        <div>
          <div className="container">
            <div className="block">
              <div className="heading">
                <h2 className="heading__inner">ACTIVE PROJECT</h2>
                <div className="heading__link">
                  <a href="#" className="link">SEE ALL</a>
                </div>
              </div>
              <div className="projects">
                <div className="card card--success">
                  <div className="card__image">
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f2.png" alt="Project 1"/>
                  </div>
                  <div className="card__content">
                    <a href='/' className="card__title">EVERYTHING HAS BEAUTY, BUT NOT EVERYONE SEES IT</a>
                    <div className="card__detail">
                      <span className="card__date">October 30, 2015</span>
                      <div className="card__progress">
                        <span className="card__status card__status--success"></span>
                        58%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card--danger">
                  <div className="card__image">
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f2.png" alt="Project 1"/>
                  </div>
                  <div className="card__content">
                    <h2 className="card__title">EVERYTHING HAS BEAUTY, BUT NOT EVERYONE SEES IT</h2>
                    <div className="card__detail">
                      <span className="card__date">October 30, 2015</span>
                      <div className="card__progress">
                        <span className="card__status card__status--danger"></span>
                        58%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card--warning">
                  <div className="card__image">
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f2.png" alt="Project 1"/>
                  </div>
                  <div className="card__content">
                    <h2 className="card__title">EVERYTHING HAS BEAUTY, BUT NOT EVERYONE SEES IT</h2>
                    <div className="card__detail">
                      <span className="card__date">October 30, 2015</span>
                      <div className="card__progress">
                        <span className="card__status card__status--warning"></span>
                        58%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="heading">
                <h2 className="heading__inner">ARCHIVED PROJECT</h2>
                <div className="heading__link">
                  <a href="#" className="link">SEE ALL</a>
                </div>
              </div>
              <div className="projects">
                <a href="/" className="card card--success">
                  <div className="card__image">
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f2.png" alt="Project 1"/>
                  </div>
                  <div className="card__content">
                    <h2 className="card__title">EVERYTHING HAS BEAUTY, BUT NOT EVERYONE SEES IT</h2>
                    <div className="card__detail">
                      <span className="card__date">October 30, 2015</span>
                      <div className="card__progress">
                        <span className="card__status card__status--success"></span>
                        58%
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/" className="card card--success">
                  <div className="card__image">
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f2.png" alt="Project 1"/>
                  </div>
                  <div className="card__content">
                    <h2 className="card__title">EVERYTHING HAS BEAUTY, BUT NOT EVERYONE SEES IT</h2>
                    <div className="card__detail">
                      <span className="card__date">October 30, 2015</span>
                      <div className="card__progress">
                        <span className="card__status card__status--success"></span>
                        58%
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/" className="card card--success">
                  <div className="card__image">
                    <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4f2.png" alt="Project 1"/>
                    <ul className="card__user">
                      <li>
                        <a href="#"><img src="http://profileplugin.com/wp-content/uploads/upme/1444024111_harvey-2.jpg" alt="Alex"/></a>
                      </li>
                      <li>
                        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAA3Gbci7k8YRC20FIsHkMBo2zaba3V_MbR06eGOOAt8CFQ4f" alt="Steven"/></a>
                      </li>
                      <li>
                        <a href="#"><img src="https://www.mensjournal.com/wp-content/uploads/mf/harvey_specter_gabriel_macht_main.jpg?w=1200&h=1200&crop=1" alt="Brian"/></a>
                      </li>
                    </ul>
                  </div>
                  <div className="card__content">
                    <h2 className="card__title">EVERYTHING HAS BEAUTY, BUT NOT EVERYONE SEES IT</h2>
                    <div className="card__detail">
                      <span className="card__date">October 30, 2015</span>
                      <div className="card__progress">
                        <span className="card__status card__status--success"></span>
                        58%
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default Home;