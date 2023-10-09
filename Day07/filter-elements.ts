type FilterFn<T> = (element: T, index?: number, array?: T[]) => boolean;

function filterTs<T>(arr: T[], fn: FilterFn<T>): T[] {
    const filteredArrTs: T[] = [];
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i, arr)) {
            filteredArrTs.push(arr[i]);
        }
    }
    return filteredArrTs
}