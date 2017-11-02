let color = ['ogrange', 'red', 'green', 'blue'];

//ตัวอย่างที่ 1
// let mutate = color.splice(1); //ลบตั้งแต่ตำแหน่งที่ 1 เป็นต้นไป

//ตัวอย่างที่ 2
// let mutate = color.splice(1, 1); //ลบตั้งแต่ตำแหน่งที่ 1 ไป 1 ตัว

//ตัวอย่างที่ 3
let mutate = color.splice(1, 1, 'white', 'black'); // ลบตั้งแต่ตำแหน่งที่ 1 ไป 1 ตัว และเพิ่ม element เข้าไปตำแหน่งที่ 1

console.log(color);
console.log(mutate);

//output
//ตัวอย่างที่ 1
// [ 'ogrange' ]
// [ 'red', 'green', 'blue' ]

//ตัวอย่างที่ 2
// [ 'ogrange', 'green', 'blue' ]
// [ 'red' ]

//ตัวอย่างที่ 3
// [ 'ogrange', 'white', 'black', 'green', 'blue' ]
// [ 'red' ]