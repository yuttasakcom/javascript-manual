let color = ['red', 'green', 'blue'];

//ตัวอย่างที่ 1
// let slice = color.slice(1);

//ตัวอย่างที่ 2
let slice = color.slice(1, 2); //เลือก element ตั้งแต่ตำแหน่งที่ 1 จนถึง 2 แต่ไม่รวม 2

console.log(color);
console.log(slice);

//output
//ตัวอย่างที่ 1
// [ 'red', 'green', 'blue' ]
// [ 'green', 'blue' ]

//ตัวอย่างที่ 2
// [ 'red', 'green', 'blue' ]
// [ 'green' ]