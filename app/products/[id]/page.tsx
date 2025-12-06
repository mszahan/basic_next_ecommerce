import { products } from "@/app/product-data"
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = products.find(p => p.id === id)
    return (
        <>
            <h1>{product?.name}</h1>
            <p>${product?.price}</p>
            <p>Description: {product?.description}</p>
        </>
    )


}