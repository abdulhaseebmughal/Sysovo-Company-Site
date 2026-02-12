"use client"
import React from 'react'
import Link from 'next/link';
function Nav() {
    return (
        <div>
            <div className="nav-area">
                <nav>
                    <ul>
                        <li>
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/service">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/blog-grid">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
