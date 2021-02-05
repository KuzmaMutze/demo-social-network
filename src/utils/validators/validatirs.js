export const required = value => {
    if (value) return undefined;
    return "error message";
    
}

export const maxLenghtCreacter = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `Max lenght is ${maxLenght} symvols`;
debugger
    return undefined;
    
}
