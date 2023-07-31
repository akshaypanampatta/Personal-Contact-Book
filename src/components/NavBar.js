import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Personal Contact
          </Link>

          <div class="collapse navbar-collapse text-right" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item ">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/favourite">
                  Favourites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
