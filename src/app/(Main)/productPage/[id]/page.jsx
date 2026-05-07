import products from "@/data/products.json";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const ProductPage = async({ params }) => {
    const {id} = await params;
  const product = products.find((p) => p.id === Number(id));
  return (
    <div className="container mx-auto px-4">
       <Link href="/products"><h3 className="text-gray-400 flex gap-2 items-center mt-10 mb-4"><FaArrowLeftLong /> Back to Products</h3></Link> 
      <div className="mb-20">
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure className="lg:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 lg:h-full object-cover"
            />
          </figure>
          <div className="lg:w-1/2 p-4 lg:p-8 flex flex-col gap-3">
            <div className="badge badge-soft badge-success">{product.category}</div>
            <h2 className="card-title text-3xl font-extrabold">{product.name}</h2>
            <p className="text-2xl text-gray-500 font-medium">{product.brand}</p>
            <p className="flex gap-2 items-center mb-6">{product.rating} <FaStar /></p>
            <p className="text-3xl text-orange-500 font-extrabold mb-4">${product.price}</p>
            <p className="text-xl text-gray-500 font-extrabold mb-4">Stock: {product.stock}</p>
            <p className="text-xl text-gray-500 font-medium">{product.description}</p>
            <div className="flex flex-col lg:flex-row gap-4 mt-auto">
                <button className="btn btn-lg bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-extrabold rounded-xl flex-3">Add to Cart</button>
                <button className="btn btn-lg rounded-xl flex-1">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
