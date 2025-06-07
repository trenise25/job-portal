import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Award, Edit2, Save, PlusCircle, Trash2 } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Frontend Developer',
    bio: 'Passionate about creating beautiful and functional web applications. Experienced in React, Node.js, and modern web technologies.',
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'AWS'],
    experience: [
      {
        company: 'TechCorp Inc.',
        position: 'Senior Frontend Developer',
        period: '2020 - Present',
        description: 'Leading frontend development for enterprise applications.',
      },
      {
        company: 'WebSolutions Ltd.',
        position: 'Frontend Developer',
        period: '2018 - 2020',
        description: 'Developed responsive web applications using React.',
      },
    ],
    education: [
      {
        institution: 'University of Technology',
        degree: 'Bachelor of Science in Computer Science',
        period: '2014 - 2018',
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to the backend
    console.log('Profile saved:', profile);
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="glass-card p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#003366] to-[#0088cc] flex items-center justify-center text-white text-4xl">
              <User className="w-16 h-16" />
            </div>
          </div>
          <div className="flex-grow space-y-4">
            <div className="flex justify-between items-start">
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="text-3xl font-bold text-[#003366] bg-transparent border-b border-white/20 focus:outline-none focus:border-primary-accent"
                  />
                ) : (
                  <h1 className="text-3xl font-bold text-[#003366]">{profile.name}</h1>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    name="title"
                    value={profile.title}
                    onChange={handleChange}
                    className="text-[#0088cc] bg-transparent border-b border-white/20 focus:outline-none focus:border-primary-accent"
                  />
                ) : (
                  <p className="text-[#0088cc]">{profile.title}</p>
                )}
              </div>
              <button
                onClick={isEditing ? handleSave : handleEdit}
                className="neu-button px-4 py-2 flex items-center gap-2"
              >
                {isEditing ? (
                  <>
                    <Save className="w-5 h-5" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit2 className="w-5 h-5" />
                    Edit Profile
                  </>
                )}
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5" />
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white/20 focus:outline-none focus:border-primary-accent w-full"
                  />
                ) : (
                  profile.email
                )}
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5" />
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white/20 focus:outline-none focus:border-primary-accent w-full"
                  />
                ) : (
                  profile.phone
                )}
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white/20 focus:outline-none focus:border-primary-accent w-full"
                  />
                ) : (
                  profile.location
                )}
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Briefcase className="w-5 h-5" />
                {profile.experience[0].company}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-[#003366] mb-4">About</h2>
        {isEditing ? (
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full h-32 bg-transparent border-b border-white/20 focus:outline-none focus:border-primary-accent resize-none text-gray-600 dark:text-gray-300"
          ></textarea>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{profile.bio}</p>
        )}
      </div>

      {/* Skills Section */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-[#003366] mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-[#003366]/10 text-[#003366]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-[#003366] mb-4">Experience</h2>
        <div className="space-y-6">
          {profile.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-[#0088cc] pl-4">
              <h3 className="text-lg font-semibold text-[#003366]">{exp.position}</h3>
              <p className="text-[#0088cc]">{exp.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{exp.period}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-[#003366] mb-4">Education</h2>
        <div className="space-y-6">
          {profile.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-[#0088cc] pl-4">
              <h3 className="text-lg font-semibold text-[#003366]">{edu.degree}</h3>
              <p className="text-[#0088cc]">{edu.institution}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile; 