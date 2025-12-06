'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { products } from "../product-data"

export default function CartPage() {
    const [cartIds, setCartIds] = useState(['123', '345'])
    const cartProducts = cartIds.map(id => products.find(p => p.id === id)!)

    const totalPrice = cartProducts.reduce((sum, product) => sum + product.price, 0)

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">Shopping Cart</h1>

            {cartIds.length === 0 ? (
                <div className="text-center py-12">
                   <p className="text-gray-500 text-lg">Your cart is empty.</p>
                   <Link href="/products" className="text-blue-600 hover:text-blue-500 font-medium mt-4 inline-block">
                       Continue Shopping &rarr;
                   </Link>
                </div>
            ) : (
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <ul role="list" className="divide-y divide-gray-200">
                        {cartProducts.map(product => (
                            <li key={product.id} className="p-6 flex items-center">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image
                                        src={"/" + product.imageUrl}
                                        alt={product.name}
                                        width={96}
                                        height={96}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="ml-4 flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">
                                            <Link href={'/products/' + product.id} className="hover:text-blue-600">
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{product.description}</p>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-6 text-right">
                                        <p className="text-lg font-medium text-gray-900">${product.price}</p>
                                        <button 
                                            onClick={() => setCartIds(prev => prev.filter(id => id !== product.id))}
                                            className="text-sm font-medium text-red-600 hover:text-red-500 mt-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${totalPrice}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <Link
                                href="/checkout"
                                className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                            >
                                Checkout
                            </Link>
                        </div>
                         <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or{' '}
                              <Link href="/products" className="font-medium text-blue-600 hover:text-blue-500">
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </Link>
                            </p>
                          </div>
                    </div>
                </div>
            )}
        </div>
    )
}