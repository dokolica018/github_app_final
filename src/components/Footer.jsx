import React from 'react'

const Footer = ({user}) => {
    return (
        <div className='bg-dark mt-5 py-3 text-light text-center'>
            <p>Made with <i className="fas fa-heart text-danger"></i> by: Andreja Stanimirovic &copy;</p>
            <div className='d-flex justify-content-center align-center'>
                <p>Folow me on: </p>
                <a className='text-decoration-none text-light' href="https://www.linkedin.com/in/andrejast/">&nbsp; <i className="fab fa-linkedin m-1 my-1"></i></a>
                <a className='text-decoration-none text-light' href="https://github.com/dokolica018">&nbsp; <i className="fab fa-github m-1 my-1"></i></a>
                <a className='text-decoration-none text-light' href="https://facebook.com/andreja.stanimirovic.71">&nbsp; <i className="fab fa-facebook m-1 my-1"></i></a>
                <a className='text-decoration-none text-light' href="https://instagram.com/stanimirovicandreja">&nbsp; <i className="fab fa-instagram m-1 my-1"></i></a>
                <a className='text-decoration-none text-light' href={user.blog}>&nbsp; <i className="fas fa-globe m-1 my-1"></i></a>
            </div>
        </div>
    )
}

export default Footer
