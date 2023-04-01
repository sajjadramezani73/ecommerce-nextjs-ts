import Home from "../container/Home"
import products from '../data/products.json'
export default Home

export const getServerSideProps = async () => {
  return {
    props: {
      products: products
    }
  }
}
