import { Truck, ShieldCheck, RefreshCcw } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Truck, title: 'Fast shipping', desc: 'Free on orders over $50' },
    { icon: ShieldCheck, title: 'Secure checkout', desc: 'Protected payments' },
    { icon: RefreshCcw, title: 'Easy returns', desc: '30-day return policy' },
  ]

  return (
    <section className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
              <div className="rounded-full bg-gray-50 p-3 text-gray-800">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{title}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
