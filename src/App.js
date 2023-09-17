import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Dashboard from './components/Dashboard';


 
function App(){
 
        return (
            <div>
                <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
             </div>
            </div>  
        </div>  
        );
    }
  
export default App