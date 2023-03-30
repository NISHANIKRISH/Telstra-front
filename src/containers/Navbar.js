import React from 'react'

const Navbar = () => {
  return (
    
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold fs-4" href="navbar">artsleT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <form class="d-flex ms-1">
            <input class="form-control me-1" type="Type here" placeholder="Search" aria-label="submit"/>
            <button type="submit"><i class="fa fa-search me-6" aria-hidden="true"></i></button>
          </form>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-3 mb-lg-0">
      
        <li class="nav-item">
        
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/shop">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aboutus">About Us</a>
        </li>

      
      </ul>
     
      <div className='buttons'>
        <a href="/signup" className="btn btn-outline-dark">
        <i className="fa fa-user-plus me-1"></i></a> 
        <a href="/signup" className="btn btn-outline-dark">
        <i className="fa fa-shopping-cart me-1"></i> </a>
        
      </div>
    </div>
  </div>
</nav>
  );
};
export default Navbar;