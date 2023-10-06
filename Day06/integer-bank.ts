function integerBreak(n: number): number {
    if(n === 2) return 1;
    if(n === 3) return 2;
    switch(n % 3) {
        case 1: return 4 * Math.pow(3, Math.floor(n/3)-1);
        case 2: return 2 * Math.pow(3, Math.floor(n/3));
        case 0: return Math.pow(3, n/3);
    }
}