// Main application logic
let currentLanguage = "sr";
let currentLessonFile = "osnove_racunara.json";
let lessonData = null;

// Učitaj lekciju iz JSON fajla
async function loadLesson(language, lessonFile) {
  const path = `lessons/${language}/${lessonFile}`;

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error("Lesson not found");
    }

    lessonData = await response.json();
    showLessonInfo();
  } catch (error) {
    console.error("Greška pri učitavanju lekcije:", error);
    alert("Lekcija ne može da se učita.");
  }
}

// Prikaži osnovne informacije (za početak)
function showLessonInfo() {
  document.body.innerHTML = `
    <h1>${lessonData.title}</h1>
    <p><strong>Author:</strong> ${lessonData.author}</p>
    <p><strong>Language:</strong> ${lessonData.language}</p>
    <hr>
    <p>Lesson structure loaded successfully.</p>
  `;
}

// Init
window.addEventListener("load", () => {
  loadLesson(currentLanguage, currentLessonFile);
});
