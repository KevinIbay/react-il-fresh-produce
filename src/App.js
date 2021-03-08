import { useState, useEffect } from 'react';
import Droplist from './Droplist.js';
import calendar from './data.js';
import ProduceList from './ProduceList.js';

function App() {
  const [monthSelected, setMonthSelected] = useState(0);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // useEffect(() => {
  //   console.log(calendar[monthSelected].produce);
  // });

  return (
    <div className='App p-5 h-screen bg-cover bg-gradient-to-br from-yellow-500'>
      <h1 className='font-bold text-xl'>Illinois Fresh Produce</h1>
      <Droplist months={months} selectMonth={setMonthSelected} />
      {calendar[monthSelected].produce.length != 0 ? (
        <ProduceList produceArr={calendar[monthSelected].produce} />
      ) : (
        <div>No Fresh Produce This Month</div>
      )}
    </div>
  );
}

export default App;
