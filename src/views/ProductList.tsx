import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/mock";
import { StaticImageData } from "next/image";
export default function ProductList() {
  return (
    <div className="mt-16">
      <p className="text-center text-xs text-blue-600 font-bold uppercase">
        Products
      </p>
      <h2 className="capitalize scroll-m-20 text-center py-2 text-4xl font-bold tracking-tight transition-colors first:mt-0">
        Check What We Have
      </h2>
      <div className="flex justify-evenly mt-8">
        {products.slice(0, 3).map((p) => (
          <ProductCard
            key={p.id}
            title={p.name}
            price={p.price}
            photo={p.image as StaticImageData}
            id={""}
          />
        ))}

        {/* <ProductCard title="Shirt BLack" price={100} photo={p1} />
        <ProductCard title="Shirt White" price={100} photo={p1} /> */}
      </div>
    </div>
  );
}
