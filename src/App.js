import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Followers';

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if(loading) return
    setFollowers(data[page])
  }, [loading, page]);

  const prevPage = () => {
    setPage((prev) => {
      let currentPage = prev - 1;
      if(currentPage < 0) {
        currentPage = followers.length - 1;
      }
      return currentPage;
    });
  }

  const nextPage = () => {
    setPage((prev) => {
      let currentPage = prev + 1;
      if(currentPage > followers.length - 1) {
        currentPage = 0;
      }
      return currentPage;
    });
  }

  const handlePage = (index) => {
    setPage(index);
  }

  return (
    <div className="App" style={{ backgroundColor: '#dae2ec' }}>
      <h1 style={{ fontSize: '50px', padding: '20px 0' }}>{loading ? 'Loading' : 'Pagination'}</h1>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {!loading && (
          <div>
            <span style={{ fontSize: '20px', border: 'none' }} onClick={prevPage} >Prev</span>
            {data.map((item, index) => {
              return (
                <button style={{ margin: '20px 10px', padding: '10px', backgroundColor: '#063251', fontSize: '20px', border: 'none', color: '#fff' }} key={index} onClick={() => handlePage(index)} >
                  {index + 1}
                </button>
              )
            })}
            <span style={{ fontSize: '20px', border: 'none' }} onClick={nextPage} >Next</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
