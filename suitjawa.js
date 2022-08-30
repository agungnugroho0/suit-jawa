
ulang ='TRUE';
while (ulang){
//menangkap pilihan player
p = prompt ('pilih : gajah, semut, orang');

// pilihan computer
    //membuat pilihan random
comp = Math.random();
if (comp <0.34){
    comp = 'gajah';
} else if (comp >=0.34 && comp < 0.77){
    comp = 'orang';
} else {
    comp = 'semut';
} 

// rules
hasil = '';
if (p == comp){
    hasil = 'SERI';
} else if (p == 'gajah'){ //menentukan pilihan player
 hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';//mengecek pilihan comp
} else if (p == 'orang'){
    hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';//mengecek pilihan comp
} else if (p == 'semut'){
    hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';//mengecek pilihan comp
} else {
    hasil = 'memasukan pilihan yang salah';
}

// tampilkan hasilnya
console.log('pilihan kamu : ' +p);
console.log('pilihan computer: ' +comp);
if (p !== '' ){
    hasil = alert ('kamu ' + hasil + ' dari computer');
} else {
    hasil = alert ('mohon maaf '+hasil);
}
ulang = confirm ('MAIN LAGI ?');
}
alert('TERIMA KASIH TELAH BERMAIN');
