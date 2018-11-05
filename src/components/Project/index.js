import React from 'react';

class Project extends React.Component {
  render () {
    return (
        <div>
          <div className="banner">
            <h2 className="banner__title">Awesome Project Name</h2>
          </div>
          <div className="description">
            <div className="container">
              <h3>Adidas Redesign Project</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as.</p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English..</p>

              <div className="description__buttons">
                <a href="#">Project URL</a>
                <a href="#">Github</a>
              </div>
            </div>
          </div>
          <div className="checklist">
            <div className="container">
              <ul className="checklist__nav">
                <li>
                  <a href="#">HEAD</a>
                </li>
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JAVASCRIPT</a>
                </li>
                <li>
                  <a href="#">IMAGES</a>
                </li>
                <li>
                  <a href="#">ACCESSIBILITY</a>
                </li>
              </ul>

              <div className="checklist__block">
                <h2>HEAD</h2>
                <div className="progress">
                  <span className="progress__number" style={{left: '90%'}}>90%</span>
                  <div className="progress__content">
                    <div className="progress__inner" style={{width: '90%'}}></div>
                  </div>
                </div>
                <ul className="checklist__list">
                  <li>
                    <div className="checkbox">
                      <input type="checkbox" id="list-1-1"/>
                      <label htmlFor="list-1-1">
                        <strong>Doctype: </strong>The Doctype is HTML5 and is at the top of all your HTML pages.
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="checkbox">
                      <input type="checkbox" id="list-1-2"/>
                      <label htmlFor="list-1-2">
                        <strong>Charset: </strong>The charset declared (UTF-8) is declared correctly.
                      </label>
                    </div>
                    <div className="user">
                      <img src="http://profileplugin.com/wp-content/uploads/upme/1444024111_harvey-2.jpg" alt=""/>
                      <span>Monday, June 15, 2009 1:45:30 PM</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="checklist__block">
                <h2>HTML</h2>
                <div className="progress">
                  <span className="progress__number" style={{left: '90%'}}>90%</span>
                  <div className="progress__content">
                    <div className="progress__inner" style={{width: '90%'}}></div>
                  </div>
                </div>
                <ul className="checklist__list">
                  <li>
                    <div className="checkbox">
                      <input type="checkbox" id="list-1-1"/>
                      <label htmlFor="list-1-1">
                        <strong>Doctype: </strong>The Doctype is HTML5 and is at the top of all your HTML pages.
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="checkbox">
                      <input type="checkbox" id="list-1-2"/>
                      <label htmlFor="list-1-2">
                        <strong>Charset: </strong>The charset declared (UTF-8) is declared correctly.
                      </label>
                    </div>
                    <div className="user">
                      <img src="http://profileplugin.com/wp-content/uploads/upme/1444024111_harvey-2.jpg" alt=""/>
                      <span>Monday, June 15, 2009 1:45:30 PM</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Project;