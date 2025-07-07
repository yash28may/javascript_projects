function generatePassword() {
  const length = 12;
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+~|}{[]></-=";

  const allChars = upper + lower + number + symbol;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordBox = document.getElementById("password");
  passwordBox.select();
  passwordBox.setSelectionRange(0, 99999); // For mobile
  navigator.clipboard.writeText(passwordBox.value);
  alert("Password copied to clipboard!");
}
