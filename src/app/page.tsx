import Feature from "@/views/Feature";
import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import Promotion from "@/views/Promotion";
import Subscribe from "@/views/Subscribe";
import { createClient } from "next-sanity";
import { Pet } from "@/utils/types";
const client = createClient({
  projectId: "j966aeqv",
  dataset: "production",
  apiVersion: "2023-01-13",
  useCdn: false,
});

export default async function Home() {
  const products = await client.fetch(`*[_type == "products"]`);

  return (
    <>
      {/* <h2>pets</h2>
      {pets.length > 0 && (
        <ul>
          {pets.map((pet: Pet) => (
            <li key={pet._id}>{pet?.title}</li>
          ))}
        </ul>
      )}
      {!(pets.length > 0) && <p>No pets to show</p>}
      {pets.length > 0 && (
        <div>
          <pre>{JSON.stringify(pets, null, 2)}</pre>
        </div>
      )}
      {!(pets.length > 0) && (
        <div>
          <div>¯\_(ツ)_/¯</div>
          <p>
            Your data will show up here when you've configured everything
            correctly
          </p>
        </div>
      )} */}
      {products.length > 0 && (
        <div>
          <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
      )}
      <Hero />
      <Promotion />
      <ProductList />
      <Feature />
      <Subscribe />
    </>
  );
}
