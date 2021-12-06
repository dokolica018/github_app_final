import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { getGithubFollowers, getGithubProfile, getGithubRepos } from './service';
import Footer from './components/Footer';

function App() {

  const [user, setUser] = useState({})
  const [username, setUsername] = useState('dokolica018')
  const [repos, setRepos] = useState([])
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    getGithubProfile(username).then((res) => {
      setUser(res.data)
    })
    getGithubRepos(username).then((res) => {
      setRepos(res.data)
    })
    getGithubFollowers(username).then((res) => {
      setFollowers(res.data)
    })
  }, [username])

  function rectangle(a,b) {
    let sredina = '*' + ' '.repeat(a - 2) + '*'
    console.log('*'.repeat(a));
    for (let i = 0; i < b - 2; i++) {
        console.log(sredina);
    }
    console.log('*'.repeat(a));
  }
  rectangle(9,4)
  function rhombus(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        string += " ";
      }
      for (let k = 0; k < i * 2 - 1; k++) {
        if (k === 0 || k === 2 * i - 2) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
      string += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      for (let k = (n - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (n - i) * 2 - 1) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
      string += "\n";
    }
    console.log(string);
  }
  rhombus(5)

  return (
    <div className="App">
      <Navigation setUsername={setUsername} />
      <Home key={user.id} user={user} repos={repos} followers={followers} setUsername={setUsername} setUser={setUser} />
      <Footer user={user}/>
    </div>
  );
}

export default App;
