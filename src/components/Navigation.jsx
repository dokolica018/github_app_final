import React, { useState } from 'react'

const Navigation = ({setUsername}) => {
    const [inputVal, setInputVal] = useState('')
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/"><i className="fab fa-github display-6 text-light"/></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button> */}
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a onClick={(e) => {
                                e.preventDefault()
                                setUsername('dokolica018')
                                setInputVal('')
                            }} className="nav-link active text-success " aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    <h2 className="text-warning mx-auto py-3">Github profile finder</h2>
                    <form onSubmit={(e) => {
                            e.preventDefault()
                            setInputVal('')
                        }} className="d-flex">
                        <input onChange={(e) => {
                            setUsername(e.target.value)
                            setInputVal(e.target.value)
                        }} className="form-control me-2" value={inputVal} type="search" placeholder="Search github users..." aria-label="Search" />
                        <button  className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navigation
