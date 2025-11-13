import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-gray-900/90 text-white px-3 py-1 text-xs tracking-wide mb-4">
            Minimal E‑commerce
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Shop the new essential collection
          </h1>
          <p className="mt-4 text-gray-600">
            Everyday basics with a modern, minimalist aesthetic. Designed for comfort, crafted to last.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#collection" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2 text-sm hover:bg-black/90 transition-colors">
              Shop now
            </a>
            <a href="#categories" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              Explore categories
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
