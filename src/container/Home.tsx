import { FC, useEffect, useState } from 'react';
import VerticalProduct from '../components/propduct/verticalProduct/VerticalProduct';
import VerticalProductShimmer from '../components/propduct/verticalProduct/VerticalProductShimmer';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface IProducts {
  products: IProduct[]
}

const Home: FC<IProducts> = ({ products }) => {

  const [productList, setProductList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductList(products)
      setLoading(false)
    }, 3000);
  }, []);

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-4'>
        {loading ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <VerticalProductShimmer key={item} />)
        ) : (
          productList?.map(item => {
            return <VerticalProduct key={item.id} product={item} />
          })
        )}
      </div>
    </>
  )
}

export default Home