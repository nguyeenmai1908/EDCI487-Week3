const quizzes = [
  {
    name: 'q1',
    correct: 'b',
    feedbackId: 'fb-q1',
    ok: 'Correct. He noticed strong differences in trees, shade, and heat exposure.',
    bad: 'Not quite. Focus on what he observed physically across neighborhoods.'
  },
  {
    name: 'q2',
    correct: 'a',
    feedbackId: 'fb-q2',
    ok: 'Correct. The issue was access and outreach, not lack of need.',
    bad: 'Not yet. Think about who was (and was not) being reached by programs.'
  }
];

quizzes.forEach((q) => {
  const radios = document.querySelectorAll(`input[name="${q.name}"]`);
  const feedback = document.getElementById(q.feedbackId);

  radios.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (radio.value === q.correct) {
        feedback.textContent = q.ok;
        feedback.className = 'feedback ok';
      } else {
        feedback.textContent = q.bad;
        feedback.className = 'feedback bad';
      }
      localStorage.setItem(`week3_${q.name}`, radio.value);
    });
  });

  const saved = localStorage.getItem(`week3_${q.name}`);
  if (saved) {
    const selected = document.querySelector(`input[name="${q.name}"][value="${saved}"]`);
    if (selected) selected.checked = true;
  }
});

const reflectionInput = document.getElementById('reflectionInput');
const saveState = document.getElementById('saveState');
const REFLECTION_KEY = 'week3_section1_reflection';

const savedReflection = localStorage.getItem(REFLECTION_KEY);
if (savedReflection) reflectionInput.value = savedReflection;

reflectionInput.addEventListener('input', () => {
  localStorage.setItem(REFLECTION_KEY, reflectionInput.value);
  saveState.textContent = 'Saved.';
  clearTimeout(window.__saveTimer);
  window.__saveTimer = setTimeout(() => {
    saveState.textContent = 'Saved locally in your browser.';
  }, 900);
});
