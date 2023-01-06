/****Element selectors***/
const cardCvcNumber = document.querySelector('.cvc');

const cardNumber = document.querySelector('.card-number');

const cardName = document.querySelector('.card-name');

const cardExpiryMonth = document.querySelector('.expiry-month');

const cardExpiryYear = document.querySelector('.expiry-year');

const cardNameInput = document.getElementById('card-name')

const cardNumberInput = document.getElementById('card-number');

const expiryMonthInput = document.getElementById('expiry-month');

const expiryYearInput = document.getElementById('expiry-year');

const cvcNumInput = document.querySelector('#cvc');

const confirmBtn = document.querySelector('#confirm-btn');

const formContainer = document.querySelector(".form-container");

const completedState = document.querySelector('.completed-container');


/****Event listeners****/
cardNameInput.addEventListener('input', setCardName);

cardNumberInput.addEventListener('input', setCardNumber);

expiryMonthInput.addEventListener('input', setExpiryMonth);

expiryYearInput
addEventListener('input', setExpiryYear);

cvcNumInput.addEventListener('input', setCvcNumInput);

confirmBtn.addEventListener('click', submitForm);


function setCardName() {
  const getCardName = cardNameInput.value.trim();
  cardName.textContent = getCardName;
}

function setCardNumber() {
  const getCardNumber = cardNumberInput.value.trim();
  if (getCardNumber.length < 17) {
    const value = getCardNumber.split("").slice(0, 16).join("");
    insertSpaces(value);
  }
}

function setExpiryMonth() {
  const getExpiryMonth = expiryMonthInput.value.trim();
  if (getExpiryMonth.length < 3) {
    cardExpiryMonth.textContent = getExpiryMonth.split("").slice(0, 2).join('');
  }
}

function setExpiryYear() {
  const getExpiryYear = expiryYearInput.value.trim();
  if (getExpiryYear.length < 3) {
    cardExpiryYear.textContent = getExpiryYear.split("").slice(0, 2).join('');
  }
}

function setCvcNumInput(e) {
  const getCvcNum = cvcNumInput.value.trim();
  if (getCvcNum.length < 4) {
    cardCvcNumber.textContent = getCvcNum.split("").slice(0, 3).join('');
  }
}

function submitForm(e) {
  e.preventDefault();

  //empty field checker
  const inputFields = document.querySelectorAll('input');

  for (const inputField of inputFields) {
    const inputValue = inputField.value;
    if (inputValue === '') {
      displayErrorMsg(inputField);
    }
    else {
      clearErrorMsg(inputField);
    }
  }

  //invalid input checker

  const _inputs = document.querySelectorAll('.valid-input');

  for (const _input of _inputs) {

    const _inputValue = _input.value.trim();

    const regExpText = /[^0-9]/g.test(_inputValue);

    if (regExpText) {
      _input.nextElementSibling.textContent = 'Wrong format';
      displayErrorMsg(_input);
    }
  }

  //valid month checker
  const monthInputValue = Number(expiryMonthInput.value.trim());
  if (monthInputValue > 12) {
    expiryMonthInput.nextElementSibling.textContent = 'Invalid month';
    displayErrorMsg(expiryMonthInput);
  }

  //valid year checker

  const yearInputValue = Number(expiryYearInput.value.trim());

  if (yearInputValue && yearInputValue < 23) {
    expiryYearInput.nextElementSibling.textContent = 'Invalid year';
    displayErrorMsg(expiryYearInput);
  }

  //displayCompletedState();
}

function displayCompletedState() {
  formContainer.style.display = 'none';
  completedState.style.display = 'block';
}

//function for displaying error message

function displayErrorMsg(_inputField) {
  _inputField.nextElementSibling.classList.add('error-msg');
  _inputField.setAttribute('style', 'border: 1px solid red');
}

//function for clearing error message

function clearErrorMsg(_inputField) {
  _inputField.nextElementSibling.classList.remove('error-msg');
  _inputField.removeAttribute('style', 'border: 1px solid red');
}

function insertSpaces(input) {
  // Initialize variables
  let output = '';
  let i = 0;

  // Iterate through the input string
  for (const c of input) {
    // If i is divisible by 4, insert a space
    if (i % 4 === 0) {
      output += ' ';
    }
    // Append the current character to the output string
    output += c;
    // Increment the counter
    i += 1;
  }

  // Return the output string
  cardNumber.textContent = output;
}
