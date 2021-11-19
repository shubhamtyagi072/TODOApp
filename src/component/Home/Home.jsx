import React from 'react';

 const Home = () => {
     return (
         <React.Fragment>
             <h1>Home Component</h1>
             <button onClick={() => console.log("button click")}>Press Me!!</button>
         </React.Fragment>
     );
 }
  
 export default Home;