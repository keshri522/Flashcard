import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/navbars/navbar';
import Routers from './Components/Routes/routes';

const App = () => {
  return (
<div>
<Navbar></Navbar>
<Routers></Routers>
</div>
  );

};

export default App;