var validation = false;
function reg() {
  let regNo = +document.querySelector('.regNo').value;
  console.log(typeof regNo);

  if (document.querySelector('.regNo').value.length === 6 && !isNaN(regNo)) {
    document.querySelector('.regNo-c p').innerHTML = "Valid!";
    validation = true;
  }
  else {
    document.querySelector('.regNo-c p').innerHTML = "Invalid!";
  }

}


function validateDOB() {


  let dayValue = document.querySelector('.DOB-d').value;
  let monthValue = document.querySelector('.DOB-m').value;
  let yearValue = document.querySelector('.DOB-y').value;


  let isValid = true;

  if (dayValue < 1 || dayValue > 31) {
    isValid = false;
  }

  if (monthValue < 1 || monthValue > 12) {
    isValid = false;
  }


  if (yearValue <= 2000 || yearValue >= 2010) {
    isValid = false;
  }


  if (isValid) {
    document.querySelector('.DOB-c p').innerHTML = "Valid!";

    if (validation) {
      validation = true;
    }else{
      validation=false;
    }

  } else {
    document.querySelector('.DOB-c p').innerHTML = "Invalid!";
  }
}


document.querySelector('.DOB-d').addEventListener('input', validateDOB);
document.querySelector('.DOB-m').addEventListener('input', validateDOB);
document.querySelector('.DOB-y').addEventListener('input', validateDOB);

function validatemailId() {
  let isValid = true;
  let mailId = document.querySelector('.mailId input').value;
  if (/[a-zA-Z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(mailId)) {
    isValid = true;
  }
  else {
    isValid = false;
  }
  if (isValid) {
    document.querySelector('.mailId p').innerHTML = "Valid!";
    if (validation) {
      validation = true;
    }else{
      validation=false;
    }
  }
  else {
    document.querySelector('.mailId p').innerHTML = "Invalid!";
  }
}

document.querySelector('.mailId input').addEventListener('input', validatemailId);


function submit(){
  if(validation){
    document.querySelector('.validation').innerHTML="FORM VALID!!";
  }
  else{
    document.querySelector('.validation').innerHTML="FORM INVALID!!";
  }
}
document.querySelector('.formsubmit').addEventListener('click', submit);





