import imgTestimonial from '../assets/da.jpg'

export default function Contact() {
  return (
    <div id="pg-contact" className="relative isolate bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <p className="text-base/7 font-semibold text-pink-700">
          Get in touch
        </p>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Let’s get planning
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Need help with one of these services, or want to scope out a special
          project not listed above? Fill out this form for your free discovery
          call.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">

          {/*<!-- Calendly inline widget begin -->*/}
          <div className="calendly-inline-widget lg:flex-auto h-[700px]" data-url="https://calendly.com/belyndacianci/discovery-call?hide_event_type_details=1&hide_gdpr_banner=1"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          {/*<!-- Calendly inline widget end -->*/}

          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <figure>
              <blockquote className="text-sm/relaxed text-gray-900">
                <p>
                  “Working with Belynda has been a godsend. She's easily the best freelancer I've had the pleasure of working with with her flexible, eager to learn, and go-getter attitude. Belynda built out the blog and SEO presence for multiple tech startups, brand and thought leadership content creation, customer interviews, event recaps, long-form guides and templates, landing page copy, sales enablement, the list goes on.
                  <br></br>
                  <br></br>
                  Without hesitation she took on whatever projects came her way and executed flawlessly. She's an incredibly skilled and thoughtful writer who brings expertise and personality to every draft. She knows what attributes make for a compelling story while prioritizing conversion paths across a site. Belynda made me look not just good at my job, but great, and I can never thank her enough for that!”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  alt=""
                  src={imgTestimonial.src}
                  className="size-12 flex-none rounded-full bg-gray-50"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">Danielle A.</div>
                  <div className="text-sm/6 text-gray-600">Marketing Manager</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
