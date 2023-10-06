function integerBreak(n: number): number {
    // 2 and 3 can't be split into 3s, so handle them separately.
    if(n === 2) return 1;
    if(n === 3) return 2;
    switch(n % 3) {
        // Split this number into one less than as many 3s as possible and one 4.
        case 1: return 4 * Math.pow(3, Math.floor(n/3)-1);
        // Split this number into as many 3s as possible and one 2
        case 2: return 2 * Math.pow(3, Math.floor(n/3));
		// Split this number into entirely threes.
        case 0: return Math.pow(3, n/3);
    }
}