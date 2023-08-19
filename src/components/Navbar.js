// react function based components ne banava khali "rfc" lakhine ne enetr dabavanu. aa je niche lakhiyu 6 ae react function based components 6
import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* <a className="navbar-brand" href="/">{props.title}</a> */}


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>

                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                        </li>
                        <li className="nav-item">

                            <Link className="nav-link" to="/about">About</Link>

                            {/* <Link className="nav-link" href="/about">{props.about}</Link> */}
                        </li>


                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    

                    <div className={`form-check form-switch my-2 mx-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modename}</label>
                    </div>


                    <div className={`form-check form-switch my-2 mx-2 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.btn2} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modename}</label>
                    </div>

                    
                </div>
            </div>
        </nav>
    )
}
// aa props jevu 6 pan aama aapde je props 6 tenu type define kariae chhiye
Navbar.propTypes = {
    title: PropTypes.string,
    // isrequired aevu hoy 6 ke jo aapde about set na karyu to ae error aapse
    about: PropTypes.string.isRequired,
}

// aa defalut rite title and about set kari aapiye jo aapde set na karyu hoy to uper thi aa aapde banaviyu 6 je reminder tarike use thay
// jo aapde set kari nakhiye Navbar.js file ma to aa remove thai se
Navbar.defaultProps = {
    title: "set title",
    about: "set about"
}
