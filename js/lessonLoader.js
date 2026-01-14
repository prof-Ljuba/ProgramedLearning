let lessonData = null;      // cela lekcija (svi jezici)
let currentLesson = null;  // samo aktivni jezik
let currentLanguage = "sr";

async function loadLesson(lessonPath, language) {
  try {
    const response = await fetch(lessonPath);
    if (!response.ok) {
      throw new Error("Ne mogu da učitam lekciju");
    }

    lessonData = await response.json();

    if (!lessonData.languages || !lessonData.languages[language]) {
      throw new Error("Izabrani jezik ne postoji u lekciji");
    }

    currentLanguage = language;
    currentLesson = lessonData.languages[language];

    console.log("Lekcija učitana:", currentLesson);

    // privremeno samo test
    renderLessonTitle();

  } catch (error) {
    console.error("Greška pri učitavanju lekcije:", error);
    alert("Greška pri učitavanju lekcije.");
  }
}
