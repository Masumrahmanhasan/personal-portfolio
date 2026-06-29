import { icons } from "@lucide/vue"
import {
    LucideIcon,
    LayoutDashboard,
    Users,
    Smartphone,
    Terminal,
    ShoppingBag,
    BrainCircuit
} from "@lucide/vue"
import { siGithub } from "simple-icons"

export type Project = {
    id: string,
    title: string
    tagline: string
    description: string
    image: string
    tech: string[]
    metrics: { label: string; value: string }[]
    liveUrl: string
    icon: LucideIcon
    size: string
    featured?: boolean
}

export const profile = {
    name: 'Md Akash',
    role: 'Senior Software Engineer',
    tagline: 'Deeply committed to building impactful, business-driven software solutions.',
    location: 'Dhaka, Bangladesh · Open to remote',
    email: 'masumrahmanhasan@gmail.com',
    phone: '+8801537109094',
    resumeUrl: '#',
    socials: [
        { label: 'GitHub', url: 'https://github.com/', handle: 'Masumrahmanhasan', image: 'https://cdn.simpleicons.org/github/white' },
        { label: 'LinkedIn', url: 'https://linkedin.com', handle: '/in/masum-rahman-hasan-a1419a179/', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg' },
    ],
    stats: [
        { label: 'Years experience', value: '5+' },
        { label: 'Products shipped', value: '10+' },
        { label: 'Remote work', value: '3+ years' },
        { label: 'Tech stack', value: 'Full Stack' },
    ],
}

export const skills = [
    {
        category: 'Languages',
        items: ['PHP', 'Javascript', 'SQL'],
    },
    {
        category: 'Frontend',
        items: ['Vue JS', 'React', 'Next.js', 'Svelte', 'Tailwind CSS', 'Pinia', 'Redux-Toolkit'],
    },
    {
        category: 'Backend',
        items: ['Laravel', 'Node.js', 'GraphQL', 'Redis'],
    },
    {
        category: 'Infrastructure',
        items: ['AWS', 'Docker', 'CI/CD'],
    },
]

export const projects: Project[] = [
    {
        id: 'paycell',
        title: 'Paycell',
        tagline: 'Send Money Abroad Fast & Secure',
        description:
            'Developed a fast, secure and affordable cross-border remittance service enabling users in the EU/UK to send money abroad with transparent pricing, real-time status tracking and regulatory compliance.',
        image: '/projects/paycell.svg',
        tech: ['PHP', 'Laravel', 'Javascript', 'FilamentPHP', 'AWS', 'Docker'],
        metrics: [
            { label: 'Region', value: 'EU/UK' },
            { label: 'Status', value: 'Live' },
        ],
        liveUrl: '#',
        size: "large",
        icon: Smartphone,
        featured: true,

    },
    {
        id: 'wafacash',
        title: 'Wafacash',
        tagline: 'Digital Payment & Cross-Border Remittance Platform',
        description:
            'A leading proximity-finance provider offering fast, secure and inclusive financial services across Morocco and Africa. Services include national and international money transfers, mobile payment accounts, bill payments, and prepaid cards.',
        image: '/projects/wafacash.png.webp',
        tech: ['PHP', 'Laravel', 'Javascript', 'FilamentPHP', 'AWS', 'Docker'],
        metrics: [
            { label: 'Region', value: 'Morocco/Africa' },
            { label: 'Since', value: '1991' },
        ],
        liveUrl: '#',
        size: "medium",
        icon: ShoppingBag,
        featured: true,
    },
    {
        id: 'funnelliner',
        title: 'Funnelliner',
        tagline: 'Make your Website, Sales Funnel & Automation',
        description:
            'Developed comprehensive APIs for a SaaS application, engineered advanced frontend hooks and reusable components in Next.js, and designed a robust backend admin panel using Vue.js for streamlined administration and management.',
        image: '/projects/funnelliner.png',
        tech: ['Next.js', 'Vue.js', 'API', 'SaaS'],
        metrics: [
            { label: 'Frontend', value: 'Next.js/Vue.js' },
            { label: 'Role', value: 'Full Stack' },
        ],
        liveUrl: '#',
        size: "medium",
        icon: LayoutDashboard,
        featured: true,
    },
    {
        id: 'xdesk',
        title: 'XDesk',
        tagline: 'Efficient Support Ticket Management with Real-Time Assistance',
        description:
            'Enhanced the functionality of an enterprise ticketing solution to streamline issue tracking and management. Implemented critical features, including a robust permissions system to improve user access control and data security.',
        image: '/projects/xdesk.svg',
        tech: ['Laravel', 'React', 'Permissions'],
        metrics: [
            { label: 'Feature', value: 'Permissions System' },
            { label: 'Type', value: 'Enterprise' },
        ],
        liveUrl: '#',
        size: "small",
        icon: Users,
        featured: false,
    },
    {
        id: 'prokpi',
        title: 'Pro KPI',
        tagline: 'Best KPI Management Software',
        description: 'From designing the architecture to building the platform with TALL stack, aimed to provide a better user experience for customers and increase profitability for business owners.',
        image: '/projects/prokpi.svg',
        tech: ['TALL Stack', 'Laravel', 'Livewire', 'Tailwind'],
        metrics: [
            { label: 'Stack', value: 'TALL' },
            { label: 'Platform', value: 'Micro Jobs' },
        ],
        liveUrl: '#',
        size: "small",
        icon: Terminal,
        featured: false,
    },
    {
        id: 'happimoney',
        title: 'Happi Money',
        tagline: 'Banking made fastest and simple',
        description:
            'Creating APIs and managing the deployment of the full application was the main responsibility. Also contributed to frontend development to ensure a seamless user experience.',
        image: '/projects/happi_money.png',
        tech: ['PHP', 'Laravel', 'Vue.js'],
        metrics: [
            { label: 'Role', value: 'API & Deployment' },
            { label: 'Type', value: 'Banking' },
        ],
        liveUrl: '#',
        size: "wide",
        icon: BrainCircuit,
        featured: false,
    },
]

export const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

export const experiences = [
    {
        type: 'work',
        role: 'Senior Software Engineer',
        company: 'BPay (Triple-A)',
        period: '2025 - Present',
        description: 'Developing secure and scalable payment gateways and digital payment applications, enabling seamless online transactions, merchant integrations, and financial services automation.',
        highlights: ['Payment Gateways', 'Digital Payments', 'Scalability'],
    },
    {
        type: 'work',
        role: 'Senior Software Engineer',
        company: 'Rezzen Tech',
        period: '2023 - 2024',
        description: 'Maintained their SaaS product and added new features to it. Worked remotely to ensure continuous delivery and high-quality releases.',
        highlights: ['SaaS', 'Feature Development', 'Remote'],
    },
    {
        type: 'work',
        role: 'Senior Software Engineer',
        company: 'Happihub',
        period: '2022 - 2023',
        description: 'Developed the backend application for the NEO Bank app, focusing on robust architecture and reliable financial services.',
        highlights: ['Backend Development', 'NEO Banking'],
    },
    {
        type: 'work',
        role: 'Laravel Developer',
        company: 'Soft It Care',
        period: '2020 - 2022',
        description: 'Designed and developed robust web applications using the Laravel framework, incorporating modern frontend technologies like Vue.js and React. Also mentored and guided junior developers.',
        highlights: ['Laravel', 'Vue.js', 'React', 'Mentorship'],
    },
    {
        type: 'education',
        role: 'B.Sc. in Computer Science & Engineering',
        company: 'Dhaka International University',
        period: '2019 - 2022',
        description: 'Completed Bachelor of Science in Computer Science & Engineering from Dhaka International University, Dhaka, Bangladesh.',
        highlights: ['Dhaka, Bangladesh'],
    },
]
