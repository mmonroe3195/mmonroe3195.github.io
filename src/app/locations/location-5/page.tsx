import Link from "next/link";

export default function locations() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 w-10/12 m-auto">
      <h1 className="text-4xl">Oriskany Creek</h1>
      <br />
      <div>
        This project has been created for COCVAC in CPSCI-410 Senior Seminar
        with Professor Morrison-Smith.
      </div>
      <br />
      <img
        src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/main/hamilton-thesis-students.png?raw=true"
        width={500}
        height={500}
        alt="Hamilton thesis students with COCVAC"
      />
      <br />
      <h2 className="text-2xl">CPSCI-410</h2>
      <div>
        CPSCI-410 Senior Seminar introduces methods and tools used in Human Computer
        Interaction to design software that meets user needs. Students work
        in teams to design, implement, and evaluate systems for non-profit
        clients with the goal of developing software that furthers social good.
      </div>
      <br />
      <h2 className="text-2xl">The Project Client</h2>
      <br />
      <img
        src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/main/cocvac-building.jpeg?raw=true"
        width={800}
        height={800}
        alt="COCVAC building"
      />
      <br />
      <div className="flex flex-row w-screen pt-10">
        <div className="w-5/12 px-5 ml-auto border-r-2 border-black text-center">
          <h2 className="text-2xl">COCVAC</h2>
          <div>
            Our client for this project is <Link href="https://www.cocvac.org/">the Central Oneida County Volunteer Ambulance Corps</Link>. 
            COCVAC provides primary
            911 response in and around the towns, villages and hamlets of
            Kirkland, Westmoreland, Whitestown, Marshal, Augusta, Sangerfield.
            COCVAC also answers mutual aid requests for the Greater Utica Rome
            area. Additionally, they are responsible for a variety of other services
            such as interfacility transport, special event standby, and CPR/
            First Aid Trainings.
          </div>
        </div>
        <div className="w-5/12 px-5 mr-auto border-l-2 border-black text-center">
          <h2 className="text-2xl">COCVAC/ Hamilton Collaboration</h2>
          <div>
            For this project, we are working with COCVAC to create reports based
            on public <Link href="https://ocgov.net/departments/emergency-services/911-summary-report/">911 call data</Link>. We are also automating report
            creation so that future call data can automatically be scraped, added to 
            our Power BI reports, and published onto this website. To learn more about the technical steps,
            please visit our  <Link href="http://localhost:3000/documentation/overview">overview page.</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
