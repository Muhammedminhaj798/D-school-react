export function preloadImages(images, timeout = 8000) {
  return new Promise(resolve => {
    let loaded = 0;
    const total = images.length;

    const done = () => resolve(true);

    images.forEach(src => {
      const img = new Image();
      img.src = src;

      const onComplete = () => {
        loaded++;
        if (loaded === total) done();
      };

      img.onload = onComplete;
      img.onerror = onComplete;
    });

    // ⛑ fail-safe (never block UI)
    setTimeout(done, timeout);
  });
}
