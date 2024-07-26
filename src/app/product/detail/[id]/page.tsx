import { getData } from "@/services/products";
import ProductCard from "../../cardProduct";

export default async function DetailProductPage(props: any) {
  const {params} = props;
  const product = await getData(`http://localhost:3000/api/product/?id=${params.id}`);

  return (
    <div className="container my-10 flex justify-center items-center">
       <ProductCard 
            isDetail={true}
            id={product.data.id} 
            title={product.data.title} 
            price={product.data.price} 
            category={product.data.category}
            image={product.data.image}
        />
    </div>
  )
}