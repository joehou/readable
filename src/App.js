import React, { Component } from 'react';
import FaLeanpub from 'react-icons/lib/fa/leanpub'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header">
              <div className="grid row">
              <h1 className='logo col-3'><FaLeanpub size={30}/> Readable</h1>
              <ul className="navigation col-9">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
              </div>
          </div>
          <div className="grid">
              <div className="main row">
                  <div className="categories col-3">
                      <h3>Categories</h3>
                      <ul>
                          <li>
                              <a href="/marketplace/category/code-quality" class="filter-item py-1 ">
                                  Code quality
                              </a>
                          </li>
                          <li>
                              <a href="/marketplace/category/code-review" class="filter-item py-1 ">
                                  Code review
                              </a>
                          </li>
                          <li>
                              <a href="/marketplace/category/continuous-integration" class="filter-item py-1 ">
                                  Continuous integration
                              </a>
                          </li>

                      </ul>
                  </div>
                  <div className="posts col-9">
                      <h2>Posts</h2>
                    <p>
                        Monitor the impact of your code changes. Measure performance, track errors, and analyze your application.
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                      <p>
                          This HTML file is a template.
                      </p>
                      <h2>Posts</h2>
                      <p>
                          Monitor the impact of your code changes. Measure performance, track errors, and analyze your application.
                          To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                      <p>
                          This HTML file is a template.
                      </p>
                      <h2>Posts</h2>
                      <p>
                          Monitor the impact of your code changes. Measure performance, track errors, and analyze your application.
                          To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                      <p>
                          This HTML file is a template.
                      </p>
                      <h2>Posts</h2>
                      <p>
                          Monitor the impact of your code changes. Measure performance, track errors, and analyze your application.
                          To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                      <p>
                          This HTML file is a template.
                      </p>
                      <h2>Posts</h2>
                      <p>
                          Monitor the impact of your code changes. Measure performance, track errors, and analyze your application.
                          To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                      <p>
                          This HTML file is a template.
                      </p>
                      <h2>Posts</h2>
                      <p>
                          Monitor the impact of your code changes. Measure performance, track errors, and analyze your application.
                          To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                      <p>
                          This HTML file is a template.
                      </p>  <h2>Posts</h2>
                      <p>
                          Monitor the impact of your code changes. Measure performance, track errors, and analyze your application.
                          To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                      <p>
                          This HTML file is a template.
                      </p>  <h2>Posts</h2>
                      <p>
                          Monitor the impact of your code changes. Measure performance, track errors, and analyze your application.
                          To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                      <p>
                          This HTML file is a template.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
