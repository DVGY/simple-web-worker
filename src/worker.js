onmessage = (event) => {
  const duration = event.data;
  simulateHeavyWork(duration);
  postMessage('Complete Running Web Worker');
};

function simulateHeavyWork(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}
