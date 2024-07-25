export default function Layout({children, product, analytics}: {children: React.ReactNode, product: React.ReactNode, analytics: React.ReactNode}){
  return (
    <div className="p-5">
      {children}
    <div className="flex justify-center items-center gap-5">
      {product}
      {analytics}
    </div>
    </div>
  )
}