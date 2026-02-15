async function loadJSQuestions() {
  try {
    const res = await fetch("js/data/js.data.json");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to load JS questions", err);
    return [];
  }
}
