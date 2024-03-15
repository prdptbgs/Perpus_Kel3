function editProfile() {
    document.getElementById("editForm").style.display = "block";
    document.getElementById("profile-details").style.display = "none";
  }
  
  function saveProfile() {
    var nama = document.getElementById("editNama").value;
    var nomorAnggota = document.getElementById("editNomorAnggota").value;
    var tanggalBergabung = document.getElementById("editTanggalBergabung").value;
    var email = document.getElementById("editEmail").value;
    var status = document.getElementById("editStatus").value;
    var jumlahBuku = document.getElementById("editJumlahBuku").value;
  
    document.getElementById("profile-details").innerHTML =
      "<li>Nama Lengkap: <strong>" + nama + "</strong></li><br>" +
      "<li>Nomor Anggota: <strong>" + nomorAnggota + "</strong></li><br>" +
      "<li>Tanggal Bergabung: <strong>" + tanggalBergabung + "</strong></li><br>" +
      "<li>Email: <strong>" + email + "</strong></li><br>" +
      "<li>Status Keanggotaan: <strong>" + status + "</strong></li><br>" +
      "<li>Jumlah Buku yang Dipinjam: <strong>" + jumlahBuku + "</strong></li><br>";
  
    // Panggil fungsi dari script.js
    displaySuccessMessage();
  }
  
  function displaySuccessMessage() {
    alert("Profil berhasil diperbarui!");
  }
  