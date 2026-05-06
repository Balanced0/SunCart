"use client"
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { useRouter } from 'next/navigation'

const ProductCard = ({product}) => {
  const { data: session } = authClient.useSession()

  const router = useRouter()

  const handleViewDetails = () =>{
    if(session){
      router.push(`/productPage/${product.id}`)
    }
    else{
      router.push('/login')
    }
  }
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
          <button onClick={handleViewDetails} className="btn bg-gradient-to-br from-orange-500 to-yellow-400 text-white rounded-xl w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
