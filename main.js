function CekNilai() {
  // mengambil value dari elemen input nilai 
  // simpan ke dalam varlabel bernama "nilai"
  let nilai = Number(document.getElementById('nilai').value)
  
  //menginisiasi varlabel "hasil" isinya string kosong""
  let hasil = ""
  
  // menentukan angka A B C D berdasarkan isi varlabel "nilai"
  // menggunakan percabangan if (jika) 
  // dan membandingkan varlabel "nilai"
  if (nilai >= 88) {
    hasil = "nilai A (Sangat Baik)"
  } else if (nilai >= 75) {
    hasil = "nilai B (Baik)"
    
  }else if (nilai >= 74){
    hasil = "nilai C (buruk)"
  }
  else if (nilai >= 49){
    hasil = "nilai D (sangat buruk)"
  }
  //tampilkan isi variabel "hasil" ke elemen "hasil" di html
  document.getElementById('hasil').innerText = hasil 
   
 
}
