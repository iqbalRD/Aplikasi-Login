/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */
/**
* Membuat Variable loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
* Membuat Variable inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat Variable inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat Variable expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat Variable expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat Variable email untuk menyimpan nilai email yang didapatkan saat button di tekan.
  * @constant {string}
  */
  const email = inputEmailElement.value;
  
  /**
  * Membuat Variable password untuk menyimpan nilai password yang didapatkan saat button di tekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
