import Produce from './Produce.js';

const ProduceList = ({ produceArr }) => {
  const data = Array.from(produceArr);
  return (
    <ul className='flex flex-wrap px-5'>
      {data.map((produce) => (
        <Produce produce={produce} />
      ))}
    </ul>
  );
};

export default ProduceList;
