import React from 'react'

import {Link} from 'react-router-dom'

import './header.css'

interface IHeader{
    link:string;
    content_link:string;
}

export const Header:React.FC<IHeader>=({link,content_link})=>{

    return (

        <header className="top">
            <nav className="navigation">
                <div>
                <Link to="/" className="Link">
                <h1 className="title">
                    ACME
                </h1>
                </Link>
                </div>
                
                <div>
                    <Link className="Link" to={link}>
                        <button className="New-post">{content_link}</button>
                        </Link>
                </div>
            </nav>
            
        </header>


    )
}