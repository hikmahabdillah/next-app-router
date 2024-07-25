import Image from 'next/image';
import React from 'react';

const ProductCard: React.FC = ({key, title, price, description, category, image}) => {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" key={key}>
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <Image
          src={image}
          width={500}
          height={500}
          className="h-full w-full object-contain"
          alt="Product"
        />
      </div>
      <div className="p-6">
        <div>
          <p className="text-xl block font-sans font-medium leading-relaxed text-blue-gray-900 antialiased truncate">
            {title}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 opacity-75 text-ellipsis line-clamp-2">
          {description.slice(0, 130)}...
        </p>
      </div>
      <div className="p-6 pt-0 flex items-center justify-between">
          <p className="block font-sans text-2xl font-bold leading-relaxed text-blue-gray-900 antialiased">
            ${price}
          </p>
        <button
          className="block select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
