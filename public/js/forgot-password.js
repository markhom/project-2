// forgot-password.js

const forgotPasswordFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-forgot').value.trim();
  
    if (email) {
      try {
        const response = await fetch('/api/users/forgot-password', {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          alert('Password reset email sent');
        } else {
          const errorMessage = await response.json();
          alert(errorMessage.message);
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert('Please enter your email address');
    }
  };
  
  document
    .querySelector('.forgot-password-form')
    .addEventListener('submit', forgotPasswordFormHandler);
  