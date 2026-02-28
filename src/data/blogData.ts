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
    slug: 'my-v2-security-aarhus-experience-2026',
    title: 'My Experience at V2 Security Aarhus: Networking and New Threats',
    excerpt: 'I spent two days at V2 Security Aarhus surrounded by 1,000+ professionals. Here is my personal recap of the keynotes, the atmosphere, and my biggest takeaways.',
    content: `# My Experience at V2 Security Aarhus: Networking and New Threats

This year, I had the opportunity to attend the **V2 Security** conference in Aarhus. With over 1,000 participants and 40 leading cybersecurity companies gathered under one roof, the energy was incredible. It was two full days dedicated to knowledge sharing, professional exchange, and, of course, networking.

Here is a personal recap of my experience and the themes that stood out to me the most.

## The Atmosphere and Networking

One of the best parts of attending a physical conference is the people. The aim of V2 Security is to strengthen cybersecurity in Denmark's public and private sectors, and you could really feel that collaborative spirit. 

Between the 50 expert presentations and the 15 keynote speakers, I spent a lot of time talking to other professionals. It's always fascinating to hear how different companies tackle the same problems—whether it's dealing with compliance or setting up better monitoring.

## Highlights from the Presentations

The conference program provided unique insights into the latest IT security challenges. While there was a lot of ground covered, these were my top takeaways:

### 1. The Evolving Threat Landscape
The **Cyber Threats & Attacks** theme was a major focus. It's clear that digital threats are evolving rapidly. We talked a lot about how cyberattacks—from ransomware to state-sponsored campaigns—are becoming more targeted. The biggest takeaway here was the emphasis on *the human factor* combined with technology for detection and response.

### 2. GRC: The Necessary Evil (or Good?)
**Governance, Risk & Compliance** isn't always the most glamorous topic, but it is critical. With regulations like NIS2 and DORA putting pressure on organizations, the discussions focused on how to actually operationalize security standards (like ISO 27001) and build trust across the board.

### 3. AI and Automation
You can't have a tech conference without talking about Artificial Intelligence. The **AI, Automation & Emerging Technologies** sessions were eye-opening. We looked at how AI is strengthening our defenses (threat detection), but also how attackers are exploiting it. There was also some interesting talk about the future, specifically quantum encryption.

### 4. Securing the Core
Finally, the sessions on **Network, Infrastructure & Cloud** and **Industry & OT Security** hit close to home. The focus was on zero-trust architectures and securing hybrid setups. As critical infrastructure becomes more digitalized, protecting Operational Technology (OT) from downtime is more important than ever. 

## Final Thoughts: Resilience is Key

If I had to summarize the entire conference in one word, it would be **Resilience**.

The **Crisis Management & Resilience** theme tied everything together. How do we ensure continuity when an attack inevitably occurs? Preparedness and rapid recovery are the new baseline for survival in this unstable geopolitical and digital reality.

Attending V2 Security Aarhus was a fantastic experience that gave me a lot of new ideas to bring back to my own projects and this blog.`,
    category: 'conferences',
    date: '2026-02-27',
    location: 'Århus, Denmark',
    attendees: 1000,
    rating: 5,
    type: 'conference',
    tags: ['V2 Security', 'Conference', 'Networking'],
    readTime: '10 min read',
    author: 'my-v2-security-aarhus-experience-2026'
  }
]