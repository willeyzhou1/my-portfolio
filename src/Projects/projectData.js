import acm from '../assets/acm.png'
import barChart from '../assets/barchart.png'
import website from '../assets/website.webp'
import routine from '../assets/routine.png'
import ucsdLogo from '../assets/UC-San-Diego-Tritons-logo.png'

const projectData = [
    {
        "title": "Eventify",
        "description": "I collaborated with a team of six in order to create a fullstack website using React that allows UCSD students to advertise events happening on campus. As a frontend developer, I was in charge of the design of the user profile page, which I created using HTML/CSS and Javascript.",
        "imageSrc": acm,
        "webLink": "https://github.com/willeyzhou1/eventify",
        "technologies": ["React", "Javascript", "HTML", "CSS", "Node.js"]
    },
    {
        "title": "Habitizer",
        "description": "Habitizer is a mobile app that allows users to create and track daily routines. I utilized Java and XML in order to create page designs and implement CRUD functionality. I also implemented UI testing using Espresso in order to ensure proper app functionality. As a part of a team of 6, we upheld Agile best practices in order to maximize productivity.",
        "imageSrc": routine,
        "webLink": "https://github.com/willeyzhou1/Habitizer",
        "technologies": ["Android Studio", "Java", "Espresso", "SQL", "XML", "Agile Development"]
    },
    {
      "title": "UCSD Purity Test",
      "description": "UCSD Purity Test is a website that gives UC San Diego students a score based on their experiences at the university. I used React as the framework for my website and used React Router for page navigation. I also employed a Firebase Realtime Database in order to fetch scores and use the data for a graph that shows score distributions for user engagement.",
      "imageSrc": ucsdLogo,
      "webLink": "https://github.com/willeyzhou1/UCSDPurityTest",
      "technologies": ["React", "JavaScript", "HTML", "TailwindCSS", "Firebase", "Vercel"]
    },
    {
        "title": "Real Estate and Remote Work Analysis",
        "description": "Within a team of six, we created a detailed report using Jupyter Notebooks analyzing the relationship between real estate demand and remote work. I used Python, Pandas, and Seaborn in order to generate graphs showing the percentage of remote work and number of real estate bought in major cities.",
        "imageSrc": barChart,
        "webLink": "https://github.com/willeyzhou1/Real-Estate-and-Remote-Work-Analysis",
        "technologies": ["Python", "Pandas", "Seaborn", "Jupyter Notebooks"]
    },
    {
        "title": "Portfolio Website",
        "description": "This portfolio website is a personal project created using React. I used Figma to brainstorm ideas and used HTML/CSS to design my website, making use of responsive web design. I modularized my project content into a single data file and rendered it using a .map() function in JavaScript for better scalability and cleaner code. I also used Vercel in order to deploy my website.",
        "imageSrc": website,
        "webLink": "https://github.com/willeyzhou1/my-portfolio",
        "technologies": ["React", "JavaScript", "HTML", "CSS", "Vercel", "Figma"]
    }
]

/**
 * <Project
            title="Habitizer"
            description="Collaborated with group members to create a mobile app that allows users to create and keep track of routines"
            imageSrc={routine}
            link="https://github.com/willeyzhou1/Habitizer"
          />
          <Project
            title="Real Estate and Remote Work Analysis"
            description="Utilized Python and Pandas in order to track trends between real estate demands and remote work"
            imageSrc={barChart}
            link="https://github.com/willeyzhou1/Real-Estate-and-Remote-Work-Analysis"
          />
          <Project
            title="Portfolio Website"
            description="Coded website using React; utilized HTML/CSS to create creative designs and transitions"
            imageSrc={website}
            link="https://github.com/willeyzhou1/my-portfolio"
          />
 */

export default projectData;