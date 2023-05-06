import * as fs from "fs";
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({res}) => {
  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "product",
        "_app.js",
        "_document.js",
        "404.js",
        "sitemap.xml.js",
        "index.js",
        '[slug].js'
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${process.env.WEBSITE_URL}/${staticPagePath}`;
    });

    const temp = await fetch(process.env.NEXT_PUBLIC_API_URL + `pages?populate=*&sort=id:asc`
    ,{
      headers:{
        'Authorization' : process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
    const pages= await temp.json()

    
    const pagePaths = pages.data.map( page => {
        return `${process.env.WEBSITE_URL}/${page.attributes.slug}`
    })


    const response =  await fetch(process.env.NEXT_PUBLIC_API_URL + `blogs`

    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
        const temp1 = await response.json()


        const blogPaths = temp1.data.map( blog => {
            return `${process.env.WEBSITE_URL}/blog/${blog.attributes.slug}`
        })


        
    const team =  await fetch(process.env.NEXT_PUBLIC_API_URL + `board-of-directors`

    ,{
      headers:{
        'Authorization' :  process.env.NEXT_PUBLIC_API_token
    }    
    }  
    );
        const temp2 = await team.json()


        const teamPaths = temp2.data.map( team => {
            return `${process.env.WEBSITE_URL}/Board-Of-Directors/${team.attributes.slug}`
        })

        const casestudy =  await fetch(process.env.NEXT_PUBLIC_API_URL + `case-studies`

        ,{
          headers:{
            'Authorization' :  process.env.NEXT_PUBLIC_API_token
        }    
        }  
        );
            const temp3 = await casestudy.json()
    
    
            const casestudyPaths = temp3.data.map( case_study => {
                return `${process.env.WEBSITE_URL}/case-study/${case_study.attributes.slug}`
            })


        const news =  await fetch(process.env.NEXT_PUBLIC_API_URL + `newses`

            ,{
              headers:{
                'Authorization' :  process.env.NEXT_PUBLIC_API_token
            }    
            }  
            );

        const temp4 = await news.json()
        
        
                const newsesPaths = temp4.data.map( news => {
                    return `${process.env.WEBSITE_URL}/news/${news.attributes.slug}`
                })
    
        
      const service =  await fetch(process.env.NEXT_PUBLIC_API_URL + `services`

            ,{
              headers:{
                'Authorization' :  process.env.NEXT_PUBLIC_API_token
            }    
            }  
            );
            
        const temp5 = await service.json()
        
        
                const servicePaths = temp5.data.map( service => {
                    return `${process.env.WEBSITE_URL}/services/${service.attributes.slug}`
                })
    

  const allPaths = [...staticPaths, ...pagePaths , ...blogPaths , ...teamPaths , ...casestudyPaths , ...newsesPaths , ...servicePaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;