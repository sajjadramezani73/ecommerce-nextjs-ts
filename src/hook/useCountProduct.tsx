import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const useCountProduct = (productId: number) => {

    const { cart } = useSelector((store: RootState) => store.cart)

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const itemCount = cart.find(item => item.id === productId)?.count || 0
        setCount(itemCount)
    }, [cart]);

    return { count }
}

export default useCountProduct