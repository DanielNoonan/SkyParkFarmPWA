# SkyParkFarmPWA
Sky Park Farm Progressive Web App.

JAMstack PWA using Gatsbyjs, Reactjs, Styled Components, Flexbox, GraphQL, Contentful CMS, Deployed on Netlify CDN.



************
ERROR - 24/04/2018 - Known issue with Gatsby interacting with Contentful (hopefully will be fixed in a future release of Gatsby).

Sometimes a bug occurs when data in Contentful is edited/changed or deleted/unpublished.
Gatsby will throw an error when querying the graphql
To fix this remove the .cache directory from the local copy of MASTER branch and run gatsby develop which will build a fresh .cache folder.
Then change branch to any branch being currently worked on and follow the same process - delete the current .cache folder and run gatsby develop to build a new .cache folder.
This should fix the error.

This error seems to only exist in the Development Environment and does not effect the live site on Netlify.
*************