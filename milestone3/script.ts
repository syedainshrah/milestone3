//  Get references to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission

form.addEventListener('submit',(event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Persinal Information</h3>
    <p><b>Name:</b><span contenreditable="true"> ${name}<span></p>
    <p><b>Email:</b><span contenreditable="true"> ${email}<span></p>
    <p><b>Phone:</b> <span contenreditable="true"> ${phone}<span></p>

    <h3>Education</h3>
    <p contenreditable="true">${education}</p>
    
    <h3>Experience</h3>
    <p contenreditable="true">${experience}</p>
    
    <h3>Skills</h3>
    <p contenreditable="true">${skills}</p>
    `;
    
    // Display the generted resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('Resume display element not found.');
    }
});