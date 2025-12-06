import { products } from "../product-data"
import ProductList from "../ProductList"

export default function ProductsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Our Collection</h1>
            <ProductList products={products} />
        </div>
    )


}