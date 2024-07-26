import ProductCard from "@/app/product/cardProduct";
import Modal from "@/components/Modal";
import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );

  return (
    <Modal>
      <ProductCard
        isDetail={true}
        id={product.data.id}
        title={product.data.title}
        price={product.data.price}
        category={product.data.category}
        image={product.data.image}
      />
    </Modal>
  );
}
