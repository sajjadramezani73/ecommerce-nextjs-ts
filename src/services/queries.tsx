import service from "./Api";

export const getProducts = async () => {
    const res = await service.get('/products')
    return res?.data;
}