//* ======================================================
//*                    (OOPS)
//* ======================================================

//* Object Literals

const book1 = {
    title: 'The Brothers Karamazov',
    author: 'Dostoyevski',
    year: 1800,
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
};
console.log(book1);
console.log(book1.getSummary);
console.log(book1.toString());//!Object nesnesinden miras yoluyla geldi.
const book2 = {
    title: 'the lily pf the valley',
    author: 'Honero da Balzac',
    year: 1835,
    getSummary:function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
};
console.log(book2);