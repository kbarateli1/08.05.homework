// //  1.

// // 2. personal_number - ვალიდაცია:  სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა იყოს 11 ის ტოლი.

//  form.addEventListener('submit', e => {
//    e.preventDefault();
//    try {
//      console.log(emailInput.value);
//    } catch (e) {
//      console.log('catch error', e);
//    }
//    const isEmailValid = validateEmail();
//    const isPasswordValid = validatePassword();
//    const isPnValid = validatePersonalNumber();
//    const isMobileValid = validateMobileNumber();
//    const isPositionValid = validatePosition();
//    if(isEmailValid && isPasswordValid && isPnValid && isMobileValid && isPositionValid){
//      closeModal(USER_REGISTRATION_MODAL_SELECTOR);
//      console.log('Call to backend api');
//    }
//  });

//  function validateEmail(){
//    if(!emailInput.value){
//      emailInput.classList.add('has-error');
//      emailInput.parentNode.querySelector('.error-message').innerText = 'Please enter email';
//      return false;
//    }
//    if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
//      emailInput.classList.add('has-error');
//      emailInput.parentNode.querySelector('.error-message').innerText = 'Invalid email';
//      return false;
//    }
//    emailInput.classList.remove('has-error');
//    emailInput.parentNode.querySelector('.error-message').innerText = '';
//    return true;
//  }

//  function validatePassword(){
//    if(!passwordInput.value){
//      passwordInput.classList.add('has-error');
//      passwordInput.parentNode.querySelector('.error-message').innerText = 'Please enter password';
//      return false;
//    }
//    if(passwordInput.value.length < 8){
//      passwordInput.classList.add('has-error');
//      passwordInput.parentNode.querySelector('.error-message').innerText = 'Password must include 8 char';
//      return false;
//    }
//    passwordInput.classList.remove('has-error');
//    passwordInput.parentNode.querySelector('.error-message').innerText = '';
//    return true;
//  }

//  function validatePersonalNumber(){
//    if(!personalNumberInput.value){
//      personalNumberInput.classList.add('has-error');
//      personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter personal number';
//      return false;
//    }
//    if(isNaN(Number(personalNumberInput.value))){
//      personalNumberInput.classList.add('has-error');
//      personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter correct Personal number';
//      return false;
//    }
//    if(personalNumberInput.value.length !== 11){
//      personalNumberInput.classList.add('has-error');
//      personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Personal number length mismatch';
//      return false;
//    }
//    personalNumberInput.classList.remove('has-error');
//    personalNumberInput.parentNode.querySelector('.error-message').innerText = '';
//    return true;
//  }

//  function validateMobileNumber(){
//    if(!mobileNumberInput.value){
//      mobileNumberInput.classList.add('has-error');
//      mobileNumberInput.parentNode.querySelector('.error-message').innerText = 'Please enter mobile number';
//      return false;
//    }
//    if(mobileNumberInput.value.length !== 9){
//      mobileNumberInput.classList.add('has-error');
//      mobileNumberInput.parentNode.querySelector('.error-message').innerText = 'Mobile number length mismatch';
//      return false;
//    }
//    mobileNumberInput.classList.remove('has-error');
//    mobileNumberInput.parentNode.querySelector('.error-message').innerText = '';
//    return true;
//  }

//  function validatePosition(){
//    if(positionInput.value && positionInput.value.length > 30){
//      positionInput.classList.add('has-error');
//      positionInput.parentNode.querySelector('.error-message').innerText = 'Position length mismatch';
//      return false;
//    }
//    positionInput.classList.remove('has-error');
//    positionInput.parentNode.querySelector('.error-message').innerText = '';
//    return true;
//  }

//  const modalOpenBtn = document.querySelector('#open-modal');
//  modalOpenBtn.addEventListener('click', () => {
//    openModal(USER_REGISTRATION_MODAL_SELECTOR);
//  })

//  function openModal(modalSelector){
//    const modalNode = document.querySelector(modalSelector);
//    modalNode.classList.add('visible');
//    const modalCloseBtn = modalNode.querySelector('.modal-close');
//    modalCloseBtn.addEventListener('click', () => {
//      closeModal(modalSelector)
//    })
//  }

//  function closeModal(modalSelector){
//    const modalNode = document.querySelector(modalSelector);
//    modalNode.classList.remove('visible');
//  }



//lecture20


