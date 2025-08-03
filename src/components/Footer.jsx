import imgLogo from '../assets/logo/small.png'

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nhfreelancewriter/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-10" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          &copy; Belynda Cianci LLC. All rights reserved.<br />
        </p>
      </div>

      <a href="/#" className="block mx-auto mb-4 text-center">
        <img
          alt="Belynda Cianci LLC."
          src={imgLogo.src}
          className="h-24 w-auto inline-block"
        />
      </a>
    </footer>
  )
}
