
function useNumberSeprator(number: number) {
    return Number((number)).toLocaleString().split(/\s/).join(',')
}
export default useNumberSeprator;