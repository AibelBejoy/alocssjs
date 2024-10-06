
function changeTeacher(teacherImg, teacherName) {
  const imgElement = document.querySelector('.teacher-img')
  imgElement.src = teacherImg;
  document.querySelector('.teacher-info .name').innerHTML = teacherName;
}