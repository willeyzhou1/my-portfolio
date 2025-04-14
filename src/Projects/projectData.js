import acm from '../assets/acm.png'
import barChart from '../assets/barchart.png'
import website from '../assets/website.webp'
import routine from '../assets/routine.png'

const projectData = [
    {
        "title": "Eventify",
        "description": "Created a website that allows for 1000+ students to advertise events happening on campus; worked as a frontend developer",
        "imageSrc": acm,
        "webLink": "https://github.com/willeyzhou1/eventify",
        "technologies": ["React", "Javascript", "HTML", "CSS", "Node.js"]
    },
    {
        "title": "Habitizer",
        "description": "Collaborated with group members to create a mobile app that allows users to create and keep track of routines",
        "imageSrc": routine,
        "webLink": "https://github.com/willeyzhou1/Habitizer",
        "technologies": ["Android Studio", "Java", "Espresso", "SQL", "XML", "Agile Development"]
    },
    {
        "title": "Real Estate and Remote Work Analysis",
        "description": "Utilized Python and Pandas in order to track trends between real estate demands and remote work",
        "imageSrc": barChart,
        "webLink": "https://github.com/willeyzhou1/Real-Estate-and-Remote-Work-Analysis",
        "technologies": ["Python", "Pandas", "Seaborn", "Jupyter Notebooks"]
    },
    {
        "title": "Portfolio Website",
        "description": "Coded website using React; utilized HTML/CSS to create creative designs and transitions",
        "imageSrc": website,
        "webLink": "https://github.com/willeyzhou1/my-portfolio",
        "technologies": ["React", "Javascript", "HTML", "CSS", "Vercel"]
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