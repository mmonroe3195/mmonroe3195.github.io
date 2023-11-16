export default function about() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>About the Developers!</h1>
      <div>We are 3 seniors at Hamilton College!</div>
      <br/>
      <h2 className="text-2xl">Madison</h2>
      <div>
        Hi, I am a senior computer science major at Hamilton College and am from CT. I am
        interested in full-stack development and will be moving to Portland,
        Oregon upon graduation to work as a software engineer at Nike. My
        favorite coding language is Python and outside of computer science
        classes, I enjoy talking environmental studies classes for my minor. At school, you
        can typically find me climbing at the school&apos;s rock wall, coding in the science center, or 
        cycling around the farms nearby Hamilton&apos;s campus.
      </div>
      <br />
      <h2 className="text-2xl">Sydney</h2>
      <div>
        Hi, I&apos;m also a senior computer science major at Hamilton College,
        and I am a minor in Africana Studies. I grew up in central New Jersey. I
        am interested in doing UX Design or software engineering after I
        graduate. At Hamilton, I&apos;ve enjoyed taking introductory classes to
        explore the other departments. Some activities I enjoy are playing
        cello, swimming, and playing pickleball. I also love trying new sports
        and activities.
      </div>
      <br />
      <h2 className="text-2xl">Charlotte</h2>
      <div>
        Hi! I am also a senior computer science major at Hamilton College, and
        I&apos;m a minor in History. I am from Northern California, and I&apos;m
        looking forward to working as a software engineer in San Francisco after
        graduation. I enjoy reading and hiking, and I love learning new
        languages as well. I&apos;m very interested in software engineering and
        database design, and outside of computer science I enjoy taking history
        and philosophy courses.
      </div>
      <br/>
      <h1>About the Project!</h1>
      <br/>
      <div> This project has been created for COCVAC in CPSCI-410 Senior Seminar with Professor Morrison-Smith. </div>
      <br/>
      <h2 className="text-2xl">CPSCI-410</h2>
      <div>This course introduces methods and tools used in Human Computer Interaction to design software 
        that meets user needs. Students will work in teams to design, implement, and evaluate systems for 
        non-profit clients with the goal of developing software that furthers social good. Our client for this 
        project is COCVAC.
      </div>
      <h2 className="text-2xl">COCVAC</h2>
      <div> The Central Oneida County Volunteer Ambulance Corps provides primary 911 response in and around the towns, Villages and 
        Hamlets of Kirkland, Westmoreland, Whitestown, Marshal, Augusta, Sangerfield. COCVAC also answers mutual aid requests for the Greater Utica Rome area.
        COCVAC is also responsible for a variety of other services such as interfacility transport, special event 
        standby, and CPR/ First Aid Trainings.
      </div>
      <br/>
      <h2 className="text-2xl">COCVAC/ Hamilton Collaboration</h2>
      <div> 
        For this project, we are working with COCVAC to create reports based on public 911 call data. We are also working to automate
        report creation so that future call data can be automatically be scraped from online, added to our Power BI reports, and published onto this website.
      </div>
    </main>
  );
}
