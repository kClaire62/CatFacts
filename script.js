//You just need to disable the button to prevent re-clicking while loading.
const factBox = document.getElementById('fact-box');
const getFactBtn = document.getElementById('get-fact-btn');
const errorMessage = document.getElementById('error-message');

getFactBtn.addEventListener('click', () => {
  fetch('https://catfact.ninja/fact')
    .then(response => {
      if (!response.ok) {
        throw new Error('API request failed');
      }
      return response.json();
    })
    .then(data => {
      factBox.textContent = data.fact;
      errorMessage.textContent = '';
    })
    .catch(error => {
      console.error('Error:', error);
      errorMessage.textContent = 'Could not load a cat fact.Try again!!!';
    });
});
