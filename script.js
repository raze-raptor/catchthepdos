function submitForm() {
  const fullName = document.getElementById('fullName').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const townCity = document.getElementById('townCity').value;
  const billingAddress = document.getElementById('billingAddress').value;

  const accountData = {
    fullName,
    username,
    password,
    townCity,
    billingAddress
  };

  // Send data to server-side
  fetch('/createAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Server response:', data);
    // Redirect to success page
    window.location.href = 'success.php';
  })
  .catch(error => console.error('Error:', error));

  // Clear form after submission
  document.getElementById('loginForm').reset();
}
