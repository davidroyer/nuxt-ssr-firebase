window.onNuxtReady(() => {
  if (!('serviceWorker' in navigator)) {
    console.warn('serviceWorker is not supported')
    return
  }

  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  });
})
