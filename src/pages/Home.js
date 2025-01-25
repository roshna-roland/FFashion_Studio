
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';



    const Home = () => {
      const [showPhoto, setShowPhoto] = useState(false);

      const handleCreateClick = () => {
        setShowPhoto(true);
      };

      return (
        <section>
          <div>
            <div
              style={{
                // position: 'absolute',
                // top: 0,
                // left: 0,
                // right: 0,
                // bottom: 0,
                // backgroundColor: 'rgba(36, 33, 33, 0.5)'
              }}
            ></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1>Know Your Style</h1>
              <p>Find out what your style is!</p>
            </div>

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <label htmlFor="dressDescription">Dress Description:</label>
              <textarea
                name="content"
                rows={5}
                cols={50}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#f26107',
                  border: '2px solid #f26107',
                }}
              />
            </div>

            {/* <p style={{ position: 'relative', zIndex: 1 }}>Upload your photo here!</p> */}
            <button
              type="button"
              className="btn btn-primary"
              style={{
                position: 'relative',
                zIndex: 1,
                backgroundColor: '#f26107',
                color: 'white',
                marginTop: '10px',
                border: '0',
              }}
              onClick={handleCreateClick}
            >
              Create
            </button>

            <div></div>
            <Link to="/blogs">
              <button
                type="button"
                className="btn btn-secondary"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: '#f26107',
                  color: 'white',
                  marginTop: '10px',
                  border: '0',
                }}
              >
                Try it on yourself!
              </button>
            </Link>
            <Outlet />
            <div></div>
            {showPhoto && (
              <section>
            <div className="photo given">
              <img
                src="https://images.pexels.com/photos/3762808/pexels-photo-3762808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="given"
                style={{
                 height: '500px',
                  width: '500px',
                  borderRadius: '10%',
                  position: 'relative',
                  zIndex: 1,
                  
                }}
              />
            </div>
            </section>
          )}
          </div>
          <div></div>
       
        </section>
      );
    };

    export default Home;
