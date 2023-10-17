This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About the Project

This repository is apart of a larger senior seminar/ thesis project at Hamilton College. We are collaborating with the [Central Oneida County Volunteer Ambulance Corps](https://www.cocvac.org/) to scrape 911 call data, analyse it, and display reports in a UI in order to understand where future EMS resources should be devoted.

## Project Steps

1.) Create a script that runs daily to:

- Scrape [911 call data](https://ocgov.net/departments/emergency-services/911-summary-report/)
- Convert PDFs into tabular form using tabula. See code in [this](https://github.com/sydneyetran/COCVAC_code) repository

  2.) Create a Power Query and gateway in Power BI to automatically upload daily excel file to report

  3.) Create queries in Power BI to analyze data

  4.) Embed Power BI report into a UI and add additionally important info to the UI (ex. documentation, raw data, etc.)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## extra info

here is some information on our personal project:

(this part can be deleted, it is more just meant as notes for now):
to add a new page, make a folder with the route name (ie about if the route is /about) and add a page.tsx with code for the page

to run on ngrok, enter this command:

```bash
ngrok http --domain=joint-uniformly-goat.ngrok-free.app 80
```

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
