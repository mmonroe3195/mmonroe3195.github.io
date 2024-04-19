export default function locations() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl pb-10">Location 3</h1>
      

      <div className="flex flex-row w-screen pt-10">
        <div className="w-3/12 px-5 ml-auto border-r-2 border-black text-center">
          <h2 className="text-2xl">Location 3</h2>
          <br />
          <img
            src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/dev-columns/developer-madison.jpg?raw=true"
            alt="picture of Madison"
            className="w-64 h-44 mx-auto"
          />
          <br />
          <div>
            stuff
          </div>
        </div>
        <div className="w-3/12 px-5 border-x-2 border-black text-center">
          <h2 className="text-2xl">Location 3</h2>
          <br />
          <img
            src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/dev-columns/developer-sydney.jpeg?raw=true"
            alt="picture of Sydney"
            className="w-64 h-44 mx-auto"
          />
          <br />
          <div>
            stuff
          </div>
        </div>
        <div className="w-3/12 px-5 mr-auto border-l-2 border-black text-center">
          <h2 className="text-2xl">Location 3</h2>
          <br />
          <img
            src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/main/developer-charlotte.jpeg?raw=true"
            alt="picture of Charlotte"
            className="w-64 h-44 mx-auto"
          />
          <br />
          <div>
            stuff
          </div>
        </div>
      </div>
    </main>
  );
}
