import ProductCard from "@/components/ProductCard";
import { products } from "@/utils/mock";
import { StaticImageData } from "next/image";

const filterProducts = (slug: string) => {
  return products.filter((p) => {
    if (slug === "all") {
      return p;
    } else {
      return p.category === slug;
    }
  });
};

export default function Page({ params }: { params: { slug: string } }) {
  const products = filterProducts(params.slug);

  return (
    <>
      <div className="flex justify-evenly mt-8">
        {products.length > 0 ? (
          products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.name}
              price={p.price}
              photo={p.image as StaticImageData}
            />
          ))
        ) : (
          <p>No Product Found</p>
        )}
      </div>
    </>
  );
}
