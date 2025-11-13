import { useState } from 'react'
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-semibold tracking-tight">
              minimal.shop
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <a href="#new" className="hover:text-gray-900 transition-colors">New</a>
              <a href="#men" className="hover:text-gray-900 transition-colors">Men</a>
              <a href="#women" className="hover:text-gray-900 transition-colors">Women</a>
              <a href="#sale" className="hover:text-gray-900 transition-colors">Sale</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products"
                className="w-64 rounded-full border border-gray-200 bg-white/70 px-4 py-2 pl-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <button aria-label="Account" className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-gray-700">
              <a href="#new" className="py-2">New</a>
              <a href="#men" className="py-2">Men</a>
              <a href="#women" className="py-2">Women</a>
              <a href="#sale" className="py-2">Sale</a>
              <div className="pt-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products"
                    className="w-full rounded-full border border-gray-200 bg-white px-4 py-2 pl-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
