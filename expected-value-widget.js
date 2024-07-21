let allSubmissions = [];

document.addEventListener('DOMContentLoaded', function() {
  const valueInput = document.getElementById('valueInput');
  const submitBtn = document.getElementById('submitBtn');
  const inputSection = document.getElementById('inputSection');
  const thankYouMessage = document.getElementById('thankYouMessage');
  const chartSection = document.getElementById('chartSection');

  submitBtn.addEventListener('click', function() {
    const value = parseFloat(valueInput.value);
    if (isNaN(value) || value < 0) {
      alert('Please enter a valid positive number');
      return;
    }
    
    sendToGoogleSheets(value);

    // Disable input and show thank you message
    inputSection.style.display = 'none';
    thankYouMessage.style.display = 'block';

    // Fetch all submissions and update chart
    fetchAllSubmissions();
  });
});

function sendToGoogleSheets(value) {
  // Replace with your Google Apps Script Web App URL
  const url = 'https://script.google.com/a/macros/poker.camp/s/AKfycbyCtw4qqkfFl2v0kWokrs5Pul-zPk8MnxGE9HLAD_kyiLv8ji6ZL6hdUOya9Gdyunr4/exec';

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    body: JSON.stringify({value: value, timestamp: new Date().toISOString()})
  })
  .then(response => console.log('Success:', response))
  .catch(error => console.error('Error:', error));
}

function fetchAllSubmissions() {
  // Replace with your Google Apps Script Web App URL for GET requests
  const url = 'https://script.google.com/a/macros/poker.camp/s/AKfycbyCtw4qqkfFl2v0kWokrs5Pul-zPk8MnxGE9HLAD_kyiLv8ji6ZL6hdUOya9Gdyunr4/exec';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      allSubmissions = data.map(row => parseFloat(row[0]));
      updateChart();
    })
    .catch(error => console.error('Error:', error));
}

function updateChart() {
  const chartSection = document.getElementById('chartSection');
  const medianValueSpan = document.getElementById('medianValue');
  const ctx = document.getElementById('submissionsChart').getContext('2d');

  // Calculate median
  const sortedSubmissions = [...allSubmissions].sort((a, b) => a - b);
  const median = sortedSubmissions.length % 2 === 0
    ? (sortedSubmissions[sortedSubmissions.length / 2 - 1] + sortedSubmissions[sortedSubmissions.length / 2]) / 2
    : sortedSubmissions[Math.floor(sortedSubmissions.length / 2)];

  medianValueSpan.textContent = median.toFixed(2);

  // Create histogram data
  const binSize = (Math.max(...allSubmissions) - Math.min(...allSubmissions)) / 10;
  const histogramData = Array(10).fill(0);
  allSubmissions.forEach(value => {
    const binIndex = Math.min(Math.floor((value - Math.min(...allSubmissions)) / binSize), 9);
    histogramData[binIndex]++;
  });

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Array(10).fill().map((_, i) => 
        `${(Math.min(...allSubmissions) + i * binSize).toFixed(2)} - ${(Math.min(...allSubmissions) + (i + 1) * binSize).toFixed(2)}`
      ),
      datasets: [{
        label: 'Submissions',
        data: histogramData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Submissions'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Value Ranges'
          }
        }
      }
    }
  });

  chartSection.style.display = 'block';
}