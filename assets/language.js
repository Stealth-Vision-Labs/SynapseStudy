(function () {
  const form = document.getElementById('languageQuery');
  const input = document.getElementById('query');
  const output = document.getElementById('queryOutput');
  if (!form || !input || !output) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = String(input.value || '').trim();
    if (!q) return;
    output.textContent = `Question received: ${q}\n(Processing coming soon.)`;
    input.select();
  });
})();

