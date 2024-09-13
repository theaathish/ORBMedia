'use client'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Services', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
]

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ORB Media</span>
              <img
                alt=""
                src="logo.png"
                className="h-8 w-auto"
              />
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/contact">
              <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">ORB Media</span>
                <img
                  alt=""
                  src="logo.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link to="/contact">
                    <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to ORB Media
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Helping You Expand Your Product and Service Presence
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/contact">
                <button className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Services Overview */}
      <section className="services py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <p className="text-lg mb-12">We offer a range of services to boost your reach:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="service bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p>Enhance your online presence with our targeted digital marketing strategies.</p>
            </div>
            <div className="service bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">SEO Optimization</h3>
              <p>Improve your website’s visibility on search engines and attract more traffic.</p>
            </div>
            <div className="service bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Social Media Management</h3>
              <p>Engage with your audience effectively through our social media strategies.</p>
            </div>
            <div className="service bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Content Creation</h3>
              <p>Create compelling content that resonates with your target audience.</p>
            </div>
            <div className="service bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Ad Campaigns</h3>
              <p>Run successful ad campaigns to boost your brand’s reach and ROI.</p>
            </div>
            <div className="service bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Consulting</h3>
              <p>Get expert advice on how to optimize your marketing strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ORB Media. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://instagram.com/insta_orbmedia" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
