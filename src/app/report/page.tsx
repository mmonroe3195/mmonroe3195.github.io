export default function Report() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Maps of where different calls occured:</div>
      <iframe
        title="COCVAC_Report"
        className="m-1"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=bd85bfd8-e1b3-46bb-a722-c60e21738268&autoAuth=true&ctid=f9ea7f3e-de28-46d1-b63d-91d3086fff91"
      ></iframe>
      <br></br>
      <div>Charts of different types of calls:</div>
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
