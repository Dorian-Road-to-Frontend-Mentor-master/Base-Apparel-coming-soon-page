const form = document.getElementById('form');
const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', e => {
  if (e.target.email.value.trim() === '' || emailRegex.test(e.target.value)) {
    e.preventDefault();
    form.classList.add('form--error');
  }
});

form.email.addEventListener('focus', () => {
  form.classList.remove('form--error');
});
