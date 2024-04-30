import Link from "next/link";

export default function locations() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 w-10/12 m-auto">
      <h1 className="text-4xl">Hamilton College</h1>
      <br />
      
      <h2 className="text-2xl">Background Information</h2>
      <p>
        Add
      </p>
      <br />
      <br />
      <h2 className="text-2xl">Hamilton College</h2>
      <br/>
      <div>
        Hamilton College Video
      </div>
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Qg2xsKxhYGg?si=Xqf7bZqpx8qRYUkR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <br />
      <div>
        The Erie Canal Flooding Video (Part 2)
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Q5gLkcWaCl0?si=OWBeXYCq9I7E3fAn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <br />
      <br />
      <div className="flex flex-row w-screen pt-10">
        <div className="w-5/12 px-5 ml-auto border-r-2 border-black text-center">
          <h2 className="text-2xl">Erie Canal Flooding Information</h2>
          <div>
            The Erie Canal is sometimes subject to flooding following extreme rainfall events. For instance, in 2011 and in 2019, several locks including the Little Falls Lock E17 was shut down to boat traffic
            after severe flooding. NY is currently trying to address this flooding. In their <Link href="https://www.canals.ny.gov/news/Executive_Summary_063023.pdf">2023 Upstate NY Flood Mitigation Task Force Report</Link>,
            they put forth a series of plans to address modify, restore, and create infrastructure to reduce the extent of the flooding. These types of projects are often quite expensive. 
          </div>
        </div>
        <div className="w-5/12 px-5 mr-auto border-l-2 border-black text-center">
          <h2 className="text-2xl">Additional Information/ Articles</h2>
          <div>
          <p>2011 Little Falls Lock Shutdown:</p>
          <Link href="https://www.syracuse.com/news/2011/11/state_canal_system_reopens_to.html">https://www.syracuse.com/news/2011/11/state_canal_system_reopens_to.html</Link> <br/><br/>
          <p>Past Government Adaption Strategy:</p>
          <Link href="https://www.timesunion.com/local/article/8-canal-dams-may-be-rebuilt-4173514.php">https://www.timesunion.com/local/article/8-canal-dams-may-be-rebuilt-4173514.php</Link><br/><br/>
          <p>2019 Canal Shutdown:</p>
          <Link href="https://www.canals.ny.gov/wwwapps/tas/notices/ntm.aspx?id=1325">https://www.canals.ny.gov/wwwapps/tas/notices/ntm.aspx?id=1325</Link><br/><br/>
          </div>
        </div>
      </div>
    </main>
  );
}
