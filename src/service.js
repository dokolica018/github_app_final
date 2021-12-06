import axios from "axios";

export const getGithubProfile = (user) => axios.get(`https://api.github.com/users/${user}`,{
})
export const getGithubRepos = (user) => axios.get(`https://api.github.com/users/${user}/repos`)
export const getGithubFollowers = (user) => axios.get(`https://api.github.com/users/${user}/followers`)