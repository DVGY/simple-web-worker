import './styles.css';

document.getElementById('app').innerHTML = `
<h1>A simple Web Worker Example</h1>
<div>
simulateHeavyWork() Function will be executed by Web Worker IF YOU CLICK ON BELOW BUTTON
</div>
`;
const startButton = document.getElementById('startButton');
const resultElement = document.getElementById('result');
const duration = 5000;

if (window.Worker) {
  console.info('Worker Supported');
  const worker = new Worker(new URL('worker.js', import.meta.url));

  startButton.addEventListener('click', () => {
    worker.postMessage(duration);
  });

  worker.onmessage = (event) => {
    resultElement.textContent = `Result: ${event.data}`;
  };
} else {
  console.error('Worker Not Supported');
}
