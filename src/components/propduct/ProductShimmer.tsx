
const ProductItemShimmer = () => {

    return (
        <div className='border rounded p-4 flex flex-col justify-between'>
            <div>
                <div className="aspect-[3/4] w-full rounded bg-gray-200 animate-pulse"></div>
                <p className='h-5 mt-4 rounded bg-gray-200 animate-pulse'></p>
                <p className='h-5 mt-1 rounded bg-gray-200 animate-pulse'></p>
            </div>
            <div className="flex items-center pt-2">
                <p className='ml-1 w-16 h-5 rounded bg-gray-200 animate-pulse'></p>
                <p className='w-20 h-5 rounded bg-gray-200 animate-pulse'></p>
            </div>
            <div className="mt-4">
                <button className='w-full h-[31px] bg-gray-200 animate-pulse rounded pt-1.5 pb-1'></button>
            </div>
        </div>
    )
}

export default ProductItemShimmer