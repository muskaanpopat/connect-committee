
document.addEventListener('DOMContentLoaded', function() {
    // Navigation Functionality
    const navLinks = document.querySelectorAll('.nav-links a');
    const pageSections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show target page
            pageSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetPage) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // User Role Selector
    const roleOptions = document.querySelectorAll('.role-option');
    const currentRoleElement = document.querySelector('.current-role');
    const profileRoleDisplay = document.getElementById('profileRoleDisplay');
    
    // Controls for different roles
    const committeeControls = document.getElementById('committeeControls');
    const committeeInternshipControls = document.getElementById('committeeInternshipControls');
    const examCellControls = document.getElementById('examCellControls');

    roleOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedRole = this.getAttribute('data-role');
            
            // Update displayed role
            if (currentRoleElement) {
                currentRoleElement.textContent = this.textContent;
            }
            
            if (profileRoleDisplay) {
                profileRoleDisplay.textContent = this.textContent;
            }
            
            // Show/hide role-specific controls
            if (committeeControls && committeeInternshipControls && examCellControls) {
                if (selectedRole === 'committee') {
                    committeeControls.classList.remove('hidden');
                    committeeInternshipControls.classList.remove('hidden');
                    examCellControls.classList.add('hidden');
                } else if (selectedRole === 'exam-cell') {
                    committeeControls.classList.add('hidden');
                    committeeInternshipControls.classList.add('hidden');
                    examCellControls.classList.remove('hidden');
                } else {
                    committeeControls.classList.add('hidden');
                    committeeInternshipControls.classList.add('hidden');
                    examCellControls.classList.add('hidden');
                }
            }
        });
    });

    // Modal Functionality
    const modals = document.querySelectorAll('.modal');
    const closeModalButtons = document.querySelectorAll('.close-modal, .cancel-btn');
    
    // Add Event Button
    const addEventBtn = document.getElementById('addEventBtn');
    const eventFormModal = document.getElementById('eventFormModal');
    
    if (addEventBtn && eventFormModal) {
        addEventBtn.addEventListener('click', function() {
            eventFormModal.style.display = 'block';
        });
    }
    
    // Add Internship Button
    const addInternshipBtn = document.getElementById('addInternshipBtn');
    // Reusing the event form for simplicity, but could create a separate form
    
    if (addInternshipBtn && eventFormModal) {
        addInternshipBtn.addEventListener('click', function() {
            eventFormModal.style.display = 'block';
        });
    }
    
    // Exam Schedule Button
    const addExamScheduleBtn = document.getElementById('addExamScheduleBtn');
    const examScheduleModal = document.getElementById('examScheduleModal');
    
    if (addExamScheduleBtn && examScheduleModal) {
        addExamScheduleBtn.addEventListener('click', function() {
            examScheduleModal.style.display = 'block';
        });
    }
    
    // Results Upload Button
    const addResultsBtn = document.getElementById('addResultsBtn');
    const resultsUploadModal = document.getElementById('resultsUploadModal');
    
    if (addResultsBtn && resultsUploadModal) {
        addResultsBtn.addEventListener('click', function() {
            resultsUploadModal.style.display = 'block';
        });
    }
    
    // Login Button
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', function() {
            loginModal.style.display = 'block';
        });
    }
    
    // Close Modal Buttons
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });
    
    // Close Modal when clicking outside
    window.addEventListener('click', function(e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Form Submissions - Mockup for frontend only
    const eventForm = document.getElementById('eventForm');
    const examScheduleForm = document.getElementById('examScheduleForm');
    const resultsUploadForm = document.getElementById('resultsUploadForm');
    const loginForm = document.getElementById('loginForm');
    
    // Event Form Submission
    if (eventForm) {
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            alert('Event has been added successfully! Email notifications will be sent to relevant users.');
            
            // Close modal
            eventFormModal.style.display = 'none';
            
            // Reset form
            this.reset();
        });
    }
    
    // Exam Schedule Form Submission
    if (examScheduleForm) {
        examScheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            alert('Exam schedule has been published! Email notifications will be sent to all students.');
            
            // Close modal
            examScheduleModal.style.display = 'none';
            
            // Reset form
            this.reset();
        });
    }
    
    // Results Upload Form Submission
    if (resultsUploadForm) {
        resultsUploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            alert('Exam results have been published! Email notifications will be sent to all students.');
            
            // Close modal
            resultsUploadModal.style.display = 'none';
            
            // Reset form
            this.reset();
        });
    }
    
    // Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get selected role
            const selectedRole = document.getElementById('loginRole').value;
            
            // Update displayed role
            if (currentRoleElement) {
                currentRoleElement.textContent = selectedRole === 'student' ? 'Student' : 
                                               selectedRole === 'committee' ? 'Committee Head' : 'Exam Cell';
            }
            
            if (profileRoleDisplay) {
                profileRoleDisplay.textContent = selectedRole === 'student' ? 'Student' : 
                                               selectedRole === 'committee' ? 'Committee Head' : 'Exam Cell';
            }
            
            // Show/hide role-specific controls
            if (committeeControls && committeeInternshipControls && examCellControls) {
                if (selectedRole === 'committee') {
                    committeeControls.classList.remove('hidden');
                    committeeInternshipControls.classList.remove('hidden');
                    examCellControls.classList.add('hidden');
                } else if (selectedRole === 'exam-cell') {
                    committeeControls.classList.add('hidden');
                    committeeInternshipControls.classList.add('hidden');
                    examCellControls.classList.remove('hidden');
                } else {
                    committeeControls.classList.add('hidden');
                    committeeInternshipControls.classList.add('hidden');
                    examCellControls.classList.add('hidden');
                }
            }
            
            // Close modal
            loginModal.style.display = 'none';
            
            // Reset form
            this.reset();
            
            // Update login button text
            if (loginBtn) {
                loginBtn.textContent = 'Logout';
            }
        });
    }

    // Email notification system (frontend mockup)
    function sendEmailNotification(recipients, subject, message) {
        // This is just a mockup for the frontend
        console.log(`Email notification sent to: ${recipients}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        
        // In a real application, this would be an API call to a backend service
    }

    // Create placeholder assets folder and images for demo
    function createPlaceholderAssets() {
        console.log('In a real application, placeholder images would be used for the demonstration.');
        // In a real implementation, actual images would be placed in an assets folder
    }

    // Initialize placeholder assets
    createPlaceholderAssets();
});
