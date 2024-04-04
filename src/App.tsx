import React, { Suspense, lazy, useEffect, useState } from 'react';
import * as S from './App.styles';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import PageLoader from './components/PageLoader/PageLoader';

const Gallery = lazy(() => import('./routes/Gallery/Gallery'));
const MyProjects = lazy(() => import('./routes/MyProjects/MyProjects'));
const Contacts = lazy(() => import('./routes/Contacts/Contacts'));
const Page404 = lazy(() => import('./routes/Page404/Page404'));

function App() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      window.scrollTo(0,0)
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

  useEffect(() => {
    if (!isPageLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPageLoaded]);

  return (
    <Router>
      <S.App>
      <PageLoader isPageLoaded={isPageLoaded}/>
        <Suspense>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/projects" element={<MyProjects isPageLoaded={isPageLoaded} />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path='*' element={<Page404/>}/>
          </Routes>
        </Suspense>
      </S.App>
    </Router>
  );
}

export default App;
