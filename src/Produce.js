const Produce = ({ produce }) => {
  return (
    <li className='mx-3'>
      <h1>{produce.name}</h1>
      <img src={produce.img} />
    </li>
  );
};

export default Produce;
