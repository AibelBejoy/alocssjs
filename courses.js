

function courseSelector(courseName, subjects, courseImage) {

  document.querySelector('.courses-c').style.display = 'none';

  document.querySelector('.courses-c-details').style.display = 'flex';

  document.querySelector('.courses-c-details h2').innerHTML = courseName;
  document.querySelector('.subjects').innerHTML = subjects;
  document.querySelector('.courses-c-details img').src = courseImage;
}

function goBackCourses() {
  // Show the course cards
  document.querySelector('.courses-c').style.display = 'flex';

  // Hide the course details section
  document.querySelector('.courses-c-details').style.display = 'none';
}





