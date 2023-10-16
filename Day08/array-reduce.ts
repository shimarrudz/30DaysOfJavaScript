type Reduce<T, U> = (acc: T, curr: U) => T;

function reduceTs<T, U>(nums: U[], fn: Reduce<T, U>, init: T): T{
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}