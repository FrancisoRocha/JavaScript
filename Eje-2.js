/*
!Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

?"found the needle at position "  plus the index it found the needle, so:
*/

function findNeedle(haystack) {
    // your code here
    for (let i = 0; i < haystack.length; i++) { // intera sobre haystack para buscar la aguja
        if(haystack[i] === "needle") {
            return "found the needle at position " + i;
        }
    }
    return "needle not found"; // meaning "found the needle at position"
};


const haystackArray = [ // array of haystack
    "hay", 
    "junk", 
    "hay", 
    "hay", 
    "moreJunk", 
    "needle", 
    "randomJunk"
];

console.log(findNeedle(haystackArray));
