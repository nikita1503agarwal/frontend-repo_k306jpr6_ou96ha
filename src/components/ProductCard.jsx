export default function ProductCard({ product }) {
  return (
    <a href="#" className="group block">
      <div className="aspect-square w-full overflow-hidden rounded-xl border border-gray-100 bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-semibold text-gray-900">${product.price}</p>
      </div>
    </a>
  )
}
