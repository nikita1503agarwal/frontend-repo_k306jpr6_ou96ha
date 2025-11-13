import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Essential Tee',
    color: 'Soft White',
    price: 28,
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Relaxed Hoodie',
    color: 'Fog Gray',
    price: 58,
    image: 'https://images.unsplash.com/photo-1545431633-9f8446c1b08a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Minimal Sneakers',
    color: 'Chalk',
    price: 84,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Everyday Tote',
    color: 'Sand',
    price: 42,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Slim Denim',
    color: 'Rinse',
    price: 72,
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Classic Cap',
    color: 'Matte Black',
    price: 22,
    image: 'https://images.unsplash.com/photo-1618887397796-2a8e13bfb0d1?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Collection() {
  return (
    <section id="collection" className="py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
            New essentials
          </h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
