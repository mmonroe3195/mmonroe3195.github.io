This Guide is intended to explain how to set up this project on a new computer

## Prerequisites 

Power BI Desktop is a requirement for this project since we do all our analytics work with Power BI. Power BI can only be run on Windows computers. If you have access to a Mac, it may be possible to [run Windows apps like Power BI](https://www.macworld.com/article/668848/best-virtual-machine-software-for-mac.html).

## Installation Requirements for Daily Python Script/ Power BI Analysis

Make sure to install the following:
- [Power BI Desktop](https://www.microsoft.com/en-us/download/details.aspx?id=58494)
- [Python](https://www.python.org/downloads/). We reccomend installing the newest version of Python. For help with installation, refer to the [Python Installation Video](https://www.youtube.com/watch?time_continue=163&v=Pi0RK7GJIKg&embeds_referring_euri=https%3A%2F%2Fwww.simplilearn.com%2F&source_ve_path=Mjg2NjY&feature=emb_logo) by SimpliLearn.
- [Pip](https://pip.pypa.io/en/stable/installation/). This can be done when installing Python or can be installed separately.

## Daily Python Script

This section will be updated later to reflect the most up to date information. PDFs will be scraped from the web and converted into Excel workbooks that will be stored in a folder called "911 Call Data"

## Power BI

Once Power BI is downloaded and logged into, it is possible to create a report. In order to properly import the data, a Power Query and Gateway need to be configured.

### Power Query

Following the [Microsoft Power Query Documentation](https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview) is helpful to get started with a Power Query. In order to link the "911 Call Data" folder to Power BI, follow these steps:

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

