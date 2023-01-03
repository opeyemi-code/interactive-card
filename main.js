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

const confirmBtn = document.querySelector('form');

const formContainer = document.querySelector(".form-container");

const completedState = document.querySelector('.completed-container');


/****Event listeners****/
cardNameInput.addEventListener('input', setCardName);

cardNumberInput.addEventListener('input', setCardNumber);

expiryMonthInput.addEventListener('input', setExpiryMonth);

expiryYearInput
addEventListener('input', setExpiryYear);

cvcNumInput.addEventListener('input', setCvcNumInput);

confirmBtn.addEventListener('submit', inputFieldChecker);


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


//Function for checking if any input field is empty

function inputFieldChecker(e) {
  e.preventDefault();

const inputFields = document.querySelectorAll('input');

inputFields.forEach((inputField)=>{
  
  const inputFieldValue = inputField.value.trim();
  
  if (!inputFieldValue){
    displayErrorMsg(inputField);
  }
  else {
    clearErrorMsg(inputField);
  }
  
  if (inputFieldValue){
    inputValidationChecker();
  }
})
validMonthChecker();
validYearChecker();
}
//function for error msg

function displayErrorMsg(_inputField) {
  _inputField.nextElementSibling.classList.add('error-msg');
  _inputField.setAttribute('style', 'border: 1px solid red');
}

//function for clearing error msg

function clearErrorMsg(_inputField) {
  _inputField.nextElementSibling.classList.remove('error-msg');
  _inputField.removeAttribute('style', 'border: 1px solid red');
}

//function for form validation

function inputValidationChecker() {
  const _inputs = document.querySelectorAll('.valid-input');

  _inputs.forEach((_input) => {

    const _inputValue = _input.value.trim();

    const regExpText = /[^0-9]/g.test(_inputValue);

    if (regExpText === true) {
      _input.nextElementSibling.textContent = 'Wrong format';
      displayErrorMsg(_input)
    }
  })
}

//function for valid month
function validMonthChecker() {
  const monthInputValue = Number(expiryMonthInput.value.trim());
  if (monthInputValue > 12) {
    expiryMonthInput.nextElementSibling.textContent = 'Invalid month';
    displayErrorMsg(expiryMonthInput);
  }
}


//function for valid year checker
function validYearChecker() {
  const yearInputValue = Number(expiryYearInput.value.trim());
  //const currentYear = new Date().getYear();

  if (yearInputValue && yearInputValue < 23) {
    expiryYearInput.nextElementSibling.textContent = 'Invalid year';
    displayErrorMsg(expiryYearInput);
  }
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
