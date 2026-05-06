import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductCard = ({product}) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="text-gray-500 flex items-center gap-2">{product.rating} <FaStar /></p>
          <p className="text-orange-500 font-extrabold text-2xl">${product.price}</p>
          <Link href={`/productPage/${product.id}`}><button className="btn bg-gradient-to-br from-orange-500 to-yellow-400 text-white rounded-xl w-full">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
