import Feature from "@/views/Feature";
import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import Promotion from "@/views/Promotion";
import Subscribe from "@/views/Subscribe";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotion />
      <ProductList />
      <Feature />
      <Subscribe />
    </>
  );
}
