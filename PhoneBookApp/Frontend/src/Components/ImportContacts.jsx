import { useState } from "react";

const ImportContacts = () => {
  const [jsonData, setJsonData] = useState(null);

  const convertCSVToJson = (csvData) => {
    const lines = csvData.split("\n");
    const headers = lines[0].split(",");
    const result = [];

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        obj[!headers[j] || headers[j].trim()] =
          !currentLine[j] || currentLine[j].trim();
      }

      result.push(obj);
    }

    return result;
  };

  const handleCSVInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const csvData = e.target.result;
      const jsonData = convertCSVToJson(csvData);
      setJsonData(jsonData);
    };

    reader.readAsText(file);
  };



  return (
    <>
      <div>
        {jsonData ? (
          <div
            className="container-fluid pt-4"
            style={{ maxWidth: "90%", paddingRight: "5%" }}
          >
            <h3 className="py-3" style={{ color: "rgb(8, 2, 2)" }}>Import contacts</h3>
            <div className="json-container" style={{ color: "black" }}>
              <pre>{JSON.stringify(jsonData, null, 2)}</pre>
            </div>
          </div>
        ) : (
          <div
            className="container-fluid pt-4"
            style={{ maxWidth: "90%", paddingRight: "5%" }}
          >
            <h3 className="py-3 text-light">Import contacts</h3>
            <form className="needs-validation">
              <input
                type="file"
                accept=".csv"
                className="form-control w-50"
                onChange={handleCSVInputChange}
              />
              <p>Please select a CSV file.</p>
              <div className="json-container" style={{ color: "black" }}>
                <pre></pre>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ImportContacts;
