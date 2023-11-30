export default function about() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl pb-10">About the Developers!</h1>
      <img
        src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/main/hamilton-thesis-students.png?raw=true"
        width={500}
        height={500}
        alt="Hamilton thesis students with COCVAC"
      />
      <br />

      <div className="flex flex-row w-screen pt-10">
        <div className="w-3/12 px-5 ml-auto border-r-2 border-black text-center">
          <h2 className="text-2xl">Madison</h2>
          <br />
          <img
            src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/dev-columns/developer-madison.jpg?raw=true"
            alt="picture of Madison"
            className="w-64 h-44 mx-auto"
          />
          <br />
          <div>
            Hi, I am a senior computer science major at Hamilton College and am
            from Connecticut. I am interested in full-stack development and will be
            moving to Portland, Oregon upon graduation to work as a software
            engineer at Nike. My favorite coding language is Python. Outside
            of computer science classes, I enjoy taking environmental studies
            courses. At school, you can typically find me climbing
            at the school&apos;s rock wall, coding in the science center, or
            cycling around Clinton.
          </div>
        </div>
        <div className="w-3/12 px-5 border-x-2 border-black text-center">
          <h2 className="text-2xl">Sydney</h2>
          <br />
          <img
            src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/dev-columns/developer-sydney.jpeg?raw=true"
            alt="picture of Sydney"
            className="w-64 h-44 mx-auto"
          />
          <br />
          <div>
            Hi, I&apos;m also a senior computer science major at Hamilton
            College, and I am a minor in Africana Studies. I grew up in central
            New Jersey. I am interested in doing UX Design or software
            engineering after I graduate. At Hamilton, I&apos;ve enjoyed taking
            introductory classes to explore the other departments. Some
            activities I enjoy are playing cello, swimming, and playing
            pickleball. I also love trying new sports and activities.
          </div>
        </div>
        <div className="w-3/12 px-5 mr-auto border-l-2 border-black text-center">
          <h2 className="text-2xl">Charlotte</h2>
          <br />
          <img
            src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/main/developer-charlotte.jpeg?raw=true"
            alt="picture of Charlotte"
            className="w-64 h-44 mx-auto"
          />
          <br />
          <div>
            Hi! I am also a senior computer science major at Hamilton College,
            and I&apos;m a minor in History. I am from Northern California, and
            I&apos;m looking forward to working as a software engineer in San
            Francisco after graduation. I enjoy reading and hiking, and I love
            learning new languages as well. I&apos;m very interested in software
            engineering and database design, and outside of computer science I
            enjoy taking history and philosophy courses.
          </div>
        </div>
      </div>
    </main>
  );
}
