import React from 'react'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
// img
import Img1 from '../../dist/assets/Capture_1.png'
import Img2 from '../assets/Capture_2.png'
import Img3 from '../assets/Capture_3.png'
import Img4 from '../assets/Capture_4.png'
import Img5 from '../assets/Capture_5.png'
import Img6 from '../assets/Capture_6.png'
import Img7 from '../assets/Capture_7.png'
import Img8 from '../assets/Capture_8.png'
import Img9 from '../assets/Capture_9.png'
const Work = () => {
  return (
    <>
      <section className="section" id="work">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-10 mb-10">
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
            >
              {/* text */}
              <div>
                <h2 className="h2 leading-tight text-accent">
                  My Latest <br /> Work
                </h2>
                <p className="max-w-sm mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque eligendi totam deleniti exercitationem, quasi
                  consectetur error reprehenderit rem ratione sapiente!
                </p>
                <button className="btn btn-sm">View all projects</button>
              </div>
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-60">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  src={Img1}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:top-20 transition-all duration-500 z-50">
                  <a href="https://furnies.netlify.app/" target="_blank">
                    <span className="text-gradient text-3xl">FurNies</span>
                  </a>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                  <span className="text-white text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores dignissimos sapiente distinctio fugit saepe
                    eligendi.
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex flex-col gap-y-10 justify-between"
            >
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-2/5">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  src={Img2}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:top-16 lg:group-hover:top-20 transition-all duration-500 z-50">
                  <a href="https://jtracker.netlify.app/" target="_blank">
                    <span className="text-gradient  text-3xl">JobsTracker</span>
                  </a>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-3 lg:group-hover:bottom-6 transition-all duration-700 z-50">
                  <span className="text-white text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores dignissimos sapiente distinctio fugit saepe
                    eligendi.
                  </span>
                </div>
              </div>
              {/* image */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl  h-2/5">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  src={Img3}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500"
                />
                {/* pretitle */}
                <div className="absolute -bottom-full left-12 group-hover:top-16 lg:group-hover:top-20 transition-all duration-500 z-50">
                  <a href="https://gittub.netlify.app/" target="_blank">
                    <span className="text-gradient text-3xl">GitTub</span>
                  </a>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-3 lg:group-hover:bottom-6 transition-all duration-700 z-50">
                  <span className="text-white text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores dignissimos sapiente distinctio fugit saepe
                    eligendi.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-y-10">
            <motion.h2
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="h2 leading-tight text-accent text-center"
            >
              Mini Projects
            </motion.h2>
            <div className="flex flex-col gap-y-10">
              <motion.div
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 flex flex-col lg:flex-row gap-x-10 gap-y-10"
              >
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img7}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a
                      href="https://quiz-app-zeta-bay.vercel.app/"
                      target="_blank"
                    >
                      <span className="text-gradient text-2xl">QuizApp</span>
                    </a>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-3 transition-all duration-700 z-50">
                    <span className="text-white text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores dignissimos sapiente distinctio fugit saepe
                      eligendi.
                    </span>
                  </div>
                </div>
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img8}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a href="https://ths-news.vercel.app/" target="_blank">
                      <span className="text-gradient text-2xl">THSNews</span>
                    </a>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-3 transition-all duration-700 z-50">
                    <span className="text-white text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Accusamus, ad quod repudiandae dignissimos recusandae
                      cupiditate.
                    </span>
                  </div>
                </div>
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img9}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a
                      href="https://todo-list-flax-six.vercel.app/"
                      target="_blank"
                    >
                      <span className="text-gradient  text-2xl">TodoList</span>
                    </a>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-3 transition-all duration-700 z-50">
                    <span className="text-white text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores dignissimos sapiente distinctio fugit saepe
                      eligendi.
                    </span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1 flex flex-col lg:flex-row gap-x-10  gap-y-10"
              >
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img5}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a href="https://cocktail-tree.vercel.app/" target="_blank">
                      <span className="text-gradient  text-2xl">
                        CocktailTree
                      </span>
                    </a>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-3 transition-all duration-700 z-50">
                    <span className="text-white text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores dignissimos sapiente distinctio fugit saepe
                      eligendi.
                    </span>
                  </div>
                </div>
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img6}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a
                      href="https://dark-mode-pi-eight.vercel.app/"
                      target="_blank"
                    >
                      <span className="text-gradient  text-2xl">DarkMode</span>
                    </a>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-3 transition-all duration-700 z-50">
                    <span className="text-white text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores dignissimos sapiente distinctio fugit saepe
                      eligendi.
                    </span>
                  </div>
                </div>
                {/* image */}
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  {/* overlay */}
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    src={Img4}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <a href="https://cinemax-phi.vercel.app/" target="_blank">
                      <span className="text-gradient  text-2xl">Cinemax</span>
                    </a>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-3 transition-all duration-700 z-50">
                    <span className="text-white text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores dignissimos sapiente distinctio fugit saepe
                      eligendi.
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Work
