// script.js

const certificateForm = document.getElementById('certificate-form');
const certificateList = document.getElementById('certificate-list');

certificateForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const clientName = document.getElementById('client-name').value;
    const testDate = document.getElementById('test-date').value;
    const testResults = document.getElementById('test-results').value;

    const certificate = document.createElement('div');
    certificate.classList.add('certificate');
    certificate.innerHTML = `
        <p><strong>Client Name:</strong> ${clientName}</p>
        <p><strong>Test Date:</strong> ${testDate}</p>
        <p><strong>Test Results:</strong> ${testResults}</p>
    `;

    certificateList.appendChild(certificate);

    certificateForm.reset();
});
