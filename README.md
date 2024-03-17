<h1>FindMyStuff</h1>

<h2>Inspiration</h2>
I've been at PennState for 6 months now and it did not take me long to realize that I might be a little careless, like thousands of others on campus. Last month I lost my key and I went to the hub to find it only to realize that the university's lost and found system is ancient. They were using an excel spreadsheet to keep track of turned-in items. Right now, the best way to find your lost stuff is through PennState Snapchat stories, where people will post if they found something or people who lost their stuff will post to offer a reward. But what if you don't see the story within 24 hours? Or what if you are studious like me and don't have Snapchat? It was then I realized that I wasn't the only one with this problem.

<h2>What it does</h2>
Enter FindMyStuff, a social media, generative AI web application where you only need to enter the description of your item and, if in the database, you will immediately get its location, where it was turned in, or who it is with. It's open to all and anybody can use it. Finders click a picture of the item, and write the item's location and a short one-liner description. When people who lost their possessions describe it, our AI algorithm matches it with the closest description of their belongings and notifies them of the location where they can retrieve it.

<h2>How we built it</h2>
During a hackathon, my partner and I tackled the challenge of simplifying the lost and found process. With Next.js and React, we crafted a user-friendly frontend, while Python handled backend operations, integrating generative AI and enabling accurate item matching based on descriptions. Despite being on the clock, our collaboration yielded a centralized student-run lost-and-found site.

<h2>Challenges we ran in</h2>
We ran into multiple challenges with the React app since we were learning on the go. I had never used many of the technologies before and it took time to figure out the details. FastAPI is strict on using only Pydantic objects and hence it took us time to figure out how exactly it would work the desired way. We did not sleep the entire night but then again, isn't that what our creed thives on?

<h2>Accomplishments that we're proud of</h2>
We took on a challenge and completed the project on entirely new libraries and frameworks. We successfully interfaced our back and front end.

<h2>What we learned</h2>
We learned about how FastAPI works, and using next.js and React on this project made us realize how complicated hooks are and we spent hours trying to figure out how not to break the rules of hooks.

<h2>What's next for findmystuff</h2>
I have multiple features on my mind to make this project into a business model and revolutionize the way lost and found works. A world where no one loses anything. A feature that I would like to include next is using the picture of the object to generate an even more accurate caption of the object, which would increase the accuracy of our AI-based locating algorithm.
