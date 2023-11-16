export default function Report() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Maps of where different calls occurred</h2>
      <br/>
      <div>To view the various map tabs, click the arrows below.</div>
      <iframe
        className="m-1"
        title="COCVAC_Report"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/view?r=eyJrIjoiNDI4N2NiNzgtNjY2ZS00Y2E1LThkZWUtYmU4YzU0NzJkNmQzIiwidCI6ImY5ZWE3ZjNlLWRlMjgtNDZkMS1iNjNkLTkxZDMwODZmZmY5MSIsImMiOjN9"
      ></iframe>
      <br></br>
      <div>Chart of 911 Call Data:</div>
      <div>note: switch later so it is just the chart</div>
      <iframe
        className="m-1"
        title="Heat Map"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/view?r=eyJrIjoiNjkwNzA2NTYtMTBlZC00ODNjLTlkMzktODQzNDNjMmE1NWY1IiwidCI6ImY5ZWE3ZjNlLWRlMjgtNDZkMS1iNjNkLTkxZDMwODZmZmY5MSIsImMiOjN9"
      ></iframe>
      <br></br>
      <div>Charts of different types of calls:</div>
      <br/>
      <div>To view the various chart tabs, click the arrows below.</div>
      <iframe
        className="m-1"
        title="Report Section"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/view?r=eyJrIjoiN2EzNDlkMDgtZDhlOS00NGJjLWFiYjMtYjgyYTA2ZjViMzQ4IiwidCI6ImY5ZWE3ZjNlLWRlMjgtNDZkMS1iNjNkLTkxZDMwODZmZmY5MSIsImMiOjN9"
      ></iframe>
    </div>
  );
}
