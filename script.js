document.getElementById('submit').onclick = function() {
    const passwordLength = document.getElementById('passwordLength').value;
    const includeLowerCase = document.getElementById('includeLowerCase').checked;
    const includeUpperCase = document.getElementById('includeUpperCase').checked;
    const includeNumber = document.getElementById('includeNumber').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumber, includeSymbols);

    document.querySelector('.output').innerText = `Password: ${password}`;
};

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumber, includeSymbols) {
    const lowerCaseChars = "azertyuiopqsdfghjklmwxcvbn";
    const upperCaseChars = "AZERTYUIOPQSDFGHJKLMWXCVBN";
    const numberChars = "0123456789";
    const symbolChars = "!$@&?%()-/*{}[]_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(password length must be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(At least 1 set of characters needs to be selected)`;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}
