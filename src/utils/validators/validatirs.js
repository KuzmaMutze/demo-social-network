export const required = value => {
    if (value) return undefined;
    return "The field should not be empty";
}

export const maxLenghtCreacter = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `Max lenght is ${maxLenght} symvols`;
    return undefined;
}
