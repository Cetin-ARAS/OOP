
//* ============================================
//* -OOP----Inheritance and Polymorphism (ES6)
//* ============================================

//? Bir parent class'in değişken ve fonksiyonelliği extends keyword'u ile child class'a geçmektedir. (INHERITANCE)

//* Polymorphism, bir değişken, fonksiyon veya nesnenin çoklu sekiller alabilmesini tanımlayan bir nesne yönelimli programlama tekniğidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar ile bilinir.

//! syntactic sugar ---> java c++ C# gibi programlama dillerini bilen programcıları çekmek için bakın burada da class yapısı var demek için. arkaplanda prototype var
//! CLASS TABANLI YAZI
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.getTitle = function () {
        return this.title;
      };
    }
    //! Bu kısımda yazılan fonksiyonlar aslında prototype alanında bulunur.
    getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
  }
  
  //? instance:
  const book1 = new Book("Kasagı", "Omer Seyfettin", 1919);
  const book2 = new Book("Sinekli Bakkal", "Halide Edip Adıvar", 1918);
  
  console.log(book1); // Book {title: 'Kasagı', author: 'Omer Seyfettin', year: 1919}

//? Sub-Class tanımlaması
  class Magazine extends Book{
    constructor(){
        //! Book'u constructoru çağırıldı
    
    super(title,author,year); ///!Book'un prototype kopyalanmış oldu. 
    this.month = month
    }
  }

  const mag1 = new Magazine('Kaşağı','Ömer Seyfettin', 1940. 'Nov')
  cons
//* ============================================
//* -OOP----Inheritance and Polymorphism (ES6)
//* ============================================

//? Bir parent class'in değişken ve fonksiyonelliği extends keyword'u ile child class'a geçmektedir. (INHERITANCE)

//* Polymorphism, bir değişken, fonksiyon veya nesnenin çoklu sekiller alabilmesini tanımlayan bir nesne yönelimli programlama tekniğidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar ile bilinir.

//! syntactic sugar ---> java c++ C# gibi programlama dillerini bilen programcıları çekmek için bakın burada da class yapısı var demek için. arkaplanda prototype var

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getTitle = function () {
    //   return this.title;
    // };
  }

  //! Bu kısımda yazılan fonksiyonlar aslında prototype alanında bulunur.
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
}

//? instance:
const book1 = new Book("Kasagı", "Omer Seyfettin", 1919);
const book2 = new Book("Sinekli Bakkal", "Halide Edip Adıvar", 1918);

console.log(book1); // Book {title: 'Kasagı', author: 'Omer Seyfettin', year: 1919}

//? Sub-Class tamımlaması:
class Magazine extends Book {
  constructor() {
    //! Book'un constructor'ı çağrıldı!!!
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine("Sinekli Bakkal", "Halide Edip Adıvar", 1918, "Nov");

console.log(mag1);
console(mag1.getSummary());
book1.price = 100;
console.log(book1, book2);

//! Eger yeni bir property veya fonksiyonu constructor'a eklemek istersek
//! prototype'ı kullanabiliriz.

Book.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

Book.prototype.type = 'novel';

console.log(book1.getAge());
console.log(book2.getAge());
console.log(book2.type);

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
//! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin guzelligi bu metot'un
//! olusan tum instance'lerin belleginde yer kaplamamasi ancak tum
//! instance'larin bu metota ulasabilmesidir.

//* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece tek bir yer kaplamaktadir.

//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

//!Object'lerin proto alanini gormk icin .protoype
console.log(Book.prototype);

//!instance'larin proto alanini gormk icin .__proto__
console.log(book1.__proto__);

//? INHERITANCE (Kalitim - ES5)
//?-------------------------------------------------------------------

//? Sub-Class
function Magazine(title, author, year, month) {
  //* parent'in object constructorinin cagrilmasi
  Book.call(this, title, author, year);
  this.month = month;
}

//! Prototipler dogrudan miras olarak gelmez.
console.log(Magazine.prototype);

//! Prototipleri miras almak icin Object.create() metodu kullanabilir.
Magazine.prototype = Object.create(Book.prototype);
console.log(Magazine.prototype);

//* Magazine nesnesinden bir instance olsuturulmasi
const mag1 = new Magazine('Scientific Research', 'Einstein', 1905, 'September');

console.log(mag1);
console.log(mag1.getAge());