type DetailProductProps = {params: { slug: string}}

export default function DetailProductPage(props: DetailProductProps) {
  const {params} = props;
  return(
    <div className="flex min-h-screen flex-col gap-4 items-center p-5">
      <h1>Detail Product Page</h1>
      <p>{params.slug}</p>
    </div>
  );
}