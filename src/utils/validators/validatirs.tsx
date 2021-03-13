export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if (value) return undefined;
    return "The field should not be empty";
}

export const maxLenghtCreacter = (maxLenght: number): FieldValidatorType => (value) => {
    if (value.length > maxLenght) return `Max lenght is ${maxLenght} symvols`;
    return undefined;
}
