const array = [];
for (let i = 0; i < 5; i++) {
  const rndNum = Math.floor(Math.random() * 100) + 1;
  array[i] = rndNum;
}
console.log(array);

array[10] = 100;
console.log(array);
