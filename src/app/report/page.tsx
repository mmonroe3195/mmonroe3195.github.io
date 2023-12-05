export default function Report() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 w-10/12 m-auto">
      <div className="text-center">
        <div className="pb-5 font-bold text-xl font-bold">
          Maps of where different calls occurred:
        </div>
        <div>To view the various map tabs, click the arrows below.</div>
        <iframe
          title="Map Report"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/view?r=eyJrIjoiNDZiMWQ2ZjAtMzI1Ny00NzlkLWEwYjAtNTFmZTQwNDRjNWUxIiwidCI6ImY5ZWE3ZjNlLWRlMjgtNDZkMS1iNjNkLTkxZDMwODZmZmY5MSIsImMiOjN9"
        ></iframe>
      </div>
      <div className="pt-5 text-center">
        <hr className="background-color: bg-black h-0.5" />
        <div className="py-5 font-bold text-xl">Chart of 911 Call Data:</div>
        <iframe
          title="Report Section"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/view?r=eyJrIjoiZDhlYjdmZTEtNGVkYy00NTYzLWEyYmMtM2Q2ZmExMzZkZGIyIiwidCI6ImY5ZWE3ZjNlLWRlMjgtNDZkMS1iNjNkLTkxZDMwODZmZmY5MSIsImMiOjN9"
        ></iframe>
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
