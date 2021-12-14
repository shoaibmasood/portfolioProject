export const headerAnimation = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 1, opacity: 1 },
};

export const headerImageAnimation = {
  hidden: { scale: 2, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export const headerWaveAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const navbarAnimation = {
  hidden: { y: -100 },
  show: { y: 0 },
};

export const cardAnimations = (idx) => {
  return {
    hidden: { opacity: 0, translateX: idx % 2 === 0 ? -100 : +100 },
    show: { opacity: 1, translateX: 0 },
  };
};

export const projectTextAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const skillsIconAnimation = {
  hidden: { rotate: 0, opacity: 0 },
  show: { rotate: 360, opacity: 1 },
};

export const skillsTextAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
