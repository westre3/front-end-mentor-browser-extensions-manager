document.querySelector('.theme-toggle').addEventListener('click', event => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.querySelector('.theme-toggle-icon').src = 'assets/images/icon-moon.svg';
    document.querySelector('#theme-toggle-name').textContent = 'Toggle theme to dark mode';
    document.querySelector('.logo').setAttribute('src', 'assets/images/logo-light.svg');
  } else {
    document.body.classList.add('dark-mode');
    document.querySelector('.theme-toggle-icon').src = 'assets/images/icon-sun.svg';
    document.querySelector('#theme-toggle-name').textContent = 'Toggle theme to light mode';
    document.querySelector('.logo').setAttribute('src', 'assets/images/logo-dark.svg');
  }
});

document.querySelector('.all-filter-button').setAttribute('aria-current', 'true');

document.querySelector('.all-filter-button').addEventListener('click', () => {
  // Apply styles to filter button
  document.querySelector('.all-filter-button').setAttribute('aria-current', 'true');
  document.querySelector('.active-filter-button').setAttribute('aria-current', 'false');
  document.querySelector('.inactive-filter-button').setAttribute('aria-current', 'false');

  // Filter grid to only include active extensions
  document.querySelectorAll('.extension-card').forEach(card => {
    card.style.display = 'grid';
  });
});

document.querySelector('.active-filter-button').addEventListener('click', () => {
  // Apply styles to filter button
  document.querySelector('.all-filter-button').setAttribute('aria-current', 'false');
  document.querySelector('.active-filter-button').setAttribute('aria-current', 'true');
  document.querySelector('.inactive-filter-button').setAttribute('aria-current', 'false');

  filterToActiveExtensionsOnly();
});

document.querySelector('.inactive-filter-button').addEventListener('click', () => {
  // Apply styles to filter button
  document.querySelector('.all-filter-button').setAttribute('aria-current', 'false');
  document.querySelector('.active-filter-button').setAttribute('aria-current', 'false');
  document.querySelector('.inactive-filter-button').setAttribute('aria-current', 'true');

  filterToInactiveExtensionOnly();
});

document.querySelectorAll('.remove-button').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.extension-card').remove();
  });
});

document.querySelectorAll('.active-button').forEach(button => {
  const card = button.closest('.extension-card');

  if (card.classList.contains('active')) {
    button.setAttribute('aria-pressed', 'true');
  } else {
    button.setAttribute('aria-pressed', 'false');
  }

  button.addEventListener('click', () => {
    card.classList.toggle('active');

    if (button.getAttribute('aria-pressed') === 'true') {
      button.setAttribute('aria-pressed', 'false');
    } else if (button.getAttribute('aria-pressed') === 'false') {
      button.setAttribute('aria-pressed', 'true');
    }
  });
});

function filterToActiveExtensionsOnly() {
  document.querySelectorAll('.extension-card').forEach(card => {
    if (card.classList.contains('active')) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterToInactiveExtensionOnly() {
  document.querySelectorAll('.extension-card').forEach(card => {
    if (card.classList.contains('active')) {
      card.style.display = 'none';
    } else {
      card.style.display = 'grid';
    }
  });
}
