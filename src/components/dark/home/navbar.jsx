import React from 'react';
import Link from 'next/link';
function Navbar() {
  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services', scrollNav: 1 },
    { label: 'About', link: '/about', scrollNav: 2 },
    { label: 'Portfolio', link: '/portfolio', scrollNav: 3 },
    { label: 'Price', link: '/price', scrollNav: 4 },
    { label: 'Contact', link: '/contact', scrollNav: 5 },
    { label: 'Blog', link: '/blog', scrollNav: 6 },
  ];

  return (
    <nav className="navbar">
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-end">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link href={item.link} {...(item.scrollNav !== undefined && { 'data-scroll-nav': item.scrollNav })}>
                    <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
