// Creating single-line strings
let firstname = "David";
 let lastname = "Tucker";
 let title = `Assistant Doctor`;
 title = `Physician`;

 // String concatenation with the plus operator
 let fullname = firstname + " " + lastname;

 // String concatenation with template literals
 fullname = `${firstname} ${lastname}`;
 console.log(fullname);

 // Creating multi-line strings with \n
 let bio = "line 1\nline 2\nline 3";
 console.log(bio);

 // Creating multi-line strings with backticks
 bio = `About David Tucker:
 David Tucker is the current CTO of Globamantics
 He also serves as an author for Plurals.`;

 // Escaping characters
 let quote = "David said, JavaScript is for me.";
 quote = "David said, \JavaScript is for me.\"";
 quote = `JavaScript can use 'single' and "double" quotes.`;
 quote = `JavaScript, you must escape the \\ character`;
 console.log(quote);

    // String lenth
    let length = quote.length;
    console.log(`Quote length: ${length}`);
    
    // Accessing specific characters
    let secondcharacter = quote[1];
    console.log(`second character: ${secondcharacter}`);

    // Changing case
    let uppercaseName = fullname.toUpperCase();
    console.log(uppercaseName);
    let lowercaseName = fullname.toLowerCase();
    console.log(lowercaseName);

    // Finding a substring
    let idx1 = fullname.indexOf("Dav");
    console.log(`Index 1: ${idx1}`);
    let idx2 = fullname.indexOf("ker");
    console.log(`Index 2: ${idx2}`);
    let idx3 = fullname.indexOf("xyz");
    console.log(`Index 3: ${idx3}`);

    // Does a string contain a substring
    let doesContain = fullname.includes("Dav");
    console.log(doesContain);




