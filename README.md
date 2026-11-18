# Jelajah Majalengka

Draf Beranda untuk portal wisata Kabupaten Majalengka. Panel di bawah hero mencari destinasi berdasarkan nama atau kecamatan dan menyaring lima kategori wisata. Kartu destinasi memuat tips menjaga kawasan dan tautan menuju peta atau sumber informasi.

## Menjalankan

Buka `index.html` di browser modern, atau jalankan perintah ini dari folder proyek jika menggunakan Python.

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Buka `http://127.0.0.1:8000/`. Aset galeri tersimpan lokal. Peta Google Maps dan tautan eksternal memerlukan internet.

## Struktur

- `index.html` memuat Beranda, pratinjau destinasi, selayang pandang, dan panduan berkunjung.
- `assets/css/site.css` memuat tata letak dan identitas visual.
- `assets/css/detail.css` memuat tata letak katalog untuk semua halaman wisata.
- `assets/js/beranda.js` mengatur pencarian dan filter katalog. Seluruh kartu dan bagian info singkat tetap bisa dibuka saat JavaScript dinonaktifkan.
- `assets/js/galeri-wisata.js` mengatur navigasi galeri foto pada halaman detail.
- Setiap halaman wisata ada di folder `kategori/nama-wisata/index.html`. Contohnya `curug/curug-cipeuteuy/index.html`, dengan URL `/curug/curug-cipeuteuy/` saat dibuka lewat server statis.
- `assets/vendor/bootstrap/` berisi CSS Bootstrap 6.0.0-alpha.1 dan lisensi MIT dari arsip yang dilampirkan.

## Kredit aset

Foto ditampilkan dengan potongan sesuai tata letak. Panorama Panyaweuyan dan foto Ciboer juga diperkecil dan mengikuti lisensi [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

- Panorama Panyaweuyan oleh Rita Kusuma Dewi. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Panyaweuyan,_Argapura,_Kabupaten_Majalengka.jpg)
- Foto kartu Panyaweuyan oleh Irhanz. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Terasering_panyaweuyan_argapura.jpg)
- Ciboer oleh Masmusdjeprat. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pagi_Di_Ciboer_Chandra_Musliminnata.jpg)
- Curug Maja oleh Farshya. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Curugmaja.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
- Persawahan Bantaragung oleh Ganjarmustika1904. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Indahnya_Sawah_Indonesia.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- Taman Raharja oleh Jie73 dan Bundaran Munjul oleh Tosin Agus. [Taman Majalengka](https://commons.wikimedia.org/wiki/File:Taman_Majalengka.jpg), [Bundaran Munjul](https://commons.wikimedia.org/wiki/File:Bunderan_Munjul.JPG), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
- Dokumentasi galeri dari SISPARNAS. [Curug Cipeuteuy](https://sisparnas.kemenpar.go.id/p/25505), [Curug Muara Jaya](https://sisparnas.kemenpar.go.id/p/25873), [Paralayang Majalengka](https://sisparnas.kemenpar.go.id/p/25837)
- Bricolage Grotesque dan Instrument Sans menggunakan SIL Open Font License. Teks lisensi tersedia di `assets/fonts/`.

## Cakupan katalog

Beranda menyajikan 18 destinasi dari lima lampiran. Enam pilihan muncul saat pertama dibuka. Pencarian dan filter mencakup seluruh katalog. Desa Wisata Bantaragung berfungsi sebagai panduan kawasan. Halaman lama Gunung Panten dan Taman Raharja tetap tersedia lewat URL masing-masing.

Jam serta tarif yang berbeda antar-rujukan ditandai untuk dikonfirmasi. Untuk Kanaga Hill gunakan pin dari pengelola. Untuk Ciremai gunakan kanal Balai TNGC untuk memeriksa akses. Pin Ciremai hanya menunjukkan lokasi gunung.

Foto PDF belum dimasukkan ke situs karena kredit dan izin pakainya belum tersedia. Entri tanpa foto menggunakan ikon kategori.
