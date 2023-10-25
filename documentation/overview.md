Welcome to the documentation! This is intended to be a guide to understand each component in our thesis project.

## About

Below is a diagram that explains how our project works.
![diagram for project steps.](https://github.com/cocvac-hamilton2023/thesis_ui/blob/main/flow_chart.png?raw=true)

### Daily Python Script

Our daily Python script is the first part of our project. By using the Windows Task Scheduler, we can execute our Python code automatically at a specific time each day. The repository for our Python code is located [here](https://github.com/sydneyetran/COCVAC_code). 

There are two main jobs that our Python script completes. 

#### Scraping 911 Call Data PDFs

[911 call data for Oneida County](https://ocgov.net/departments/emergency-services/911-summary-report/) is stored online. Everyday, a new PDF containing the previous day's call data is uploaded online. We scape these PDFs using Tabula, Pandas, Openpyxl, and Sys. 

#### Converting PDFs to Excel

We need to convert the PDF data into a tabular form so that the data can be used later in Power BI. We are able to do this by using 4 libraries: Tabula, Pandas, Openpyxl, and Sys. Sys allows us to take the PDF file as an argument when running the code from the terminal. Tabula is used to read the PDF information. We use a template with Tabula so that no data is lost or missed in the conversion process. The Tabula objects are described as a list of Pandas Dataframes. We convert the Pandas dataframes into an Excel file. Openpyxl allows us to create an empty excel file that is later edited when we add our 911 call data to the different cells. This is where the dataframe data is stored and at the end of this process, we have all of our 911 call data for the day stored in an Excel workbook.

### Folder Storage

Once the Excel Workbook with a day's 911 call data is created, it is added to a folder titled "911 Call Data". This folder is stores Excel Worksheets. A new workbook is stored for each day of 911 call data.

### Power BI Data Upload

The next step in the process is to import data into Power BI. Our original plan was to utilize [APIs from Power BI](https://learn.microsoft.com/en-us/rest/api/power-bi/) to accomplish this. This would allow us to code everything; however, we were limited due to the fact that we only had a free Power BI account. We would have needed a Pro or Premium Per User (PPU) license in order to do use the the APIs and or anything with [Power BI Embedded Analytics](https://learn.microsoft.com/en-us/power-bi/developer/embedded/). As a result, we looked into alternative approaches and decided to use both a Power Query and Personal Gateway to upload data.

#### Power Query

A [Power Query](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview#power-query-editor), can be used to connect to an external data source. We used a power query to pull data from our "911 Call Data" folder. As described above, this folder contained Excel Workbooks that contained daily Oneida County call data. Once the Power Query was configured, it was possible to manually hit a refresh button and to pull in new Excel Workbook data.

#### Personal Gateway

We also utilize a [personal gateway](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode) for our data upload. Is a way to work with on-premise/ locally stored data. A personal gateway is downloaded on the computer that has the locally stored information that one wants to work with. When once a personal gateway is installed, it is possible to configure automatic refresh. Our automatic refresh is done on a daily basis. If we did not have our personal gateway configured, we would have to manually hit the refresh button in Power BI so that newly added data from our "911 Call Data" could be pulled into Power BI.

### Power BI Data Report

Once the data is pulled into Power BI, it is possible to analyze and create charts/ maps to visualize the information. Once the report is built it then can be published.

#### Maps

One big component of our project is our work with [maps](https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-map-tips-and-tricks). The 911 call data that we work with contains addresses, and our clients wanted us to create maps so that they could better see where their calls are located. We also wanted these maps to be filterable based on location so we encorporated that functionality into our reports.

#### Charts

We are looking to add additional charts to our project. These may include charts such as bar and area charts.

### The User Interface

The main deliverable for this thesis project is our website. Our website is a centralized location to house Power BI reports, overview information about the thesis, etc. 

#### The Report

By exporting our report as an iframe, it is possible to embed it directly into our website.

#### The URL

We are currently hosting our [website](https://cocvac-hamilton2023.github.io/thesis_ui/) using Github Pages.

#### The Code

We are working with the [React](https://react.dev/) library, [Typescript](https://www.typescriptlang.org/) (a typed version of Javascript), [Next.js](https://nextjs.org/) (A React framework), and [Tailwind CSS](https://tailwindcss.com/) (a CSS framework). A large reason we chose this tech stack is because these technologies are widely used in the intdustry and are powerful tools for building User Interfaces.
