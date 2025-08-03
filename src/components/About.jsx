import imgMe from '../assets/me.jpg'

export default function About() {
  return (
    <div id="pg-about" className="relative bg-teal0700/5">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt="Photograph of Belynda Cianci"
              src={imgMe.src}
              className="absolute inset-0 size-full bg-gray-50 object-cover object-[75%_25%]"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base/7 font-semibold text-pink-700">
              A little about me
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Hi! I'm Belynda
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              With over 8 years of experience in content marketing, I specialize in creating compelling narratives that connect brands with their audiences. My expertise spans across various industries, from tech startups to established enterprises.
            </p>
            <p className="mt-6 max-w-xl text-base/7 text-gray-600 lg:max-w-none">
              I believe great content isn't just about words—it's about understanding your audience, solving their problems, and building meaningful relationships that drive business growth.
            </p>
            <p className="mt-6 max-w-xl text-base/7 text-gray-600 lg:max-w-none">
              I give clients in-house experience and expertise without the costs and time investment of hiring a full-time writer.
            </p>
            <p className="mt-6 max-w-xl text-base/7 text-gray-600 lg:max-w-none">
                <a
                  href="#pg-services"
                  className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Services you need
                  &nbsp;
                  <span aria-hidden="true">&rarr;</span>
                </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
