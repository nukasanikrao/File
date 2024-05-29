import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class PageLayout extends Component {
    render() {
        return (<>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/blog/3/Kavita">Blog Detail</Link></li>
                </ul>
            </nav>
            
            <Outlet />
        </>
        )
    }
}
