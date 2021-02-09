export const required = value => {
    if (value) return undefined;
    return "Поле не должны быть пустыми";
}

export const maxLenghtCreacter = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `Max lenght is ${maxLenght} symvols`;
debugger
    return undefined;
    
}
