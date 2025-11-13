import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <main>
        <Collection />
        <Features />
      </main>
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} minimal.shop — All rights reserved.</p>
            <nav className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
