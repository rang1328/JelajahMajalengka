for (const gallery of document.querySelectorAll('.detail-gallery')) {
  const track = gallery.querySelector('.gallery-track');
  const photos = [...track.querySelectorAll('.detail-photo')];
  const controls = gallery.querySelector('.gallery-controls');
  const status = controls.querySelector('output');
  const previous = controls.querySelector('[data-previous]');
  const next = controls.querySelector('[data-next]');
  let current = 0;
  let touchStart;

  function showPhoto(index) {
    current = (index + photos.length) % photos.length;
    photos.forEach((photo, position) => {
      photo.hidden = position !== current;
    });

    status.textContent = `${current + 1} dari ${photos.length}`;
  }

  previous.addEventListener('click', () => showPhoto(current - 1));
  next.addEventListener('click', () => showPhoto(current + 1));

  track.addEventListener('touchstart', event => {
    touchStart = event.touches.length === 1 ? event.touches[0] : undefined;
  }, { passive: true });

  track.addEventListener('touchend', event => {
    if (!touchStart || event.touches.length || event.changedTouches.length !== 1) return;
    const touchEnd = event.changedTouches[0];
    const horizontal = touchEnd.clientX - touchStart.clientX;
    const vertical = touchEnd.clientY - touchStart.clientY;
    touchStart = undefined;
    if (Math.abs(horizontal) > Math.max(45, Math.abs(vertical))) {
      showPhoto(current + (horizontal < 0 ? 1 : -1));
    }
  }, { passive: true });

  track.addEventListener('touchcancel', () => {
    touchStart = undefined;
  });

  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });

  gallery.dataset.enhanced = '';
  showPhoto(0);
  controls.hidden = false;
}
