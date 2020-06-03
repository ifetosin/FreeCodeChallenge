function telephoneCheck(str) {

    //Declare needed variables
    let index, len, counter = 0, result;

    let regrex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    //removes all alphabet
   // str = str.replace(/[A-Z]/ig, '');
    //removes all characters
    //str = str.replace(/[-._!@#$%^&*+={}~`><()]/ig, ' ');
    //removes all spaces before and after the string
   // str  = str.trim();

    result = regrex.test(str);
    console.log(result);
    return result;
  }
  
telephoneCheck("!@#$555-590855-5555 Aeaoockozkcped  kcejojixjcikdskcidl");
telephoneCheck(" 5555555555");
telephoneCheck("1 (555) 555-5555");//true
telephoneCheck("1 1 (555) 555-5555");
telephoneCheck("1 555)555-5555");//false
telephoneCheck("(6054756961)");//false
telephoneCheck("(555-555-5555");//false