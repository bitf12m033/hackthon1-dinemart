import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";

const getProductById = (id: string) => {
  return products.filter((p) => p.id === id);
};
const sizes = ["xs", "s", "m", "l", "xl"];
export default function Page({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const pic = product[0].image;
  return (
    <>
      <div className="flex justify-around mt-8 ">
        <div className="flex flex-col items-center gap-y-4">
          <Image width={150} height={150} src={pic} alt="productImg" />
          <Image width={150} height={150} src={pic} alt="1b" />
          <Image width={150} height={150} src={pic} alt="1c" />
          <Image width={150} height={150} src={pic} alt="1d" />
        </div>
        <div className="p-12 left-0">
          <Image
            className=""
            height={500}
            width={600}
            src={pic}
            alt="productImg"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1>Cameryn Sash Tie Dress</h1>
            <p className="text-gray-400 font-bold">Dress</p>
          </div>
          <p className="text-black font-bold text-base">SELECT SIZE</p>
          <div className="flex gap-x-3">
            {sizes.map((s) => {
              return (
                <Button
                  key={s}
                  className="bg-gray-200 h-10 w-10 rounded-full font-semibold uppercase hover:bg-slate-300 duration-300 shadow-2xl"
                >
                  {s}
                </Button>
              );
            })}
          </div>
          <div className="flex  justify-between items-center">
            <h3 className="font-bold text-lg">Quantity:</h3>
            <div className="flex justify-center items-center gap-4">
              <Button className="bg-gray-100 h-10 w-10 rounded-full font-semibold uppercase hover:bg-slate-300 duration-300 shadow-2xl">
                -
              </Button>
              <span>1</span>
              <Button className="bg-gray-100 h-10 w-10 rounded-full font-semibold uppercase hover:bg-slate-300 duration-300 shadow-2xl">
                +
              </Button>
            </div>
          </div>
          <div className="flex gap-4">
            <AddToCart />
            <span className="font-bold text-3xl">
              ${product[0].price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
