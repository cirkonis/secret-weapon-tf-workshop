const footerNavigation = {
  main: [
    { name: 'Computas Denmark', href: 'https://computas.com/dk/' },
    { name: 'Compendium Blogs', href: 'https://medium.com/compendium' },
    { name: 'Work With us', href: 'https://computas.com/dk/job/' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/computas-danmark/',
      icon: (props: any) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
      ),
    },
  ],
}

export default function Footer() {
  return <>
    {/* Footer section */}
    <footer className="mt-24 bg-gray-900 sm:mt-12">
      <div className="mx-auto max-w-md overflow-hidden py-12 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {footerNavigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} target='_blank' rel="noreferrer" className="text-base text-gray-400 hover:text-gray-300">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {footerNavigation.social.map((item) => (
            <a key={item.name} href={item.href} target='_blank' rel="noreferrer" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022 Computas DK &#x1F1E9;&#x1F1F0;
        </p>
      </div>
    </footer>
  </>
}