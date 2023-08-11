import React from "react";

const Follower = ({ avatar_url, html_url, login }) => {
    return (
        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '5px 5px 15px 5px rgba(0,0,0,0)' }}>
            <img src={avatar_url} alt={html_url} style={{ width: '300px', objectFit: 'cover' }}/>
            <h2 style={{ padding: '10px' }}>{login}</h2>
            <a href={html_url} className='btn' style={{ backgroundColor: '#49a6e9', textDecoration: 'none', color: '#fff', padding: '5px', borderRadius: '8px' }} >
                View profile
            </a>
        </div>
    )
}

export default Follower;