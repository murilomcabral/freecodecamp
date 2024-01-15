// Problem 4: Largest palindrome product

function largestPalindromeProduct(n) {
  let counter1 = Number(String(9).repeat(n));
  const limit = Number('1' + String(0).repeat(n - 1));
  let pal = 0;
  const arr = [];
  
  for (counter1; counter1 >= limit; --counter1) {
    let counter2 = counter1;
    for (counter2; counter2 >= limit; --counter2) {
      pal = counter1 * counter2;
      if (pal == Array.from(String(pal)).reverse().join('')) arr.push(pal);
    }
  }
  return Math.max(...arr);
}

console.log(largestPalindromeProduct(3));