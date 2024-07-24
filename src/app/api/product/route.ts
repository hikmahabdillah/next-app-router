import {NextRequest, NextResponse} from "next/server";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export async function GET(request: NextRequest){
  const {searchParams} = new URL(request.url); //get id from params
  const id = searchParams.get('id');
  const dataProducts: Product[] = [{
    id: 1,
    name: 'cukimai',
    category: 'clothes',
    price: 200
  },
  {id: 2,
  name: 'huahahah',
  category: 'shoes',
  price: 100
  }
]

  if(id){
    const detailProduct: Product | undefined = dataProducts.find((item: Product) => item.id === Number(id));
    if(detailProduct){
      return NextResponse.json({status: 200, message: 'Success', data : detailProduct});
    }
    return NextResponse.json({status: 404, message: 'Not Found', data : {}});
  }else{
    return NextResponse.json({status: 200, message: 'Success', data : dataProducts});
  }
}