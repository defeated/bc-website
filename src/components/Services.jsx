import { PencilSquareIcon, ChatBubbleBottomCenterTextIcon, FunnelIcon, MapPinIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Blog posts & sponsored content',
    description: 'Steady content tailored to your brand voice. Share your expertise, build product awareness, and convert.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Lead-generation Assets',
    description: 'Reports, white papers, checklists, and other downloadable assets that help close deals.',
    icon: FunnelIcon,
  },
  {
    name: 'Landing Pages',
    description: 'Optimized, conversion-focused pages that stuff the pipeline with your most likely buyers.',
    icon: MapPinIcon,
  },
  {
    name: 'Case Studies',
    description: 'Customer success stories that make your brand the hero and build rapport with your readers.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export default function Services() {
  return (
    <div id="pg-services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-pink-700">Services</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to accelerate your time-to-audience
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            B2B and software leaders turn to me to refine and expand their content libraries with high-performance assets that convert.
            I create engaging content with personality and ROI that keeps delivering value long after you hit “publish.”
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-teal-500/50">
                    <feature.icon aria-hidden="true" className="size-6 text-teal-700" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
