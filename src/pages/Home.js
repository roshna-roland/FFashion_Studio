
import { Outlet, Link } from "react-router-dom";



const Home = () => {
    return(
      <section>
      <div style={{ 
      position: 'relative', 
      textAlign: 'center', 
      backgroundImage: 'url("/studio2.jpeg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      color: "sandybrown",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
      }}>
      <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      backgroundColor: 'rgba(36, 33, 33, 0.5)' 
      }}></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
      <h1>Know Your Style</h1>
      <p>Find out what your style is!</p>
      </div>
      
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <label htmlFor="dressDescription">Dress Description:</label>
      <textarea 
      name="content" 
      rows={5} 
      cols={50} 
      style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
      color: 'sandybrown', 
      border: '2px solid sandybrown' 
      }} 
      />
      </div>

      {/* <p style={{ position: 'relative', zIndex: 1 }}>Upload your photo here!</p> */}
      <button type="button" class="btn btn-primary"
      style={{ 
      position: 'relative', 
      zIndex: 1, 
      backgroundColor: 'sandybrown', 
      color: 'white' ,
      marginTop: '10px',
      border: '0'
      }}>Create</button>

      <div> 
        
        </div>
        <Link to="/blogs">
                        <button type="button" className="btn btn-secondary"
                            style={{ 
                                position: 'relative', 
                                zIndex: 1, 
                                backgroundColor: 'sandybrown', 
                                color: 'white',
                                marginTop: '10px',
                                border: '0'
                            }}>Try it on yourself! 
                        </button>
                    </Link>
        <Outlet />
     
      </div>
      <div>
        
      </div>
      </section>
     
       
   
    );
  };
  
  export default Home;