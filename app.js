// Portfolio Data Configuration
// Customize this object with your own information
const portfolioData = {
  profile: {
    name: "CHRISTO PETER",
    title: "Full-Stack Developer & Computer Science Graduate",
    bio: "Passionate about building scalable web applications and solving complex problems with code.",
    resume_link: "Christo_Peter_Resume.pdf"
  },
  
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python", "Java", "C++", "SQL"]
    },
    {
      category: "Web Development",
      items: ["React", "Node.js", "Express.js", "HTML/CSS", "WebRTC"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git/GitHub", "Docker", "AWS", "Vercel", "VS Code"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Collaboration", "Communication", "Project Management"]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "A.P.J. Abdul Kalam Technological University",
      year: "2025",
      gpa: "7.45/10.0",
      details: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management,Java Programming, Computer Networks,Python Programming,Software Engineering"
    },
    {
      degree: "Higher Secondary Education",
      institution: "St. Thomas HSS College,Thrissur, Kerala",
      year: "2021"
    }
  ],
  
  projects: [
    {
      title: "Automatic English Grammar Error Correction (EGEC)",
      description: "The system has the capability to automatically detect and correct grammatical errors in text derived from voice input.",
      tech_stack: ["Python", "NLP", "JSON", "Tkinter", "SpeechRecognition"],
      github_link: "https://github.com/cpkp/EGEC",
      demo_link: "555.html"
    },
    {
      title: "GQUEST",
      description: "It is a website to teach coding basics through interactive games, combining fun challenges with hands-onexercises to make learning programming simple and engaging.",
      tech_stack: ["HTML", "CSS", "JavaScript","SQL"],
      github_link: "https://github.com/cpkp/gcodingquest",
      demo_link: "555.html"
    },
    {
      title: "Emotion Detection AI",
      description: "This project is a web-based application that analyzes the emotions expressed in a sentence entered by the user. It uses IBM Watson's NLP (Natural Language Processing) services to detect emotions",
      tech_stack: ["Python", "APP development", "Flask", "IBM Watson"],
      github_link: "https://github.com/cpkp/emotion-detection-ai",
      demo_link: "555.html"
    }
  ],
  
  certificates: [
    {
      title: "Introduction to Programming in C",
      issuer: "MOOC course by IIT Kanpur",
      date: "Jan-Mar(2024)"
    },
     {
      title: "Developing AI Applications with Python and Flask",
      issuer: "IBM",
      date: "May 26,2025"
    },
     {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM",
      date: "May 14,2025"
    },
     {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      date: "Jun 3,2025"
    },
     {
      title: "Introduction to DevOps",
      issuer: "IBM",
      date: "May 6,2025"
    },
    {
      title: "Introduction to Cybersecurity Careers",
      issuer: "IBM",
      date: "May 6,2025"
    },
    {
      title: "Getting Started with AI",
      issuer: "IBM",
      date: "Jan 16,2025"
    }
  ],
  
  achievements: [
    {
      title: "SQL Injection Attacks",
      description: "Successfully completed a focused training on SQL Injection Attacks from EC-Council.",
      date: "May 30,2025"
    },
    {
      title: "Blind Coding",
      description: "Coordinated a technical event,'Blind Coding' during college Tech Fest 2024",
      date: "Nov 7,2024"
    },
    {
      title: "Cyber Job Simulation",
      description: "Successfully completed Cyber Job Simulation of Deloitte through Forage.",
      date: "Jun 8,2025"
    }
  ],
  
  social_links: {
    github: "https://github.com/cpkp",
    linkedin: "https://linkedin.com/in/christopeter",
    email: "peterkpchristo@gmail.com"
  }
};

// Initialize the application
function init() {
  populateHeroSection();
  populateSkills();
  populateEducation();
  populateProjects();
  populateCertificates();
  populateAchievements();
  populateSocialLinks();
  setupNavigation();
  setupContactForm();
}

