const orders = [
    {
        id: 1,
        book: {
            id: 1,
            titulo: "Livro 01"
        },
        customer: {
            id: 1,
            nome: "Joao"
        }
    }
];

const books = [
    {
        id: 1,
        nome: "Livro 01"
    },
    {
        id: 2,
        nome: "Livro 02"
    },
    {
        id: 3,
        nome: "Livro 03"
    },
    {
        id: 4,
        nome: "Livro 04"
    },
];

const customers = [
    {
        id: 1,
        nome: "Joao"
    },
    {
        id: 2,
        nome: "Pedro"
    },
];



module.exports = {
    customers,
    books,
    orders
}