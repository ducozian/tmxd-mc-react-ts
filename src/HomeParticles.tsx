import { memo } from 'react';
import Particles from '@tsparticles/react';
import type { Container } from '@tsparticles/engine';

const HomeParticles = () => {
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <div
      style={{
        filter  : 'blur(1px)',
        position: 'absolute',
        width   : '100%',
        height  : '100%',
        top     : 0,
        left    : 0,
        zIndex  : 1,
      }}
    >
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        url="/particles-snow.json"
      />
    </div>
  );
};
export default memo(HomeParticles);