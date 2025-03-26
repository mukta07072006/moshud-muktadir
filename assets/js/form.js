document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      showAlert('Message sent successfully!', 'success');
      form.reset();
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    showAlert('Failed to send message. Please try again.', 'error');
    console.error('Error:', error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

function showAlert(message, type) {
  const alert = document.createElement('div');
  alert.className = `form-alert ${type}`;
  alert.textContent = message;
  document.getElementById('contact-form').prepend(alert);
  
  setTimeout(() => alert.remove(), 5000);
}
