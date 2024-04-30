import Link from "next/link";

export default function locations() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl pb-10">Local Farms</h1>
      <br />
      
      <h2 className="text-2xl">Background Information</h2>
      <p>
      Farms are a common sight around the Clinton and Kirkland communities. They&apos;re a major type of employment
            for locals, but won&apos;t be spared from the impacts of climate change. In particular, dairy farming, apple 
            harvests, and corn growth will be negatively affected by climate change.
      </p>
      <br />
      <br />
      <h2 className="text-2xl">Local Farms</h2>
      <br/>
      <div>
        Agriculture Video
      </div>
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Qg2xsKxhYGg?si=Xqf7bZqpx8qRYUkR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <br />
      
      <br />
      <div className="flex flex-row w-screen pt-10">
        <div className="w-5/12 px-5 ml-auto border-r-2 border-black text-center">
          <h2 className="text-2xl">Local Farms and Climate Change Information</h2>
          <div>
          The Clinton and Kirkland Climate Change Vulnerability Assessment explains the likely impact of climate change on local agriculture. 
          A lot of local farms focus on dairy farming, but according to the report, rising temperatures will negatively impact average milk 
          production per cow. For instance, they found that there is an expected annual loss in cow milk during summer months. This ranges anywhere from 
          70- 90.6 gallons per cow on average based on whether or not RCP 4.5 or 8.5 is used.
          Apples will also be impacted by climate change. As warming occurs, the bud date of apples will shift to earlier in the season. If there is a spring frost afterwards, it can diminish the likelihood of apple survival. This has already been harming local farmers, and as warming continues, the severity will worsen unless adaptation occurs.
          </div>
        </div>
        <div className="w-5/12 px-5 mr-auto border-l-2 border-black text-center">
          <h2 className="text-2xl">Additional Information/ Articles</h2>
          <div>
          <p>Spring Freeze and Upstate NY Apples:</p>
          <Link href="https://www.wgrz.com/article/weather/cold-temperatures-new-york-apple-growers/71-706327da-6bb1-4f0d-ad0b-2f8da77ca03f">https://www.wgrz.com/article/weather/cold-temperatures-new-york-apple-growers/71-706327da-6bb1-4f0d-ad0b-2f8da77ca03f</Link> <br/><br/>
          <p>Clinton and Kirkland Climate Change Vulnerability Assessment:</p>
          <Link href="https://kirklandclintonclimatesmart.org/wp-content/uploads/CKVulnerabilityAssessment.pdf">https://kirklandclintonclimatesmart.org/wp-content/uploads/CKVulnerabilityAssessment.pdf</Link><br/><br/>
          </div>
        </div>
      </div>
    </main>
  );
}
