function createCounterTs(n:number): () => number {
    let count = n;

    return function () {
        const currenteValue = count;
        count ++;
        return currenteValue;
    };
}

const counters = createCounterTs(10);
counters()
counters