This Guide is intended to explain how to set up this project on a new computer

## Prerequisites 

Power BI Desktop is a requirement for this project since we do all our analytics work with Power BI. Power BI can only be run on Windows computers. If you have access to a Mac, it may be possible to [run Windows apps like Power BI](https://www.macworld.com/article/668848/best-virtual-machine-software-for-mac.html).

## Installation Requirements for Daily Python Script/ Power BI Analysis

Make sure to install the following:
- [Power BI Desktop](https://www.microsoft.com/en-us/download/details.aspx?id=58494)
- [Python](https://www.python.org/downloads/). We recommend installing the newest version of Python. For help with installation, refer to the [Python Installation Video](https://www.youtube.com/watch?time_continue=163&v=Pi0RK7GJIKg&embeds_referring_euri=https%3A%2F%2Fwww.simplilearn.com%2F&source_ve_path=Mjg2NjY&feature=emb_logo) by SimpliLearn.
- [Pip](https://pip.pypa.io/en/stable/installation/). This can be done when installing Python or can be installed separately.

## Daily Python Script

This section will be updated later to reflect the most up to date information. PDFs will be scraped from the web and converted into Excel workbooks that will be stored in a folder called "911 Call Data". Make sure to remember the path that this file is saved to. This path will be needed later on.
Packages needed to run the script:
Jpype1 - version 1.4.1
numpy - version 1.26.1
pandas - version 2.1.2
pip - version 23.3.`
python-dateutil - version 2.8.2
tabula-py - version 2.8.2
requests
pathlib
bs4
openpyxl

java install

## Power BI

Once Power BI is downloaded and logged into, it is possible to create a report. In order to properly import the data, a Power Query and Gateway need to be configured.

## Getting Our Report Locally

In order to get our premade report to load locally, follow these steps. 
- Log into Power BI on the web with the hamilton2023@cocvac.org account.
- Navigate to the report titled "COCVAC_Report". Click on it to enter the report.
- Go to "File" on the toolbar and make a copy of the report
- Open the copy report
- Go to "File" on the toolbar and download the copy report
- Navigate to where the report is downloaded and open the report in Power BI

Once these steps are followed, it will be possible to access the completed report on your machine locally using the Power BI Desktop.

## Fixing the File Path for the Power Query

Note: This section is still being written for now here is the bulleted version
1.  Open up Power Query by clicking the Transform Data button from the main toolbar
2.  Click the error button under "911 Logs". This is located on the left hand on the Queries side bar under the Other Queries dropdown.
3. Look at "Applied Steps" in the top right corner
4. Click on the "Source" button. This will bring up the current folder path for the power query
5. Change the file path to where the Excel Workbooks are stored (the same path as where they are saved from the Python script)
6. Click the "Sample File" button. This is located on the left hand on the Queries side bar.
7. Look at "Applied Steps" in the top right corner
8. Click on the "Source" button. This will bring up the current folder path
9. Change the file path to where the Excel Workbooks are stored (the same path as where they are saved from the Python script) 

Now that the new file path is saved, your power query should be up and running. If you encounter any issues with this, please refer to the [Microsoft Power Query Documentation](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview). The following section may also be helpful if you deem it necessary to set up a power query from scratch.

### Power Query (Only applicable if setting up the Power Query by scratch)

Following the [Microsoft Power Query Documentation](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview) is helpful to get started with a Power Query. This section of documentation is unlikely to be necessary for the initial set up of the project on a different computer. However, this additional documentation is added in case a new Power Query will be set up. In order to link a folder filled with Excel Workbooks to Power BI, follow these steps:

- Click the "Transform data" button in the Queries section of the Power BI toolbar.
- Choose the source of data import by clicking "New Source" from the New Query toolbar. Then click the "More..." button
- Choose "New Folder" as your source and click the "Connect Button"
- Browse for the file path of the "911 Call Data" folder that should be stored locally on your computer
- Select "Okay" when the folder is located
- Click "Combine and Transform".
- Choose the table to
- Under the Combine Files section, choose the Sample File to be the First File and select the name of the file from under the Display Options column. This should populate a preview in of that file in the right column. Then click "OK". This should connect the Excel Workbooks to the Power BI report.

Note: To access the Power Query Editor at any point once you have exited out of it, click the Transform data button from the Queries toolbar.

Once this is set up, you must add a Merge Location column in the Power Query editor so that the mapping tool works properly.

### Personal Gateway

To set up a personal gateway it is helpful to refer to [Microsoft Power BI Documentation](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode). 

More documentation will be added in the future. After the gateway is installed, configure daily refresh so that information from Power BI Desktop can automatically be refreshed online.

## The User Interface

### Installation Requirements for the User Interface

These steps are only necessary if you want to edit our user interface. If you only want to view the website, there is no need to run our code locally. You can just visit our [Thesis website](https://cocvac-hamilton2023.github.io/thesis_ui/).

For installation:
- Make sure to clone our [Thesis_ui](https://github.com/cocvac-hamilton2023/thesis_ui.git) repository. 
- Install [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### To develop:

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

