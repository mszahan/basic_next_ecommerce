import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link
          key={product.id}
          href={"/products/" + product.id}
          className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
        >
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <Image
              src={"/" + product.imageUrl}
              alt={product.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
              {product.name}
            </h2>
            <div className="mt-auto flex items-center justify-between">
              <p className="text-xl font-semibold text-gray-900">
                $ {product.price}
              </p>
              <span className="text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-3 group-hover:translate-x-0">
                View Details →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
