/* 原型继承 */
function A() {
  this.name = "A";
}

function B() {
  this.age = 20;
}

B.prototype = new A();
var a = new B();
alert(a.name + " " + a.age);

/* 原型继承2 */

function animal() {
  this.name = "animal";
}

animal.prototype.out = function() {
  alert(this.name);
};

function person() {}
person.prototype = animal.prototype;
person.prototype.constructor = "Person";

/* 构造器运用法 */

function a() {
  this.name = "a";
}

function b() {
  a.apply(this);
}
var atemp = new b();
console.log(atemp.name);
