/*
## Concatenate Strings #2

1. create "street" and "country" variables
2. assign your values
3. create "fullMailingAddress" variable and assign
   the result of "street + country"
4. remember about the space
5. log "fullMailingAddress" in the console

*/

const street = "Ondina";
const country ="Brasil";

let fullMailingAddress = street + " " + country;
console.log("Hello, your full mailling address is:",fullMailingAddress+"?");

//With backticks
console.log(`Hello, your full mailling address is: ${fullMailingAddress}?`);
