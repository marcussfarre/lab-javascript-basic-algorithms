// Iteration 1: Names and Input

const hacker1 = 'Marc';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Pol';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const lengthHacker1 = hacker1.length;
const lengthHacker2 = hacker2.length;

if (lengthHacker1 > lengthHacker2) {
    console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`);
} else if (lengthHacker2 > lengthHacker1) {
    console.log(`It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${lengthHacker1} characters!`);
}

// Iteration 3: Loops

console.log(hacker1.split('').join(' '));
//_______

let response = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
    response += hacker2[i];
}
console.log(response);

//_______
let phrases = ['The drivers name goes first.', 'Yo, the navigator goes first definitely.', 'What?! You both have the same name?'];

console.log(phrases.sort());

// Bonus 1:

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet dui quis ante laoreet, eu convallis ligula eleifend. Donec a feugiat nunc. Sed varius mauris nec nunc accumsan pretium. Aliquam erat volutpat. Aenean porttitor est nunc, a ullamcorper massa imperdiet ac. Phasellus mattis lobortis mi eget congue. Aliquam vel facilisis metus. Vivamus erat magna, vehicula id tempor in, mattis et sapien. In sodales est sed sem dignissim, sed euismod sapien sagittis. Donec convallis sed lacus id pulvinar. Sed fringilla imperdiet odio, quis semper elit fermentum in. Suspendisse et urna consectetur, maximus enim quis, varius quam.
Mauris malesuada dui quis nisi scelerisque, volutpat pulvinar nulla pharetra. Nam accumsan rhoncus ex, sit amet elementum turpis bibendum eget. Curabitur rhoncus mattis tortor vel mollis. Etiam ac neque non leo malesuada accumsan eget id velit. Aenean ut finibus sapien. Aliquam rhoncus rutrum auctor. Sed lorem nibh, aliquam quis dapibus quis, imperdiet ullamcorper lorem. Phasellus iaculis dignissim est vitae aliquam. Pellentesque ipsum quam, eleifend ac odio cursus, placerat vehicula metus. Integer scelerisque ornare purus, at sagittis libero lobortis sed. Sed quis scelerisque turpis. Ut tincidunt faucibus purus, nec pretium erat eleifend ac. Aliquam sed nisi metus. Cras ut ex velit. Mauris quis vestibulum est.
Proin ex leo, posuere sit amet enim et, euismod porttitor libero. Quisque at erat et ex vestibulum sodales sit amet in magna. Sed mi nisi, aliquam vitae finibus eget, tincidunt non metus. Nam in augue a urna tristique scelerisque. Sed cursus porttitor ligula in ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ornare porttitor nunc sed viverra. Mauris luctus eget arcu id pharetra. Nam sagittis nulla in eros cursus aliquet. Morbi metus elit, vulputate eu nibh in, condimentum lobortis magna.`;

let lengthLongText = longText.trim().length;

console.log(lengthLongText);

// Bonus 2:

let phraseToCheck = 'Amor, Roma';

let phraseLength = phraseToCheck.length;
let firstWord = '';
let lastWord = '';

let phraseLengthArray = phraseLength.split('');

if (phraseLengthArray[0] === phraseLengthArray[phraseLength]) {
    console.log('Is a Palindrome');
} else {
    console.log('Is not a Palindrome');
}

