import React from 'react'
import Follower from './Follower';
import Repo from './Repo'

const Home = ({ user, repos, followers, setUsername, setUser }) => {
    return (
        <div className="container my-5 bg-light rounded shadow text-success">
            <div className="row">
                <div className="col-md-6 col-12">
                    <h2 className='p-3 py-4 text-black-50'>Info:</h2>
                    <div className='row'>
                        <div className="col-md-6 col-12">
                            <img className="d-block m-3 img-fluid rounded-circle w-75" src={user.avatar_url} alt="" />
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="talk-bubble tri-right left-top text-dark">
                                <div className="talktext">
                                    <h6 className='text-black-50'>{user.login}:</h6>
                                    <p className=' py-1'>{user.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i className=" text-black-50 fas fa-user "></i>
                        <h6 className='mx-2'>{user.name}</h6>
                    </div>
                    <div className='d-flex align-center'>
                        <i className="text-black-50 fas fa-envelope "></i>
                        <h6 className='mx-2'>{user.email}</h6>
                    </div>
                    <div className='d-flex align-center'>
                        <i className=" text-black-50 fas fa-map-marker "></i>
                        <h6 className='mx-2'>{user.location}</h6>
                    </div>
                    <div className='d-flex align-center'>
                        <i className=" text-black-50 fas fa-globe "></i>
                        <a href={user.blog}><h6 className='mx-2'>{user.blog}</h6></a>
                    </div>
                    <div className='d-flex align-center'>
                        <i className=" text-black-50 fas fa-building "></i>
                        <h6 className='mx-2'>{user.company}</h6>
                    </div>
                    <div className='d-flex align-center'>
                        <i className=" text-black-50 fas fa-users "></i>
                        <h6 className='mx-2'>Followers: {user.followers} ; Following: {user.following}</h6>
                    </div>
                    <h2 className='p-3 py-4 text-black-50'>Folowers:</h2>
                    {followers.length !== 0 ? followers.map((follower, index) => <Follower follower={follower} setUsername={setUsername} setUser={setUser} />) : <p>No followers...</p>}
                </div>
                <div className="col-md-5 col-10 repos">
                    <h2 className='p-3 py-4 text-black-50'>Repositories:</h2>
                    {repos ? repos.map((repo, index) => <Repo key={repo.id} repo={repo} index={index} />) : true}
                </div>
            </div>
        </div>
    )
}

export default Home
