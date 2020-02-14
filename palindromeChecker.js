function palindrome(word) {
    //Declare needed variables
    let index, len, counter = 0;

    word = word.replace(/\W/g, '');
    word = word.replace(/_/g, '');
    word = word.toLowerCase();

    len = word.length;

    for (index = 0; index < len / 2; index++) {
        if (word[index] == word[len - index - 1]) {
            counter++;
        }
    }

    // console.log(c);
    if (counter == index) {
        console.log("Palindrome");
        return true;
    }
    else {
        console.log("Not a Palindrome");
        return false;
    }
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");