// Mengambil referensi elemen form
var loginForm = document.getElementById("login-form");
  
// Menangani submit form
loginForm.addEventListener("submit", function(event) {
event.preventDefault(); // Mencegah pengiriman form secara default
  
// Mengambil nilai input username dan password
var username = document.getElementById("login-username").value;
var password = document.getElementById("login-password").value;
  
// Melakukan validasi login
if (username === "admin" && password === "12345") {
    alert("Login berhasil");
    // Redirect ke halaman lain atau lakukan tindakan sesuai kebutuhan
    } else {
        alert("Username atau password salah");
    }
});