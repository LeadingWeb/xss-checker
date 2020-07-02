# What is this?

This package is a simple way to check if a string contains any HTML or JavaScrpipt so your database stays clean.

# Installation

There are two main ways you can use this, either with nodejs on the backend or you could use it on the front end as well.

For nodejs, just install the npm package:

`npm i xss-checker`


To use it on your front-end you can just copy the 'front-xss-checker' folder into your project and link to it as a script tag:

`<script src="./front-xss-checker/validate.js"></script>`


# Usage

After importing, you can just check any string for XSS attempts by using the function (front-end):
`validateXSS("Your input string");`

(nodejs) 
`xss.validate('Your input string');`


This function returns the matches against a current XSS-Payload list, so if it returns 0 the input is probably safe.


# NPM Example

```
const Xss = require('./index');
const xss = new Xss;

//The user input you want to check
const input = "<svg onload=alert(1)>";

xss.init()
    .then(() => {
        if(xss.validate(input) === 0) {
            //The input is clean and can be added to the database
        }else {
            //The input contains malicious Javascript
            console.log(input);
        }
    })

```



# Front-End Example

Don't forget to add the script tag to your HTML:
`validateXSS("Your input string");`


```

//The user input you want to check
const input = "<svg onload=alert(1)>";

const check = validateXSS(input);
if (check == 0) {

    //check == 0 means the input is safe, so you can add send it to the server

} else {
    console.log(`XSS! ${{check}});
}

```