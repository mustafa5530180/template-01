import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900">
                  New arrivals
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900">
                  Best sellers
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900">
                  Recently viewed
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900">
                  Popular this week
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=plant-pots" className="text-gray-600 hover:text-gray-900">
                  Plant pots
                </Link>
              </li>
              <li>
                <Link href="/products?category=ceramics" className="text-gray-600 hover:text-gray-900">
                  Ceramics
                </Link>
              </li>
              <li>
                <Link href="/products?category=tables" className="text-gray-600 hover:text-gray-900">
                  Tables
                </Link>
              </li>
              <li>
                <Link href="/products?category=chairs" className="text-gray-600 hover:text-gray-900">
                  Chairs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Our company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/vacancies" className="text-gray-600 hover:text-gray-900">
                  Vacancies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Sign up for our newsletter and get 10% off your next order.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">© 2023 Avion. All rights reserved.</div>
      </div>
    </footer>
  )
}

