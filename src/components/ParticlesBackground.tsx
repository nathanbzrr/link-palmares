import React from 'react';
import Particles from '@tsparticles/react';
import { ISourceOptions } from '@tsparticles/engine';

const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
            enable: true,
            force: 60,
            smooth: 10
        }
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      grab: {
        distance: 150,
        links: {
            opacity: 0.8
        }
      }
    },
  },
  particles: {
    color: {
      value: "#ffdd00", // Cor do amarelo da Linknet
    },
    links: {
      color: "#0a1a4c", // Cor do azul da Linknet para as linhas
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

const ParticlesBackground: React.FC = () => {
  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;