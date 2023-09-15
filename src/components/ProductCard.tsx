import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProductCard({
  title,
  price,
  photo,
  id,
}: {
  title: string;
  price: number;
  photo: StaticImageData;
  id: string;
}) {
  return (
    <div>
      <Link href={`/products/${id}`}>
        <Image src={photo} alt="productImg" />
      </Link>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="font-bold text-sm">${price}</p>
    </div>
  );
}
