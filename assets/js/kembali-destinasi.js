let results;
try {
  results = sessionStorage.getItem('jelajah-results');
} catch {
  // The standard catalog link remains available when browser storage is disabled.
}

if (/^index\.html(?:\?[^#]*)?#destinasi$/.test(results || '')) {
  for (const link of document.querySelectorAll('[data-back-to-results]')) {
    link.href = '../../' + results;
  }
}
