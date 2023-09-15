import { StaticImageData } from "next/image"

export type Product = {
    id:string,
    name:string,
    price:number,
    category:string,
    image: string | StaticImageData
}
export type Pet = {
    _id:string,
    _type:string,
    _rev:string,
    _createdAt:string,
    _updatedAt:string,
    title:string
}

