// Decorative, muted playback. Motion preferences take precedence over autoplay.
export function attachHeroVideo(root, reducedMotion, translate = (value) => value) {
  const video = root.querySelector('.hero-video');
  const button = root.querySelector('.video-toggle');
  if (!video || reducedMotion.matches) return () => {};

  const backdrop = video.closest('.hero-backdrop');
  let inView = true;
  let userPaused = false;
  let disposed = false;

  const updateButton = () => {
    if (disposed) return;
    const label = video.paused ? 'Play video' : 'Pause video';
    button.textContent = translate(label);
    button.setAttribute('aria-label', translate(`${video.paused ? 'Play' : 'Pause'} background video`));
  };
  const play = () => {
    video.play().catch(() => {
      if (!disposed) updateButton();
    });
  };
  const syncPlayback = () => {
    if (disposed) return;
    if (!userPaused && inView && !document.hidden) play();
    else video.pause();
  };
  const ready = () => {
    backdrop.classList.add('video-ready');
    button.hidden = false;
    updateButton();
  };
  const fail = () => {
    backdrop.classList.remove('video-ready');
    button.hidden = true;
  };
  const toggle = () => {
    userPaused = !video.paused;
    syncPlayback();
  };

  video.addEventListener('loadeddata', ready);
  video.addEventListener('error', fail);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  button.addEventListener('click', toggle);
  document.addEventListener('visibilitychange', syncPlayback);

  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncPlayback();
  }, { threshold: 0.05 });
  observer.observe(video.closest('.hero'));
  video.muted = true;
  video.src = video.dataset.src;
  syncPlayback();

  return () => {
    disposed = true;
    observer.disconnect();
    document.removeEventListener('visibilitychange', syncPlayback);
    button.removeEventListener('click', toggle);
    video.removeEventListener('loadeddata', ready);
    video.removeEventListener('error', fail);
    video.removeEventListener('play', updateButton);
    video.removeEventListener('pause', updateButton);
    video.pause();
    video.removeAttribute('src');
    video.load();
  };
}
