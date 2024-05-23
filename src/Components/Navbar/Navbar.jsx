import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Navbar extends Component {
  

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg text-bg-dark mb-5 p-4 rounded-4">
      <div class="container-fluid ">
      <img src="./images/logo@2x.webp" alt="" class="w-25 img-fluid" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item t">
            
              <a class="nav-link active active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light" href="#">Get Started</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light" href="#">Menswer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light" href="#">Womenswer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-light" href="#">Accessories</a>
            </li>
            <li class="nav-item">
           
              <a class="nav-link active text-light" href="#">Sale</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
        </div>
    )
  }
}
