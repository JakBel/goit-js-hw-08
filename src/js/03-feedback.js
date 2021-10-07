'use strict';

import throttle from "lodash.throttle";

const qs = selector => document.querySelector(selector);

const form = qs('.feedback-form');
const input = qs('[name="email"]');
const textarea = qs('textarea');

form.addEventListener('input', throttle(saveData, 500, { trailing: true }));

updateOutput();

function saveData(event) {
  event.preventDefault();
  localStorage.setItem('email', form.elements.email.value);
  console.log(form.elements.email.value);
  
  localStorage.setItem('message', form.elements.message.value);
  console.log(form.elements.message.value);
}

function updateOutput() {
  input.value = localStorage.getItem('email');
  textarea.textContent = localStorage.getItem('message');
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log(`Email: ${email.value}, Message: ${message.value}`);
  event.currentTarget.reset();
  form.reset();
  localStorage.clear();
  updateOutput();
}