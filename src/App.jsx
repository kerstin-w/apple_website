import './index.css';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import NavBar from './components/NavBar';
import Model from './components/Model';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(App);
