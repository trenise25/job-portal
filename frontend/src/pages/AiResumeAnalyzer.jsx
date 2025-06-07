import React, { useState } from 'react';
import { UploadCloud, FileText, Lightbulb, XCircle } from 'lucide-react';

const AiResumeAnalyzer = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setError(null);
    } else {
      setSelectedFile(null);
      setError('Please upload a PDF file.');
      setAnalysisResult(null);
    }
  };

  const handleAnalyzeResume = () => {
    if (!selectedFile) {
      setError('Please upload a resume first.');
      setAnalysisResult(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    // Simulate AI analysis
    setTimeout(() => {
      setIsLoading(false);
      setAnalysisResult({
        summary: 'Your resume is well-structured and highlights key achievements effectively. Consider adding more quantifiable results.',
        strengths: [
          'Clear and concise experience descriptions.',
          'Strong action verbs used.',
          'Relevant skills listed.',
        ],
        areasForImprovement: [
          'Add quantifiable achievements to bullet points (e.g., "Increased sales by 15%").',
          'Tailor summary section to specific job descriptions.',
          'Consider adding a portfolio link if applicable.',
        ],
        keywords: ['Project Management', 'Leadership', 'Data Analysis', 'Strategic Planning', 'Communication'],
      });
    }, 2000); // Simulate 2-second analysis time
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center space-y-8">
      <h1 className="text-4xl font-bold text-foreground">AI Resume Analyzer</h1>
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto">Upload your resume (PDF) and get detailed AI-powered insights to improve your job application.</p>

      <div className="glass-card p-8 space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary-accent">Upload Your Resume</h2>
        
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-foreground/30 rounded-xl p-8 cursor-pointer hover:border-primary-accent transition-all duration-300">
          <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center space-y-3">
            <UploadCloud size={48} className="text-primary-accent" />
            <span className="text-lg font-medium text-foreground/90">Drag & Drop or Click to Upload</span>
            <span className="text-sm text-foreground/70">(PDF only, max 5MB)</span>
          </label>
          <input
            id="resume-upload"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          {selectedFile && (
            <div className="flex items-center gap-2 mt-4 text-foreground/80">
              <FileText size={20} />
              <span>{selectedFile.name}</span>
            </div>
          )}
          {error && (
            <div className="flex items-center gap-2 mt-4 text-red-500">
              <XCircle size={20} />
              <span>{error}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleAnalyzeResume}
          disabled={!selectedFile || isLoading}
          className="glass-card px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold hover-scale hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      </div>

      {analysisResult && (
        <div className="glass-card p-8 space-y-6 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary-accent flex items-center gap-2">
            <Lightbulb size={24} /> Resume Insights
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground/90">Summary:</h3>
            <p className="text-foreground/80">{analysisResult.summary}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground/90">Strengths:</h3>
            <ul className="list-disc list-inside text-foreground/80 space-y-1">
              {analysisResult.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground/90">Areas for Improvement:</h3>
            <ul className="list-disc list-inside text-foreground/80 space-y-1">
              {analysisResult.areasForImprovement.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground/90">Identified Keywords:</h3>
            <div className="flex flex-wrap gap-2">
              {analysisResult.keywords.map((keyword, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-primary-accent/20 text-primary-accent text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiResumeAnalyzer; 