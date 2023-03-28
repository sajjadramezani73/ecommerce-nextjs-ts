import service from "./Api";

export const getProducts = async () => {
    const res = await service.get('https://fakestoreapi.com/products')
    return res?.data;
}