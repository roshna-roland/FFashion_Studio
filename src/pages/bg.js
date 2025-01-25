import React from 'react';
// import './bg.css'; // Make sure to create and style this CSS file

const BackgroundImage = ({ children }) => {
    return (
        <div className="background-image" style={{ 
            position: 'relative', 
            textAlign: 'center', 
            backgroundImage: 'url("/studio2.jpeg")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '100vh', 
            color: "#f26107",
            display: 'flex',
         
            flexDirection: 'column'
            }}>
            {children}
        </div>
    );
};

export default BackgroundImage;