// Populate Hero Section
function populateHeroSection() {
  document.getElementById('heroName').textContent = portfolioData.profile.name;
  document.getElementById('heroTitle').textContent = portfolioData.profile.title;
  document.getElementById('heroBio').textContent = portfolioData.profile.bio;
  document.getElementById('downloadResume').href = portfolioData.profile.resume_link;
}

// Populate Skills Section
function populateSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  skillsGrid.innerHTML = '';
  
  portfolioData.skills.forEach(skillCategory => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';
    
    const title = document.createElement('h3');
    title.className = 'skill-category-title';
    title.textContent = skillCategory.category;
    
    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'skill-items';
    
    skillCategory.items.forEach(item => {
      const tag = document.createElement('span');
      tag.className = 'skill-tag';
      tag.textContent = item;
      itemsDiv.appendChild(tag);
    });
    
    categoryDiv.appendChild(title);
    categoryDiv.appendChild(itemsDiv);
    skillsGrid.appendChild(categoryDiv);
  });
}

// Populate Education Section
function populateEducation() {
  const educationTimeline = document.getElementById('educationTimeline');
  educationTimeline.innerHTML = '';
  
  portfolioData.education.forEach(edu => {
    const item = document.createElement('div');
    item.className = 'education-item';
    
    const degree = document.createElement('h3');
    degree.className = 'education-degree';
    degree.textContent = edu.degree;
    
    const institution = document.createElement('p');
    institution.className = 'education-institution';
    institution.textContent = edu.institution;
    
    const meta = document.createElement('div');
    meta.className = 'education-meta';
    
    const year = document.createElement('span');
    year.textContent = edu.year;
    meta.appendChild(year);
    
    if (edu.gpa) {
      const gpa = document.createElement('span');
      gpa.textContent = `GPA: ${edu.gpa}`;
      meta.appendChild(gpa);
    }
    
    item.appendChild(degree);
    item.appendChild(institution);
    item.appendChild(meta);
    
    if (edu.details) {
      const details = document.createElement('p');
      details.className = 'education-details';
      details.textContent = edu.details;
      item.appendChild(details);
    }
    
    educationTimeline.appendChild(item);
  });
}

// Populate Projects Section
function populateProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = '';
  
  portfolioData.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const content = document.createElement('div');
    content.className = 'project-content';
    
    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;
    
    const techDiv = document.createElement('div');
    techDiv.className = 'project-tech';
    project.tech_stack.forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.textContent = tech;
      techDiv.appendChild(tag);
    });
    
    const linksDiv = document.createElement('div');
    linksDiv.className = 'project-links';
    
    const githubLink = document.createElement('a');
    githubLink.href = project.github_link;
    githubLink.className = 'project-link';
    githubLink.textContent = '🔗 GitHub';
    githubLink.target = '_blank';
    
    const demoLink = document.createElement('a');
    demoLink.href = project.demo_link;
    demoLink.className = 'project-link';
    demoLink.textContent = '🚀 Demo';
    demoLink.target = '_blank';
    
    linksDiv.appendChild(githubLink);
    linksDiv.appendChild(demoLink);
    
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(techDiv);
    content.appendChild(linksDiv);
    
    card.appendChild(content);
    projectsGrid.appendChild(card);
  });
}

// Populate Certificates Section
function populateCertificates() {
  const certificatesGrid = document.getElementById('certificatesGrid');
  certificatesGrid.innerHTML = '';
  
  portfolioData.certificates.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'certificate-card';
    
    const title = document.createElement('h3');
    title.className = 'certificate-title';
    title.textContent = cert.title;
    
    const issuer = document.createElement('p');
    issuer.className = 'certificate-issuer';
    issuer.textContent = cert.issuer;
    
    const date = document.createElement('p');
    date.className = 'certificate-date';
    date.textContent = cert.date;
    
    card.appendChild(title);
    card.appendChild(issuer);
    card.appendChild(date);
    
    certificatesGrid.appendChild(card);
  });
}

