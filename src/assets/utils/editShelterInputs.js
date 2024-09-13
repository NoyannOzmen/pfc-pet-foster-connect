const editBtns = document.querySelector('.material-symbols-outlined');

editBtns.addEventListener("click", enableEdit);

function enableEdit(e) {
  const field = e.target.closest('fieldset')
  const inputs = field.querySelectorAll('input')
  const validate = document.getElementById("validateBtn");

  if (validate.classList.contains('hidden')) {
  validate.classList.toggle('hidden')
  }

  inputs.forEach((input) => {
      input.disabled = false;
      input.required = true
      input.classList.add('bg-fond')
  })
}