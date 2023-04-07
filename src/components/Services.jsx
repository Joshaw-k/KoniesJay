import React from 'react'
// icon
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

// services data
const services = [
  {
    name: 'Web Designer',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consectetur fuga iste dolore aut explicabo aperiam recusandae corrupti perspiciatis dolores?',
    link: 'Learn more',
  },
  {
    name: 'Software Developer',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consectetur fuga iste dolore aut explicabo aperiam recusandae corrupti perspiciatis dolores?',
    link: 'Learn more',
  },
  {
    name: 'Web3 Developer',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consectetur fuga iste dolore aut explicabo aperiam recusandae corrupti perspiciatis dolores?',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section className="section lg:mb-52" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 1 year of experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            {services.map((service, index) => {
              const { name, desc, link } = service
              return (
                <div
                  key={index}
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">{desc}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
