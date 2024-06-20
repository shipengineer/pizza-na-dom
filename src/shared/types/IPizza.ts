interface IPizza {
    id: string,
    name: string,
    description: string
    image: string,
    sizes: ICheckbox[],
    prices: number[];
    toppings: string[]
}
