import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {
  headerAnimation,
  headerImageAnimation,
  headerWaveAnimation,
} from '../utils/Animations';
import '../index.css';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" flex items-end title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `Hi, I'm Shoaib<br className="hidden lg:inline-block" /> Front End Software Engineer `
                  )
                  .start();
              }}
            />

            <motion.div
              className="about-wave"
              variants={headerWaveAnimation}
              transition={{ delay: 7 }}
            >
              👋
            </motion.div>
          </h1>
          <motion.p
            className="mb-8 leading-relaxed"
            variants={headerAnimation}
            transition={{ delay: 5, type: 'tween', duration: 0.5 }}
          >
            Producing high quality responsive websites and love to build amazing
            apps & Products.
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={headerAnimation}
            transition={{ delay: 5, type: 'tween', duration: 1 }}
          >
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </motion.div>
        </div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          variants={headerImageAnimation}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </motion.div>
      </div>
    </section>
  );
}
