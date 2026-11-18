const searchPanel = document.querySelector('#pencarian');
const search = document.querySelector('#destination-search');
const category = document.querySelector('#destination-category');
const cards = [...document.querySelectorAll('.destination-item')];
const status = document.querySelector('#destination-status');
const empty = document.querySelector('#destination-empty');
const reset = document.querySelector('#clear-filters');
const showAll = document.querySelector('#show-all');
const heading = document.querySelector('#destination-title');
const params = new URLSearchParams(location.search);
const categoryLinks = [...document.querySelectorAll('[data-category-link]')];
let fullCatalog = params.get('semua') === '1';

search.value = params.get('q') || '';
if ([...category.options].some(option => option.value === params.get('kategori'))) {
  category.value = params.get('kategori');
}

function updateResults({ save = false } = {}) {
  const query = search.value.trim();
  const terms = query.toLocaleLowerCase('id').split(/\s+/).filter(Boolean);
  const filtered = Boolean(query) || category.value !== 'semua';
  let count = 0;
  for (const card of cards) {
    const matchesCategory = category.value === 'semua' || category.value === card.dataset.category;
    const searchable = card.dataset.search.toLocaleLowerCase('id');
    card.hidden = !matchesCategory || !terms.every(term => searchable.includes(term))
      || (!filtered && !fullCatalog && !card.hasAttribute('data-featured'));
    if (!card.hidden) count++;
  }

  status.textContent = !filtered && !fullCatalog
    ? `${count} pilihan untuk mulai`
    : `${count} destinasi${category.value !== 'semua' ? ' · ' + category.selectedOptions[0].text : ''}`;
  empty.hidden = count !== 0;
  reset.hidden = !filtered;
  showAll.hidden = filtered || fullCatalog;
  for (const link of categoryLinks) {
    if (link.dataset.categoryLink === category.value) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  }

  for (const key of ['q', 'kategori', 'semua']) params.delete(key);
  if (query) params.set('q', query);
  if (category.value !== 'semua') params.set('kategori', category.value);
  if (fullCatalog) params.set('semua', '1');
  const queryString = params.toString();
  const resultUrl = `index.html${queryString ? '?' + queryString : ''}#destinasi`;

  if (save) history.replaceState(null, '', resultUrl);
  try { sessionStorage.setItem('jelajah-results', resultUrl); } catch {}
}

function focusResults() {
  heading.focus({ preventScroll: true });
  heading.scrollIntoView();
}

function showResults() {
  updateResults({ save: true });
  focusResults();
}

document.querySelector('#destination-tools').addEventListener('submit', event => {
  event.preventDefault();
  showResults();
});
category.addEventListener('change', showResults);
reset.addEventListener('click', () => {
  category.value = 'semua';
  search.value = '';
  fullCatalog = true;
  showResults();
});
showAll.addEventListener('click', () => {
  fullCatalog = true;
  showResults();
});
for (const link of categoryLinks) {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    category.value = link.dataset.categoryLink;
    search.value = '';
    showResults();
  });
}
for (const link of document.querySelectorAll('[data-focus-search], #edit-search')) {
  link.addEventListener('click', event => {
    event.preventDefault();
    search.focus({ preventScroll: true });
    searchPanel.scrollIntoView();
  });
}

for (const link of document.querySelectorAll('[data-detail-link]')) {
  if (location.protocol === 'http:' || location.protocol === 'https:') {
    link.href = link.href.replace(/index\.html$/, '');
  }
}

function revealHashCard() {
  const card = cards.find(item => '#' + item.id === location.hash);
  if (!card?.hidden) return;
  category.value = 'semua';
  search.value = '';
  fullCatalog = true;
  updateResults();
  card.scrollIntoView();
}

const tips = document.querySelector('.category-tips');
const tipPanels = [...tips.querySelectorAll('[data-tip-panel]')];
function updateTips() {
  const active = tips.querySelector('input:checked').value;
  for (const panel of tipPanels) panel.hidden = panel.dataset.tipPanel !== active;
}
tips.addEventListener('change', updateTips);
updateTips();

searchPanel.hidden = false;
document.querySelector('#destination-controls').hidden = false;
updateResults();
revealHashCard();
window.addEventListener('hashchange', revealHashCard);
