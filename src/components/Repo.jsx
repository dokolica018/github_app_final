import React from 'react'

const Repo = ({repo,index}) => {
    return (
        <div className='my-3 row'>
            <div className="col-10 offset-1">
            <a className='text-decoration-none' rel="noreferrer" target="_blank" href={repo.html_url}><h6 className="text-success">{index+1}. {repo.name} -  <i className='fas fa-star text-warning'>: {repo.stargazers_count}  &nbsp; </i> <i className='fas fa-eye text-secondary'> : {repo.watchers}  &nbsp;</i>
            <i className='fas fa-code text-danger'> : {repo.language}</i>
            </h6></a>
            
            <hr />
            </div>
        </div>
    )
}

export default Repo
