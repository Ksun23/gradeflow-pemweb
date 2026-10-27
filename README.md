# GradeFlow — Analisis Nilai

Program web sederhana untuk latihan **percabangan (`if / else if / else`) dan perulangan (`for`)** menggunakan HTML, CSS, dan JavaScript murni.

## Fitur
- Memasukkan beberapa nilai sekaligus, dipisahkan dengan koma atau spasi.
- Mengelompokkan nilai menjadi lima predikat.
- Menentukan status lulus atau belum lulus.
- Menghitung rata-rata, total data, dan jumlah yang lulus.
- Validasi nilai agar berada pada rentang 0–100.
- Menampilkan hasil dalam tabel responsif.

## Struktur file
- `index.html` — struktur halaman dan elemen input/output.
- `style.css` — desain dan tata letak responsif.
- `script.js` — percabangan, perulangan, validasi, dan manipulasi DOM.

## Aturan predikat

| Nilai | Predikat |
|---|---|
| 90–100 | A |
| 80–89.99 | B |
| 70–79.99 | C |
| 60–69.99 | D |
| 0–59.99 | E |

Nilai 60 atau lebih dinyatakan lulus. Input di luar 0–100 atau bukan angka akan ditolak.

## Materi JavaScript
1. `getGrade()` menggunakan lima kondisi predikat melalui `if`, `else if`, dan `else`.
2. Perulangan `for` digunakan untuk memvalidasi input, mengolah nilai, dan membuat baris tabel.
3. Fungsi dan DOM memisahkan logika program serta memperbarui tampilan halaman.

## Cara menjalankan
1. Unduh atau clone repository.
2. Buka `index.html` di browser.

Alternatifnya, jalankan server lokal dari folder proyek:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Contoh input
`95, 82, 75, 63, 48`

Program menampilkan predikat dan status masing-masing nilai serta ringkasan rata-rata.

