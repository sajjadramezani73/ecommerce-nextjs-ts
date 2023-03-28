import { FC } from 'react';
import ProductItem from '../components/propduct';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}
interface IRating {
  rate: number;
  count: number;
}

export interface IProducts {
  products: IProduct[]
}

const Home: FC<IProducts> = ({ products }) => {

  console.log(products)
  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-4'>
        {products?.map(item => {
          return <ProductItem key={item.id} product={item} />
        })}
      </div>
    </>
  )
}

export default Home