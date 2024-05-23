import React from 'react';
import Link from 'next/link';

function Nav() {

  const navItems = [
    { label: 'Home',  },
    { label: 'Services',},
    { label: 'About', },
    { label: 'Portfolio', },
    // { label: 'Price', link: '/price', scrollNav: 4 },
    { label: 'Contact',  },
    // { label: 'Blog', link: '/blog' },
  ];


  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="/" className=" main-color">
             <h4>Zia Ur Rehman</h4>
            </a>
          </div>
          <div className="col-md-8">
            <div className="navbar">
              <div className="row justify-content-end rest">
              <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-end">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link href="/" >
                    <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
