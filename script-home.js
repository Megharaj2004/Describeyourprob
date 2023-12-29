function showHelpPage() {
    const problemInput = document.getElementById('problem-input').value;
    if (problemInput.trim() !== '') {
      // You can perform any processing here before navigating to the help page
      window.location.href = 'help.html';
    } else {
      alert('Please enter a problem before seeking help.');
    }
  }
  