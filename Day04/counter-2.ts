type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounterTS(init: number): ReturnObj {
    const resetValue = init;
    let currentValue = init;
    return {
        increment: (): number => ++currentValue,
        decrement: (): number => --currentValue,
        reset: (): number => currentValue = resetValue,
    }
};