function firstWord(s) {
    if (s === "" || !s.includes(" ")) {
        return s;
    } else {
        return s.split(" ")[0];
    }
}

// Do not change the code below
const userString = prompt("Enter a string:");

alert("'" + firstWord(userString) + "'");
