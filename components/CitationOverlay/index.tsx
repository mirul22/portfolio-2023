import { motion } from 'framer-motion';
import React, { FC } from 'react';

import { Container } from '../Container';
import { Props } from './props';

const textVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const CitationOverlay: FC<Props> = ({ citation }: Props) => {
  const phrases = [
    "Let's code like there's no tomorrow and build the future together!",
    "Want to create something amazing? Let's put our heads together and make it happen.",
    "Let's make some magic happen with my programming skills - I'll bring the wand!",
    "Don't just dream it - let's smash through the walls of possibility and make it a reality.",
    'Looking for a programming superhero? Look no further!',
    'With my skills and your vision, we can make the tech world quake in its boots!',
    "Ready to turn your tech dreams into a blockbuster hit? Let's make it happen!",
    "Let's light up the coding universe with my skills and passion for excellence.",
    "Looking for a programming ninja to help you conquer the competition? I'm your sensei!",
    "Let's transform your ideas into a stunning reality - fasten your seatbelts, we're in for a wild ride!",
  ];

  const randomIndex = Math.floor(Math.random() * phrases.length);

  return (
    <motion.div
      className="absolute flex items-center justify-center w-full"
      variants={{
        initial: {
          opacity: 1,
          height: '100%',
        },
        invisible: {
          opacity: 0,
          height: 0,
        },
      }}
      transition={{
        duration: 0.6,
      }}
      initial="initial"
      animate={citation ? 'initial' : 'invisible'}
    >
      <Container>
        <motion.p
          className="mt-4 mb-2 text-xl font-medium leading-none md:text-2xl dark:text-white-900 text-black-900 md:my-0"
          variants={textVariants}
          initial="initial"
          animate="visible"
          transition={{
            delay: 1.0,
            duration: 2.0,
          }}
        >
          {phrases[randomIndex]}
        </motion.p>
      </Container>
    </motion.div>
  );
};
