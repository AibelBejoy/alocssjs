var validation;
var regNo, dayValue, monthValue, yearValue, userId, password, mailId;

function reg() {
  regNo = +document.querySelector('.regNo').value;
  if (document.querySelector('.regNo').value.length === 6 && !isNaN(regNo)) {
    document.querySelector('.regNo-c p').innerHTML = "Valid!";
    return true;
  } else {
    document.querySelector('.regNo-c p').innerHTML = "Invalid!";
    return false;
  }
}

function validateDOB() {
  dayValue = document.querySelector('.DOB-d').value;
  monthValue = document.querySelector('.DOB-m').value;
  yearValue = document.querySelector('.DOB-y').value;

  let isValid = true;

  if (dayValue < 1 || dayValue > 31)
    isValid = false;
  if (monthValue < 1 || monthValue > 12)
    isValid = false;
  if (yearValue <= 2000 || yearValue >= 2010)
    isValid = false;

  if (isValid) {
    document.querySelector('.DOB-c p').innerHTML = "Valid!";
    return true;
  } else {
    document.querySelector('.DOB-c p').innerHTML = "Invalid!";
    return false;
  }
}

document.querySelector('.DOB-d').addEventListener('input', validateDOB);
document.querySelector('.DOB-m').addEventListener('input', validateDOB);
document.querySelector('.DOB-y').addEventListener('input', validateDOB);

function validateEmailId() {
  let isValid = true;
  mailId = document.querySelector('.mailId input').value;
  if (/[a-zA-Z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(mailId)) {
    isValid = true;
  } else {
    isValid = false;
  }
  if (isValid) {
    document.querySelector('.mailId p').innerHTML = "Valid!";
    return true;
  } else {
    document.querySelector('.mailId p').innerHTML = "Invalid!";
    return false;
  }
}

document.querySelector('.mailId input').addEventListener('input', validateEmailId);

function validateUserId() {
  let isValid = true;
  userId = document.querySelector('.userId input').value;

  if (/^[a-zA-Z0-9]+$/.test(userId)) {
    if (userId.length >= 4) {
      isValid = true;
    } else {
      document.querySelector('.userId p').innerHTML = "Username must contain <br> atleast 4 characters.";
      isValid = false;
    }
  } else {
    document.querySelector('.userId p').innerHTML = "Special characters not allowed.";
    isValid = false;
  }

  if (isValid) {
    document.querySelector('.userId p').innerHTML = "Valid!";
    return true;
  } else {
    return false;
  }
}

document.querySelector('.userId input').addEventListener('input', validateUserId);

function validatePassword() {
  let isValid = true;
  password = document.querySelector('.Password input').value;

  if (password.length >= 6) {
    isValid = true;
  } else {
    isValid = false;
  }

  if (isValid) {
    document.querySelector('.Password p').innerHTML = "Valid!";
    return true;
  } else {
    document.querySelector('.Password p').innerHTML = "Password must contain<br> atleast 6 characters.";
    return false;
  }
}

document.querySelector('.Password input').addEventListener('input', validatePassword);
//not my
function validateGender() {
  let isGenderSelected = document.querySelector('input[name="gender"]:checked') !== null;

  if (isGenderSelected) {
    document.querySelector('.Gender p').innerHTML = " ";
    return true;
  } else {
    document.querySelector('.Gender p').innerHTML = "Please select a gender.";
    return false;
  }
}
//my

document.querySelector('.Gender #male').addEventListener('change', validateGender);
document.querySelector('.Gender #female').addEventListener('change', validateGender);
document.querySelector('.Gender #other').addEventListener('change', validateGender);

function validityCheck() {
  let regValid = reg();
  let dobValid = validateDOB();
  let emailValid = validateEmailId();
  let userIdValid = validateUserId();
  let passwordValid = validatePassword();
  let genderValid = validateGender();
  if (regValid && dobValid && emailValid && userIdValid && passwordValid) {
    document.querySelector('.validationText').innerHTML = "Form is valid!";
  } else {
    document.querySelector('.validationText').innerHTML = "Form is invalid!";
  }
}

document.querySelector('.formsubmit').addEventListener('click', validityCheck);
