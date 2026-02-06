import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next"; // Added for SEO
import { innovators } from "@/data/innovators";
import { projects } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectCard from "@/components/cards/ProjectCard";

interface InnovatorProfilePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * SEO FIX: This function tells Google the specific Name and Bio 
 * of the innovator for search results.
 */
export async function generateMetadata({ 
  params 
}: InnovatorProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const innovator = innovators.find((i) => i.slug === slug);

  return {
    title: `${innovator?.name || "Innovator"} | Kakebe Hub`,
    description: innovator?.bio.substring(0, 160) || "Learn more about this innovator on Kakebe Hub.",
  };
}

/**
 * mandatory for "output: export" and helpful for "output: standalone"
 */
export async function generateStaticParams() {
  return innovators.map((innovator) => ({
    slug: innovator.slug,
  }));
}

export default async function InnovatorProfilePage({
  params,
}: InnovatorProfilePageProps) {
  // CORRECT: Using await for params in Next.js 15/16
  const { slug } = await params;

  const innovator = innovators.find((i) => i.slug === slug);

  if (!innovator) {
    notFound();
  }

  const innovatorProjects = projects.filter((p) =>
    p.innovators.includes(innovator.slug),
  );

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={innovator.image}
                alt={innovator.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-4">
                {innovator.name}
              </h1>
              <p className="text-2xl text-blue-300 mb-8">{innovator.tagline}</p>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {innovator.bio}
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {innovator.skills.map((skill) => (
                    <Badge key={skill} variant="blue">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Connect with {innovator.name.split(" ")[0]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      {innovator.quote && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <SectionReveal>
              <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 italic mb-6">
                "{innovator.quote}"
              </blockquote>
              <p className="text-xl text-gray-600">— {innovator.name}</p>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {innovatorProjects.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionReveal>
              <h2 className="text-4xl font-bold mb-12">Projects</h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovatorProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Innovators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link href="/innovators">
            <Button variant="ghost">← Back to All Innovators</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}