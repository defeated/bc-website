import imgOmniscient from '../assets/clients/omniscient.png'
import imgDatabox from '../assets/clients/databox.png'
import imgSendoso from '../assets/clients/sendoso.png'
import imgBetterUp from '../assets/clients/betterup.png'
import imgRobin from '../assets/clients/robin.png'

export default function Trust() {
  return (
    <div className="bg-emerald-100/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by innovative brands
        </h2>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Omniscient"
            src={imgOmniscient.src}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-500"
          />

          <img
            alt="Databox"
            src={imgDatabox.src}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-500"
          />

          <img
            alt="Sendoso"
            src={imgSendoso.src}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-500"
          />

          <img
            alt="BetterUp"
            src={imgBetterUp.src}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-500"
          />

          <img
            alt="Robin"
            src={imgRobin.src}
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm/6 text-gray-600 inset-ring inset-ring-gray-900/5">
            <a href="#" className="font-semibold text-pink-600 hover:text-indigo-500">
              <span aria-hidden="true" className="absolute inset-0" />
              Read my case studies
              <span aria-hidden="true">&nbsp;&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
