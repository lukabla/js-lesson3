for (let i = 0; i < 50; i++) {
  //   console.log(i);
  console.log(`i`);
}
let i = 0;
while (i < 20) {
  //   console.log(i);
  console.log(`i`);
  i++;
}

i = 0;
do {
  //   console.log(i);
  console.log(`i`);
  i++;
} while (i < 30);

const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 == 0) {
    console.log(element);
  }
}
const currentDay = new Date().getDay();
let dayNames = ``;
// console.log(currentDay);
switch (currentDay) {
  case 0:
    dayNames = `კვირა`;
    break;
  case 1:
    dayNames = `ორშაბათი`;
    break;
  case 2:
    dayNames = `სამშაბათი`;
    break;
  case 3:
    dayNames = `ოთხშაბათი`;
    break;
  case 4:
    dayNames = `ხუთშაბათი`;
    break;
  case 5:
    dayNames = `პარასკევი`;
    break;
  case 6:
    dayNames = `შაბათი`;
    break;
}
console.log(dayNames);
