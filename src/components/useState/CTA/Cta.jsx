import { useNavigate } from 'react-router-dom';
import './Cta.css';

function CTA() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/use-state-component')}>Call Use State Component</button>
      <button onClick={() => navigate('/tailwind-component')}>Tailwind Component</button>
    </>
  );
}

export default CTA;
