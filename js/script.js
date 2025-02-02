document.getElementById('generate-password').addEventListener('click', generatePassword);
document.getElementById('copy-password').addEventListener('click', copyToClipboard);
document.getElementById('toggle-visibility').addEventListener('click', toggleVisibility);

function generatePassword() {
    const length = parseInt(document.getElementById('password-length').value);
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;

    if (!length || length < 1 || length > 128) {
        alert('Please enter a valid password length between 1 and 128.');
        return;
    }

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '#$%&*!@';

    let charPool = '';
    if (includeLowercase) charPool += lowercaseChars;
    if (includeUppercase) charPool += uppercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (!charPool) {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    document.getElementById('password-display').value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById('password-display');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

function toggleVisibility() {
    const passwordField = document.getElementById('password-display');
    if (passwordField.type === 'text') {
        passwordField.type = 'password';
    } else {
        passwordField.type = 'text';
    }
}
