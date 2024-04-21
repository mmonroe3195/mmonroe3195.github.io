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
        The Oriskany Creek Flooding Information Video
      </div>
      <br />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5NY4v4EYulk?si=hjP1KHK5rh1urNkb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <br />
      <br />
      <div className="flex flex-row w-screen pt-10">
        <div className="w-5/12 px-5 ml-auto border-r-2 border-black text-center">
          <h2 className="text-2xl">Oriskany Creek Flooding Information</h2>
          <div>
            Add
          </div>
        </div>
        <div className="w-5/12 px-5 mr-auto border-l-2 border-black text-center">
          <h2 className="text-2xl">Additional Information/ Articles</h2>
          <div>
            Add
          </div>
        </div>
      </div>
    </main>
  );
}
