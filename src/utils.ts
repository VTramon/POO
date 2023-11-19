
export type DishType = {
    img: string
    name: string
    value: number
}

export const dishes: Array<DishType> = [
    {
        img: '/dishs/contra.jpg',
        name: 'Contra Filé',
        value: 30.00
    },
    {
        img: '/dishs/feijoada.jpg',
        name: 'Feijoada',
        value: 30.00
    },
    {
        img: '/dishs/lasanha.jpg',
        name: 'Lasanha',
        value: 30.00
    },
    {
        img: '/dishs/parmegiana.jpg',
        name: 'Frango a Parmegiana',
        value: 30.00
    },
]