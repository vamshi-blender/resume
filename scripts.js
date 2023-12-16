/* function submitForm() {
  // Add your logic here to handle form submission
  alert("Form submitted!");
} */

function resetForm() {
  var confirmation = confirm("Are you sure you want to reset the form?");
  if (confirmation) {
    location.reload();
  }
}

function updateCharacterCount() {
    const textarea = document.getElementById('jobDescriptionText');
    const charCountElement = document.getElementById('char-count');
    const currentCount = textarea.value.length;
    const maxLength = parseInt(textarea.getAttribute('maxlength'));
    charCountElement.textContent = `${currentCount}/${maxLength} characters`;
}