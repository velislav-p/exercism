export const value = (input = []) => {
    const colors = new Map();
    colors.set("black",0);
    colors.set("brown",1);
    colors.set("red",2);
    colors.set("orange",3);
    colors.set("yellow",4);
    colors.set("green",5);
    colors.set("blue",6);
    colors.set("violet",7);
    colors.set("grey",8);
    colors.set("white",9);

    let array = [];
    for(let single of input){
        array.push(colors.get(single));
    }

    return parseInt(array.join(""));
};