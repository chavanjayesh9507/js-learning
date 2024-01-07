console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//  the reason is that an equality check == and comparison check
//  > < >= <= works differently.
//  Comparisons convert null to a number, treating it as 0.
//  That's why (3) null >= 0 is true and (1) null > 0 is false. 

//  ===

console.log("2" === 2);