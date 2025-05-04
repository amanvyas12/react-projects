import { useNavigate } from 'react-router-dom';
import './Cta.css';

function CTA() {
  const navigate = useNavigate();

  return (
    <>
    
      <ul className='list-decimal'>
        <li className='mb-2'><button onClick={() => navigate('/use-state-component')}>Call Use State Component</button></li>
        <li className='mb-2'> <button onClick={() => navigate('/tailwind-component')}>Tailwind Component</button></li>
        <li className='mb-2'><button onClick={() => navigate('/bgchanger-component')}>BG Changer Component</button></li>
      </ul>
      
     
      
      
    </>
  );
}

export default CTA;
