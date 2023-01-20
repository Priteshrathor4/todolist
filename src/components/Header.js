import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
 export const Header = (props) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                   <NavLink className="navbar-brand" to="/">{props.title   }</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <NavLink exact className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink exact className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink exact className="nav-link" to="/upper">CapitalText</NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink exact className="nav-link" to="/todolist" title='just for link bug set'>Todolist</NavLink>
                            </li>
                            <li className="nav-item">
                               <NavLink exact className="nav-link" to="/add">Error_ex</NavLink>
                            </li>
                           
                        </ul>
                        {props.searchBar? <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>:"no search Bar"}
                    </div>
                </div>
            </nav>
    </>
  )
}
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}