import ExplainerPage from "../ExplainerPage";

export function generateStaticParams() {
    return [
        { slug: "ai-content-factory" },
        { slug: "home-server" },
        { slug: "solar-smart-home" }
    ];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <ExplainerPage slug={slug} />;
}
