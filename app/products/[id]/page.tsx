import NotFoundPage from "@/app/not-found"
import { products } from "@/app/product-data"
import Image from "next/image"
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = products.find(p => p.id === id)
    if (!product) {
        return <NotFoundPage />
    }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                        src={"/" + product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-4">{product.name}</h1>
                    <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
                    <div className="prose prose-lg text-gray-500 mb-8">
                        <p>{product.description}</p>
                    </div>
                    <button className="w-full md:w-auto bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )


}