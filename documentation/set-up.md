This Guide is intended to explain how to set up this project on a new computer

## Prerequisites 

Power BI Desktop is a requirement for this project since we do all our analytics work with Power BI. Power BI can only be run on Windows computers.

## Installation Requirements for Daily Python Script/ Power BI Analysis

Make sure to install the following:
- [Power BI Desktop](https://www.microsoft.com/en-us/download/details.aspx?id=58494)
- [Python](https://www.python.org/downloads/). We recommend installing the newest version of Python. For help with installation, refer to the [Python Installation Video](https://www.youtube.com/watch?time_continue=163&v=Pi0RK7GJIKg&embeds_referring_euri=https%3A%2F%2Fwww.simplilearn.com%2F&source_ve_path=Mjg2NjY&feature=emb_logo) by SimpliLearn.
- [Pip](https://pip.pypa.io/en/stable/installation/). This can be done when installing Python or can be installed separately.
- Java (13.0.2 works)

## Python and Pip Version

We used Python version 3.10 for this project. Other versions may work, but there is no guarantee. We encountered issues with some other versions. We also used pip3.

## Packages needed to run the script:
- Jpype1 (version 1.4.1)
- Numpy (version 1.26.1)
- Pandas (version 2.1.2)
- Pip (version 23.3.`)
- Python-dateutil (version 2.8.2)
- Tabula-py (version 2.7)
- Requests
- Pathlib
- Bs4
- Openpyxl

Other versions of these packages may work, but there is no guarantee. We encountered issues with some other versions. 

## Daily Python Script

PDFs will be scraped from the web and converted into Excel workbooks that will be stored in a folder called "thesisexcels". Make sure to remember the path that this file is saved to. This path will be needed later on.

## Power BI

Once Power BI is downloaded and logged into, it is possible to create a report. In order to properly import the data, a Power Query and Gateway need to be configured.

## Getting Our Report Locally

In order to get our premade report to load locally, follow these steps. 
1. Log into Power BI on the web with the hamilton2023@cocvac.org account.
2. Navigate to the report titled "COCVAC_Report". Click on it to enter the report.
3. Go to "File" on the toolbar and make a copy of the report
4. Open the copy report
5. Go to "File" on the toolbar and download the copy report
6. Navigate to where the report is downloaded and open the report in Power BI
7. Repeat this process with our barchart and table reports

Once these steps are followed, it will be possible to access the completed report on your machine locally using the Power BI Desktop.

## Fixing the File Path for the Power Query

This process needs to be repeated with each Power BI report.

1.  Open up Power Query by clicking the "Transform Data" button from the main toolbar
2.  Click the error button under "thesisexcels". This is located on the left hand on the Queries side bar under the Other Queries dropdown.
3. Look at "Applied Steps" in the top right corner
4. Click on the "Source" button. This will bring up the current folder path for the power query
5. Change the file path to where the Excel Workbooks are stored (the same path as where they are saved from the Python script)
6. Click the "Sample File" button. This is located on the left hand on the Queries side bar.
7. Look at "Applied Steps" in the top right corner
8. Click on the "Source" button. This will bring up the current folder path
9. Change the file path to where the Excel Workbooks are stored (the same path as where they are saved from the Python script) 

Now that the new file path is saved, your power query should be up and running. If you encounter any issues with this, please refer to the [Microsoft Power Query Documentation](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview). 

### Personal Gateway

To set up a personal gateway it is helpful to refer to [Microsoft Power BI Documentation](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode). Be sure to turn off any preexisting gateways and configure daily automatic refresh for your new gateway.

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

