function changeBackground(imagePath, imgId) {
  const container = document.querySelector('.container');
  container.style.backgroundImage = `url(${imagePath})`;
  container.style.animation = 'slideIn 0.5s ease-in-out';

  // Reset animation after it completes
  container.addEventListener('animationend', () => {
    container.style.animation = '';
  });
}

let currentContentIndex = 1; // Initial content index

function autoChangeContent() {
  const currentContent = document.getElementById(`content${currentContentIndex}`);
  
  // Hide all content
  document.querySelectorAll('.content').forEach(content => {
    content.style.display = 'none';
  });

  // Display current content
  currentContent.style.display = 'block';

  // Increment index or reset to 1 if reached the end
  currentContentIndex = (currentContentIndex % 15) + 1;
}

// Delay the start of the function by 1 second
setTimeout(function () {
  // Display the card
  document.querySelector('.card').style.display = 'block';

  // Call the function every 2 seconds after the initial delay
  setInterval(autoChangeContent, 3000);
}, 1500);
