// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400


// Start from the exception and end with the general rule, add any other variables in between???

export const isLeap = (year) => {

    // if(year % 400 === 0 && year % 100 === 0 && year % 4 === 0){
    //     return true;
    // }
    //
    // if(year % 100 === 0 && year % 4 === 0){
    //     return false;
    // }
    //
    // if(year % 4 === 0){
    //     return true;
    // }else {
    //     return false;
    // }


    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

};
