export const encode = string => {

    return string.replace(/(\w)\1+/g, (m, c) => `${m.length}${c}`);
};

export const decode = string => {

    return string.replace(/(\d+)(\w)/g, (_,c,d) => c.repeat(d));
};

