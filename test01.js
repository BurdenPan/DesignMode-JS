// var checkObject = function(){};
// checkObject.checkName = function(){};
// checkObject.checkEmail = function(){};

// var checkObject = function() {
//     return {
//         checkName: function() {
//             console.log(this + 'checkName');
//         },
//         checkEmail: function() {
//             console.log(this + 'checkEmail');
//         }
//     };
// };

// var a = checkObject();
// a.checkName();
// a.checkEmail()

// var b = checkObject();
// b.checkName();
// b.checkEmail();

// var CheckObject = function() {};

// CheckObject.prototype = {
//     checkName : function() {}
// };

// var a = new CheckObject();
// var b = new CheckObject();

// console.log(a.checkName === b.checkName);

// var Book = (function() {
//     var bookNum = 0;
//     var checkBook = function() {};
//     return function(newId, newName, newPrice) {
//         var name, price;
//         var checkID = function(id) {};
//         this.getName = function() {};
//         this.getPrice = function() {};
//         this.setName = function() {};
//         this.setPrice = function() {};
//         this.id = newId;
//         this.copy = function() {};
//         bookNum++;
//         if(bookNum > 100) 
//             throw new Error('xxx');
//         this.setName(name);
//         this.setPrice(price);
//     };
// })();

// Book.prototype = {
//     isJSBook: false,
//     display: function() {}
// };

// var book1 = new Book(1,'xxx',2);


// var Book = (function() {
//     var bookNum = 0;
//     var checkBook = function() {};
//     var _book = function(newId, newName, newPrice) {
//         var name, price;
//         var checkId = function(id) {};
//         this.getName = function() {};
//         this.getPrice = function() {};
//         this.setName = function() {};
//         this.setPrice = function() {};
//         this.id = newId;
//         this.copy = function() {};
//         bookNum++;
//         if(bookNum > 100) throw new Error('xxx');
//         this.setName(name);
//         this.setPrice(price);
//     };
//     _book.prototype = {
//         isJSBook: true,
//         display: function() {}
//     };
//     return _book;
// })();

// var book1 = new Book(1,'1',2);

// var Book = function(title, name, type) {
//     this.title = title;
//     this.name = name;
//     this.type = type;
// }

// var book = Book('title', 'name', 'type');

// console.log(book);
// console.log(window.title);
// console.log(window.name);
// console.log(window.type);

// var Book = function(title, name, type) {
//     if(this instanceof Book) {
//         this.title = title;
//         this.name = name;
//         this.type = type;
//     } else {
//         return new Book(title, name, type);
//     }
// }

// var book = Book('title', 'name', 'type');

// console.log(book);


// function inheritObejct(o) {
//     function F(){}
//     F.prototype = o;
//     return new F();
// }

// function inheritPrototype(subClass, superClass) {
//     var p = inheritObejct(superClass.prototype);
//     p.constructor = subClass;
//     subClass.prototype = p;
// }

// function SuperClass(name) {
//     this.name = name;
//     this.colors = ['red', 'blue', 'green'];
// }

// SuperClass.prototype.getName() = function() {
//     console.log(this.name);
// }

// function SubClass(name, time) {
//     SuperClass.call(this, name);
//     this.time = time;
// }

// inheritPrototype(SubClass, SuperClass);

// SubClass.prototype.getTime() = function() {
//     console.log(this.time);
// }

function inherits(Child, Parent) {
    var F = new function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function() {
    console.log('hello' + this.name);
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

inherits(PrimaryStudent, Student);

PrimaryStudent.prototype.getGrade = function() {
    return this.grade;
}


