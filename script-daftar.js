document.addEventListener('DOMContentLoaded', function () {
  const passwordInputs = document.querySelectorAll('.input2[type="password"]');
  const mataTutup = document.querySelectorAll('.mata-tutup');
  const usernameInput = document.querySelector('.input[type="text"]');
  const registerButton = document.getElementById('tombolSaya');
  const masukLink = document.querySelector('.teks-masuk');
  const successMessage = document.getElementById('success-message'); // Menambahkan elemen pesan sukses

  mataTutup.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      if (passwordInputs[index].type === 'password') {
        passwordInputs[index].type = 'text';
        icon.src = 'outlineeyeon.png';
      } else {
        passwordInputs[index].type = 'password';
        icon.src = 'outlineeyeoff.png';
      }
    });
  });

  usernameInput.addEventListener('input', () => {
    const usernameValue = usernameInput.value;
    const lowercaseRegex = /^[a-z]+$/;

    if (!lowercaseRegex.test(usernameValue)) {
      usernameInput.value = usernameValue.toLowerCase();
    }
  });

  registerButton.addEventListener('click', () => {
    const username = document.querySelector('.input[type="text"]').value;
    const password = document.querySelectorAll('.input2[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('.input2[type="password"]')[1].value;

    if (password === confirmPassword) {
      successMessage.textContent = 'Akun berhasil dibuat! Silakan login.';
      successMessage.style.color = '#10b981';

      // Menambahkan penundaan sebelum mengarahkan ke halaman login
      setTimeout(function() {
        window.location.href = 'Login.html';
      }, 2000);
    } else {
      alert('Kata sandi dan konfirmasi kata sandi tidak sesuai.');
    }
  });

  masukLink.addEventListener('click', () => {
    window.location.href = 'Login.html';
  });
});
