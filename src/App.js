import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

// this is from https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

  // this is using fetch
 // useEffect(() => {
//    setAppState({ loading: true });
  //  const apiUrl = `https://api.github.com/users/nidge/repos`;
  //  fetch(apiUrl)
    //  .then((res) => res.json())
      //.then((repos) => {
    //    setAppState({ loading: false, repos: repos });
   //   });
 // }, [setAppState]);

  // this is using axios
useEffect(() => {
    setAppState({ loading: true });
   const apiUrl = 'https://api.github.com/users/nidge/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);
  
  
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );
}
export default App;
