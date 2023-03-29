import { FC } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/propduct';
import { RootState } from '../store/store';

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

  const { cart } = useSelector((store: RootState) => store.cart);

  console.log(cart)
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