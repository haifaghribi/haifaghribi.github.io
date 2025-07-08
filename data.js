// data.js
const portfolioData = {
    name: "Haifa Ghribi",
    title: "Senior Computer Engineering Student",
    about: "Motivated Computer Engineering Student with a growing expertise in Software Development, and Machine Learning. Eager to apply technical and soft skills to drive innovative solutions in professional settings.",
    email: "haifaghribi02@gmail.com",
    phone: "+90 (534) 358 20 68",
    location: "Istanbul, Türkiye",
    social: {
        github: "https://github.com/haifaghribi",
        linkedin: "https://www.linkedin.com/in/haifaghribi/"
    },
    education: [
        {
            degree: " B.Sc. in Computer Engineering",
            institution: "Marmara University - Istanbul, Türkiye",
            year: "2022 - Present",
            gpa: "3.2/4.0",
            description: "Full Scholarship Student.\nRelevant coursework: Data Structures, Analysis of Algorithms, Computer Organization, Systems Programming, Software Engineering, Database Systems, Object-oriented Software Design, Probability and Statistics."
        },
        {
            degree: "High School Diploma",
            institution: "Lycée 2 mars 1934 - Sousse, Tunisia",
            year: "2016 - 2021",
            gpa: "3.5/4.0",
            description: "Successfully obtained the Tunisian Baccalaureate with honors."
        }
    ],
    experience: [
        {
            position: "Machine Learning Intern",
            company: "SOCRadar - Istanbul, Türkiye",
            duration: "07.2025 - Present",
            description: [
                "Supporting the Machine Learning team in developing and improving AI-based tools and workflows.",
                "Helping prepare and clean datasets for model training and evaluation.",
                "Gaining hands-on experience in building and experimenting with ML models in a production-like environment.", 
                "Collaborating with engineers and product team members to understand real-world use cases."
            ]
        },
        {
            position: "Project Intern",
            company: "Al Sharq Forum - Istanbul, Türkiye",
            duration: "04.2025 - Present",
            description: [
                "Supporting the development of AlSharq Connect, a digital platform connecting members across the global Al Sharq network.",
                "Organizing and structuring member data to enhance platform usability and engagement.",
                "Collaborating with a diverse international team to drive strategic platform growth."
            ]
        },
        {
            position: "Machine Learning Intern",
            company: "VeNIT Lab - Istanbul, Türkiye",
            duration: "01.2025 - 02.2025",
            description: [
                "Conducted data preprocessing, feature engineering, and exploratory data analysis to enhance model performance.",
                "Developed, optimized, and fine-tuned machine learning models for predictive tasks.",
                "Deployed models for real-time use and performance monitoring."
            ]
        },
        {
            position: "Data Science Intern",
            company: "Albayrak Group, Machine Learning Department - Istanbul, Türkiye",
            duration: "07.2024 - 08.2024",
            description: [
                "Preprocessed and analyzed data using Python libraries (Pandas, NumPy, Matplotlib).",
                "Built and evaluated supervised and unsupervised machine learning models.",
                "Optimized clustering models using the Elbow Method and silhouette score.",
                "Collaborated with cross-functional teams to tackle real-world machine learning problems.."
            ]
        },
        {
            position: "Education Mentor",
            company: "Yale Young African Scholars - Remote",
            duration: "09.2022 - 02.2023",
            description: [
                "Mentored YYAS alumni through the university application process, providing personalized guidance on essay writing, CV development, and activities lists."
            ]
        },
        {
            position: "Web Development Intern",
            company: "Edutest - Sousse, Tunisia",
            duration: "07.2020 - 08.2020",
            description: [
                "Mentored aspiring developers, introducing front-end technologies like HTML, CSS, JavaScript, and Bootstrap",
                "Organized workshops promoting teamwork and problem-solving."
            ]
        }
    ],
    projects: [
        {
            title: "House Price Prediction using Machine Learning",
            description: "An end-to-end ML pipeline that predicts real estate prices using regression algorithms, deployed through a Flask-powered web app.",
            technologies: ["Python", "Machine Learning", "Flask"],
            image: "https://images.pexels.com/photos/32315180/pexels-photo-32315180.jpeg",
            link: "https://github.com/haifaghribi/ML-house-price-prediction-api",
            details: "Built a machine learning model to predict house prices by preprocessing real estate datasets, applying EDA, and engineering features. Trained multiple models including Linear Regression and XGBoost, achieving a 20% reduction in RMSE through hyperparameter tuning. Deployed the model with Flask for real-time predictions on a local web app."
        },
        {
            title: "Tourkey - Türkiye Travel Planner Website",
            description: "A user-friendly platform that allows travelers to explore destinations, plan trips, and get smart recommendations for their journeys in Türkiye.",
            technologies: ["React.js", "Node.Js", "Supabase", "TypeScript", "TailwindCSS", "ChatBot AI"],
            image: "https://images.pexels.com/photos/10810827/pexels-photo-10810827.jpeg",
            link: "https://github.com/haifaghribi/TourKey",
            details: "Tourkey is an interactive travel platform designed to streamline the experience of discovering and planning trips in Türkiye. Key features include user authentication, destination browsing, trip bookings, personalized wishlists, a review system, and a chatbot for travel advice. The chatbot helps users find tailored recommendations based on preferences and location."
        },
        {
            title: "University Stationery Inventory Management System",
            description: "A database-driven web system built with MySQL and C# to manage the operations of a university stationery shop.",
            technologies: ["MySQL", "C#", "ASP.NET", "PostgreSQL", "SQL Server", "DataBase"],
            image: "https://images.pexels.com/photos/5701686/pexels-photo-5701686.jpeg",
            link: "https://github.com/haifaghribi/University_Stationery_Management_System_DataBase",
            details: "This project manages inventory, suppliers, customers, orders, and billing operations for a university photocopy and stationery center. It includes item tracking, order history, payment management, and employee and customer records. Designed a normalized relational database schema and implemented the front-end in C# using ASP.NET."
        },
        {
            title: "2-TSP Problem Solver (Two Traveling Salesmen Problem)",
            description: "An optimized C-based solution for dividing and solving a variation of the Traveling Salesman Problem using clustering and heuristics.",
            technologies: ["C", "K-Means Clustering", "2-opt Algorithm"],
            image: "https://images.pexels.com/photos/8828584/pexels-photo-8828584.jpeg",
            link: "https://github.com/haifaghribi/2TSP",
            details: "Implemented an efficient algorithm to solve the Two-TSP problem by first clustering cities with K-Means and then applying Nearest Neighbor and 2-opt heuristics to optimize each route. Achieved a 22% reduction in total tour length compared to the baseline greedy solution."
        },
        {
            title: "Custom CPU Design & Implementation",
            description: "Designed a simple yet functional CPU from scratch using Logisim and Verilog, covering all essential components of instruction execution and control.",
            technologies: ["Logisim", "Verilog", "Digital Logic", "Assembler", "ISA Design"],
            image: "https://images.pexels.com/photos/3665444/pexels-photo-3665444.jpeg",
            link: "https://github.com/haifaghribi/CPU",
            details: "This project involved designing a custom Central Processing Unit (CPU) architecture to gain hands-on understanding of low-level computer operations. Starting from the creation of a custom Instruction Set Architecture (ISA), an assembler was developed to convert assembly code into hexadecimal format. The CPU was first modeled and simulated in Logisim to verify core components such as the ALU, control unit, register file, and memory modules. After functional validation, the design was implemented in Verilog for hardware-level simulation and refinement. The project emphasized instruction decoding, control signal generation, and the integration of execution units for simple programs."
        },
        {
            title: "Enhanced Course Registration System",
            description: "A multi-role university course registration and scheduling system built through three iterations in Java and Python, applying OOP design principles and real-world architecture.",
            technologies: ["Java", "Python", "Object-oriented programming", "RAD", "DCD", "DSD"],
            image: "https://images.pexels.com/photos/4606703/pexels-photo-4606703.jpeg",
            link: "https://github.com/haifaghribi/OOP",
            details: "Developed a fully-featured academic course registration system supporting roles like Student, Advisor, Scheduler, Admin, and Department Head. Key features included course scheduling, registration, capacity limits, conflict detection, waitlists, and notifications. Built in three iterations: the first two in Java, and the final implementation in Python. Employed core Object-Oriented Programming principles—encapsulation, inheritance, polymorphism, abstraction—to structure maintainable and extensible code. Produced RAD, DCD, and DSD documents for architectural planning and implementation design."
        }
    ],
    skills: [
        { name: "Python", level: 90 },
        { name: "C", level: 90 },
        { name: "Java", level: 90 },
        { name: "C#", level: 75 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 75 },
        { name: "MySQL", level: 90 },
        { name: "MATLAB", level: 80 },
        { name: "Assembly", level: 75 },
        { name: "Machine Learning", level: 85 },
        { name: "Web Development", level: 80 },
        { name: "UI/UX Design", level: 80 },
        { name: "Linux/Unix", level: 80 },
        { name: "Git", level: 80 }
    ],
    achievements: [
        "Government Scholarship to study Computer Engineering in Türkiye -  08.2021",
        "Acceptance to African Leadership Academy - 09.2020",
        " Certificate of Leadership from USA Embassy in Tunisia - 09.2019",
        " Certificate of Achievement and Technical Skill from USA Embassy in Tunisia - 09.2019",
        "3rd Place in National Sudoku Competition, Tunisia - 05.2016"
    ]
};