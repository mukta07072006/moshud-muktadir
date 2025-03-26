document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const moonIcon = toggle.querySelector('.fa-moon');
  const sunIcon = toggle.querySelector('.fa-sun');
  
  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply saved theme
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcons(savedTheme);

  // Toggle on click
  toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme);
  });

  function updateIcons(theme) {
    moonIcon.hidden = theme === 'dark';
    sunIcon.hidden = theme === 'light';
  }
});
