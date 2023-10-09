
function useDebounce(cb, delay=2000){
    let timerid

    return (...args) => {
        console.log('logging debounce args',...args)
        clearInterval(timerid)
        timerid = setTimeout(() => {
            cb(...args)
        },delay)
    }

}
export default useDebounce