export default function Report() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 w-10/12 m-auto">
      <div className="text-center">
        <div className="pb-5 font-bold text-xl font-bold">
          Table of where different calls occurred:
        </div>
         <iframe title="Report Section" width="1140" height="541.25" src="https://app.powerbi.com/view?r=eyJrIjoiYjYzNmYxMzgtMGFmZC00ODhmLWFmNjEtYTI1ODU2MGNjNjk5IiwidCI6ImY5ZWE3ZjNlLWRlMjgtNDZkMS1iNjNkLTkxZDMwODZmZmY5MSIsImMiOjN9"></iframe>
      </div>
      <div className="pt-5 text-center">
        <hr className="background-color: bg-black h-0.5" />
        <div className="py-5 font-bold text-xl">Map of 911 Call Data:</div>
        <div>To view the various map tabs, click the arrows below.</div>
        <iframe title="AT_COCVAC_Maps" width="1140" height="541.25" src="https://app.powerbi.com/view?r=eyJrIjoiN2RiZWM4NGEtOTZhNS00NTE4LWJmNTUtZmEzM2U5YjBhZjAyIiwidCI6ImY5ZWE3ZjNlLWRlMjgtNDZkMS1iNjNkLTkxZDMwODZmZmY5MSIsImMiOjN9&pageName=ReportSectiona553383e314cb81e8ea9"></iframe>
      </div>
      <div className="pt-5 text-center">
        <hr className="background-color: bg-black h-0.5" />
        <div className="py-5 font-bold text-xl">
          Charts of different types of calls:
        </div>
        <div>To view the various chart tabs, click the arrows below.</div>
        <iframe
          title="Report Section"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/view?r=eyJrIjoiODc3NzQ2NmMtNmU1OS00NDRmLThkZGMtMTdhMjYwYmQwNDQwIiwidCI6ImY5ZWE3ZjNlLWRlMjgtNDZkMS1iNjNkLTkxZDMwODZmZmY5MSIsImMiOjN9"
        ></iframe>
      </div>
    </div>
  );
}
