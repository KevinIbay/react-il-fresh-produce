const Droplist = ({ months, selectMonth }) => {
  return (
    <>
      <label htmlFor='months'>Select Month: </label>

      <select
        name='months'
        onChange={(e) => selectMonth(e.target.selectedIndex)}
      >
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </>
  );
};

export default Droplist;
