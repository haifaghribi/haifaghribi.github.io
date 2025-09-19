// components.js
const { useState, useEffect } = React;

// Navigation Component
const Navigation = ({ activeSection, darkMode, toggleDarkMode, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
    const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'achievements'];
    
    return (
        <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'} shadow-md`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold gradient-text">HAIFA GHRIBI</div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`nav-link capitalize font-medium ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} ${activeSection === section ? 'active-nav text-blue-500' : ''}`}
                            >
                                {section}
                            </button>
                        ))}
                        <button onClick={toggleDarkMode} className="ml-4 text-2xl focus:outline-none">
                            {darkMode ? <i className="fas fa-sun text-yellow-300"></i> : <i className="fas fa-moon text-gray-600"></i>}
                        </button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleDarkMode} className="mr-4 text-2xl focus:outline-none">
                            {darkMode ? <i className="fas fa-sun text-yellow-300"></i> : <i className="fas fa-moon text-gray-600"></i>}
                        </button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} focus:outline-none text-2xl`}>
                            {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                        </button>
                    </div>
                </div>
                
                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className={`md:hidden mt-4 pb-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-b-lg shadow-lg`}>
                        <div className="flex flex-col space-y-3">
                            {sections.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => { scrollToSection(section); setIsMenuOpen(false); }}
                                    className={`text-left capitalize py-2 px-6 rounded ${activeSection === section ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'hover:bg-gray-100 dark:hover:bg-gray-600'} ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

// Hero Section Component
const HeroSection = ({ scrollToSection, darkMode }) => {
    return (
        <section id="home" className={`min-h-screen flex items-center justify-center pt-20 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Hi, I'm <span className="gradient-text">{portfolioData.name}</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl mb-6">{portfolioData.title}</h2>
                        <p className="text-lg mb-8 max-w-lg">
                            {portfolioData.about}
                        </p>
                        <div className="flex space-x-4">
                            <button 
                                onClick={() => scrollToSection('projects')}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                View My Work
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                            <img 
                                src="https://media.licdn.com/dms/image/v2/D4D03AQESR-VM1b1M2g/profile-displayphoto-shrink_800_800/B4DZSwVmNZGcAc-/0/1738125240097?e=1761177600&v=beta&t=0eOyWQUPVg5bL-nhzKYLPFN8pYbCxmpJ4_gLg7aK7R8" 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// About Section Component
const AboutSection = ({ darkMode }) => {
    return (
        <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                        <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                        <p className="mb-6 text-lg">
                            I'm a curious and driven computer engineering student with a strong interest in artificial intelligence and software development. 
                            I'm a girl who's always looking to grow, challenge herself, and explore new technologies with creativity and purpose. 
                            I love solving problems, thinking critically, and turning ideas into thoughtful, functional code.
                        </p>
                        <p className="mb-6 text-lg">
                            Outside of tech, I recharge by taking long walks on the beach, sketching whatever inspires me, and spending quality time with my family and friends.
                            Whether it's through a great conversation or a shared moment, I believe connection fuels creativity.
                        </p>
                        <div className="flex space-x-4">
                            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                        <div className="space-y-4">
                            <div className="flex">
                                <span className="w-32 font-medium">Name:</span>
                                <span>{portfolioData.name}</span>
                            </div>
                            <div className="flex">
                                <span className="w-32 font-medium">Email:</span>
                                <span>{portfolioData.email}</span>
                            </div>
                            <div className="flex">
                                <span className="w-32 font-medium">Phone:</span>
                                <span>{portfolioData.phone}</span>
                            </div>
                            <div className="flex">
                                <span className="w-32 font-medium">Location:</span>
                                <span>{portfolioData.location}</span>
                            </div>
                        </div>
                        <a 
                            href="Haifa_Ghribi_Resume.pdf" 
                            download="Haifa_Ghribi_Resume.pdf" // Suggests the filename for download
                            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
                        >
                            Download Resume
                        </a>
                      
                    </div>
                </div>
            </div>
        </section>
    );
};

// Education Section Component
const EducationSection = ({ darkMode }) => {
    return (
        <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
                <div className="max-w-4xl mx-auto">
                    {portfolioData.education.map((edu, index) => (
                        <div key={index} className={`mb-10 relative pl-8 ${index !== portfolioData.education.length - 1 ? 'border-l-2 border-blue-500' : ''}`}>
                            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-md'}`}>
                                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                <p className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">{edu.institution}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-3">{edu.year} | GPA: {edu.gpa}</p>
                                <p className="text-white-700 dark:text-white" style={{whiteSpace: 'pre-line'}}>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Experience Section Component
const ExperienceSection = ({ darkMode }) => {
    return (
        <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
                <div className="max-w-4xl mx-auto">
                    {portfolioData.experience.map((exp, index) => (
                        <div key={index} className={`mb-8 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold">{exp.position}</h3>
                                        <p className="text-blue-600 dark:text-blue-300 font-medium">{exp.company}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                        {exp.duration}
                                    </span>
                                </div>
                                <ul className="mt-4 list-disc pl-5 space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-white-700 dark:text-white">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Projects Section Component
const ProjectsSection = ({ darkMode, openProjectModal }) => {
    return (
        <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <div 
                            key={index} 
                            className={`project-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                            onClick={() => openProjectModal(project)}
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-white-700 dark:text-white">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* The button is now handled by the card's onClick */}
                                <span className="text-blue-600 dark:text-blue-300 font-medium hover:underline cursor-pointer">
                                    View Details
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Project Modal Component
const ProjectModal = ({ project, onClose, darkMode }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
            <div className={`relative ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
                <button onClick={onClose} className={`absolute top-4 right-4 text-3xl ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                    &times;
                </button>
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-6">
                    <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="text-lg mb-6 leading-relaxed" style={{whiteSpace: 'pre-line'}}>{project.details}</p>
                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            View Project on GitHub <i className="ml-2 fab fa-github"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

// Skills Section Component
const SkillsSection = ({ darkMode }) => {
    return (
        <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
                <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolioData.skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                                    <div 
                                        className="h-full rounded-full bg-blue-600 skill-bar" 
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Achievements Section Component
const AchievementsSection = ({ darkMode }) => {
    return (
        <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
                <div className="max-w-3xl mx-auto">
                    <ul className="space-y-4">
                        {portfolioData.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                                        <i className="fas fa-award"></i>
                                    </div>
                                </div>
                                <p className="flex-1 text-lg">
                                    {achievement}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};


// Footer Component
const Footer = ({ darkMode }) => {
    return (
        <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
            <div className="container mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} Haifa Ghribi. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 dark:hover:text-blue-400">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 dark:hover:text-blue-400">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={`mailto:${portfolioData.email}`} className="text-2xl hover:text-blue-600 dark:hover:text-blue-400">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};