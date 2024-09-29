var validation;
var regNo, dayValue, monthValue, yearValue, userId, password, mailId, Gender;

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
      document.querySelector('.userId p').innerHTML = "Username must contain <br> at least 4 characters.";
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
    document.querySelector('.Password p').innerHTML = "Password must contain<br> at least 6 characters.";
    return false;
  }
}

document.querySelector('.Password input').addEventListener('input', validatePassword);

function validateGender() {
  Gender = document.querySelector('input[name="gender"]:checked');

  if (Gender) {
    selectedGender = Gender.value;
    document.querySelector('.Gender p').innerHTML = " ";
    return true;
  } else {
    document.querySelector('.Gender p').innerHTML = "Please select a gender.";
    return false;
  }
}

document.querySelector('.Gender #male').addEventListener('change', validateGender);
document.querySelector('.Gender #female').addEventListener('change', validateGender);
document.querySelector('.Gender #other').addEventListener('change', validateGender);

function validityCheck() {
  event.preventDefault();
  let regValid = reg();
  let dobValid = validateDOB();
  let emailValid = validateEmailId();
  let userIdValid = validateUserId();
  let passwordValid = validatePassword();
  let genderValid = validateGender();

  if (regValid && dobValid && emailValid && userIdValid && passwordValid && genderValid) {
    document.querySelector('.validationText').innerHTML = "Form is valid!";
    return true;
  } else {
    document.querySelector('.validationText').innerHTML = "Form is invalid!";
    return false;
  }
}

document.querySelector('.formvalid').addEventListener('click', validityCheck);

function changeTeacher(teacherImg, teacherName){
  const imgElement = document.querySelector('.teacher-img')
  imgElement.src = teacherImg;
  document.querySelector('.teacher-info').innerHTML = teacherName;
}


//------------------------------------------------IGNORE---------------------------------------------------//
//not mine
//EMAILJS.SCRIPT RELATED - START
function sendMail(params) {
  const serviceID = "service_cr37hwp";
  const templateID = "template_7q9eaqe";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      console.log(res);
      alert("Your message was sent successfully!");a
    })
    .catch(err => console.log(err));
}
//EMAILJS-OVER

//EMAIL SENDING START
function emailSend(event) {
  event.preventDefault();
  
  let formValid = validityCheck();

  if (formValid) {
    const params = {
      regNo: regNo,
      dob: `${dayValue}-${monthValue}-${yearValue}`,
      gender: selectedGender,
      email: mailId,
      username: userId,
      password: password,
    };

    sendMail(params);
    console.log("Email sent successfully");
    setTimeout(() => window.location.href = 'apply-form-received.html', 5000);

  } else {
    document.querySelector('.validationText').innerHTML = "Form is invalid!";
    console.log("Email not sent");
  }
}

document.querySelector('.formsubmit').addEventListener('click', emailSend);
//EMAIL SENDING OVER
//----------------------------------------------------------------------------------------------------//