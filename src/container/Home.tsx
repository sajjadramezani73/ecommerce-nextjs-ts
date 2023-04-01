import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../components/propduct';
import ProductItemShimmer from '../components/propduct/ProductShimmer';
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

  const { cart, showCart } = useSelector((store: RootState) => store.cart);

  const [productList, setProductList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductList(products)
      setLoading(false)
    }, 3000);
  }, []);

  console.log('openCart', showCart, cart)
  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-4'>
        {loading ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ProductItemShimmer key={item} />)
        ) : (
          productList?.map(item => {
            return <ProductItem key={item.id} product={item} />
          })
        )}
      </div>
    </>
  )
}

export default Home