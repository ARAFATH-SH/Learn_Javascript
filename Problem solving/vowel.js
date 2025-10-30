const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function isVowel(str) {
    let count = 0;
    // for(let i=0; i<str.length; i++){
    //     if(vowel.includes(str[i])){
    //         count++;
    //     }
    // }
    const letters = Array.from(str);
    letters.forEach(function(letter){
        if(vowel.includes(letter)){
            count++;
        }
    });
    console.log("Number of vowels: " + count);
}

isVowel("I Love Bangladesh");