// Populate Achievements Section
function populateAchievements() {
  const achievementsList = document.getElementById('achievementsList');
  achievementsList.innerHTML = '';
  
  portfolioData.achievements.forEach(achievement => {
    const item = document.createElement('div');
    item.className = 'achievement-item';
    
    const header = document.createElement('div');
    header.className = 'achievement-header';
    
    const title = document.createElement('h3');
    title.className = 'achievement-title';
    title.textContent = achievement.title;
    
    header.appendChild(title);
    
    if (achievement.date) {
      const date = document.createElement('span');
      date.className = 'achievement-date';
      date.textContent = achievement.date;
      header.appendChild(date);
    }
    
    const description = document.createElement('p');
    description.className = 'achievement-description';
    description.textContent = achievement.description;
    
    item.appendChild(header);
    item.appendChild(description);
    
    achievementsList.appendChild(item);
  });
}

// Populate Social Links
function populateSocialLinks() {
  const socialLinksDiv = document.getElementById('socialLinks');
  socialLinksDiv.innerHTML = '';
  
  const links = [
    { name: 'GitHub', url: portfolioData.social_links.github, icon: '💻' },
    { name: 'LinkedIn', url: portfolioData.social_links.linkedin, icon: '💼' },
    { name: 'Email', url: `mailto:${portfolioData.social_links.email}`, icon: '📧' }
  ];
  
  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'social-link';
    a.target = '_blank';
    
    const icon = document.createElement('span');
    icon.className = 'social-icon';
    icon.textContent = link.icon;
    
    const text = document.createElement('span');
    text.textContent = link.name;
    
    a.appendChild(icon);
    a.appendChild(text);
    
    socialLinksDiv.appendChild(a);
  });
}

// Setup Navigation
function setupNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
  
  // Add active state to nav links on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

function setupContactForm() {
 const form = document.getElementById('contactForm');
 const formMessage = document.getElementById('formMessage');
 
form.addEventListener('submit', async (e) => {
 e.preventDefault();
const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const message = document.getElementById('message').value;
 
// Basic validation
if (!name || !email || !message) {
 showFormMessage('Please fill in all fields.', 'error');
 return;
 }
 // Email validation
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(email)) {
 showFormMessage('Please enter a valid email address.', 'error');
 return;
}
 // Build form data for submission
 const formData = new FormData(form);

 showFormMessage('Sending...', 'success');

try {
 const response = await fetch(form.action, {
 method: 'POST',
 body: formData,
 headers: {
 'Accept': 'application/json'
 }
 });

 if (response.ok) {
 showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
 form.reset();
 setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
 } else {
 showFormMessage('Oops! Something went wrong. Please try again.', 'error');
 }
 } catch (error) {
 showFormMessage('Network error! Please try again later.', 'error');
 }
 });
}

function showFormMessage(message, type) {
 const formMessage = document.getElementById('formMessage');
 formMessage.textContent = message;
 formMessage.className = `form-message ${type}`;
 formMessage.style.display = 'block';
}


// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#downloadResume') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});


// Floating Action Button (FAB) Functionality

const fabMain = document.getElementById('fabMain');
const fabOptions = document.getElementById('fabOptions');

let optionsVisible = false;

// Toggle options on logo (image) click
fabMain.addEventListener('click', (e) => {
  e.stopPropagation();
  optionsVisible = !optionsVisible;
  fabOptions.style.display = optionsVisible ? 'flex' : 'none';
});

// Option button clicks redirect to pages
document.getElementById('fabChat').onclick = function() {
  window.location.href = "555.html"; // Replace with your AI chat link
};

document.getElementById('fabMeeting').onclick = function() {
  window.location.href = "555.html"; // Replace with your meeting link
};

// Optional: Hide options if you click elsewhere on the page
document.body.addEventListener('click', () => {
  if (optionsVisible) {
    optionsVisible = false;
    fabOptions.style.display = 'none';
  }
});

// Prevent closing when clicking inside options
fabOptions.addEventListener('click', (e) => {
  e.stopPropagation();
});
