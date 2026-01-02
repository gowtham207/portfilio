import React, { lazy } from 'react'
import { Routes, Route } from "react-router";
const Home = lazy(() => import('./screens/Home'));
const About = lazy(() => import('./screens/About'));
const NotFound = lazy(() => import('./screens/NotFound'));
const Layout = lazy(() => import('./screens/Layout'));
const Experience = lazy(() => import('./screens/Experience'));
const Contact = lazy(() => import('./screens/Contact'))

const App: React.FC = () => {
  return (
    <Routes >
      <Route element={<Layout />} >
        <Route index path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
