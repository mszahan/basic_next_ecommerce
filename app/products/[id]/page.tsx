import NotFoundPage from "@/app/not-found"
import { products } from "@/app/product-data"
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = products.find(p => p.id === id)
    if (!product) {
        return <NotFoundPage />
    }
    return (
        <>
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <p>Description: {product.description}</p>
        </>
    )


}