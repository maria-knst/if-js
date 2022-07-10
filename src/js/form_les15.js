const formEl = document.getElementById('formEl');
const sendButtonEl = document.getElementById('send_button');
const photoDivEl = document.getElementById('form__photo-div');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);

  fetch('https://fe-student-api.herokuapp.com/api/file', {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
  }).then((response) => {
    console.log(response);
  });
});

photoDivEl.addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('photo').click();
});

document.getElementById('photo').addEventListener('change', (event) => {
  event.preventDefault();
  const reader = new FileReader();

  reader.onloadend = function () {
    document.getElementById(
      'form__photo-div',
    ).innerHTML = `<img src="${reader.result}" style="max-width: 20vw;  max-height: 30vh;">`;
  };

  if (event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0]);
  }
});
