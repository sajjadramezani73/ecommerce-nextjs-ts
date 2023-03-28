import Home from "../container/Home"
import { getProducts } from "../services/queries"
export default Home

export const getServerSideProps = async () => {
  const products = await getProducts().then(res => res).catch(err => err.response)
  return {
    props: {
      products: products
    }
  }
}
