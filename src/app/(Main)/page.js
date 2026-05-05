import Image from "next/image";
import Hero from "../components/Hero";
import SummerCare from "../components/SummerCare";
import TopBrands from "../components/TopBrands";
import ProductCard from "../components/ProductCard";
import products from "@/data/products.json";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <h3 className="text-center mb-4 pt-10 font-extrabold text-3xl">
          🔥 Popular Products
        </h3>
        <p className="text-center font-medium text-xl text-gray-500 mb-12">
          Trending summer must-haves
        </p>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>

        <button className="btn btn-lg rounded-xl mb-20"><Link href="/products">View All Products</Link></button>
      </div>
      <SummerCare></SummerCare>
      <TopBrands></TopBrands>
    </div>
  );
}
