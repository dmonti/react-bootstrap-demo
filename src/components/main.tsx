import React from 'react';

import { Jumbotron } from './jumbotron';
import { Card } from './card';

export const Main = () => {
 return (
  <main role="main">
   <Jumbotron />
   <div className="album py-5 bg-light">
    <div className="container">
     <div className="row">
      {[...Array(9)].map((e, i) => <Card />)}
     </div>
    </div>
   </div>
  </main>
 );
};