export type professionalExperienceType = {
    position: string;
    company: string;
    image: string;
    duration: string;
    description: string
}

export type ProjectCardProps = {
    id: string;
    title: string;
    role: string;
    image: string;
    Icon: React.ElementType;
    alt: string;
    description: string;
    points: string[];
    tags: string[];
};

