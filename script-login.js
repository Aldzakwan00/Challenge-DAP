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

  let rememberedUsername = null;
  
  loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username && password) {
      const rememberMeCheckbox = document.getElementById('ingat-saya-checkbox');
      if (rememberMeCheckbox.checked) {
        localStorage.setItem('rememberedUsername', username);
        rememberedUsername = username;
      } else {
        localStorage.removeItem('rememberedUsername');
        rememberedUsername = null;
      }
      alert('Anda Berhasil Login');
    } else {
      alert('Login gagal. Pastikan Anda mengisi username dan password dengan benar.');
    }
  });

  rememberedUsername = localStorage.getItem('rememberedUsername');
  if (rememberedUsername) {
    usernameInput.value = rememberedUsername;
  }
});
