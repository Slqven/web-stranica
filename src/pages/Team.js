import React from 'react';
import './Pages.css';

function Team() {
  const team = [
    {
      name: 'Ana Marić',
      role: 'Vlasnica & Glavni Stilist',
      description: 'S više od 15 godina iskustva, Ana je stručnjak za bojanje i stiliziranje kose.',
      image: 'https://i.pravatar.cc/300?img=1'
    },
    {
      name: 'Marko Horvat',
      role: 'Senior Stilist',
      description: 'Specijaliziran za muške frizure i moderne tehnike šišanja.',
      image: 'https://i.pravatar.cc/300?img=12'
    },
    {
      name: 'Petra Kovač',
      role: 'Kolorist',
      description: 'Stručnjak za balayage i ombre tehnike bojanja.',
      image: 'https://i.pravatar.cc/300?img=5'
    },
    {
      name: 'Ivana Novak',
      role: 'Stilist & Makeup Artist',
      description: 'Specijalizirana za vjenčane frizure i makeup.',
      image: 'https://i.pravatar.cc/300?img=9'
    }
  ];

  return (
    <div className="page team-page">
      <div className="page-header">
        <h1>Naš Tim</h1>
        <p>Upoznajte naše talentirane stručnjake</p>
      </div>

      <div className="container">
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
