import ProductCard from './cardProduct'; 

type ProductProps = {params: { slug: string[]}}

async function getData(){
  // const res = await fetch('https://fakestoreapi.com/products');
  const res = await fetch('http://localhost:3000/api/product', {
    cache: "force-cache",
    next: { 
      // revalidate: 30 
      tags: ['products']
    }
  });
  if(!res.ok){
    throw new Error('failed to fetch data!')
  }
  return res.json();
}

export default async function ProductPage(props: ProductProps) {
  const {params} = props;
  const dataProducts = await getData();
  return(
    <div className="flex min-h-screen flex-col gap-4 items-center p-5">
      <h1>{params?.slug ? "Detail Product Page" : "Product Page"}</h1>
      <div className="flex justify-center gap-5 flex-wrap">
        {dataProducts?.data.length > 0 && dataProducts?.data.map((product: any) => (
          <ProductCard 
            key={product.id} 
            title={product.title} 
            price={product.price} 
            category={product.category}
            image={product.image}
          />
        ))}
        {params.slug && (
          <>
            {params.slug.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </>
        )}
      </div>
    </div>
  );
}