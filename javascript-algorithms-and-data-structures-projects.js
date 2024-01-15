// Solution for Palindrome Checker

function palindrome(str) {
  str = str.toLowerCase();
  str = str.match(/[a-z0-9]/g);
  let revStr = [];  
  for (let i of str) {
    revStr.unshift(i);
  }
  return str.join('') === revStr.join('');
}

palindrome("eye");

// Solution for Roman Numeral Converter

function convertToRoman(num) {
  const list = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let str = [];
  for (let i in list) {
    let j = 0;
    while (num - list[i] >= 0) {
      num = num - list[i];
      str.push(i);
      j++;
    }
  }
 return str.join('');
}

convertToRoman(36);

// Solution for Caesars Cipher

function rot13(str) {
  const alphabet = Array.from(Array(26)).map((x, i) => i + 65).map(x => String.fromCharCode(x));
  let alphabetCopy = [...alphabet];

  let start = 'N';
  let cCipher = Array.from(alphabetCopy.splice(alphabetCopy.indexOf(start), alphabetCopy.length - 1).join(''));
  cCipher = Array.from(cCipher.join('') + [,...alphabetCopy].join(''));

  str = Array.from(str).map(x => {
    if (alphabet.indexOf(x) >= 0) {
     return alphabet[cCipher.indexOf(x)];
    } else {
      return x;
    }
  })
  return str.join('');
}

rot13("SERR PBQR PNZC");

// Solution for Telephone Number Validator

// REFAZER

function telephoneCheck(str) {
  let reg = new RegExp(/^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/);
  return reg.test(str);
}

telephoneCheck("555-555-5555");

// Solution for Cash Register

function checkCashRegister(price, cash, cid) {
  const change = [];
  
  const currencyAmount = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100].map(e => e * 100);
  const totalCid = cid.map(e => e[1] * 100).reduce((acc, curr) => acc += curr) / 100;
  const changeDue = cash - price;
  
  let cidCopy = cid.map(e => (e[1] * 100).toFixed(2));
  let changeDueCheck = changeDue * 100;

  for (let i = currencyAmount.length - 1; i >= 0; i--) {
    let val = 0;
    while (changeDueCheck - currencyAmount[i] >= 0 && cidCopy[i] > 0) {
      changeDueCheck -= currencyAmount[i];
      cidCopy[i] -= currencyAmount[i];
      val += currencyAmount[i];
    }
    if (val > 0) change.push([cid[i][0], val / 100]);
  }

  let changeTotal = 0;
  for (let c of change) {
    changeTotal += c[1] * 100;
  }

  changeTotal /= 100;

  if (totalCid < changeDue || changeTotal !== changeDue) return {status: "INSUFFICIENT_FUNDS", change: []};
  if (totalCid === changeDue) return {status: "CLOSED", change: cid};
  return {status: "OPEN", change: change};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);