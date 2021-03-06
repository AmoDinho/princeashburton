// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">

*/
module.exports = {
  siteName: 'Prince Ashburton',
  siteDescription: 'Amo Moloko`s personal portofolio.',
  siteUrl: 'https://princeashburton.netlify.com/',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    }
  ]
}
