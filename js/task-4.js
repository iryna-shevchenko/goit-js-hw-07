'use strict';

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  } else {
    console.log({ email, password });
    event.currentTarget.reset();
  }
}


