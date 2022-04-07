import imagen1 from './productIMG/imagen1.jpg';
import imagen2 from './productIMG/imagen2.jpg';
import imagen3 from './productIMG/imagen3.jpg';

const data = [
    {
        id: 1,
        title: "imagen1",
        price: "10 U$D",
        img: imagen1
    },
    {
        id: 2,
        title: "imagen2",
        price: "20 U$D",
        img: imagen2
    },
    {
        id: 3,
        title: "imagen3",
        price: "20 U$D",
        img: imagen3
    }
]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data);
        }, 2000)
    })
}