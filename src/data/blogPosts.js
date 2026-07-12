/**
 * Blog articles — used on the homepage Blog section (latest 3) and the
 * full /blog listing + /blog/:slug single post pages.
 */
const blogPosts = [
  {
    id: 1,
    slug: 'luxury-market-trends-2026',
    title: '5 Luxury Real Estate Trends Shaping 2026',
    category: 'Market Insights',
    image: '/images/blog/trends-2026.jpg',
    author: 'Alexandra Reyes',
    authorImage: '/images/agents/alexandra-reyes.jpg',
    date: '2026-05-12',
    readTime: 6,
    excerpt:
      'From wellness-centered design to smart-home integration, here are the trends defining the luxury market this year.',
    content: [
      'The luxury real estate market continues to evolve at a rapid pace, shaped by shifting buyer priorities and advances in home technology. Understanding these trends is essential for anyone buying, selling, or investing at the high end of the market.',
      'Wellness-centered design has moved from a nice-to-have to a genuine expectation, with buyers seeking dedicated spa spaces, air and water filtration systems, and circadian lighting throughout the home.',
      'Smart-home integration has also matured significantly, with seamless, whole-property automation now standard in most new luxury developments rather than an optional upgrade.',
      'Outdoor living continues to expand in importance, with expansive terraces, outdoor kitchens, and resort-style pools becoming central to how luxury properties are marketed and valued.',
      'Finally, sustainability has become a genuine value driver rather than a marketing checkbox, with energy-efficient systems and sustainably sourced materials increasingly influencing purchase decisions among discerning buyers.',
    ],
  },
  {
    id: 2,
    slug: 'guide-to-buying-your-first-luxury-home',
    title: 'A First-Time Buyer\u2019s Guide to Luxury Real Estate',
    category: 'Buying Guide',
    image: '/images/blog/first-time-buyer.jpg',
    author: 'Daniel Cho',
    authorImage: '/images/agents/daniel-cho.jpg',
    date: '2026-04-28',
    readTime: 8,
    excerpt:
      'Buying your first luxury property is different from a typical purchase. Here\u2019s what to expect and how to prepare.',
    content: [
      'Purchasing a luxury property for the first time involves a different pace, process, and set of considerations than a standard home purchase, and preparation makes all the difference.',
      'Start by clarifying your priorities beyond square footage — think lifestyle factors like privacy, entertaining space, and proximity to amenities that matter most to you.',
      'Financing at the luxury level often involves jumbo loans and more rigorous documentation, so securing pre-approval early in the process is strongly recommended.',
      'Working with a specialist familiar with the luxury segment ensures access to off-market opportunities and more informed negotiation on price and terms.',
      'Finally, budget for the full cost of ownership, including property taxes, insurance, and maintenance, which can be substantial for larger or historic estates.',
    ],
  },
  {
    id: 3,
    slug: 'maximizing-your-homes-sale-price',
    title: 'How to Maximize Your Luxury Home\u2019s Sale Price',
    category: 'Selling Guide',
    image: '/images/blog/maximize-sale-price.jpg',
    author: 'Sofia Marchetti',
    authorImage: '/images/agents/sofia-marchetti.jpg',
    date: '2026-04-10',
    readTime: 7,
    excerpt:
      'Strategic staging, timing, and marketing can significantly impact your final sale price. Here\u2019s how to get it right.',
    content: [
      'Selling a luxury property successfully requires more than simply listing it — strategic preparation can meaningfully increase your final sale price.',
      'Professional staging tailored to your target buyer profile helps prospective buyers envision the lifestyle the property offers, not just its physical features.',
      'Timing your listing around seasonal market activity and local demand cycles can significantly affect both the speed of sale and final price achieved.',
      'High-quality photography and videography are non-negotiable at the luxury level, where buyers form first impressions almost entirely online before requesting a showing.',
      'Finally, pricing strategically from the outset — rather than starting high and reducing later — tends to generate stronger buyer interest and better outcomes.',
    ],
  },
  {
    id: 4,
    slug: 'investing-in-vacation-properties',
    title: 'Is a Luxury Vacation Property a Smart Investment?',
    category: 'Investment',
    image: '/images/blog/vacation-investment.jpg',
    author: 'Marcus Bennett',
    authorImage: '/images/agents/marcus-bennett.jpg',
    date: '2026-03-22',
    readTime: 5,
    excerpt:
      'Second homes in top destinations can offer strong returns — if you approach the purchase with the right strategy.',
    content: [
      'Luxury vacation properties can serve as both a personal retreat and a sound financial investment, provided the purchase is approached strategically.',
      'Location remains the most important factor, with properties in established, high-demand destinations typically offering the strongest appreciation and rental potential.',
      'Understanding local short-term rental regulations before purchasing is essential, as rules vary significantly and can affect your ability to generate rental income.',
      'Factoring in ongoing costs such as property management, maintenance, and seasonal demand fluctuations will give you a realistic picture of net returns.',
      'Working with an advisor experienced in vacation-market investments can help you identify properties with genuine long-term value, not just seasonal appeal.',
    ],
  },
  {
    id: 5,
    slug: 'relocating-what-to-know',
    title: 'Relocating for Work? What Luxury Buyers Should Know',
    category: 'Relocation',
    image: '/images/blog/relocating.jpg',
    author: 'Alexandra Reyes',
    authorImage: '/images/agents/alexandra-reyes.jpg',
    date: '2026-03-05',
    readTime: 6,
    excerpt:
      'Relocating to a new city or country involves more than finding a home. Here\u2019s how to make the transition seamless.',
    content: [
      'Relocating for work at the executive level often comes with a compressed timeline, making experienced local guidance especially valuable.',
      'Beyond the property itself, understanding neighborhood dynamics, school districts, and commute patterns is essential to a successful long-term move.',
      'Virtual tours and video walkthroughs have become an essential tool for relocating buyers, allowing serious shortlisting before an in-person visit.',
      'Coordinating logistics such as temporary housing, moving services, and closing timelines requires a dedicated point of contact who understands the full picture.',
      'A relocation specialist can significantly reduce the stress of the transition, allowing you to focus on your new role while the details are handled.',
    ],
  },
  {
    id: 6,
    slug: 'architectural-styles-defining-modern-luxury',
    title: 'Architectural Styles Defining Modern Luxury Homes',
    category: 'Design',
    image: '/images/blog/architectural-styles.jpg',
    author: 'Daniel Cho',
    authorImage: '/images/agents/daniel-cho.jpg',
    date: '2026-02-18',
    readTime: 5,
    excerpt:
      'From desert modernism to coastal contemporary, explore the architectural movements shaping today\u2019s luxury market.',
    content: [
      'Architectural style plays a defining role in a luxury property\u2019s identity and long-term value, and current buyer preferences are shifting in distinct ways.',
      'Desert modernism, characterized by clean lines and a strong connection to landscape, continues to gain popularity in warm-climate luxury markets.',
      'Coastal contemporary design, favoring expansive glass and open floor plans, remains especially sought-after in waterfront and resort-adjacent communities.',
      'Restored historic properties are also experiencing renewed interest, particularly when thoughtfully updated with modern systems while preserving original character.',
      'Understanding these stylistic movements can help buyers identify properties likely to hold — or grow — their value over time.',
    ],
  },
];

export default blogPosts;

/** Convenience helper: look up a single blog post by slug */
export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);

/** Convenience helper: latest N posts for the homepage section */
export const getLatestPosts = (count = 3) => blogPosts.slice(0, count);
