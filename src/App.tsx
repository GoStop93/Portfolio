import React, { Suspense, lazy, useEffect, useState } from 'react';
import * as S from './App.styles';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import PageLoader from './components/PageLoader/PageLoader';

const Gallery = lazy(() => import('./routes/Gallery/Gallery'));
const MyProjects = lazy(() => import('./routes/MyProjects/MyProjects'));

function App() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 2500);
    };

    window.addEventListener('load', handlePageLoad);
    document.addEventListener('DOMContentLoaded', handlePageLoad);

    return () => {
      window.removeEventListener('load', handlePageLoad);
      document.removeEventListener('DOMContentLoaded', handlePageLoad);
    };
  }, []);

  return (
    <Router>
      <S.App>
        <Suspense>
          <PageLoader isPageLoaded={isPageLoaded}/>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/projects" element={<MyProjects />} />
          </Routes>
        </Suspense>
      </S.App>
    </Router>
  );
}

export default App;
