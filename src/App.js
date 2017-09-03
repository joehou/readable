import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectCategory} from './actions'
import FaLeanpub from 'react-icons/lib/fa/leanpub'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.posts)
    const {categories}  =this.props
    const {selectCategory} = this.props

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
                          {categories.map( (cat)=>
                              <li>
                                  <a onClick={_=> {
                                      console.log(cat)
                                      selectCategory(cat)
                                  } }>{cat.name}</a>
                              </li>
                          )}
                      </ul>
                  </div>
                  <div className="posts col-9">
                    <h2>Posts</h2>
                    <div className="post">
                      <p>
                          <b>Monitor the impact of your code changes. Measure performance, track errors,</b>
                          <br/>and analyze your application.
                        To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                    </div>
                      <div className="post">
                          <p>
                              <b>Monitor the impact of your code changes. Measure performance, track errors,</b>
                              <br/>and analyze your application.
                                   To get started, edit <code>src/App.js</code> and save to reload.
                          </p>
                      </div>
                      <div className="post">
                          <p>
                              <b>Monitor the impact of your code changes. Measure performance, track errors,</b>
                              <br/>and analyze your application.
                                   To get started, edit <code>src/App.js</code> and save to reload.
                          </p>
                      </div>
                      <div className="post">
                          <p>
                              <b>Monitor the impact of your code changes. Measure performance, track errors,</b>
                              <br/>and analyze your application.
                                   To get started, edit <code>src/App.js</code> and save to reload.
                          </p>
                      </div>
                      <div className="post">
                          <p>
                              <b>Monitor the impact of your code changes. Measure performance, track errors,</b>
                              <br/>and analyze your application.
                                   To get started, edit <code>src/App.js</code> and save to reload.
                          </p>
                      </div>
                      <div className="post">
                          <p>
                              <b>Monitor the impact of your code changes. Measure performance, track errors,</b>
                              <br/>and analyze your application.
                                   To get started, edit <code>src/App.js</code> and save to reload.
                          </p>
                      </div>
                      <div className="post">
                          <p>
                              <b>Monitor the impact of your code changes. Measure performance, track errors,</b>
                              <br/>and analyze your application.
                                   To get started, edit <code>src/App.js</code> and save to reload.
                          </p>
                      </div><div className="post">
                      <p>
                          <b>Monitor the impact of your code changes. Measure performance, track errors,</b>
                          <br/>and analyze your application.
                               To get started, edit <code>src/App.js</code> and save to reload.
                      </p>
                  </div>


                  </div>
              </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const {selectedCategory, posts} = state
    return {
        selectedCategory: selectedCategory,
        categories: posts.categories,
        posts: posts.posts
 }
}

function mapDispatchToProps(dispatch){
    return{
        selectCategory: (data)=> dispatch(selectCategory(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
