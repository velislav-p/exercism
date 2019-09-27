export const solve = (x, y) => {
    const h = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    if( h > 10 ) return  0;
    if( h > 5 ) return  1;
    if( h > 1 ) return  5;

    return 10;
};