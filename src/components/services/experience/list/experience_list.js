import React, { useEffect, useState } from 'react';
import './experience.css'; 

const ListExperience = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://localhost:5000/api/experiences/get_experience_list')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Registra los datos en la consola para depuración
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="experience-panel">
      {data.map(item => (
        <div className="panel" key={item.experience_id}>
            <div className='experience-content'>
                <img src={item.experience_images[0].Src} alt={item.experience_id}/>
                <h3>{item.name}</h3>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ListExperience;
