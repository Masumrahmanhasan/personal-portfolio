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
    codeUrl: string
    icon: LucideIcon
    featured?: boolean
}

export const profile = {
    name: 'Md Akash',
    role: 'Senior Software Engineer',
    tagline: 'I build reliable, scalable products that users love and teams trust.',
    location: 'Dhaka Bangladesh · Open to remote',
    email: 'masumrahmanhasan@gmail.com',
    phone: '+8801537109094',
    resumeUrl: '#',
    socials: [
        { label: 'GitHub', url: 'https://github.com', handle: '@Masumrahmanhasan', image: 'https://cdn.simpleicons.org/github/white' },
        { label: 'LinkedIn', url: 'https://linkedin.com', handle: 'in/Masumrahmanhasan', image: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg' },
    ],
    stats: [
        { label: 'Years experience', value: '5+' },
        { label: 'Products shipped', value: '40+' },
        { label: 'Users reached', value: '12M+' },
        { label: 'Open-source stars', value: '5.2k' },
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
        id: 'pulse',
        title: 'Pulse Analytics',
        tagline: 'Real-time product analytics platform',
        description:
            'A high-throughput analytics platform processing 2B+ events per day. Built a streaming ingestion pipeline and a sub-second query engine powering live dashboards for 300+ enterprise teams.',
        image: '/projects/dashboard.jpg',
        tech: ['Go', 'Kafka', 'ClickHouse', 'React', 'AWS'],
        metrics: [
            { label: 'Events/day', value: '2B+' },
            { label: 'Query p99', value: '180ms' },
            { label: 'Teams', value: '300+' },
        ],
        liveUrl: '#',
        codeUrl: '#',
        icon: LayoutDashboard,
        featured: true,
    },
    {
        id: 'vault',
        title: 'Vault Pay',
        tagline: 'PCI-compliant mobile payments SDK',
        description:
            'A cross-platform payments SDK adopted by fintech apps serving 4M+ users. Designed the tokenization flow, fraud-detection hooks, and a drop-in UI that cut integration time from weeks to hours.',
        image: '/projects/fintech.jpg',
        tech: ['Swift', 'Kotlin', 'TypeScript', 'Rust', 'gRPC'],
        metrics: [
            { label: 'Active users', value: '4M+' },
            { label: 'Integ. time', value: '<1 day' },
            { label: 'Uptime', value: '99.99%' },
        ],
        liveUrl: '#',
        codeUrl: '#',
        icon: Smartphone,
        featured: true,
    },
    {
        id: 'forge',
        title: 'Forge CLI',
        tagline: 'Developer tooling & scaffold engine',
        description:
            'An open-source CLI that scaffolds production-ready microservices with built-in observability, CI, and testing. 5.2k GitHub stars and used internally by several YC companies.',
        image: '/projects/devtool.jpg',
        tech: ['Rust', 'Go', 'Docker', 'OpenTelemetry'],
        metrics: [
            { label: 'GitHub stars', value: '5.2k' },
            { label: 'Weekly installs', value: '18k' },
            { label: 'Contributors', value: '120+' },
        ],
        liveUrl: '#',
        codeUrl: '#',
        icon: Terminal,
        featured: true,
    },
    {
        id: 'shopstream',
        title: 'ShopStream',
        tagline: 'Headless commerce at scale',
        description:
            'A headless e-commerce backend handling Black Friday traffic spikes without a hiccup. Edge-cached storefront, inventory sync, and a checkout flow that lifted conversion by 23%.',
        image: '/projects/ecommerce.jpg',
        tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS'],
        metrics: [
            { label: 'Peak RPS', value: '85k' },
            { label: 'Conversion', value: '+23%' },
            { label: 'GMV/yr', value: '$140M' },
        ],
        liveUrl: '#',
        codeUrl: '#',
        icon: ShoppingBag,
    },
    {
        id: 'lumen',
        title: 'Lumen AI',
        tagline: 'RAG knowledge assistant for teams',
        description:
            'A retrieval-augmented assistant that indexes company docs, code, and tickets to answer engineering questions with citations. Reduced onboarding time for new hires by 40%.',
        image: '/projects/ai.jpg',
        tech: ['Python', 'FastAPI', 'pgvector', 'React', 'OpenAI'],
        metrics: [
            { label: 'Onboarding', value: '-40%' },
            { label: 'Queries/day', value: '50k' },
            { label: 'Latency', value: '1.2s' },
        ],
        liveUrl: '#',
        codeUrl: '#',
        icon: BrainCircuit,
    },
    {
        id: 'sync',
        title: 'SyncFlow',
        tagline: 'Real-time collaboration engine',
        description:
            'A CRDT-based collaboration layer powering real-time document editing for a suite of SaaS apps. Conflict-free sync across devices with offline support and presence awareness.',
        image: '/projects/collab.jpg',
        tech: ['TypeScript', 'WebSockets', 'Yjs', 'Go', 'Redis'],
        metrics: [
            { label: 'Concurrent users', value: '10k' },
            { label: 'Sync latency', value: '45ms' },
            { label: 'Apps using', value: '7' },
        ],
        liveUrl: '#',
        codeUrl: '#',
        icon: Users,
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
        company: 'TechCorp Inc.',
        period: '2022 - Present',
        description: 'Lead a team of 5 engineers in building scalable microservices architecture. Reduced system latency by 40% and improved deployment frequency by 3x.',
        highlights: ['System Design', 'Team Leadership', 'Performance Optimization'],
    },
    {
        type: 'work',
        role: 'Software Engineer',
        company: 'StartupXYZ',
        period: '2020 - 2022',
        description: 'Built core features for a SaaS platform serving 100K+ users. Implemented real-time collaboration features and payment integrations.',
        highlights: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
    },
    {
        type: 'work',
        role: 'Junior Developer',
        company: 'Digital Agency Co.',
        period: '2018 - 2020',
        description: 'Developed responsive web applications for various clients. Gained expertise in modern frontend frameworks and agile methodologies.',
        highlights: ['JavaScript', 'Vue.js', 'CSS', 'REST APIs'],
    },
    {
        type: 'education',
        role: 'B.S. Computer Science',
        company: 'University of California',
        period: '2014 - 2018',
        description: 'Graduated with honors. Specialized in distributed systems and machine learning.',
        highlights: ['GPA: 3.8', 'Dean\'s List', 'CS Club President'],
    },
]