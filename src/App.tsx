import React from 'react';
import * as S from './App.styles';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import { Gallery } from './routes/Gallery/Gallery';
import { MyProjects } from './routes/MyProjects/MyProjects';

function App() {
  return (
    <Router>
      <S.App>
          <Routes>
            <Route path='/' element={<Gallery />}/>
            <Route path='/projects' element={<MyProjects />}/>
          </Routes>
      </S.App>
    </Router>
  );
}

export default App;
