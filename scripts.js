// Function to simulate resume analysis
function analyzeResume() {
    const resumeInput = document.getElementById("resumeInput");
    const jobDesc = document.getElementById("jobDesc").value;
    const progressBar = document.getElementById("progressBar");
    const resultsSection = document.getElementById("results");

    if (!resumeInput.files.length || !jobDesc.trim()) {
        alert("Please upload a resume and provide a job description.");
        return;
    }

    // Simulate uploading process
    let progress = 0;
    let uploadInterval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + "%";
        if (progress >= 100) {
            clearInterval(uploadInterval);
            // Simulate results
            resultsSection.style.display = "block";
            resultsSection.innerHTML = `
                <h3>Analysis Results</h3>
                <p>Your resume matches 85% with the job description. Here are some suggestions:</p>
                <ul>
                    <li>Include more keywords related to "JavaScript".</li>
                    <li>Highlight your project experience with React.js.</li>
                </ul>
            `;
        }
    }, 500);
}

// Open resume upload section
function openResumeUpload() {
    document.getElementById("resume").scrollIntoView({ behavior: 'smooth' });
}

