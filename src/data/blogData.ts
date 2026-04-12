export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  location: string;
  attendees: number;
  rating: number;
  type: string;
  tags: string[];
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'v2-security-aarhus-2026-industry-insights',
    title: 'V2 Security Aarhus 2026: Industry Insights from the Frontlines',
    excerpt: 'I spent two days at V2 Security Aarhus surrounded by security professionals from across the industry. Here is my personal recap of the keynotes, the atmosphere, and my biggest takeaways.',
    content: `#V2 Security Aarhus 2026: Industry Insights from the Frontlines

This year I got the chance to go to the V2 Security event in Aarhus. Having over 1,000 people and 40 top cybersecurity companies in one place made for an amazing vibe. We spent two whole days sharing ideas, learning from each other, and making new friends in the industry.

![In the building hosting V2 Security, you'll find the entrance on the left side, just past the banners](/images/v2-2026/v2-2.png)

Here is my personal summary of how it went and the main things that caught my attention.

## The Vibe and Meeting People

The absolute best part of going to a real life event is the people. V2 Security wants to make cybersecurity stronger across all sectors in Denmark, and you could really feel everyone working together.

With many expert talks and keynote sessions, I ended up spending a ton of time chatting with other security folks. It is always super interesting to hear how different companies solve the exact same problems. We talked about everything from handling new rules to setting up better monitoring.

## My Favorite Parts of the Talks

The talks gave us some really fresh looks at the newest IT security challenges. We covered a lot of ground, but these were my biggest takeaways based on the official themes:

### 1. How Threats Are Changing
The whole topic of cyber threats and attacks got a lot of attention. It is super clear that digital threats are changing fast. We talked a lot about how cyber attacks, like ransomware, phishing, and attacks funded by governments, are getting much more targeted. The biggest lesson here was that we really need to focus on the human side of things along with the tech to catch and stop these attacks.

![A presentation about the changing landscape of cyber threats](/images/v2-2026/v2-5.png)

### 2. The Rules and Regulations
Following the rules and managing risk is not always the most exciting topic, but it is absolutely crucial. With new rules like NIS2 and DORA putting pressure on companies, the chats focused on how to actually use security standards like ISO 27001 in daily work to build trust everywhere.

### 3. Securing Networks, Cloud, and Industrial Tech
The talks on networks, cloud setups, and industrial security really hit close to home for me. The main focus was on zero trust designs and keeping mixed environments safe. Furthermore, since important physical infrastructure and production plants are going digital, protecting our Operational Technology from crashing is more important than ever before. IT and operational staff really need to work closely together to make this happen.

![A small presentation session about how to setup local network environments](/images/v2-2026/v2-1.png)

### 4. AI and Doing Things Automatically
You really cannot have a tech event today without talking about Artificial Intelligence. The sessions on AI, automation, and brand new tech really opened my eyes. We looked at how AI is helping us build better defenses and spot threats, but also how the bad guys are using it for advanced attacks. There was also some really cool talk about the future, especially regarding quantum encryption.

![A stage presentation about how AI can be used in spoofing attacks](/images/v2-2026/v2-3.png)

### 5. Global Politics and Tech Independence
One really eye opening theme was how global politics affect our tech. Security and global power dynamics are totally mixed together now. We listened to discussions about trade conflicts, supply chains, and how Europe needs to build its own digital independence so we do not have to rely entirely on foreign suppliers.

![The company Bestseller tells about their cybersecurity journey](/images/v2-2026/v2-4.png)

## Final Thoughts: Bouncing Back is Key

If I had to sum up the whole trip in one word, it would be resilience.

The theme of managing crises and bouncing back really tied everything together. How do we keep things running when an attack finally happens? Being ready, managing the crisis, and recovering fast is the new standard for surviving in today's crazy and unstable digital world.

Going to V2 Security in Aarhus was a fantastic experience that gave me a bunch of fresh ideas to bring back to my own projects and this blog.

*Learn more about the event at [v2security.dk](https://www.v2security.dk).*`,

    category: 'conferences',
    date: '2026-02-27',
    location: 'Århus, Denmark',
    attendees: 1000,
    rating: 5,
    type: 'conference',
    tags: ['V2 Security', 'Conference', 'Networking'],
    readTime: '10 min read',
    author: 'Christoffer'
  },
 {
  id: '2',
  slug: 'it-day-odense-2026-is-this-career-fair-worth-your-time',
  title: 'IT-DAY Odense 2026: Is This Career Fair Worth Your Time?',
  excerpt: 'I spent a day at IT-DAY Odense with 500 other attendees. While it lacked the technical depth of events like V2 Security, it was a solid networking hub for job hunting and company pitches.',
  content: `#IT-DAY Odense 2026: Is This Career Fair Worth Your Time?

This April, I attended IT-DAY 2026 at Videnbyen og Forskerparken (Cortex Park) in Odense. With around 500 attendees and 20-30 IT companies present, the event was heavily geared toward one specific goal: recruitment.

Here is my honest recap of the day and what you should expect if you plan on attending next year.

## Job Hunting vs. Skill Building

If you go to IT-DAY expecting to learn new technical skills or dive deep into the latest tech trends—like you would at a conference like V2 Security—you will likely be disappointed. IT-DAY is essentially a large-scale job market. 

The primary value here lies in direct access to the hiring companies. I spent my time visiting booths and talking to IT professionals about what their companies do, their workplace culture, and what kind of candidates they are looking for. It is a highly practical event if you are actively hunting for a student job, an internship, or a full-time position, but it is not the place for professional upskilling.

## Keynotes: Company Pitches Rather Than Tech Deep Dives

The difference between a learning conference and a career fair was especially apparent during the keynotes. Instead of educational deep dives, the presentations functioned more like extended company pitches aimed at attracting talent.

### Bankdata and Energinet
We heard from Bankdata regarding Denmark's financial IT infrastructure and Energinet regarding Operational Technology (OT). Rather than exploring the technical nuts and bolts of how they secure or build these systems, the talks were highly job-oriented. They focused on explaining what the companies produce, their core values, their societal responsibilities, and, most importantly, the specific skills and roles they are currently missing in their teams.

## Final Thoughts: A Solid 3-Star Experience

I am giving the event 3 out of 5 stars. It does exactly what it says on the tin—it connects students and graduates with IT companies. Because it is largely run by fellow IT students and recent graduates, the vibe is relatable and down-to-earth. 

However, because the focus is strictly on recruitment rather than knowledge sharing, its value depends entirely on where you are in your career journey. I walked away with a better understanding of the local job market and some new connections, but not necessarily new technical insights. 

*Learn more about the event and current job openings at [itday.dk](https://www.itday.dk).*`,

  category: 'career-fairs',
  date: '2026-04-09',
  location: 'Odense, Denmark',
  attendees: 500,
  rating: 3,
  type: 'career fair',
  tags: ['IT-DAY', 'Career Fair', 'Networking', 'Odense', 'Job Hunting'],
  readTime: '5 min read',
  author: 'Christoffer'
}
]