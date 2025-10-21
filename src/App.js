import React, { useState, useEffect } from 'react';


function App() {
  const apikey = '43e1ada081d1b3fb3555276b3bc9ed21';
  const category = 'general';
  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apikey}`;

  const [articles, setArticles] = useState([]);

  /*const sampleArticles = [
    {
      "id": "7747c2e03d2bdb7a98fbbed6f896951d",
      "title": "Live No Kings protest updates: Massive crowds march, rally throughout Bay Area",
      "description": "Today marks the second \"No Kings\" protest against President Donald Trump's administration, with big crowds of protesters showing up across the country. Here's the latest on what's happening in the Bay Area:",
      "content": "Tens of thousands of protesters turned out across the Bay Area Saturday as part of national \"No Kings\" demonstrations against the authoritarianism of President Donald Trump.\nThe protests came as the administration has engaged in a historically unprec... [1312 chars]",
      "url": "https://abc7news.com/live-updates/no-kings-protests-live-updates-rallies-held-san-francisco-bay-area/18033249/",
      "image": "https://cdn.abcotvs.com/dip/images/18034166_101825-kgo-sky7-no-kings-sf-embarcadero-img.jpg?w=1600",
      "publishedAt": "2025-10-19T03:29:00Z",
      "lang": "en",
      "source": {
        "id": "763c80717848eddbccd054e4ba7af3e3",
        "name": "ABC7 San Francisco",
        "url": "https://abc7news.com",
        "country": "us"
      }
    },
    {
      "id": "04f2f63bd71b5aa70502867a8a933793",
      "title": "Maine Democratic Senate candidate says he regrets deleted Internet posts: 'Stupid stuff'",
      "description": "Graham Platner is distancing himself from controversial online posts.",
      "content": "Graham Platner, a U.S. military veteran and oyster farmer who is running for the Democratic nomination for the U.S. Senate in Maine, is distancing himself from controversial online posts where, among many things, he called himself a \"communist\" and s... [2825 chars]",
      "url": "https://abcnews.go.com/Politics/maine-democratic-senate-candidate-regrets-deleted-internet-posts/story?id=126636744",
      "image": "https://i.abcnewsfe.com/a/fc2598cd-420a-4226-8dae-66d6144f4a29/Graham-Platner-3-ht-gmh-250818_1755552718460_hpMain_16x9.jpg?w=1600",
      "publishedAt": "2025-10-19T03:00:59Z",
      "lang": "en",
      "source": {
        "id": "5ca536331c246cd7f693cdb2cceaff8c",
        "name": "ABC News - Breaking News, Latest News and Videos",
        "url": "https://abcnews.go.com",
        "country": "us"
      }
    },
    {
      "id": "6a685fc7f4a1df7d3968bd580febc150",
      "title": "Family of murdered D.C. photographer wonders if his convicted killer acted alone",
      "description": "Joe Shymanski, a, well-known Washington D.C. photographer, was murdered and dismembered in 2023. His ex-wife's former boyfriend, Brandon Holbrook, was convicted in the case. Shymanski's family still wonders if anyone else was involved.",
      "content": "The investigation of Joe Shymanski's murder began as a missing persons case. It was Sept. 4, 2023, at 7:47 p.m. when sheriff's deputies in Calvert County, Maryland, were called to the home of the well-known photographer.\nHis ex-wife, Heather Snyder, ... [34625 chars]",
      "url": "https://www.cbsnews.com/news/joe-shymanski-maryland-murder-brandon-holbrook-trial-heather-snyder-interview-48-hours/",
      "image": "https://assets3.cbsnewsstatic.com/hub/i/r/2025/10/16/e253948e-c5f5-4799-adac-8c8fbf6929f9/thumbnail/1200x630/f974f431213071916504dc57781a5af6/shymanski-joe.jpg",
      "publishedAt": "2025-10-19T02:59:00Z",
      "lang": "en",
      "source": {
        "id": "f2f2ed82d991515dcc85d86a1374a9ae",
        "name": "CBS News",
        "url": "https://www.cbsnews.com",
        "country": "us"
      }
    },
    {
      "id": "3539ff932efa6a280d3fe76e23242ce2",
      "title": "'No Kings' protests against Trump held nationwide",
      "description": "Large crowds of protesters have gathered in cities across the United for “No Kings” demonstrations against what they see a drift into authoritarianism under President Donald Trump.",
      "content": "WASHINGTON (AP) — Large crowds of protesters marched and rallied in cities across the U.S. Saturday for “ No Kings ” demonstrations decrying what participants see as the government’s swift drift into authoritarianism under President Donald Trump.\nPeo... [7533 chars]",
      "url": "https://apnews.com/article/no-kings-rallies-demonstrations-trump-4baa5de2fab057a0e6ab726f5d7747fd",
      "image": "https://dims.apnews.com/dims4/default/540fe47/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fbf%2F3a%2F32751eb64c7a31595f644041091a%2Fe0820ed387ce420581b209ad51a0075f",
      "publishedAt": "2025-10-19T01:58:00Z",
      "lang": "en",
      "source": {
        "id": "b356d47a35dfffa723fc8131b36c3ed1",
        "name": "AP News",
        "url": "https://apnews.com",
        "country": "us"
      }
    },
    {
      "id": "94d9c8e9481bc2988aeba051c65f5ed6",
      "title": "Rutgers student critically injured as fraternity probes possible hazing",
      "description": "A Rutgers University fraternity was ordered this week by the school to cease operations after a student was critically injured in an incident that is being investigated to determine whether hazing was involved.",
      "content": "A Rutgers University fraternity was ordered this week by the school to cease operations after a student was critically injured in an incident that is being investigated to determine whether hazing was involved.\nThe student, 19, was found injured and ... [1956 chars]",
      "url": "https://www.nbcnews.com/news/us-news/rutgers-student-critically-injured-fraternity-probes-possible-hazing-rcna238393",
      "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-10/251018-Rutgers-Alpha-Sigma-Phi-aa-658-b62f88.jpg",
      "publishedAt": "2025-10-19T01:52:00Z",
      "lang": "en",
      "source": {
        "id": "3bab6463853c054dc51d2427c1a5b69e",
        "name": "NBC News",
        "url": "https://www.nbcnews.com",
        "country": "us"
      }
    },
    {
      "id": "38b7fa2a4633b427e4fec7f05378a444",
      "title": "Selena Gomez, Sydney Sweeney, Celeb Photos at Academy Museum Gala 2025",
      "description": "Photos of Selena Gomez, Sydney Sweeney, Adrien Brody, Viola Davis, Adam Sandler and more celebs at the Academy Museum Gala 2025.",
      "content": "Jacob Elordi\nJacob Elordi\nJennifer Hudson\nJennifer Hudson\nJeremy Allen White\nJeremy Allen White\nKirsten Dunst\nKirsten Dunst\nMartin Scorsese and Bruce Springsteen\nMartin Scorsese and Bruce Springsteen\nViola Davis\nViola Davis\nRobert Downey Jr. and Susa... [2463 chars]",
      "url": "https://www.hollywoodreporter.com/gallery/adrien-brody-jeff-goldblum-bowen-yang-photos-academy-museum-gala-2025-1236404657/",
      "image": "https://www.hollywoodreporter.com/wp-content/uploads/2025/10/Selena-Gomez-Viola-Davis-and-Sydney-Sweeney-Split-Getty-H-2025.jpg?w=1296&h=730&crop=1",
      "publishedAt": "2025-10-19T01:41:57Z",
      "lang": "en",
      "source": {
        "id": "58f309465dc77c95e88cbb1d72f55e72",
        "name": "The Hollywood Reporter",
        "url": "https://www.hollywoodreporter.com",
        "country": "us"
      }
    },
    {
      "id": "c137aa27020e3d3e58789bb3c65dc0e2",
      "title": "'No Kings' protests against Trump administration return nationwide",
      "description": "See 'No Kings' protest photos as demonstrations against the Trump administration return across the U.S., including in Los Angeles, Chicago and Portland.",
      "content": "Crowds gathered Saturday in cities across the United States — and overseas — for No Kings rallies in protest of President Donald Trump’s administration and to call for the defense of First Amendment rights.\nProtesters from Los Angeles to New York — i... [2650 chars]",
      "url": "https://www.nbcnews.com/news/us-news/no-kings-protest-photos-cities-demonstrations-rcna238041",
      "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-10/251018-no-kings-gallery-ch-1626-b65178.jpg",
      "publishedAt": "2025-10-19T01:20:00Z",
      "lang": "en",
      "source": {
        "id": "3bab6463853c054dc51d2427c1a5b69e",
        "name": "NBC News",
        "url": "https://www.nbcnews.com",
        "country": "us"
      }
    },
    {
      "id": "145f8b00ac29b5f239c6898b1d596328",
      "title": "Vanderbilt QB makes bold Heisman statement in historic win over LSU",
      "description": "Vanderbilt quarterback Diego Pavia channeled Johnny Manziel during his team's 31-24 win over LSU on Saturday. Following a rushing touchdown in the third quarter, Pavia celebrated by hitting a Heisman Trophy pose along with a money-throwing gesture, an homage to Manziel.",
      "content": "Vanderbilt quarterback Diego Pavia channeled Johnny Manziel during his team’s 31-24 win over LSU on Saturday in Nashville, Tenn.\nFollowing a rushing touchdown in the third quarter, Pavia celebrated by hitting a Heisman Trophy pose along with a money-... [1708 chars]",
      "url": "https://nypost.com/2025/10/18/sports/vanderbilt-qb-makes-bold-heisman-statement-in-historic-win-over-lsu/",
      "image": "https://nypost.com/wp-content/uploads/sites/2/2025/10/newspress-collage-ivhtnbnnp-1760832160835.jpg?quality=75&strip=all&1760817774&w=1200",
      "publishedAt": "2025-10-19T00:59:00Z",
      "lang": "en",
      "source": {
        "id": "9d7e5ab9f28d430ac851e2b94640216c",
        "name": "New York Post",
        "url": "https://nypost.com",
        "country": "us"
      }
    },
    {
      "id": "94af827040ddb58fbafbda94aa10fa28",
      "title": "The Best Dressed Stars at the 2025 Academy Museum Gala",
      "description": "Hollywood’s finest showed up in style for the annual affair, which benefits the Academy Museum of Motion Pictures in Los Angeles.",
      "content": "This evening, the 2025 Academy Museum Gala is underway in Los Angeles. Every year, the star-studded event raises funds for the Academy Museum of Motion Pictures, to help support its various exhibitions, education initiatives, and public programming. ... [859 chars]",
      "url": "https://www.vogue.com/slideshow/2025-academy-museum-gala-best-dressed-stars",
      "image": "https://assets.vogue.com/photos/68f44b558922263ddfee2748/16:9/w_1280,c_limit/GettyImages-2241916136-1.jpg",
      "publishedAt": "2025-10-19T00:54:20Z",
      "lang": "en",
      "source": {
        "id": "9edb19b450242126273baed9b88a49c4",
        "name": "Vogue",
        "url": "https://www.vogue.com",
        "country": "us"
      }
    },
    {
      "id": "a833e6f2970988096c1fe180d82114d9",
      "title": "Wisconsin Coach Luke Fickell Calls Ohio State “As Good A Team As I’ve Prepared For,” Feels “Incredibly Disappointed” After the Badgers’ Performance",
      "description": "Wisconsin head coach Luke Fickell called Ohio State \"as good a team as I’ve prepared for\" and said he feels \"incredibly disappointed\" after the Badgers' performance.",
      "content": "Ohio State’s defense pummeled the Wisconsin offense, as the Buckeyes handed the Badgers their second consecutive shutout loss at Camp Randall Stadium by a score of 34-0. Fickell, whose seat continues to heat up with each passing loss, was disappointe... [3330 chars]",
      "url": "https://www.elevenwarriors.com/college-football/2025/10/158822/wisconsin-head-coach-luke-fickell-ohio-state-as-good-a-team-as-i-ve-prepared-for",
      "image": "https://www.elevenwarriors.com/sites/default/files/styles/904x490/public/c/2025/10/158822_h.jpg?itok=6tX2cqCh",
      "publishedAt": "2025-10-19T00:49:37Z",
      "lang": "en",
      "source": {
        "id": "4add3d97285974db2dd6951b9045734b",
        "name": "Eleven Warriors",
        "url": "https://www.elevenwarriors.com",
        "country": "us"
      }
    }
  ]*/

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles);
        console.log(data.articles)
      })
      .catch(error => console.error('Errorfetching news:', error));
    //setArticles(sampleArticles);
  }, [url]);


  return (
    <div className="App">
      <h1>Latest News</h1>
      <div className='articleContainer'>
        {articles.map((article) => (<div className="articleCard" key={article.id}>
          <div className='articleCardTop'>
            <div className='articleCardTime'>
              <p>{article.publishedAt.slice(0, 10)}</p>
            </div>
            <p className='articleCardName'>{
              article.source.name.length > 12
                ? article.source.name.slice(0, 12) + "..."
                : article.source.name
            }</p>
          </div>
          <img src={article.image} alt="Latest News" className='articleCardImage' />
          <h3 className='articleCardTitle'>{
            article.title.length > 65
              ? article.title.slice(0, 65) + "..."
              : article.title}</h3>
          <a href={article.url} className='readMore'><h3>Read More →</h3></a>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
