import React from 'react'


const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together{' '}
              </h2>
            </div>
          </div>
          {/* form */}
          <form
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
          >
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <input
              type="text"
              placeholder="Your email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />
            <textarea
              placeholder="Your message"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            ></textarea>
            <button
              className="btn btn-lg"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
