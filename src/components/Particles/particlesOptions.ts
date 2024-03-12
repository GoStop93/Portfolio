import htmlSvg from '../../assets/icons/svgIcons/html.svg';
import jsSvg from '../../assets/icons/svgIcons/js.svg';
import gitSvg from '../../assets/icons/svgIcons/git.svg';
import reactSvg from '../../assets/icons/svgIcons/react.svg';
import tsSvg from '../../assets/icons/svgIcons/typescript.svg';

export const options = {
  autoPlay: true,

  fullScreen: {
    enable: false,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: '#hero',
    events: {
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 40,
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: 'bounce',
    },
    color: {
      value: '#fff',
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: 'percent',
        radius: 0,
      },
      direction: ['top-left', 'bottom-left', 'bottom-right', 'top-right'],
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 0.8,
      outMode: 'bounce',
    },
    number: {
      limit: 0,
      value: 70,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.2,
        maxValue: 0.4,
      },
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: 'none',
        startValue: 'random',
      },
    },

    shape: {
      type: 'image',
      image: [
        {
          src: htmlSvg,
          width: 10,
          height: 10,
        },
        {
          src: jsSvg,
          width: 10,
          height: 10,
        },
        {
          src: gitSvg,
          width: 10,
          height: 10,
        },
        {
          src: reactSvg,
          width: 10,
          height: 10,
        },
        {
          src: tsSvg,
          width: 10,
          height: 10,
        },
      ],
    },

    size: {
      random: {
        enable: true,
        minimumValue: 15,
        maxValue: 30,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: 'none',
        startValue: 'random',
      },
    },

    lineLinked: {
      blink: false,
      color: {
        value: '#5733A8',
      },
      consent: true,
      distance: 100,
      enable: true,
      frequency: 10,
      opacity: 0.4,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
