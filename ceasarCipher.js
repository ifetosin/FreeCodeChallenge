function rot13(str) {
    let char_array = [];
    let regEx = /[A-Z]/;
    let result = "";
    //Removes all white spaces
    //str = str.replace(/\s/g, '');
    for (let counter = 0; counter < str.length; counter++) {
        //result = result.concat(str.charCodeAt(counter));
        if (regEx.test(str[counter])) {
            char_array.push(((str[counter].charCodeAt() - 65 + 13) % 26) + 65);
        } 
        else {
            char_array.push(str[counter].charCodeAt());
      }
    }
    result = String.fromCharCode.apply(String, char_array);
    console.log(result);
    return result;
    }

  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?");
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");