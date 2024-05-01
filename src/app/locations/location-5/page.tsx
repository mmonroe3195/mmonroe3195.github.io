import Link from "next/link";

export default function locations() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 w-10/12 m-auto">
      <h1 className="text-4xl">Flood Zones</h1>
      <br />
      
      <h2 className="text-2xl">Background Information</h2>
      <p>
        Flooding from extreme rainfall events is a problem impacting the local area.
        Whether it is the flooding of the Erie Canal, the Oriskany Creek, or 
        another body of water, there is no shortage of examples of flood zones. 
        As climate change continues to impact the local NY area, there is likely to 
        be more flooding in these vulnerable areas. 
      </p>
      <br />
      <br />
      <h2 className="text-2xl">Oriskany Creek</h2>
      <br/>
      <div>
        The Oriskany Creek Flooding Images
      </div>
      <div className="flex flex-row w-screen pt-10">
        <div className="w-3/12 px-5 ml-auto border-r-2 border-black text-center">
          <h2 className="text-2xl">2017 Flooding</h2>
          <br />
          <img
            src="https://image.syracuse.com/home/syr-media/pgfull/img/post-standard/photo/2017/07/01/blog-img-8017jpg-2a579243b088d4cb.jpg"
            alt="picture of flooding"
            className="w-64 h-44 mx-auto"
          />
          <br />
          <div>
            Flooding of roads impacting homes and transportation.
          </div>
        </div>
        <div className="w-3/12 px-5 border-x-2 border-black text-center">
          <h2 className="text-2xl">High Water 2019</h2>
          <br />
          <iframe className="w-64 h-44 mx-auto" src="https://www.youtube.com/embed/32-moyi83CE?si=6yesmH8PWLCSuUc2" 
          title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          <br />
          <div>
            Click <Link href="https://www.wktv.com/video/flooding-from-oriskany-creek-in-clinton/video_cbc84739-6be8-5fc0-a937-cc4272e865a7.html">here</Link> to see a video from 2023 flooding.
          </div>
        </div>
        <div className="w-3/12 px-5 mr-auto border-l-2 border-black text-center">
          <h2 className="text-2xl">2017 Sinkhole</h2>
          <br />
          <img
            src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.18172-8/19577498_1572260026158351_5582441856645385753_o.jpg?stp=dst-jpg_p600x600&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DZqSuYI5vrYQ7kNvgEyC-A5&_nc_ht=scontent-lga3-1.xx&edm=AM5uX9AEAAAA&oh=00_AfAy4mq46Ni7MuYaxpFfZ-N-meOB3XD7YCSgpnr_keHHUw&oe=66573AF3"
            alt="sink hole"
            className="w-64 h-44 mx-auto"
          />
          <br />
          <div>
            A sink hole on 12B from flooding
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <div>
        The Oriskany Creek Flooding Video
      </div>
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5NY4v4EYulk?si=hjP1KHK5rh1urNkb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <br />
      <br />
      <div className="flex flex-row w-screen pt-10">
        <div className="w-5/12 px-5 ml-auto border-r-2 border-black text-center">
          <h2 className="text-2xl">Oriskany Creek Flooding Information</h2>
          <div>
          Flooding already poses a threat to the local community, and this problem will likely be 
          exacerbated due to climate change. According to the Clinton and Kirkland Climate Change Vulnerability Assessment, 
          <q>Across the Clinton and Kirkland community, more places will flood with greater frequency and 
          intensity as the climate continues to change</q> (13). This flooding currently occurs in places
           like Oriskany and Sherman Brook. These floods have been disrupting residents over the years. 
           For instance, in 2017,
            several homes were evacuated due to flooding. This also impacted local transit 
            since a large sink hole formed in the middle of route 12B (12B is the section of road 
            perpendicular to the road that I am on in the above video). This poses a risk to 
            Clinton/ Kirkland community members.

          </div>
        </div>
        <div className="w-5/12 px-5 mr-auto border-l-2 border-black text-center">
          <h2 className="text-2xl">Additional Information/ Articles</h2>
          <div>
            <Link href="https://kirklandclintonclimatesmart.org/wp-content/uploads/CKVulnerabilityAssessment.pdf">https://kirklandclintonclimatesmart.org/wp-content/uploads/CKVulnerabilityAssessment.pdf</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
