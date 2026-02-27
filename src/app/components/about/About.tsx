const About = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[50px] py-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="flex flex-col justify-between gap-8 lg:w-[60%]">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">
              About Company
            </h2>
            <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              At Apex Architechs, we believe that architecture is more than just
              buildings; it's about creating environments that enhance human
              experience.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-[#f2f2f2ae] rounded-full px-5 py-1 border border-gray-400 text-sm">
              <b>CNBC</b>
            </button>
            <button className="bg-[#f2f2f2ae] rounded-full px-5 py-1 border border-gray-400 text-sm">
              office<b>RND</b>
            </button>
            <button className="bg-[#f2f2f2ae] rounded-full px-5 py-1 border border-gray-400 text-sm">
              <b>ARC</b>ONIC
            </button>
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-8 text-center w-full lg:w-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">25+</h2>
            <p className="text-sm sm:text-base">
              Years Of Experience in Architecture & Design
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">500+</h2>
            <p className="text-sm sm:text-base">
              Projects Successfully Completed
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">98%</h2>
            <p className="text-sm sm:text-base">
              Client Retention Rate
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">15+</h2>
            <p className="text-sm sm:text-base">
              Countries With Our Projects
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About