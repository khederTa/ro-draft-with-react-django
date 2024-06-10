/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function QueryTable({ header, body }) {
  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          {header.map((item) => (
            <th scope="col">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row) => (
          <tr>
            {Object.keys(row).map((key) => (
              <td>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default QueryTable;
