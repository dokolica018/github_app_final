import React from 'react'

const Follower = ({follower, setUsername, setUser}) => {
    return (
        <div onClick={() => {
            setUsername(follower.login)
            setUser(follower)
        }} className='d-flex align-items-center my-4' role='button'>
            <img className='img-fluid w-25 rounded-circle' src={follower.avatar_url} alt={follower.avatar_url} />
            <h6 className='mx-4'>{follower.login}</h6>
        </div>
    )
}

export default Follower
