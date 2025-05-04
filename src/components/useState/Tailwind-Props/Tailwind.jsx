import Card from '../Card-Component/Card';
import './Tailwind.css';

function Tailwind() {
  return (
    <>
      <h2 className='bg-green-400 mb-4 rounded-xl text-black'>Tailwind Component</h2>
      <Card descriptionOfCard="Jaadu is Coming"/>
    </>
  );
}

export default Tailwind;
