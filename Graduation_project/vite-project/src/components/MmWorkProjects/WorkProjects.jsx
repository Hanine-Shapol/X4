import WorkCard from '../MmWorkCard/WorkCard'
import './WorkProjects.css'
const projects = [
    {
        title: "E-Commerce Platform for Fashion Hub",
        image: "/assets/project-1.jpg",
        summary: "Chic Boutique",
        site: "htttps:/www.chicboutique.com",
        description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
    },
    {
        title: "Mobile App for Food Delivery Service",
        image: "/assets/project-2.jpg",
        summary: "HungryBites",
        site: "htttps:/www.hungrybites.com",
        description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    },
    {
        title: "Booking and Reservation System for Event Management",
        image: "/assets/project-3.jpg",
        summary: "EventMasters",
        site: "htttps:/www.eventmasters.com",
        description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences."
    },
    {
        title: "Custom Software for Workflow Automation",
        image: "/assets/project-4.jpg",
        summary: "ProTech Solutions",
        site: "htttps:/www.protechsolutions.com",
        description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    },
    {
        title: "Web Portal for Real Estate Listings",
        image: "/assets/project-5.jpg",
        summary: "Dream Homes Realty",
        site: "htttps:/www.dreamhomesrealty.com",
        description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
    },
    {
        title: "Mobile App for Fitness Tracking",
        image: "/assets/project-6.jpg",
        summary: "FitLife Tracker",
        site: "htttps:/www.fitlifetracker.com",
        description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."
    },
    {
        title: "Custom Software for Supply Chain Management",
        image: "/assets/project-7.jpg",
        summary: "Global Logistics Solutions",
        site: "htttps:/www.globallogisticssolutions.com",
        description: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs."
    },
    {
        title: "Educational Platform for Online Learning",
        image: "/assets/project-8.jpg",
        summary: "EduConnect",
        site: "htttps:/www.educonnect.com",
        description: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages."
    },
    {
        title: "Mobile App for Travel Planning",
        image: "/assets/project-9.jpg",
        summary: "WanderWise",
        site: "htttps:/www.wanderwise.com",
        description: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations."
    },
    {
        title: "Web Application for Customer Relationship Management",
        image: "/assets/project-10.jpg",
        summary: "ConnectCRM",
        site: "htttps:/www.connectcrm.com",
        description: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth."
    },

];

const WorkProjects = () => {
    return (
        <div className='work-projects'>
            {projects.map((project, index) => (
                <WorkCard
                    key={index}
                    title={project.title}
                    image={project.image}
                    summary={project.summary}
                    site={project.site}
                    description={project.description}
                />
            ))}
        </div>
    )
}

export default WorkProjects