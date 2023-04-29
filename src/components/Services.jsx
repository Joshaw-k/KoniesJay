import React from 'react'

// services data
const services = [
  {
    name: 'Software Development',
    desc: 'Taking responsibility in the development and maintenance of software applications, and work closely with other professionals, including project managers, designers, and quality assurance testers, to ensure the success of software projects.'
  },
  {
    name: 'Web Design',
    desc: 'I create the visual and aesthetic components of websites, and work closely with clients to understand their needs and create designs that reflect their brand and message.'
  },
  {
    name: 'Web3 Development',
    desc: 'I like building user interfaces (UI) for decentralized applications (dApps) using web3 technologies, using a javascript framework like React, and others to create responsive, intuitive, and user-friendly interfaces.'
  },
]

const Services = () => {
  return (
    <section className="section lg:mb-52" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <div
            className="flex-1 mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 1 year of experience
            </h3>
            <button className="btn btn-sm"><a  href="https://github.com/Joshaw-k" target="_blank">See my work</a></button>
          </div>
          {/* services */}
          <div
            className="flex-1"
          >
            {/* services list */}
            {services.map((service, index) => {
              const { name, desc } = service
              return (
                <div
                  key={index}
                  className="border-b border-white/20 mb-[38px] flex pb-4"
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 text-accent">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">{desc}</p>
                  </div>
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
