document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.querySelector('.input2');
  const eyeIcon = document.querySelector('.mata-tutup');
  const usernameInput = document.querySelector('.input');
  const loginButton = document.getElementById('tombolSaya');

  eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.src = 'outlineeyeon.png';
    } else {
      passwordInput.type = 'password';
      eyeIcon.src = 'outlineeyeoff.png';
    }
  });

  loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'arthurmorgan' && password === '********') {
      alert('Anda berhasil login.');
    } else {
      alert('Login gagal. Pastikan Anda mengisi username dan password dengan benar.');
    }
  });
});
