const str = "1 2 3 4 5";

const words = str.split(" ");

function sumArray(arr) {
  let min,max,sum = 0;
  let even = [];
  let odd = [];
  let result;

  for (const element of words) {
    let a = Number(element);
    sum += a;
    if (a % 2 == 1) odd.push(element);
    else even.push(element);
  }
  max = sum - [...words].shift();
  min = sum - [...words].pop();

  return (result = `min:${min}  max:${max} odd:${odd} even:${even} sum:${sum}`);
}

console.log(sumArray(words)); 
