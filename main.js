function cekNilai(){
  // mengambil value dari elemen input nilai
  // simpan ke dalam variabel bernama "nilai"
  let nilai = Number(document.getElementById('nilai').value)
  // menginisiasi varlabel "hasil" isinya string kosong
  
  let hasil = ""
  
  // menentukan angka ABCD berdasarkan isi variabel "nilai"
  
  // menggunakan percabangan if (Jika)
  if (nilai >= 88){
    hasil = "nilai A (Sangat Baik)"
  }else if (nilai >= 75) {
    hasil = "nilai B (Baik)"
  }else if (nilai >= 50) {
    hasil = "nilai C (Belajar Lagi yaa)"
  }else if (nilai >= 5) {
    hasil = "nilai D (Sedikit Tolol)"
  }else if (nilai > 0) {
    hasil = "nilai EE (TOLOL BANGETT!!!MANUSIA MACAM APAAN LU)"
  }
  document.getElementById('hasil').innerText = hasil
}