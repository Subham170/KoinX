import React from 'react';
import './Team.css';
import dp from '../../assets/dp.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Team Member 1",
    designation: "Designation here",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    imageUrl: {dp}
  },
  {
    id: 2,
    name: "Team Member 2",
    designation: "Designation here",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    imageUrl: {dp}
  },
  {
    id: 3,
    name: "Team Member 3",
    designation: "Designation here",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    imageUrl: {dp}
  }
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h1>Team</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. 
        Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <div className="member-info">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
              />
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
            </div>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

