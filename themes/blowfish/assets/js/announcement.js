(() => {
  if (typeof document === "undefined") {
    return;
  }

  const bar = document.querySelector('[data-announcement]');
  if (!bar) {
    return;
  }

  const id = bar.getAttribute('data-announcement-id') || 'global';
  const dismissible = bar.getAttribute('data-announcement-dismissible') === 'true';
  const once = bar.getAttribute('data-announcement-once') !== 'false';
  const storageKey = `blowfish:announcement:${id}`;

  if (dismissible && once) {
    try {
      if (window.localStorage.getItem(storageKey) === 'dismissed') {
        bar.remove();
        return;
      }
    } catch (err) {
      console.warn('Announcement storage is not available', err);
    }
  }

  const dismissButton = bar.querySelector('[data-announcement-dismiss]');
  if (!dismissible || !dismissButton) {
    return;
  }

  dismissButton.addEventListener('click', () => {
    bar.classList.add('announcement-hidden');
    if (once) {
      try {
        window.localStorage.setItem(storageKey, 'dismissed');
      } catch (err) {
        console.warn('Unable to persist announcement dismissal', err);
      }
    }
  });
})();
