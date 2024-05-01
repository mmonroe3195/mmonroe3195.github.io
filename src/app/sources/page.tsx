import Link from "next/link";

export default function Overview() {
  return (
    <main className="flex min-h-screen flex-col items-left p-24 w-10/12 m-auto space-y-4 text-center">
      <h2 className="text-4xl font-bold">Sources:</h2>
      <div className="text-2xl font-bold">
        <br/>
        Erie Canal-
        <div className="text-lg">
          <Link href="https://www.syracuse.com/news/2011/11/state_canal_system_reopens_to.html">https://www.syracuse.com/news/2011/11/state_canal_system_reopens_to.html</Link> <br/><br/>
          <Link href="https://www.timesunion.com/local/article/8-canal-dams-may-be-rebuilt-4173514.php">https://www.timesunion.com/local/article/8-canal-dams-may-be-rebuilt-4173514.php</Link><br/><br/>
          <Link href="https://www.canals.ny.gov/wwwapps/tas/notices/ntm.aspx?id=1325">https://www.canals.ny.gov/wwwapps/tas/notices/ntm.aspx?id=1325</Link><br/><br/>
        </div>
        <br/>
        Oriskany Creek-
        <div className="text-lg">
         <Link href="https://kirklandclintonclimatesmart.org/wp-content/uploads/CKVulnerabilityAssessment.pdf">https://kirklandclintonclimatesmart.org/wp-content/uploads/CKVulnerabilityAssessment.pdf</Link>
        </div>
        <br/>
        Local Farms-
        <div className="text-lg">
        <Link href="https://www.wgrz.com/article/weather/cold-temperatures-new-york-apple-growers/71-706327da-6bb1-4f0d-ad0b-2f8da77ca03f">https://www.wgrz.com/article/weather/cold-temperatures-new-york-apple-growers/71-706327da-6bb1-4f0d-ad0b-2f8da77ca03f</Link><br/><br/>
         <Link href="https://kirklandclintonclimatesmart.org/wp-content/uploads/CKVulnerabilityAssessment.pdf">https://kirklandclintonclimatesmart.org/wp-content/uploads/CKVulnerabilityAssessment.pdf</Link>
        </div>
      </div>
    </main>
  );
}
