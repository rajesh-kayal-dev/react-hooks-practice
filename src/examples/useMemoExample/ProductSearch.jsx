import React, { useMemo, useState } from 'react'

const ProductSearch = () => {

    const [search, setSearch] = useState('')

    const products = [
        "Laptop",
        "Phone",
        "Tablet",
        "Monitor",
        "Keyboard",
        "Mouse"
    ];

    const filteredProducts = useMemo(() => {
        return products.filter(product =>
            product.toLowerCase().includes(search.toLowerCase())
        )

    }, [search, products])


    return (
        <div>
            <h2>Product Search
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                />

                <ul>
                    {filteredProducts.map((product, index) => (
                        <li key={index}>{product}</li>
                    ))}
                </ul>

            </h2>
        </div>
    )
}

export default ProductSearch