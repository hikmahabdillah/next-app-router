import { NextRequest, NextResponse } from "next/server";
import {retrieveData, retrieveDataById} from "@/lib/firebase/service"
interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url); //get id from params
  const id = searchParams.get("id");
  // const dataProducts: Product[] = [
  //   {
  //     id: 1,
  //     title: "Ultraboost 5x Shoes",
  //     category: "Shoes",
  //     price: 200,
  //     image:
  //       "https://www.adidas.co.id/media/catalog/product/cache/ffbe5d912e2813a20bb27461a01c1e7c/j/i/ji1334_2_footwear_photography_side_lateral_view_grey.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "adidas Sleek Shoes",
  //     category: "Shoes",
  //     price: 100,
  //     image:
  //       "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/h/ih1298_2_footwear_photography_side20lateral20view_grey.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Response Super Shoes",
  //     category: "Shoes",
  //     price: 150,
  //     image:
  //       "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/j/i/ji4317_2_footwear_photography_side20lateral20view_grey.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Response Super Shoes",
  //     category: "Shoes",
  //     price: 150,
  //     image:
  //       "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/j/i/ji4317_2_footwear_photography_side20lateral20view_grey.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "adidas Sleek Shoes",
  //     category: "Shoes",
  //     price: 100,
  //     image:
  //       "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/h/ih1298_2_footwear_photography_side20lateral20view_grey.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "adidas Sleek Shoes",
  //     category: "Shoes",
  //     price: 100,
  //     image:
  //       "https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/h/ih1298_2_footwear_photography_side20lateral20view_grey.jpg",
  //   },
  // ];

  if (id) {
    const detailProduct: Product | undefined = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  } else {

    const products = await retrieveData("products");
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: products,
    });
  }

}
