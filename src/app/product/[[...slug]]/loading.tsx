export default async function Loading() {
  async function getData() {
    const res = await fetch('http://localhost:3000/api/product');
    if (!res.ok) {
      throw new Error('failed to fetch data!')
    }
    return res.json();
  }

  const dataProducts = await getData();
  const skeletonCount = dataProducts.length; // Jumlah skeleton berdasarkan panjang array dataProducts

  const skeletonItems = Array.from({ length: skeletonCount }, (_, index) => (
    <div key={index} className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-4">
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-gray-300 animate-pulse"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-300 animate-pulse rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 animate-pulse rounded-md mb-2"></div>
        <div className="h-4 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      <div className="p-6 pt-0 flex items-center justify-between">
        <div className="h-8 w-24 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="h-8 w-20 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
    </div>
  ));

  return (
     <div className="flex justify-center gap-5 flex-wrap">
      {skeletonItems}
    </div>
  );
}
