"use client"
import React from 'react';
import Link from 'next/link';

function SideBar({ isSidebarOpen, toggleSidebar }) {
  return (
    <div>
      <div id="side-bar" className={`side-bar header-two ${isSidebarOpen ? 'show' : ''}`}>
        <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
          <i className="far fa-times"></i>
        </button>
        <div className="mobile-menu-main">
          <nav className="nav-main mainmenu-nav mt--30">
            <ul className="mainmenu metismenu" id="mobile-menu-active">
              <li>
                <Link href="/" className="main">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/service" className="main">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog-grid" className="main">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="main">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="rts-social-border-area right-sidebar mt--80">
            <ul>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="social link" data-description="social">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
