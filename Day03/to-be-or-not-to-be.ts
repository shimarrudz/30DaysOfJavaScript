type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

const expectt = (val: any): ToBeOrNotToBe => ({
    toBe: (otherVal) => {
        if (otherVal === val) return true;
        throw "Not Equal";
    },
    notToBe: (otherVal) => {
        if (otherVal !== val) return true;
        throw "Equal";
    }
});