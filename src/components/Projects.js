import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { cardAnimations, projectTextAnimation } from '../utils/Animations';
import { useScroll } from '../utils/useScroll';

export default function Projects() {
  const [elementref, controls] = useScroll();
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <motion.div
          className="flex flex-col w-full mb-20"
          variants={projectTextAnimation}
          transition={{ duration: 2, delay: 1 }}
        >
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These web apps are built by using latest industry trends and
            technologies like React, GitHub Actions, Surge and Material UI.
          </p>
        </motion.div>
        <div className="flex flex-wrap -m-4 " ref={elementref}>
          {projects.map((project, idx) => (
            <motion.a
              href={project.link}
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-100 p-4 "
              variants={cardAnimations(idx)}
              animate={controls}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg  "
                  id={idx}
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full sm:h-44 h-full overflow-auto scrollbar-hide border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
