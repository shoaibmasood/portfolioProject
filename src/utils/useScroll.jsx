import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = (thresh = 0.4) => {
  const controls = useAnimation();
  const [elementref, view] = useInView({ threshold: thresh });

  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

  return [elementref, controls];
};
