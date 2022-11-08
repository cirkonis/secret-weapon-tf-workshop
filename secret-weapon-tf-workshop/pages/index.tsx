import Footer from "../components/Footer"
import Hero from "../components/Hero"

export default function SecretWeapon() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <Hero></Hero>

        {/* Testimonial/stats section */}
        <div className="relative mt-20">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
            <div className="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                {/* Testimonial card*/}
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-rose-500 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90" />
                  <div className="relative px-8">
                    <div>
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                        alt="Workcation"
                      />
                    </div>
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-rose-400"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                          Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat,
                          diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-rose-200">Sarah Williams, CEO at Workcation</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  On a mission to empower teams
                </h2>
                <div className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">
                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                    tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus
                    morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
                  </p>
                  <p className="text-base leading-7">
                    Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                    pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin
                    tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu
                    vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  </p>
                  <p className="text-base leading-7">
                    Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                    velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                    egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>



        {/* CTA section */}
        <div className="relative mt-24 sm:mt-32 sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
            <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-rose-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-rose-400 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-rose-600 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Get notified when we&rsquo;re launching.
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-rose-100">
                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque
                    tristique pellentesque.
                  </p>
                </div>
                <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer section */}
        <Footer></Footer>
    </div>
  )
}