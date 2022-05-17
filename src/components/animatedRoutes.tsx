import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useIdleTimer } from 'react-idle-timer';
import MainMap from './mainMap';
import RegionalPartners from './regionalPartners';
import Team from './team';
import Research from './research';


const AnimatedRoutes = () => {
  const location = useLocation();
  const onIdle = () => {
    window.location.reload();
  };

  // @ts-ignore
  const idleTimer = useIdleTimer({ onIdle, timeout: 180000 });

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainMap />} />
        <Route path="/regional-partners" element={<RegionalPartners />} />
        <Route path="/team" element={<Team />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
