import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Image from "./Image";

const Product = ( { product, addProduct } ) => {

    const [isOutOfStock, setIsOutOfStock] = useState(false);

    useEffect(() => {
        setIsOutOfStock(false);
    }, [product]);

    return (
        <div
            id={product.id}
            key={product.id}
            className="position-relative border p-4 rounded shadow cursor-pointer"
        >
            {isOutOfStock && (
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50 d-flex align-items-end justify-content-center pb-5"
                    style={{ zIndex: 10 }}
                >
                    <span className="text-white" style={{ fontSize: "1.75rem" }}>
                        Out of Stock
                    </span>
                </div>
            )}            
            <div className="" key={product.id}>
                <Image
                    url={product.image}
                    alt="Card"
                    style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                />
                <div className="pb-2">
                    <h3>
                        ${ product.price }
                    </h3>
                </div>                
                <div className="d-flex flex-column flex-grow-1">
                    <h5>
                        { product.title.substring(0, 25) }...
                    </h5>
                    <p style={{ minHeight: '4.5rem' }}>
                        { product.description.substring(0, 90) }...
                    </p>
                </div>
                {!isOutOfStock && (
                    <div>
                        <button
                            className="btn btn-dark m-1 d-flex justify-content-center align-items-center gap-2 mx-auto"
                            onClick={() => {
                                toast.success("Added to cart");
                                addProduct(product);
                            }}
                        >
                            <FaShoppingCart size={14} />
                            Add
                        </button>
                    </div>
                )}
            </div>
            {!isOutOfStock && (
                <div className="position-absolute top-0 end-0 p-2" style={{ zIndex: 30 }}>
                    <div
                        style={{
                            backgroundColor: 'transparent',
                            padding: '10px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Add transition for box-shadow
                            borderRadius: '50%', // Make it circular
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
                            // Hover styles
                            '&:hover': {
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
                                transform: 'scale(1.05)' // Slight scale up on hover
                            }
                        }}
                    >
                        <FaHeart
                            size={24}
                            style={{
                                color: '#555',
                                transition: 'color 0.3s ease'
                            }}
                        />
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Product;

