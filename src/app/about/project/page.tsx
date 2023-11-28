import Image from "next/image";

export default function about() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">About the Project!</h1>
      <br />
      <div>
        This project has been created for COCVAC in CPSCI-410 Senior Seminar
        with Professor Morrison-Smith.
      </div>
      <br />
      <h2 className="text-2xl">CPSCI-410</h2>
      <div>
        This course introduces methods and tools used in Human Computer
        Interaction to design software that meets user needs. Students will work
        in teams to design, implement, and evaluate systems for non-profit
        clients with the goal of developing software that furthers social good.
        Our client for this project is COCVAC.
      </div>
      <h2 className="text-2xl">COCVAC</h2>
      <br />
      <Image
        src="/cocvac-building.jpeg"
        width={800}
        height={800}
        alt="COCVAC building"
      />
      <br />
      <div>
        The Central Oneida County Volunteer Ambulance Corps provides primary 911
        response in and around the towns, Villages and Hamlets of Kirkland,
        Westmoreland, Whitestown, Marshal, Augusta, Sangerfield. COCVAC also
        answers mutual aid requests for the Greater Utica Rome area. COCVAC is
        also responsible for a variety of other services such as interfacility
        transport, special event standby, and CPR/ First Aid Trainings.
      </div>
      <br />
      <h2 className="text-2xl">COCVAC/ Hamilton Collaboration</h2>
      <div>
        For this project, we are working with COCVAC to create reports based on
        public 911 call data. We are also working to automate report creation so
        that future call data can be automatically be scraped from online, added
        to our Power BI reports, and published onto this website.
      </div>
    </main>
  );
}
