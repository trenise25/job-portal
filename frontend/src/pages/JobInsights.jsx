import React, { useState, useEffect } from 'react';
import { BarChart, TrendingUp, TrendingDown, GitPullRequestArrow, Briefcase, Users, Target } from 'lucide-react';
import { createDiagram } from '../utils/diagramHelper'; // Assuming a utility to render Mermaid

const JobInsights = () => {
  const [jobMarketFlowchartSvg, setJobMarketFlowchartSvg] = useState('');
  const [marketShareChartSvg, setMarketShareChartSvg] = useState('');
  const [companySalesGraphSvg, setCompanySalesGraphSvg] = useState('');

  const jobMarketFlowchartDefinition = `
    graph TD
    A[Start Job Search] --> B{Identify Skills & Interests}
    B --> C{Research Industries & Roles}
    C --> D[Tailor Resume & Cover Letter]
    D --> E{Apply for Jobs}
    E --> F{Prepare for Interviews}
    F --> G{Attend Interviews}
    G --> H{Receive Offer}
    H --> I[Accept Offer & Start Job]
  `;

  const marketShareChartDefinition = `
    pie title Top Industries Job Share
      "Technology" : 45
      "Healthcare" : 20
      "Finance" : 15
      "Education" : 10
      "Other" : 10
  `;

  const companySalesGraphDefinition = `
    graph TD
    A[Company A] -->|Q1: $1.2M| B(Q2: $1.5M)
    A -->|Q3: $1.0M| C(Q4: $1.8M)
    D[Company B] -->|Q1: $0.8M| E(Q2: $1.0M)
    D -->|Q3: $1.1M| F(Q4: $1.3M)
    G[Company C] -->|Q1: $0.5M| H(Q2: $0.7M)
    G -->|Q3: $0.6M| I(Q4: $0.9M)
  `;

  useEffect(() => {
    const renderDiagrams = async () => {
      setJobMarketFlowchartSvg(await createDiagram(jobMarketFlowchartDefinition));
      setMarketShareChartSvg(await createDiagram(marketShareChartDefinition));
      setCompanySalesGraphSvg(await createDiagram(companySalesGraphDefinition));
    };
    renderDiagrams();
  }, []);

  const salaryTrendsData = [
    { role: 'Software Engineer', avgSalary: '120K', trend: 'up' },
    { role: 'Data Scientist', avgSalary: '130K', trend: 'up' },
    { role: 'Marketing Manager', avgSalary: '90K', trend: 'stable' },
    { role: 'Financial Analyst', avgSalary: '100K', trend: 'up' },
    { role: 'HR Specialist', avgSalary: '70K', trend: 'down' },
  ];

  const intakeCardsData = [
    { title: 'New Job Openings', value: '2,100+', icon: <Briefcase size={24} /> },
    { title: 'Candidates Applied', value: '15,000+', icon: <Users size={24} /> },
    { title: 'Positions Filled', value: '950+', icon: <Target size={24} /> },
  ];

  const dataAnalystJobs = [
    {
      id: 1,
      title: 'Junior Data Analyst',
      company: 'DataCo',
      location: 'New York, NY',
      salary: '$60K - $75K',
      description: 'Assist in data collection, cleaning, and basic analysis.',
      skills: ['Excel', 'SQL', 'Python'],
    },
    {
      id: 2,
      title: 'Mid-level Data Analyst',
      company: 'Insightful Inc.',
      location: 'San Francisco, CA',
      salary: '$80K - $100K',
      description: 'Perform complex data analysis and create reports.',
      skills: ['Python', 'R', 'Tableau', 'SQL'],
    },
    {
      id: 3,
      title: 'Senior Data Analyst',
      company: 'Global Analytics',
      location: 'Remote',
      salary: '$100K - $130K',
      description: 'Lead data analysis projects and mentor junior analysts.',
      skills: ['Python', 'R', 'Power BI', 'SQL', 'Machine Learning'],
    },
    {
      id: 4,
      title: 'Business Intelligence Analyst',
      company: 'BI Solutions',
      location: 'Chicago, IL',
      salary: '$85K - $110K',
      description: 'Develop BI dashboards and provide insights for business decisions.',
      skills: ['SQL', 'Tableau', 'Power BI', 'Data Warehousing'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-center space-y-12">
      <h1 className="text-4xl font-bold text-foreground">Job Insights</h1>
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto">Explore trends, data, and insights about the job market to guide your career decisions.</p>

      {/* Job Search Flowchart */}
      <section className="glass-card p-8 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary-accent flex items-center justify-center gap-2">
          <GitPullRequestArrow size={24} /> Job Search Process Flow
        </h2>
        <div className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: jobMarketFlowchartSvg }}></div>
      </section>

      {/* Market Share Chart */}
      <section className="glass-card p-8 space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary-accent flex items-center justify-center gap-2">
          <BarChart size={24} /> Job Market Share by Industry
        </h2>
        <div className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: marketShareChartSvg }}></div>
      </section>

      {/* Company Sales Graph (Dummy) */}
      <section className="glass-card p-8 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary-accent flex items-center justify-center gap-2">
          <BarChart size={24} /> Company-wise Sales Insights (Dummy Data)
        </h2>
        <div className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: companySalesGraphSvg }}></div>
      </section>

      {/* Intake Cards */}
      <section className="glass-card p-8 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary-accent flex items-center justify-center gap-2">
          <Users size={24} /> Key Hiring Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {intakeCardsData.map((card, index) => (
            <div key={index} className="glass-card p-6 space-y-2 flex flex-col items-center justify-center text-center">
              {card.icon}
              <h3 className="text-xl font-semibold text-primary-accent">{card.value}</h3>
              <p className="text-foreground/80">{card.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Analyst Job Cards */}
      <section className="glass-card p-8 space-y-6 max-w-4xl mx-auto text-left">
        <h2 className="text-2xl font-semibold text-primary-accent flex items-center gap-2">
          <Briefcase size={24} /> Data Analyst Job Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataAnalystJobs.map((job) => (
            <div key={job.id} className="glass-card p-6 space-y-3 hover-scale hover-glow">
              <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
              <p className="text-foreground/80">{job.company} - {job.location}</p>
              <p className="text-primary-accent font-bold">{job.salary}</p>
              <p className="text-foreground/70 text-sm">{job.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {job.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-primary-accent/20 text-primary-accent text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Salary Trends */}
      <section className="glass-card p-8 space-y-6 max-w-4xl mx-auto text-left">
        <h2 className="text-2xl font-semibold text-primary-accent flex items-center gap-2">
          <TrendingUp size={24} /> Salary Trends by Role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {salaryTrendsData.map((data, index) => (
            <div key={index} className="flex items-center justify-between p-4 glass-card-sm">
              <span className="font-medium text-foreground/90">{data.role}</span>
              <div className="flex items-center gap-2">
                <span className="text-primary-accent font-semibold">{data.avgSalary}</span>
                {data.trend === 'up' && <TrendingUp size={18} className="text-green-500" />}
                {data.trend === 'down' && <TrendingDown size={18} className="text-red-500" />}
                {data.trend === 'stable' && <></>}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-foreground/70 mt-4">* For more advanced, interactive charts and graphs, a dedicated charting library (e.g., Chart.js, Recharts, D3.js) would be integrated with actual backend data.</p>
      </section>
    </div>
  );
};

export default JobInsights; 