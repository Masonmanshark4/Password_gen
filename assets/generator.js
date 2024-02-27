function generatePassword() {
    var length = prompt("Enter the length of the password (between 8 and 128 characters):");
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()-_+=~`[]{}|;:,.<>?";

    if (length === null || isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return;
    }
            
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
        alert("Please include at least one character type in your password.");
        return;
    }
            
    var allChars = "";
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumeric) allChars += numericChars;
    if (includeSpecial) allChars += specialChars;
    
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }
    
    var passwordBox = document.getElementById("passwordDisplay");
    passwordBox.innerText = password;
    passwordBox.style.border = "1px dotted #333";
    passwordBox.style.padding = "10px";
    passwordBox.style.borderRadius = "5px";
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);

