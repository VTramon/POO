
export type PratoType = {
    id: number
    img: string
    name: string
    value: number
}

export const pratos: Array<PratoType> = [
    {
        id: 1,
        img: '/dishs/contra.jpg',
        name: 'Contra Filé',
        value: 30.00
    },
    {
        id: 2,
        img: '/dishs/feijoada.jpg',
        name: 'Feijoada',
        value: 22.50
    },
    {
        id: 3,
        img: '/dishs/lasanha.jpg',
        name: 'Lasanha',
        value: 19.99
    },
    {
        id: 4,
        img: '/dishs/parmegiana.jpg',
        name: 'Frango a Parmegiana',
        value: 25.00
    },
]


export const mesas = [1, 2, 3, 4, 5]