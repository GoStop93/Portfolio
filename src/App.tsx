import { Suspense, useEffect } from 'react';
import * as S from './App.styles';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import PageLoader from './components/PageLoader/PageLoader';
import { usePages } from './routes/Gallery/store/store';
import { getIsPageLoaded, getSetIsPageLoaded } from './routes/Gallery/store/selectors';

import Gallery from './routes/Gallery/Gallery';
import MyProjects from './routes/MyProjects/MyProjects';
import Contacts from './routes/Contacts/Contacts';
import Page404 from './routes/Page404/Page404';

function App() {
  const location = useLocation();

  const isPageLoaded = usePages(getIsPageLoaded);
  const setPageLoaded = usePages(getSetIsPageLoaded);

  useEffect(() => {
    const handlePageLoad = () => {
      window.scrollTo(0, 0);
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
    <S.App>
      <PageLoader isPageLoaded={isPageLoaded} />
      <Suspense>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Gallery />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </S.App>
  );
}

export default App;
