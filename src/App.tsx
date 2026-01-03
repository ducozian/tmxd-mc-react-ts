import { useEffect, useState } from 'react';
import Logo from '/logo.png';
import './index.css';
import styled from 'styled-components';
import { initParticlesEngine } from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import HomeParticles from './HomeParticles.tsx';
import classNames from 'classnames';

function App() {

  const [isPageLoaded, setPageLoaded] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPageLoaded(true);
  }, []);

  // This should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadAll(engine);
      // await loadFull(engine);
      // await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <ThisComponentStyled>
      {init && (
        <div className={classNames('home-particles', { 'is-loaded': isPageLoaded })}>
          <HomeParticles/>
        </div>
      )}
      <div className="logo"><img src={Logo} alt="Logo"/></div>
      <div className="site-name">Thương Mại Xây Dựng Minh Châu</div>
    </ThisComponentStyled>
  );
}

export default App;

const ThisComponentStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #474747, #242424);
  color: #ffffff;

  .logo {
    text-align: center;

    img {
      width: 480px;
      max-width: 80%;
      pointer-events: none;
    }
  }

  .site-name {
    font-size: 32px;
    margin-top: 20px;
    padding: 0 10% 10%;
    text-align: center;
  }
`;

