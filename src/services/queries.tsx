import service from "./Api";

export const getIndex = async () => {
    const res = await service.get('/api/application/index')
    return res?.data;
}