import React, { useState } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 const App=()=>{
   const pageSize=70;
    const apikey=process.env.REACT_APP_NEWS_API;
     
     const [progress,setprogress]=useState(0);
       
 
   
     return (
      <Router>
         <div>
      <Navbar/>
      <div>
    <LoadingBar
    height={4}
      color='#f11946'
      progress={progress}
       
    />
  </div>
      {/* <News pageSize={pageSize} country="in" category="health"/> */}
      <Routes>
        {/* when we dont use key then page will not be re render when we click on different categories */}
         <Route exact path="/" element={ <News  setprogress= {setprogress} apikey={apikey} key="general" pageSize={pageSize} category="general"/>}></Route>
         <Route exact path="/business" element={ <News  setprogress= {setprogress} apikey={apikey} key="business" pageSize={pageSize}  category="business"/>}></Route>
         <Route exact path="/health" element={ <News  setprogress= {setprogress} apikey={apikey} key="health" pageSize={pageSize}  category="health"/>}></Route>
         <Route exact path="/entertainment" element={ <News  setprogress= {setprogress} apikey={apikey} key="entertainment" pageSize={pageSize} category="entertainment"/>}></Route>
         <Route exact path="/sports" element={ <News  setprogress= {setprogress} apikey={apikey}  key="sports" pageSize={pageSize} category="sports"/>}></Route>
         <Route exact path="/science" element={ <News  setprogress= {setprogress} apikey={apikey} key="science" pageSize={pageSize}  category="science"/>}></Route>
         <Route exact path="/technology" element={ <News  setprogress= {setprogress} apikey={apikey} key="technnology" pageSize={pageSize} category="technology"/>}></Route>
         </Routes>
    </div>
    </Router>
      
     )
   
 }
  export default App;