window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 4000); // Show intro for 4 seconds
});