var LenregNo;
function reg(){
  if(document.querySelector('.regNo').value.length===6){
    document.querySelector('.regNo-c p').innerHTML = "Valid!";
  }
  else{
    document.querySelector('.regNo-c p').innerHTML = "invalid!";
  }
}

function dob(){
  if(document.querySelector('.DOB').value<0 || document.querySelector('.DOB').value>31){
        document.querySelector('.DOB-c p').innerHTML = "invalid!";
        document.querySelector('.DOB').setAttribute('maxlength', '2');
  }
  else{
        document.querySelector('.DOB').setAttribute('maxlength', '10');
        document.querySelector('.DOB-c p').innerHTML = "Valid!";

        if(document.querySelector('.DOB').value.length==2){
          document.querySelector('.DOB').value = document.querySelector('.DOB').value + '/';
    }
  }

  if(document.querySelector('.DOB').value.length==5){
    document.querySelector('.DOB').value = document.querySelector('.DOB').value + '/';
  }


}
