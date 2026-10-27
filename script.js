// GradeFlow: latihan percabangan if/else dan perulangan for.
const input = document.getElementById("scores");
const message = document.getElementById("message");
const results = document.getElementById("results");
const rows = document.getElementById("rows");

// Lima kondisi predikat: A, B, C, D, dan E.
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "E";
  }
}

function showMessage(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("error", isError);
}

function analyzeScores() {
  const raw = input.value.trim();
  if (raw === "") {
    showMessage("Masukkan setidaknya satu nilai terlebih dahulu.", true);
    results.hidden = true;
    return;
  }

  const parts = raw.split(/[\s,;]+/).filter(Boolean);
  const scores = [];

  // Perulangan for pertama: validasi seluruh input.
  for (let i = 0; i < parts.length; i++) {
    const score = Number(parts[i]);

    if (!Number.isFinite(score)) {
      showMessage("Input '" + parts[i] + "' bukan angka yang valid.", true);
      results.hidden = true;
      return;
    } else if (score < 0 || score > 100) {
      showMessage("Nilai harus berada di antara 0 dan 100. Periksa '" + parts[i] + "'.", true);
      results.hidden = true;
      return;
    } else {
      scores.push(score);
    }
  }

  let total = 0;
  let passed = 0;
  const data = [];

  // Perulangan for kedua: hitung total dan tentukan status.
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    const grade = getGrade(score);
    let status;

    if (score >= 60) {
      status = "Lulus";
      passed++;
    } else {
      status = "Belum lulus";
    }

    total += score;
    data.push({ number: i + 1, score, grade, status });
  }

  renderResults(data, total / scores.length, passed);
  showMessage("Berhasil menganalisis " + scores.length + " nilai.", false);
}

function addCell(row, value, className = "") {
  const cell = document.createElement("td");
  cell.textContent = value;
  if (className) cell.className = className;
  row.appendChild(cell);
}

function renderResults(data, average, passed) {
  rows.replaceChildren();

  // Perulangan for ketiga: buat baris tabel hasil.
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const row = document.createElement("tr");
    addCell(row, item.number);
    addCell(row, item.score);

    const gradeCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = "grade";
    badge.textContent = item.grade;
    gradeCell.appendChild(badge);
    row.appendChild(gradeCell);

    addCell(row, item.status, item.status === "Lulus" ? "pass" : "fail");
    rows.appendChild(row);
  }

  document.getElementById("total").textContent = data.length;
  document.getElementById("average").textContent = average.toFixed(2);
  document.getElementById("passed").textContent = passed;
  results.hidden = false;
}

document.getElementById("analyze").addEventListener("click", analyzeScores);
document.getElementById("reset").addEventListener("click", () => {
  input.value = "";
  rows.replaceChildren();
  results.hidden = true;
  showMessage("Form telah direset. Masukkan nilai untuk memulai analisis.");
  input.focus();
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) analyzeScores();
});