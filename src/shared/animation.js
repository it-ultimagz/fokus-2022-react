export const fade = {
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp = {
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

export const fadeInLeft = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const fadeInRight = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const zoomIn = {
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

export const zoomInRotate = {
  enter: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0, rotate: -360 },
};

export const popupBottomRight = {
  enter: { scale: 1, scale: 1, y: 0, x: 0 },
  exit: { scale: 0, scale: 0, y: 50, x: 50 },
};

export const popupBottomLeft = {
  enter: { scale: 1, scale: 1, y: 0, x: 0 },
  exit: { scale: 0, scale: 0, y: 50, x: -50 },
};
