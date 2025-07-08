// app.js
const { useState, useEffect, useRef, useCallback } = React;

// Custom Hook: useDarkMode
const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

    return [darkMode, toggleDarkMode];
};

// Custom Hook: useScrollSpy
const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);

    useEffect(() => {
        const handleScroll = () => {
            let currentActive = activeSection;
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= offset && rect.bottom >= offset) {
                        currentActive = sectionIds[i];
                        break;
                    }
                }
            }
            if (currentActive !== activeSection) {
                setActiveSection(currentActive);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check on mount
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset, activeSection]); // Include activeSection in dependencies to re-run effect when it changes

    return activeSection;
};


// Main App Component
const App = () => {
    const [darkMode, toggleDarkMode] = useDarkMode();
    const sectionIds = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'achievements'];
    const activeSection = useScrollSpy(sectionIds);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    // Function to scroll to a section
    const scrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 70, // Adjust for fixed header height
                behavior: 'smooth',
            });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking a link
    }, []);

    const openProjectModal = useCallback((project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }, []);

    const closeProjectModal = useCallback(() => {
        setSelectedProject(null);
        document.body.style.overflow = ''; // Restore scrolling
    }, []);

    // Effect to toggle dark mode class on body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <React.Fragment> {/* Use React.Fragment for top-level elements */}
            <Navigation 
                activeSection={activeSection} 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode} 
                scrollToSection={scrollToSection}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <main className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
                <HeroSection scrollToSection={scrollToSection} darkMode={darkMode} />
                <AboutSection darkMode={darkMode} />
                <EducationSection darkMode={darkMode} />
                <ExperienceSection darkMode={darkMode} />
                <ProjectsSection darkMode={darkMode} openProjectModal={openProjectModal} />
                <SkillsSection darkMode={darkMode} />
                <AchievementsSection darkMode={darkMode} />
            
            </main>
            <Footer darkMode={darkMode} />
            <ProjectModal project={selectedProject} onClose={closeProjectModal} darkMode={darkMode} />
        </React.Fragment>
    );
};

// Render the App component to the root div
ReactDOM.render(<App />, document.getElementById('root'));