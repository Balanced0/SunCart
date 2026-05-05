import ProductCard from "@/app/components/ProductCard";
import products from "@/data/products.json"
const ProductsPage = () => {
    return (
        <div>
            <div className="container mx-auto px-4 mt-10 mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
                {products.map((product) =>(
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;