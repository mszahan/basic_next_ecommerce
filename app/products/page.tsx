import { products } from "../product-data"
import ProductList from "../ProductList"

export default function ProductsPage() {
    return (
        <div>
            <h1>Products</h1>
            <ProductList products={products} />
        </div>
    )


}