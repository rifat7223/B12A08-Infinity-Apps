import React, {  useEffect, useState } from 'react';

const Search = ({data}) => {
     const [apps, setApps] = useState([]);         
  const [filteredApps, setFilteredApps] = useState([]); 
  const [search, setSearch] = useState('');  

  
         useEffect(() => {
    setApps(data);
    setFilteredApps([]); // start with empty list
  }, [data]);
   
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);

    const filtered = apps.filter(app =>
      app.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredApps(filtered);
  };
    return (
        <div>
             <div style={{ padding: '20px' }}>
      <h1>📱 App Store</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={handleSearch}
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          marginBottom: '20px',
          width: '300px'
        }}
      />

      <div style={{ display: 'grid', gap: '15px' }}>
        {search.trim() !== '' ? (
          filteredApps.length > 0 ? (
            filteredApps.map(app => (
              <div
                key={app.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid #ccc',
                  padding: '10px',
                  borderRadius: '8px'
                }}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                />
                <div>
                  <h3 style={{ margin: 0 }}>{app.title}</h3>
                  <p style={{ margin: 0 }}>{app.companyName}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No apps found.</p>
          )
        ) : null}
      </div>
    </div>
        </div>
    );
};

export default Search;