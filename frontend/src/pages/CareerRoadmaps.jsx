import React, { useState, useEffect } from 'react';
import { createDiagram } from '../utils/diagramHelper';
import { Briefcase, Lightbulb, TrendingUp, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const CareerRoadmaps = ({ initialRoadmap }) => {
  const [roadmapsSvg, setRoadmapsSvg] = useState({});
  const { roadmapId } = useParams();
  const selectedRoadmapId = roadmapId || initialRoadmap;

  const careerRoadmapsData = [
    {
      id: 'data-scientist',
      title: 'Data Scientist Roadmap',
      description: 'Guide to a career in Data Science, from foundations to advanced concepts.',
      priority: 1,
      mermaidDefinition: `
        graph TD
        A[Mathematics & Statistics Basics] --> B[Learn Python/R]
        B --> C["Data Manipulation (Pandas/dplyr)"]
        C --> D["Data Visualization (Matplotlib/ggplot2)"]
        D --> E[Machine Learning Fundamentals]
        E --> F["Deep Learning & AI (Optional)"]
        F --> G[SQL & Database Knowledge]
        G --> H["Big Data Technologies (Spark/Hadoop)"]
        H --> I[Communication & Storytelling]
        I --> J[Domain Expertise & Projects]
      `,
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer Roadmap',
      description: 'Become a skilled UI/UX designer, focusing on user experience and interface aesthetics.',
      priority: 2,
      mermaidDefinition: `
        graph TD
        A[Understand Design Principles] --> B[Learn User Research]
        B --> C["Wireframing & Prototyping (Figma/Sketch)"]
        C --> D[UI Design & Visual Hierarchy]
        D --> E[Usability Testing]
        E --> F[Interaction Design & Animation]
        F --> G[Responsive Design]
        G --> H[Design Systems]
        H --> I[Portfolio Creation]
        I --> J[Continuous Improvement]
      `,
    },
    {
      id: 'cybersecurity-analyst',
      title: 'Cybersecurity Analyst Roadmap',
      description: 'Protect digital assets and systems from cyber threats.',
      priority: 3,
      mermaidDefinition: `
        graph TD
        A[Networking Fundamentals] --> B["Operating Systems (Linux/Windows)"]
        B --> C["Security Fundamentals (CompTIA Security+)"]
        C --> D["Ethical Hacking & Penetration Testing"]
        D --> E["Incident Response & Forensics"]
        E --> F["Cloud Security (AWS/Azure/GCP)"]
        F --> G["Security Information & Event Management (SIEM)"]
        G --> H["Compliance & Regulations"]
        H --> I[Threat Intelligence]
        I --> J["Continuous Learning & Certifications"]
      `,
    },
    {
      id: 'project-manager',
      title: 'Project Manager Roadmap',
      description: 'Lead projects from conception to completion.',
      priority: 4,
      mermaidDefinition: `
        graph TD
        A[Foundations of Project Management] --> B["Agile/Scrum Methodologies"]
        B --> C[Risk Management]
        C --> D["Budgeting & Resource Allocation"]
        D --> E[Stakeholder Communication]
        E --> F["Leadership & Team Building"]
        F --> G["Project Planning & Execution"]
        G --> H["Monitoring & Controlling"]
        H --> I["Closing Projects"]
        I --> J["PMP/CAPM Certification (Optional)"]
      `,
    },
  ];

  useEffect(() => {
    const renderRoadmaps = async () => {
      const svgs = {};
      for (const roadmap of careerRoadmapsData) {
        svgs[roadmap.id] = await createDiagram(roadmap.mermaidDefinition);
      }
      setRoadmapsSvg(svgs);
    };
    renderRoadmaps();
  }, []);

  // Sort roadmaps by priority
  const sortedRoadmaps = [...careerRoadmapsData].sort((a, b) => a.priority - b.priority);

  // If a specific roadmap is selected, show only that one
  const selectedRoadmap = selectedRoadmapId
    ? careerRoadmapsData.find(roadmap => roadmap.id === selectedRoadmapId)
    : null;

  return (
    <div className="container mx-auto px-4 py-8 text-center space-y-12">
      {selectedRoadmap ? (
        // Single Roadmap View
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <Link
              to="/roadmaps"
              className="flex items-center text-foreground/90 hover:text-foreground transition-all duration-300"
            >
              <ArrowLeft className="mr-2" />
              Back to All Roadmaps
            </Link>
          </div>
          <div className="glass-card p-8 space-y-6 text-left">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase size={32} className="text-primary-accent" />
              <h2 className="text-2xl font-semibold text-foreground">{selectedRoadmap.title}</h2>
            </div>
            <p className="text-foreground/80 mb-4">{selectedRoadmap.description}</p>
            <div className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: roadmapsSvg[selectedRoadmap.id] || 'Loading diagram...' }}></div>
          </div>
        </div>
      ) : (
        // All Roadmaps View
        <>
          <h1 className="text-4xl font-bold text-foreground">Career Roadmaps</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">Explore structured paths to achieve your career goals with detailed roadmaps for various job roles.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedRoadmaps.map((roadmap) => (
              <Link
                key={roadmap.id}
                to={`/roadmaps/${roadmap.id}`}
                className="glass-card p-8 space-y-6 text-left flex flex-col hover-scale hover-glow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase size={32} className="text-primary-accent" />
                  <h2 className="text-2xl font-semibold text-foreground">{roadmap.title}</h2>
                </div>
                <p className="text-foreground/80 mb-4 flex-grow">{roadmap.description}</p>
                <div className="mermaid-diagram flex-shrink-0" dangerouslySetInnerHTML={{ __html: roadmapsSvg[roadmap.id] || 'Loading diagram...' }}></div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CareerRoadmaps; 