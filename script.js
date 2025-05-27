document.querySelector('.theme-toggle').addEventListener('click', event => {
  document.body.classList.toggle('dark-mode');

  document.querySelector('.theme-toggle-icon').src = 'assets/images/icon-moon.svg';
});

document.querySelector('.all-filter-button').addEventListener('click', () => {
  // Apply styles to filter button
  document.querySelector('.all-filter-button').classList.add('selected');
  document.querySelector('.active-filter-button').classList.remove('selected');
  document.querySelector('.inactive-filter-button').classList.remove('selected');

  // Filter grid to only include active extensions
  document.querySelectorAll('.extension-card').forEach(card => {
    card.style.display = 'grid';
  });
});

document.querySelector('.active-filter-button').addEventListener('click', () => {
  // Apply styles to filter button
  document.querySelector('.all-filter-button').classList.remove('selected');
  document.querySelector('.active-filter-button').classList.add('selected');
  document.querySelector('.inactive-filter-button').classList.remove('selected');

  filterToActiveExtensionsOnly();
});

document.querySelector('.inactive-filter-button').addEventListener('click', () => {
  // Apply styles to filter button
  document.querySelector('.all-filter-button').classList.remove('selected');
  document.querySelector('.active-filter-button').classList.remove('selected');
  document.querySelector('.inactive-filter-button').classList.add('selected');

  filterToInactiveExtensionOnly();
});

document.querySelectorAll('.remove-button').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.extension-card').remove();
  });
});

document.querySelectorAll('.active-button').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.extension-card');
    card.classList.toggle('active');
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
