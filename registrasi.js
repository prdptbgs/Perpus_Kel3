var registerForm = document.getElementById("register-form");
    
      registerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman form secara default
    
        // Mengambil nilai input username, email, dan password
        var username = document.getElementById("reg-username").value;
        var email = document.getElementById("reg-email").value;
        var password = document.getElementById("reg-password").value;
    
        // Melakukan validasi dan tindakan registrasi
        if (username && email && password) {
          // Lakukan tindakan registrasi di sini, misalnya mengirim data ke server
          alert("Registrasi berhasil");
          registerForm.reset(); // Mengosongkan form setelah registrasi berhasil
        } else {
          alert("Mohon lengkapi semua field");
        }
      });
