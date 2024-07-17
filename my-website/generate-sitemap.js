const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// Routes
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/projects", changefreq: "weekly", priority: 0.8 },
  { url: "/about", changefreq: "monthly", priority: 0.7 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://www.thomasdomitrovic.com",
  });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  links.forEach((link) => {
    sitemap.write(link);
  });

  sitemap.end();

  try {
    await streamToPromise(sitemap);
    console.log("Sitemap written successfully!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
