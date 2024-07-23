type DetailProductProps = {params: { slug: string[]}}

export default function ProductPage(props: DetailProductProps) {
  const {params} = props;
  return(
    <div className="flex min-h-screen flex-col gap-4 items-center p-5">
      <h1>{params?.slug ? "Detail Product Page" : "Product Page"}</h1>
      {params.slug && (
        <>
          {params.slug.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </>
      )}
    </div>
  );
}