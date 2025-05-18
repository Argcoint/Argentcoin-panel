
function applyChanges() {
  const title = document.getElementById('title-input').value;
  const bio = document.getElementById('bio-input').value;
  const email = document.getElementById('email-input').value;
  const bgColor = document.getElementById('bg-color').value;
  const textColor = document.getElementById('text-color').value;

  if (title) document.getElementById('main-title').innerText = title;
  if (bio) document.getElementById('bio').innerText = bio;
  if (email) document.getElementById('email').innerText = email;

  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
}

document.getElementById('logo-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('logo').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
