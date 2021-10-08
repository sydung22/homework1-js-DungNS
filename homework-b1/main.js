
//Bai1
// Khai bao bien dung

// let firstName, lastName, name12, $age, dataType;

// Khai bao bien sai 

// let 23name, var, NameVar, true, const;


//Bai2
//Toan Tu

let a = 6, b = 8;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);
console.log(b%a);
console.log('-----------------------------------')


// Bai3
let x = 5;
console.log(++x + x++ - --x - x--); //(6 + 6 - 6 - 6)

let x1 = 6, y1 = 10;
console.log(++y1 - y1++ + x1++ + x1-- - --x1 - --y1);//(11 - 11 + 6 + 7 - 5 - 11)

let x2 = 10, y2 = 12, z2 = 16;
console.log(x2++ + z2-- - --x2 + --y2 - y2-- + ++y2 + ++z2 + --z2 + x2--);//(10 + 16 - 10 + 11 - 11 + 11 + 16 + 15 + 10)
console.log(++x2 - x2++ + z2++ + ++y2 - y2-- );//(10 - 10 + 15 + 12 - 12)
console.log('-----------------------------------')

// Bai4

let num = 5, fullName = 'SyDung', test = true,
objectList = {Name: 'SyDung', Age: 22, Address: 'DaNang'},
arrayList = ['Dung','Tien', 'Luong', 'Thang'];
console.log(num, typeof num);
console.log(fullName, typeof fullName);
console.log(test, typeof test);
console.log(objectList, typeof objectList);
console.log(arrayList, typeof arrayList);
console.log('-----------------------------------')

// Bai5
let arrList = [1,2,3,4,5,6,7,8,9,10];
console.log(arrList[0] + arrList[1]);
console.log(arrList[0] * arrList[9]);
console.log('-----------------------------------')

// Bai6

let obList = {firstName: 'Nguyen', lastName: 'Dung', age: 22, favorite: 'tap Gym'};
console.log(obList, typeof obList);
obList.firstName = 'Le';
obList.lastName = 'Hung';
console.log(obList, typeof obList);
console.log(obList.firstName + " " + obList.lastName + " " +
obList.age + " tuoi" + " thich " + obList.favorite);

