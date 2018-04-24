# SkyParkFarmPWA
Sky Park Farm Progressive Web App.

JAMstack WPA using Gatsbyjs, Reactjs, Styled Components, Flexbox, CSS Grid, GraphQL, Contentful CMS, Deployed on Netlify CDN.



************
ERROR - Known issue with Contentful

NOTE: Contentful & Graphql
Some times a bug occurs when data in Contentful is edited/changed or deleted/unpublished.
Gatsby will throw an error when querying the graphql
To fix this remove the .cache directory from the MASTER branch (AND any branch being currently worked on).
The next time gatsby develop is run a new .cache folder will be automatically created.
This should fix the error.
*************