// function SuperClass() {
//     this.superValue = true;
// }

// SuperClass.prototype.getSuperValue = function() {
//     return this.superValue;
// }

// function SubClass() {
//     this.subValue = false;
// }

// SubClass.prototype = new SuperClass();

// SubClass.prototype.getSubValue = function() {
//     return this.subValue;
// }

// var subClass = new SubClass();

// console.log(subClass.getSubValue());

// console.log(subClass.getSuperValue());

// console.log(SuperClass.prototype.getSuperValue);

// console.log(SubClass.prototype.superValue);

function SuperClass(id) {
    this.books = ['JavaScript', 'html', 'css'];
    this.id = id;
}

SuperClass.prototype.showBooks = function() {
    console.log(this.books);
}

function SubClass(id) {
    SuperClass.call(this, id);
}

var in1 = new SubClass(10);
var in2 = new SubClass(11);

in1.books.push('设计模式');

console.log(in1.books);
console.log(in1.id);
console.log(in2.books);
console.log(in2.id);
in1.showBooks();