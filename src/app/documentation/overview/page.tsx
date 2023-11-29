export default function Overview() {
  return (
    <main className="flex min-h-screen flex-col items-left p-24 w-11/12 m-auto">
      <p>
        Welcome to the documentation! I still need to format this lol. This is
        intended to be a guide to understand each component in our thesis
        project.
      </p>
      <h2 id="about">About</h2>
      <p>
        Below is a diagram that explains how our project works.
        <img
          src="https://github.com/cocvac-hamilton2023/thesis_ui/blob/main/flow_chart.png?raw=true"
          alt="diagram for project steps."
        />
      </p>
      <h3 id="daily-python-script">Daily Python Script</h3>
      <p>
        Our daily Python script is the first part of our project. By using the
        Windows Task Scheduler, we can execute our Python code automatically at
        a specific time each day. The repository for our Python code is located{" "}
        <a href="https://github.com/sydneyetran/COCVAC_code">here</a>.{" "}
      </p>
      <p>There are two main jobs that our Python script completes. </p>
      <h4 id="scraping-911-call-data-pdfs">Scraping 911 Call Data PDFs</h4>
      <p>
        <a href="https://ocgov.net/departments/emergency-services/911-summary-report/">
          911 call data for Oneida County
        </a>{" "}
        is stored online. Everyday, a new PDF containing the previous day&#39;s
        call data is uploaded online. We scape these PDFs using Tabula, Pandas,
        Openpyxl, and Sys.{" "}
      </p>
      <h4 id="converting-pdfs-to-excel">Converting PDFs to Excel</h4>
      <p>
        We need to convert the PDF data into a tabular form so that the data can
        be used later in Power BI. We are able to do this by using 4 libraries:
        Tabula, Pandas, Openpyxl, and Sys. Sys allows us to take the PDF file as
        an argument when running the code from the terminal. Tabula is used to
        read the PDF information. We use a template with Tabula so that no data
        is lost or missed in the conversion process. The Tabula objects are
        described as a list of Pandas Dataframes. We convert the Pandas
        dataframes into an Excel file. Openpyxl allows us to create an empty
        excel file that is later edited when we add our 911 call data to the
        different cells. This is where the dataframe data is stored and at the
        end of this process, we have all of our 911 call data for the day stored
        in an Excel workbook.
      </p>
      <h3 id="folder-storage">Folder Storage</h3>
      <p>
        Once the Excel Workbook with a day&#39;s 911 call data is created, it is
        added to a folder titled &quot;911 Call Data&quot;. This folder is
        stores Excel Worksheets. A new workbook is stored for each day of 911
        call data.
      </p>
      <h3 id="power-bi-data-upload">Power BI Data Upload</h3>
      <p>
        The next step in the process is to import data into Power BI. Our
        original plan was to utilize{" "}
        <a href="https://learn.microsoft.com/en-us/rest/api/power-bi/">
          APIs from Power BI
        </a>{" "}
        to accomplish this. This would allow us to code everything; however, we
        were limited due to the fact that we only had a free Power BI account.
        We would have needed a Pro or Premium Per User (PPU) license in order to
        do use the the APIs and or anything with{" "}
        <a href="https://learn.microsoft.com/en-us/power-bi/developer/embedded/">
          Power BI Embedded Analytics
        </a>
        . As a result, we looked into alternative approaches and decided to use
        both a Power Query and Personal Gateway to upload data.
      </p>
      <h4 id="power-query">Power Query</h4>
      <p>
        A{" "}
        <a href="https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview#power-query-editor">
          Power Query
        </a>
        , can be used to connect to an external data source. We used a power
        query to pull data from our &quot;911 Call Data&quot; folder. As
        described above, this folder contained Excel Workbooks that contained
        daily Oneida County call data. Once the Power Query was configured, it
        was possible to manually hit a refresh button and to pull in new Excel
        Workbook data.
      </p>
      <h4 id="personal-gateway">Personal Gateway</h4>
      <p>
        We also utilize a{" "}
        <a href="https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode">
          personal gateway
        </a>{" "}
        for our data upload. Is a way to work with on-premise/ locally stored
        data. A personal gateway is downloaded on the computer that has the
        locally stored information that one wants to work with. When once a
        personal gateway is installed, it is possible to configure automatic
        refresh. Our automatic refresh is done on a daily basis. If we did not
        have our personal gateway configured, we would have to manually hit the
        refresh button in Power BI so that newly added data from our &quot;911
        Call Data&quot; could be pulled into Power BI.
      </p>
      <h3 id="power-bi-data-report">Power BI Data Report</h3>
      <p>
        Once the data is pulled into Power BI, it is possible to analyze and
        create charts/ maps to visualize the information. Once the report is
        built it then can be published.
      </p>
      <h4 id="maps">Maps</h4>
      <p>
        One big component of our project is our work with{" "}
        <a href="https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-map-tips-and-tricks">
          maps
        </a>
        . The 911 call data that we work with contains addresses, and our
        clients wanted us to create maps so that they could better see where
        their calls are located. We also wanted these maps to be filterable
        based on location so we encorporated that functionality into our
        reports.
      </p>
      <h4 id="charts">Charts</h4>
      <p>
        We are looking to add additional charts to our project. These may
        include charts such as bar and area charts.
      </p>
      <h3 id="the-user-interface">The User Interface</h3>
      <p>
        The main deliverable for this thesis project is our website. Our website
        is a centralized location to house Power BI reports, overview
        information about the thesis, etc.{" "}
      </p>
      <h4 id="the-report">The Report</h4>
      <p>
        By exporting our report as an iframe, it is possible to embed it
        directly into our website.
      </p>
      <h4 id="the-url">The URL</h4>
      <p>
        We are currently hosting our{" "}
        <a href="https://cocvac-hamilton2023.github.io/thesis_ui/">website</a>{" "}
        using Github Pages.
      </p>
      <h4 id="the-code">The Code</h4>
      <p>
        We are working with the <a href="https://react.dev/">React</a> library,{" "}
        <a href="https://www.typescriptlang.org/">Typescript</a> (a typed
        version of Javascript), <a href="https://nextjs.org/">Next.js</a> (A
        React framework), and{" "}
        <a href="https://tailwindcss.com/">Tailwind CSS</a> (a CSS framework). A
        large reason we chose this tech stack is because these technologies are
        widely used in the intdustry and are powerful tools for building User
        Interfaces.
      </p>
    </main>
  );
}
