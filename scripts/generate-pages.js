const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const siteConfig = {
  company: 'Great Lakes Flooring Pros',
  phone: '(216) 555-0198',
  email: 'info@greatlakesflooringpros.com',
  address: 'Cleveland, OH',
  serviceArea: 'Cleveland and Northeast Ohio',
  url: 'https://greatlakesflooringpros.com'
};

const homePage = {
  slug: '/',
  title: 'Great Lakes Flooring Pros | Flooring Installation in Cleveland & Northeast Ohio',
  description: 'Great Lakes Flooring Pros helps homeowners and businesses in Cleveland and Northeast Ohio get carpet, vinyl plank, laminate, and commercial flooring estimates with local expertise.',
  h1: 'Trusted Flooring Installation in Cleveland & Northeast Ohio',
  intro: 'From carpet replacement to vinyl plank and laminate upgrades, Great Lakes Flooring Pros connects local property owners with dependable flooring installation support that is tailored to Northeast Ohio homes, rentals, and businesses.',
  type: 'home',
  hero: {
    headline: 'Trusted Flooring Installation in Cleveland & Northeast Ohio',
    subheadline: 'Great Lakes Flooring Pros helps homeowners and businesses connect with reliable flooring installation professionals for carpet, vinyl plank, laminate, and commercial flooring projects.',
    ctas: [
      { label: 'Call for a Free Estimate', href: `tel:${siteConfig.phone}` },
      { label: 'Request an Estimate', href: '/contact/' }
    ]
  },
  cards: [
    { title: 'Carpet Installation', text: 'Professional carpet installation for bedrooms, living rooms, stairs, and basements.', link: '/carpet-installation/' },
    { title: 'Carpet Replacement', text: 'Refresh worn or dated flooring with a clean, comfortable carpet upgrade.', link: '/carpet-replacement/' },
    { title: 'Vinyl Plank Flooring', text: 'Durable, waterproof vinyl plank solutions for busy households and retail spaces.', link: '/vinyl-plank-flooring/' },
    { title: 'Laminate Flooring', text: 'Elegant laminate options designed for modern homes and light commercial settings.', link: '/laminate-flooring/' },
    { title: 'Commercial Carpet', text: 'Thoughtful, durable carpet installations for offices, clinics, and hospitality spaces.', link: '/commercial-carpet-installation/' },
    { title: 'Flooring Estimate', text: 'Get clear pricing and expert guidance for your next flooring project.', link: '/flooring-estimate/' }
  ],
  reasons: [
    'Local team with experience across Cleveland and Northeast Ohio',
    'Clear communication from estimate to installation day',
    'Flexible scheduling for residential and commercial jobs'
  ],
  serviceAreas: ['Cleveland', 'Akron', 'Parma', 'Lakewood', 'Mentor', 'Strongsville', 'Canton', 'Elyria', 'Medina'],
  testimonials: [
    { quote: 'The team made the estimate straightforward and helped us compare options without pressure.', author: 'Sample testimonial' },
    { quote: 'We appreciated the clear timeline and the way the crew kept our project organized.', author: 'Sample testimonial' },
    { quote: 'The finished floor looked polished and we felt confident in the process from day one.', author: 'Sample testimonial' }
  ],
  beforeAfter: {
    beforeImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80'
  },
  faqs: [
    { q: 'Do you provide free flooring estimates?', a: 'Yes. We offer free estimates for residential and commercial flooring projects throughout Northeast Ohio.' },
    { q: 'Which flooring types do you help with?', a: 'We help with carpet, carpet replacement, carpet repair, vinyl plank, laminate, and more.' },
    { q: 'Can you serve both homes and businesses?', a: 'Absolutely. We support residential upgrades as well as commercial carpet and flooring installations.' }
  ],
  schemaType: 'LocalBusiness'
};

function buildServicePage({ slug, serviceName, area = 'Cleveland & Northeast Ohio', description, intro, includes, signs, benefits, reasons, finishes, faqs, ctaTitle, ctaText }) {
  return {
    slug,
    title: `${serviceName} in ${area} | Great Lakes Flooring Pros`,
    description: description || `${serviceName} in ${area} for homes, offices, rentals, and commercial properties. Get local installation support and a free estimate.`,
    h1: `${serviceName} in ${area}`,
    intro: intro || `Great Lakes Flooring Pros provides ${serviceName.toLowerCase()} in ${area} with local expertise, clear estimates, and careful installation planning.`,
    includes,
    signs,
    benefits,
    reasons,
    finishes,
    faqs,
    ctaTitle,
    ctaText
  };
}

function buildLocationPage({ slug, city, description, intro, services, carpetSection, replacementSection, commercialSection, reasons, nearby, faqs, ctaTitle, ctaText }) {
  return {
    slug,
    city,
    title: `Flooring Installation in ${city}, OH | Great Lakes Flooring Pros`,
    description: description || `Flooring installation and carpet services in ${city}, OH for local homes, rentals, and businesses.`,
    h1: `Flooring Installation in ${city}, OH`,
    intro: intro || `Great Lakes Flooring Pros helps ${city} homeowners and businesses plan flooring projects that improve comfort, durability, and property value.`,
    services,
    carpetSection,
    replacementSection,
    commercialSection,
    reasons,
    nearby,
    faqs,
    ctaTitle,
    ctaText
  };
}

const services = [
  buildServicePage({
    slug: 'carpet-installation',
    serviceName: 'Carpet Installation',
    description: 'Professional carpet installation in Cleveland and Northeast Ohio for bedrooms, stairs, basements, offices, and rental properties. Get a free estimate and local project support.',
    intro: 'Great Lakes Flooring Pros provides carpet installation in Cleveland and Northeast Ohio for homeowners, landlords, and business owners who want softer comfort, better sound control, and a polished finish without a major renovation.',
    includes: ['Measure and planning support', 'Professional installation for bedrooms, stairs, and living areas', 'A clean, efficient install process'],
    signs: ['You are replacing old carpet with worn padding', 'Your home has uneven or damaged flooring beneath the carpet', 'You want a fresh, cozy upgrade for a room or whole-home project'],
    benefits: ['Comfortable, soft flooring underfoot', 'Improved sound absorption', 'A broad range of style and fiber options'],
    reasons: ['Experienced with residential and light commercial carpet jobs', 'Clear communication from first call to final cleanup', 'Local service area knowledge for fast scheduling'],
    finishes: [
      { title: 'Plush Neutral', description: 'Soft oatmeal and taupe tones that warm up living rooms and bedrooms.', colors: ['#d9c4a4', '#9b7850', '#12324d'], type: 'carpet' },
      { title: 'Textured Sage', description: 'A muted green palette that gives bedrooms and offices a calm finish.', colors: ['#afbe9d', '#6b7a5b', '#12324d'], type: 'carpet' },
      { title: 'Low-Profile Charcoal', description: 'A deeper, more modern option for high-traffic areas and modern interiors.', colors: ['#8a8c91', '#4d5867', '#12324d'], type: 'carpet' }
    ],
    faqs: [
      { q: 'What does carpet installation include?', a: 'This typically includes measuring the space, removing old materials when needed, and professionally installing the new carpet and padding.' },
      { q: 'How long does installation usually take?', a: 'Most projects take a day or two, depending on square footage and furniture movement needs.' }
    ],
    ctaTitle: 'Schedule a Carpet Installation Consultation',
    ctaText: 'Contact Great Lakes Flooring Pros to discuss your room, project scope, and free estimate options.'
  }),
  buildServicePage({
    slug: 'carpet-replacement',
    serviceName: 'Carpet Replacement',
    description: 'Carpet replacement in Cleveland and nearby Northeast Ohio communities with dependable installation support and clear pricing for whole-home or single-room upgrades.',
    intro: 'Carpet replacement is a practical way to refresh tired interiors and create a more comfortable living or work environment with fresh padding, updated texture, and a cleaner finish.',
    includes: ['Removal of existing carpet and padding', 'Subfloor preparation when needed', 'New carpet installation with attention to detail'],
    signs: ['The carpet is stained, worn, or thinning', 'The padding has lost support', 'You want a newer look without a full renovation'],
    benefits: ['A cleaner, more modern appearance', 'Improved comfort and noise control', 'Better fit for families, pets, and everyday traffic'],
    reasons: ['Straightforward project planning', 'Support for whole-home and single-room updates', 'Local service backed by dependable communication'],
    finishes: [
      { title: 'Soft Sand', description: 'A light, airy look that refreshes bedrooms and living rooms.', colors: ['#d8c5a5', '#b59664', '#12324d'], type: 'carpet' },
      { title: 'Warm Walnut', description: 'A richer, grounded tone that pairs well with wood furniture.', colors: ['#a37b53', '#6f4f2e', '#12324d'], type: 'carpet' },
      { title: 'Modern Greige', description: 'A versatile neutral that works for family spaces and rentals.', colors: ['#c9bca8', '#7d6f5d', '#5f6b7a'], type: 'carpet' }
    ],
    faqs: [
      { q: 'How do I know if carpet replacement is the right step?', a: 'If your carpet is worn, stained, or no longer comfortable, replacement may be the best option.' },
      { q: 'Can you help with multiple rooms?', a: 'Yes. We can assist with small room projects or larger whole-home upgrades.' }
    ],
    ctaTitle: 'Request a Carpet Replacement Estimate',
    ctaText: 'Call today to discuss your carpet replacement needs and schedule your free estimate.'
  }),
  buildServicePage({
    slug: 'carpet-repair',
    serviceName: 'Carpet Repair',
    description: 'Carpet repair in Cleveland and Northeast Ohio for patching, seam fixes, and small flooring restoration needs that extend the life of your current carpet.',
    intro: 'Carpet repair can help you restore damaged sections without replacing the entire floor, saving time and budget on smaller issues while keeping the room looking intentional.',
    includes: ['Patch and seam repair', 'Small-area restoration', 'Professional cleanup after the repair'],
    signs: ['There is a burn mark, tear, or snag', 'Seams are lifting', 'A small section looks worn compared to the rest of the room'],
    benefits: ['Faster fix than a full replacement', 'More affordable than replacing the entire carpet', 'Less disruption to your schedule'],
    reasons: ['Focused on practical repairs and long-lasting results', 'Helpful guidance for whether repair or replacement makes more sense', 'Local service for homes and offices across the region'],
    finishes: [
      { title: 'Patch Blend', description: 'A repair finish that is matched closely to nearby carpet texture and tone.', colors: ['#bfa07d', '#7a5b3d', '#12324d'], type: 'carpet' },
      { title: 'Seamless Repair', description: 'A tight, low-visibility repair option for worn or damaged sections.', colors: ['#d8c2a1', '#8f6f4b', '#5f6b7a'], type: 'carpet' },
      { title: 'Refresh Finish', description: 'A practical repair approach that restores the room without replacing the whole floor.', colors: ['#c7b298', '#8b7052', '#12324d'], type: 'carpet' }
    ],
    faqs: [
      { q: 'Can carpet repairs be done on any carpet?', a: 'Many repairs are possible, though the best solution depends on carpet age, fiber, and the size of the damage.' },
      { q: 'Is repair more affordable than replacement?', a: 'In many cases, yes, especially for localized issues.' }
    ],
    ctaTitle: 'Book a Carpet Repair Assessment',
    ctaText: 'Reach out for a practical evaluation of repair options and next steps.'
  }),
  buildServicePage({
    slug: 'commercial-carpet-installation',
    serviceName: 'Commercial Carpet Installation',
    description: 'Commercial carpet installation in Cleveland and Northeast Ohio for offices, clinics, retail stores, and hospitality properties that need durable, professional flooring.',
    intro: 'Commercial carpet installation demands durability, professional planning, and a clean finish that supports day-to-day operations while keeping business spaces comfortable and visitor-ready.',
    includes: ['Site evaluation and material planning', 'Installation for offices, suites, and common areas', 'Neat finish with low disruption to your operations'],
    signs: ['Your business is refreshing office interiors', 'High-traffic areas need a more durable surface', 'You are preparing a space for tenants or clients'],
    benefits: ['Improved comfort and acoustics', 'A polished look for visitors and staff', 'A practical flooring solution for busy commercial settings'],
    reasons: ['Experience with business-focused flooring projects', 'Responsive communication and job-site organization', 'Local knowledge for Northeast Ohio scheduling and access'],
    finishes: [
      { title: 'Low-Profile Executive', description: 'A refined commercial carpet finish that suits office suites and client-facing spaces.', colors: ['#bfc4c9', '#66707a', '#12324d'], type: 'commercial' },
      { title: 'Durable Tile Texture', description: 'A patterned finish that keeps a professional appearance in busy commercial environments.', colors: ['#9ba3ab', '#47515b', '#5f6b7a'], type: 'commercial' },
      { title: 'Warm Hospitality', description: 'A welcoming carpet look often used in clinics, waiting rooms, and small retail settings.', colors: ['#cdb79d', '#8f6f4b', '#12324d'], type: 'commercial' }
    ],
    faqs: [
      { q: 'Do you work with commercial timelines?', a: 'Yes. We can help coordinate around business hours and phased installations when needed.' },
      { q: 'Can you help with multiple rooms or suites?', a: 'Absolutely. We support both smaller office updates and larger commercial projects.' }
    ],
    ctaTitle: 'Request Commercial Flooring Guidance',
    ctaText: 'Let us help you plan a durable and professional commercial carpet installation.'
  }),
  buildServicePage({
    slug: 'residential-carpet-installation',
    serviceName: 'Residential Carpet Installation',
    description: 'Residential carpet installation in Cleveland, Parma, Akron, and nearby Northeast Ohio communities for bedrooms, stairs, family rooms, and rental properties.',
    intro: 'From bedrooms to family rooms and stairways, residential carpet installation can add comfort, color, and warmth to your home while improving the feel of everyday spaces.',
    includes: ['Room-by-room planning', 'Professional installation and finish work', 'Guidance on materials and padding'],
    signs: ['You are updating older carpet', 'Your home needs a softer, warmer surface', 'You want a room refresh with a manageable project scope'],
    benefits: ['Enhanced comfort underfoot', 'A cozy look for multiple rooms', 'A practical option for families and everyday living'],
    reasons: ['Friendly project support for homeowners', 'Clear estimates and straightforward scheduling', 'Reliable local service across Northeast Ohio'],
    finishes: [
      { title: 'Bedroom Plush', description: 'A soft, cozy finish that feels inviting in bedrooms and family spaces.', colors: ['#d6c0a5', '#9c7b5a', '#12324d'], type: 'carpet' },
      { title: 'Family Room Texture', description: 'A durable option that handles daily life with a polished look.', colors: ['#bfa67a', '#7e5d36', '#5f6b7a'], type: 'carpet' },
      { title: 'Stairway Classic', description: 'A rich tone that adds warmth and impact to stairways and hallways.', colors: ['#a98e6f', '#6c4b2e', '#12324d'], type: 'carpet' }
    ],
    faqs: [
      { q: 'Can you install carpet in only one room?', a: 'Yes. We can help with a single room or a larger whole-home project.' },
      { q: 'Will the job be cleaned up afterward?', a: 'Yes. We aim to leave the space tidy and ready for use after installation.' }
    ],
    ctaTitle: 'Book a Residential Carpet Consultation',
    ctaText: 'Get a free estimate and learn what carpet options suit your home best.'
  }),
  buildServicePage({
    slug: 'vinyl-plank-flooring',
    serviceName: 'Vinyl Plank Flooring',
    description: 'Vinyl plank flooring in Cleveland and Northeast Ohio for busy homes, kitchens, bathrooms, rentals, and commercial spaces that need water-resistant performance.',
    intro: 'Vinyl plank flooring is a durable option for homeowners and businesses looking for water-resistant performance, low-maintenance care, and an attractive finish that fits everyday traffic.',
    includes: ['Material selection support', 'Professional installation', 'Clean finish for kitchens, baths, and active spaces'],
    signs: ['You want a floor that handles moisture better than wood', 'You need an easy-care option for daily traffic', 'You are updating a high-use room'],
    benefits: ['Water-resistant performance', 'Low-maintenance care', 'Modern style options that suit many interiors'],
    reasons: ['Flexible solutions for homes and commercial areas', 'Practical, honest guidance on style and durability', 'Local installers who understand Northeast Ohio projects'],
    finishes: [
      { title: 'Oak Drift', description: 'A warm wood-look plank that adds natural texture to kitchens and living spaces.', colors: ['#c9a97a', '#8d6039', '#12324d'], type: 'vinyl' },
      { title: 'Weathered Gray', description: 'A cool, contemporary finish that suits modern interiors and open-concept areas.', colors: ['#a8b1b5', '#5f6b7a', '#12324d'], type: 'vinyl' },
      { title: 'Espresso Matte', description: 'A richer, darker plank option that creates a bold contrast in busy rooms.', colors: ['#4f3427', '#2e2018', '#d7b07a'], type: 'vinyl' }
    ],
    faqs: [
      { q: 'Is vinyl plank good for kitchens?', a: 'Yes. It is a popular choice for kitchens, baths, and entry areas because of its water resistance.' },
      { q: 'How durable is vinyl plank?', a: 'It is designed to stand up well to regular wear, making it a strong option for many households and businesses.' }
    ],
    ctaTitle: 'Request a Vinyl Plank Estimate',
    ctaText: 'Speak with Great Lakes Flooring Pros about the best vinyl plank options for your space.'
  }),
  buildServicePage({
    slug: 'laminate-flooring',
    serviceName: 'Laminate Flooring',
    description: 'Laminate flooring installation and replacement services in Northeast Ohio for homes, offices, and budget-conscious remodels that still need a polished finish.',
    intro: 'Laminate flooring offers a polished look with an approachable price point for many rooms and property types, giving homeowners and businesses a wood-like appearance without overcomplicating the project.',
    includes: ['Coverage planning and material guidance', 'Installations for living rooms, offices, and bedrooms', 'Professional site prep and finish work'],
    signs: ['You want a lower-maintenance floor with a wood-like look', 'You are refreshing a room without a full remodel', 'You need a cost-conscious option that still feels polished'],
    benefits: ['Wide range of finishes', 'Easy upkeep for busy households', 'A modern appearance at a practical investment level'],
    reasons: ['Support for both homeowners and small business properties', 'Honest guidance on the right material for the space', 'Dependable local service across Northeast Ohio'],
    finishes: [
      { title: 'Maple Linen', description: 'A lighter laminate finish that keeps rooms bright and airy.', colors: ['#e1d2b4', '#b69b6e', '#12324d'], type: 'laminate' },
      { title: 'Walnut Grain', description: 'A classic warm-toned finish that works well in bedrooms and offices.', colors: ['#8e6340', '#5a391d', '#d7b07a'], type: 'laminate' },
      { title: 'Smoky Oak', description: 'A contemporary, versatile option for open-concept areas and dining rooms.', colors: ['#a7a39c', '#6d6a65', '#12324d'], type: 'laminate' }
    ],
    faqs: [
      { q: 'Is laminate suitable for most rooms?', a: 'It is a strong fit for many rooms, especially those without significant moisture exposure.' },
      { q: 'Can laminate be installed over existing flooring?', a: 'In some situations, yes, depending on the current surface and installation requirements.' }
    ],
    ctaTitle: 'Discuss Laminate Flooring Options',
    ctaText: 'Call for a free estimate and practical recommendations for your next flooring project.'
  }),
  buildServicePage({
    slug: 'flooring-estimate',
    serviceName: 'Free Flooring Estimate',
    description: 'Request a free flooring estimate in Cleveland and Northeast Ohio for carpet, vinyl plank, laminate, and more before you begin your next project.',
    intro: 'A flooring estimate helps you compare material options, understand pricing, and make a confident decision before installation begins so you can plan with fewer surprises.',
    includes: ['Project scope review', 'Material and service guidance', 'Transparent estimate details'],
    signs: ['You are planning a flooring project', 'You want pricing before committing', 'You need help comparing carpet and hard-surface options'],
    benefits: ['Better planning and budgeting', 'Clear next-step recommendations', 'A more confident installation experience'],
    reasons: ['Straightforward local estimates', 'Support for residential and commercial jobs', 'Responsive communication from the first call'],
    finishes: [
      { title: 'Budget-Friendly Carpet', description: 'A practical option for families wanting a softer upgrade at an approachable cost.', colors: ['#d7c2a5', '#8e6f4b', '#12324d'], type: 'carpet' },
      { title: 'Wood-Look Vinyl', description: 'A durable finish that brings warmth and resilience to high-use spaces.', colors: ['#c5a777', '#7d5730', '#5f6b7a'], type: 'vinyl' },
      { title: 'Modern Laminate', description: 'A contemporary finish that supports a polished room update without a full remodel.', colors: ['#a89a7f', '#6d5e43', '#12324d'], type: 'laminate' }
    ],
    faqs: [
      { q: 'What information should I have ready for an estimate?', a: 'It helps to know the room size, current flooring type, and the style you prefer.' },
      { q: 'Is the estimate really free?', a: 'Yes. We provide free estimates to help you plan your project with confidence.' }
    ],
    ctaTitle: 'Request Your Free Flooring Estimate',
    ctaText: 'Reach out today to start your estimate and learn more about local flooring options.'
  })
];

const locationPages = [
  buildLocationPage({
    slug: 'flooring-installation-cleveland-oh',
    city: 'Cleveland',
    description: 'Flooring installation and carpet services in Cleveland, OH for homes, rentals, offices, and commercial properties that need local expertise and a fast estimate.',
    intro: 'Great Lakes Flooring Pros supports Cleveland homeowners and businesses with flooring installation that fits older homes, modern renovations, and active commercial spaces while keeping projects organized from estimate to install.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial carpet installation'],
    carpetSection: 'Cleveland homes often need carpet installation that balances comfort, durability, and quick project turnaround, especially in bedrooms, offices, and rental properties.',
    replacementSection: 'Flooring replacement in Cleveland is a straightforward way to modernize tired rooms with fresh material and a cleaner finish that feels current and polished.',
    commercialSection: 'We also help commercial properties across Cleveland plan durable carpet and flooring updates that are practical, professional, and built for daily traffic.',
    reasons: ['Local familiarity with Cleveland neighborhoods and property types', 'Professional estimates tailored to your project', 'Responsive service from consultation through installation'],
    nearby: ['Parma', 'Lakewood', 'Euclid', 'Shaker Heights', 'Strongsville'],
    faqs: [
      { q: 'Do you serve all Cleveland neighborhoods?', a: 'Yes. We support many Cleveland locations and nearby suburbs with flooring installation and estimate services.' },
      { q: 'Can you help with commercial flooring in the city?', a: 'Absolutely. We work with offices, retail spaces, and multifamily buildings in and around Cleveland.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Cleveland, OH',
    ctaText: 'Call Great Lakes Flooring Pros to discuss your Cleveland flooring project and schedule a consultation.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-akron-oh',
    city: 'Akron',
    description: 'Professional flooring and carpet installation services for Akron homes and businesses in Northeast Ohio with local project support and free estimates.',
    intro: 'From family homes to office spaces, Great Lakes Flooring Pros provides flooring installation support across Akron with clear estimates, practical planning, and dependable installation guidance.',
    services: ['Residential carpet installation', 'Vinyl plank flooring', 'Laminate flooring', 'Carpet repair', 'Commercial flooring support'],
    carpetSection: 'Akron homeowners often choose carpet for comfort and sound control in bedrooms, basements, and family rooms where a warm finish matters.',
    replacementSection: 'Carpet replacement in Akron can make older interiors feel brighter and more polished without a full remodel.',
    commercialSection: 'We also help small businesses and offices in Akron update flooring in a way that supports daily use and professional appearance.',
    reasons: ['Straightforward project guidance for Akron properties', 'Flexible scheduling and honest estimates', 'Local experience with Northeast Ohio service areas'],
    nearby: ['Canton', 'Cuyahoga Falls', 'Barberton', 'Stow', 'Medina'],
    faqs: [
      { q: 'Do you serve Akron homes and offices?', a: 'Yes. We support both residential and commercial flooring projects throughout Akron and surrounding neighborhoods.' },
      { q: 'Can you help with carpet repair in Akron?', a: 'Yes. We can assess repair needs and recommend the best path forward for your flooring.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Akron, OH',
    ctaText: 'Connect with Great Lakes Flooring Pros to schedule an Akron flooring consultation.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-canton-oh',
    city: 'Canton',
    description: 'Reliable carpet and flooring installation services for Canton, OH homes and businesses that need durable results and straightforward pricing.',
    intro: 'Great Lakes Flooring Pros helps Canton property owners improve comfort and style with flooring solutions that fit everyday use, long-term value, and busy household or business needs.',
    services: ['Carpet installation', 'Flooring replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial carpet installation'],
    carpetSection: 'Carpet installation in Canton is a practical option for bedrooms, family rooms, and office spaces that need a warm and comfortable finish.',
    replacementSection: 'Replacement projects in Canton often bring new life to older interiors with updated texture, color, and performance.',
    commercialSection: 'Commercial flooring support in Canton is designed to be polished, durable, and aligned with your business goals.',
    reasons: ['Knowledge of Canton neighborhoods and property styles', 'Clear recommendations for material and budget', 'Dependable communication from estimate through installation'],
    nearby: ['Akron', 'Massillon', 'Alliance', 'North Canton', 'Louisville'],
    faqs: [
      { q: 'Do you provide estimates for Canton projects?', a: 'Yes. We offer free estimates for residential and commercial flooring needs in Canton.' },
      { q: 'Can you help with carpet replacement?', a: 'Absolutely. We can assess your existing floor and recommend whether repair or replacement makes the most sense.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Canton, OH',
    ctaText: 'Schedule a consultation for your Canton flooring project with Great Lakes Flooring Pros.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-parma-oh',
    city: 'Parma',
    description: 'Flooring installation and carpet replacement services in Parma, OH for homes and businesses that want practical project support and local expertise.',
    intro: 'Parma homeowners and businesses can count on Great Lakes Flooring Pros for flooring installation that is practical, professional, and tailored to local property needs.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Residential carpet installation'],
    carpetSection: 'Parma homes often benefit from carpet installation in bedrooms, stairs, and flex spaces where comfort matters most.',
    replacementSection: 'If your current floor is worn or dated, flooring replacement in Parma can refresh the space without the disruption of a major remodel.',
    commercialSection: 'We also support commercial flooring upgrades in Parma for properties that need durable and polished surfaces.',
    reasons: ['Responsive local service for Parma projects', 'Simple, straight-forward planning and estimates', 'Experience across residential and small business flooring jobs'],
    nearby: ['Cleveland', 'Brook Park', 'North Royalton', 'Middleburg Heights', 'Lakewood'],
    faqs: [
      { q: 'Do you serve Parma and nearby suburbs?', a: 'Yes. We work with Parma and many nearby communities for flooring estimates and installations.' },
      { q: 'Can you help with carpet replacement in Parma?', a: 'Absolutely. We can help you evaluate worn carpet and discuss replacement options that fit your home.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Parma, OH',
    ctaText: 'Contact Great Lakes Flooring Pros to plan your Parma flooring project.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-lakewood-oh',
    city: 'Lakewood',
    description: 'Flooring installation support in Lakewood, OH for carpet, vinyl plank, laminate, and local estimate services that fit busy neighborhood homes and businesses.',
    intro: 'Lakewood properties benefit from flooring solutions that blend classic charm with practical durability for busy, everyday living and long-term property value.',
    services: ['Residential carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial carpet installation'],
    carpetSection: 'Carpet installation in Lakewood works well for families who want comfort, sound control, and a warm finish in bedrooms and living areas.',
    replacementSection: 'Flooring replacement in Lakewood is a solid option when old materials have seen too much wear and the room needs freshness.',
    commercialSection: 'We also support commercial flooring needs in Lakewood for office suites, retail spaces, and service businesses.',
    reasons: ['Local approach to Lakewood installation projects', 'Clear guidance through the estimate and planning process', 'Flexible help for modern renovations and quick upgrades'],
    nearby: ['Cleveland', 'Rocky River', 'Westlake', 'North Olmsted', 'Cleveland Heights'],
    faqs: [
      { q: 'Can you provide estimates for Lakewood projects?', a: 'Yes. We offer free estimates to help Lakewood homeowners and businesses plan confidently.' },
      { q: 'Do you work on both homes and businesses?', a: 'Yes. We support residential and commercial flooring needs across Lakewood.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Lakewood, OH',
    ctaText: 'Reach out to Great Lakes Flooring Pros for a local consultation in Lakewood.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-elyria-oh',
    city: 'Elyria',
    description: 'Carpet and flooring installation services in Elyria, OH for home and business projects that need practical upgrades and clear scheduling.',
    intro: 'Great Lakes Flooring Pros offers practical flooring installation support in Elyria for homeowners, landlords, and business owners planning value-focused upgrades.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial flooring'],
    carpetSection: 'Carpet installation in Elyria can help create comfortable, quiet spaces that are easy to live in and easy to maintain.',
    replacementSection: 'Flooring replacement in Elyria is a smart choice when old materials no longer match the function or style of the room.',
    commercialSection: 'Commercial flooring projects in Elyria can be planned around your schedule and the expectations of your customers or tenants.',
    reasons: ['Helpful project planning for Elyria properties', 'Local experience with Northeast Ohio scheduling', 'Dependable support from estimate to installation'],
    nearby: ['Lorain', 'North Ridgeville', 'Avon', 'Amherst', 'Medina'],
    faqs: [
      { q: 'Do you offer free estimates in Elyria?', a: 'Yes. We provide free estimates for many flooring and carpet projects in Elyria.' },
      { q: 'Can you help with office or retail flooring?', a: 'Yes. We support commercial flooring needs as well as residential jobs.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Elyria, OH',
    ctaText: 'Contact Great Lakes Flooring Pros to discuss your Elyria flooring needs.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-lorain-oh',
    city: 'Lorain',
    description: 'Flooring and carpet installation services in Lorain, OH for homes, rentals, and commercial spaces that want dependable local support.',
    intro: 'Lorain property owners can look to Great Lakes Flooring Pros for reliable flooring installation support that balances practicality, durability, and neat project execution.',
    services: ['Carpet installation', 'Carpet repair', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial carpet installation'],
    carpetSection: 'Carpet installation in Lorain is a dependable option for creating warmer, softer interiors in family rooms, bedrooms, and offices.',
    replacementSection: 'Replacement work in Lorain often gives tired rooms a fresh look and better comfort without a full renovation.',
    commercialSection: 'We help Lorain businesses plan durable flooring solutions that look professional and handle daily wear.',
    reasons: ['Support for residential and commercial projects', 'Clear communication and transparent planning', 'Knowledge of Lorain and surrounding Northeast Ohio neighborhoods'],
    nearby: ['Elyria', 'Amherst', 'Sheffield Lake', 'Avon Lake', 'North Ridgeville'],
    faqs: [
      { q: 'Do you serve Lorain and nearby towns?', a: 'Yes. We provide estimates and installation support throughout Lorain and nearby communities.' },
      { q: 'Can you help with both carpet and hard-surface flooring?', a: 'Yes. We support carpet, vinyl plank, laminate, and related flooring projects.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Lorain, OH',
    ctaText: 'Schedule your Lorain flooring consultation with Great Lakes Flooring Pros.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-euclid-oh',
    city: 'Euclid',
    description: 'Flooring installation and carpet replacement services for Euclid, OH properties that need a polished, practical upgrade.',
    intro: 'Euclid homeowners and business owners can rely on Great Lakes Flooring Pros for straightforward flooring projects that improve everyday comfort and appearance.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Residential carpet installation'],
    carpetSection: 'Carpet installation in Euclid is well suited to bedrooms, living spaces, and stairways where comfort and warmth matter.',
    replacementSection: 'Replacement projects in Euclid help refresh dated interiors and make rooms feel more welcoming.',
    commercialSection: 'Commercial flooring services in Euclid support spaces that need a professional appearance with practical performance.',
    reasons: ['Clear guidance for Euclid property owners', 'Reliable local service in Northeast Ohio', 'Project-minded support for both small and larger jobs'],
    nearby: ['Cleveland', 'Willoughby', 'Lakewood', 'Mentor', 'Wickliffe'],
    faqs: [
      { q: 'Do you serve Euclid homes and businesses?', a: 'Yes. We work with homeowners, landlords, and business owners in Euclid.' },
      { q: 'Can you help with flooring replacement?', a: 'Yes. We can discuss replacement options based on the condition of your current floor.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Euclid, OH',
    ctaText: 'Get in touch for an Euclid flooring consultation and free estimate.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-mentor-oh',
    city: 'Mentor',
    description: 'Professional flooring and carpet installation services for Mentor, OH homes and businesses that need a smooth, local process.',
    intro: 'Mentor property owners can count on Great Lakes Flooring Pros for flooring installation support that fits everyday living, long-term property value, and practical planning.',
    services: ['Carpet installation', 'Vinyl plank flooring', 'Laminate flooring', 'Carpet repair', 'Commercial carpet installation'],
    carpetSection: 'Carpet installation in Mentor is a practical choice for rooms that need comfort and a softer finished look.',
    replacementSection: 'Flooring replacement in Mentor helps homeowners and business owners address worn or dated surfaces with a more modern finish.',
    commercialSection: 'We also help commercial properties in Mentor plan durable carpet and flooring updates that look polished.',
    reasons: ['Local support for Mentor projects', 'Flexible estimates and scheduling', 'Experience with both residential and commercial flooring needs'],
    nearby: ['Willoughby', 'Painesville', 'Euclid', 'Cleveland', 'Madison'],
    faqs: [
      { q: 'Do you provide estimates in Mentor?', a: 'Yes. We offer free estimates for many flooring jobs in Mentor and nearby areas.' },
      { q: 'Can you help with commercial flooring projects?', a: 'Yes. We support office, retail, and other commercial flooring projects in Mentor.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Mentor, OH',
    ctaText: 'Contact Great Lakes Flooring Pros to schedule a Mentor flooring consultation.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-strongsville-oh',
    city: 'Strongsville',
    description: 'Flooring installation services in Strongsville, OH with support for carpet, vinyl plank, laminate, and estimate planning for local homes and businesses.',
    intro: 'Strongsville clients benefit from flooring installation projects that are planned carefully and completed with attention to detail, clear communication, and local service standards.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Flooring estimates'],
    carpetSection: 'Carpet installation in Strongsville is popular for bedrooms, playrooms, and flexible living spaces that need warmth and comfort.',
    replacementSection: 'Replacement jobs in Strongsville often help homeowners bring a fresh look to older rooms with a more current finish.',
    commercialSection: 'We also work with Strongsville businesses that need durable and professional flooring for daily operations.',
    reasons: ['Project-focused planning for Strongsville properties', 'Honest estimates and responsive service', 'Local knowledge of Northeast Ohio communities'],
    nearby: ['Parma', 'Broadview Heights', 'Brecksville', 'Middleburg Heights', 'North Royalton'],
    faqs: [
      { q: 'Do you serve Strongsville homes and offices?', a: 'Yes. We support both residential and commercial flooring projects in Strongsville.' },
      { q: 'Can you provide a free estimate?', a: 'Yes. We offer free estimates for many flooring projects in Strongsville.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Strongsville, OH',
    ctaText: 'Schedule a consultation for your Strongsville flooring project with Great Lakes Flooring Pros.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-brunswick-oh',
    city: 'Brunswick',
    description: 'Flooring and carpet installation services in Brunswick, OH for homes, rentals, and light commercial spaces that want practical upgrades.',
    intro: 'Brunswick property owners can rely on Great Lakes Flooring Pros for practical flooring installation that improves comfort, visual appeal, and the day-to-day experience of the space.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Residential carpet installation'],
    carpetSection: 'Carpet installation in Brunswick is often chosen for bedrooms, stairs, and common areas that need a soft, welcoming feel.',
    replacementSection: 'Flooring replacement in Brunswick works well for properties that want a more refreshed look without major disruption.',
    commercialSection: 'We also support commercial flooring projects in Brunswick for spaces that need long-lasting performance.',
    reasons: ['Simple planning and local project support', 'Clear estimates and scheduling', 'Experience across Brunswick and nearby Northeast Ohio areas'],
    nearby: ['Medina', 'Strongsville', 'North Ridgeville', 'Lodi', 'Wadsworth'],
    faqs: [
      { q: 'Do you provide estimates in Brunswick?', a: 'Yes. We offer free estimates for many Brunswick flooring projects.' },
      { q: 'Can you help with carpet and hard-surface flooring?', a: 'Yes. We support both carpet and non-carpet flooring options in Brunswick.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Brunswick, OH',
    ctaText: 'Get in touch with Great Lakes Flooring Pros for a Brunswick flooring consultation.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-medina-oh',
    city: 'Medina',
    description: 'Reliable flooring installation and carpet services for Medina, OH homes and businesses that want a polished, local experience.',
    intro: 'Medina clients can expect thoughtful flooring installation support that helps them choose materials, plan budgets, and move forward with confidence.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial carpet installation'],
    carpetSection: 'Carpet installation in Medina is a strong option for homeowners seeking comfort and warmth in active living spaces.',
    replacementSection: 'Replacement projects in Medina can update older interiors with a fresher look and better performance.',
    commercialSection: 'We also help Medina businesses upgrade flooring in a way that feels polished and practical.',
    reasons: ['Helpful guidance for Medina property owners', 'Responsive estimates and local service', 'Experience with residential and commercial flooring projects'],
    nearby: ['Brunswick', 'Wadsworth', 'Akron', 'Strongsville', 'Cleveland'],
    faqs: [
      { q: 'Do you serve Medina homes and businesses?', a: 'Yes. We support several Medina flooring project types and service needs.' },
      { q: 'Can you help with carpet replacement?', a: 'Yes. We can review worn flooring and discuss the best next step.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Medina, OH',
    ctaText: 'Contact Great Lakes Flooring Pros for a Medina flooring consultation.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-westlake-oh',
    city: 'Westlake',
    description: 'Flooring installation services in Westlake, OH for carpet, vinyl plank, laminate, and business-focused projects that need a refined finish.',
    intro: 'Westlake homeowners and businesses can benefit from flooring installation that feels polished, practical, and tailored to everyday use.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial carpet installation'],
    carpetSection: 'Carpet installation in Westlake works well for comfort-focused rooms as well as offices and guest spaces.',
    replacementSection: 'Flooring replacement in Westlake can help update rooms that need a cleaner look and better wearing surface.',
    commercialSection: 'Commercial flooring support in Westlake is available for office, retail, and service-based business settings.',
    reasons: ['Professional support for Westlake projects', 'Clear communication from estimate to install', 'Knowledge of local needs and project timing'],
    nearby: ['Lakewood', 'Rocky River', 'North Olmsted', 'Cleveland', 'Beachwood'],
    faqs: [
      { q: 'Do you provide estimates in Westlake?', a: 'Yes. We offer free estimates for many Westlake flooring and carpet projects.' },
      { q: 'Can you help with larger commercial jobs?', a: 'Yes. We can help with both smaller upgrades and larger commercial flooring projects.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Westlake, OH',
    ctaText: 'Reach out to Great Lakes Flooring Pros for a Westlake flooring consultation.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-north-olmsted-oh',
    city: 'North Olmsted',
    description: 'Flooring installation and carpet services for North Olmsted, OH homes and businesses that need dependable local guidance.',
    intro: 'North Olmsted property owners can count on Great Lakes Flooring Pros for dependable flooring installation support and clear next-step guidance.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Residential carpet installation'],
    carpetSection: 'Carpet installation in North Olmsted adds comfort and warmth to spaces that are used every day.',
    replacementSection: 'Flooring replacement in North Olmsted is a practical path when an older floor no longer fits your functional or design goals.',
    commercialSection: 'We also support commercial flooring improvements in North Olmsted for businesses seeking a polished interior.',
    reasons: ['Straightforward planning for North Olmsted clients', 'Flexible scheduling and responsive communication', 'Reliable service in the greater Cleveland area'],
    nearby: ['Westlake', 'Lakewood', 'Parma', 'Cleveland', 'Fairview Park'],
    faqs: [
      { q: 'Do you serve North Olmsted?', a: 'Yes. We support North Olmsted properties with estimates and installation help.' },
      { q: 'Can you help with carpet replacement?', a: 'Yes. We can assess the condition of your carpet and talk through replacement options.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in North Olmsted, OH',
    ctaText: 'Contact Great Lakes Flooring Pros for a North Olmsted flooring consultation.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-rocky-river-oh',
    city: 'Rocky River',
    description: 'Flooring and carpet installation services in Rocky River, OH for local homes and businesses that want polished, practical results.',
    intro: 'Rocky River clients can rely on Great Lakes Flooring Pros for flooring installation that combines polished results with practical planning and a clear estimate process.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial flooring'],
    carpetSection: 'Carpet installation in Rocky River adds comfort to family rooms, bedrooms, and office areas while supporting a warmer interior feel.',
    replacementSection: 'Flooring replacement in Rocky River is a smart way to modernize a room and address visible wear without a full renovation.',
    commercialSection: 'We also support commercial flooring projects in Rocky River for businesses that want an attractive and durable finish.',
    reasons: ['Local knowledge of Rocky River and nearby neighborhoods', 'Detailed planning and clear estimates', 'Dependable service for residential and commercial needs'],
    nearby: ['Lakewood', 'Westlake', 'Cleveland', 'Bay Village', 'North Olmsted'],
    faqs: [
      { q: 'Do you offer free estimates in Rocky River?', a: 'Yes. We provide free estimates to help Rocky River clients plan confidently.' },
      { q: 'Can you help with commercial flooring?', a: 'Yes. We work with businesses that need durable and appealing flooring solutions.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Rocky River, OH',
    ctaText: 'Schedule your Rocky River flooring consultation with Great Lakes Flooring Pros.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-shaker-heights-oh',
    city: 'Shaker Heights',
    description: 'Flooring installation and carpet services for Shaker Heights, OH homes and businesses that value quality, comfort, and local service.',
    intro: 'Shaker Heights homes and properties benefit from flooring installation services that respect style, comfort, and long-term value.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Residential carpet installation'],
    carpetSection: 'Carpet installation in Shaker Heights is often chosen for its comfort and polished look in bedrooms, offices, and family areas.',
    replacementSection: 'Flooring replacement in Shaker Heights can bring a more updated feel to older properties without a full-scale renovation.',
    commercialSection: 'We also assist Shaker Heights businesses with flooring updates that feel professional and practical.',
    reasons: ['Thoughtful service for Shaker Heights clients', 'Clear guidance for material and budget decisions', 'Local familiarity with Northeast Ohio project needs'],
    nearby: ['Cleveland Heights', 'Beachwood', 'University Heights', 'Cleveland', 'Solon'],
    faqs: [
      { q: 'Do you serve Shaker Heights customers?', a: 'Yes. We support residential and commercial flooring projects in Shaker Heights.' },
      { q: 'Can you help with carpet replacement?', a: 'Yes. We can discuss replacement choices based on the condition of your current floor.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Shaker Heights, OH',
    ctaText: 'Reach out to Great Lakes Flooring Pros for your Shaker Heights flooring consultation.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-cleveland-heights-oh',
    city: 'Cleveland Heights',
    description: 'Flooring installation services in Cleveland Heights, OH for carpet, laminate, vinyl plank, and commercial flooring with a local, responsive approach.',
    intro: 'Cleveland Heights properties benefit from flooring installation that supports daily life, property value, and a modern, polished look.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial carpet installation'],
    carpetSection: 'Carpet installation in Cleveland Heights is popular for spaces that need warmth, comfort, and a soft finish underfoot.',
    replacementSection: 'Replacement projects in Cleveland Heights can help bring new life to rooms that have aged beyond their original style.',
    commercialSection: 'We also support Cleveland Heights businesses looking for durable and attractive commercial flooring solutions.',
    reasons: ['Responsive service for Cleveland Heights clients', 'Clear options for budget and material selection', 'Local experience with Northeast Ohio projects'],
    nearby: ['Shaker Heights', 'Beachwood', 'Euclid', 'Cleveland', 'University Heights'],
    faqs: [
      { q: 'Do you serve Cleveland Heights?', a: 'Yes. We provide estimates and installation support in Cleveland Heights and nearby neighborhoods.' },
      { q: 'Can you help with business flooring?', a: 'Yes. We support commercial flooring projects as well as residential jobs.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Cleveland Heights, OH',
    ctaText: 'Contact Great Lakes Flooring Pros for a Cleveland Heights flooring consultation.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-solon-oh',
    city: 'Solon',
    description: 'Flooring and carpet installation support for Solon, OH homes and businesses that want long-lasting results and practical planning.',
    intro: 'Solon property owners can turn to Great Lakes Flooring Pros for flooring installation that is well planned, well communicated, and designed to last.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial flooring'],
    carpetSection: 'Carpet installation in Solon is a comfortable option for bedrooms, offices, and lower-traffic areas that need a cozy finish.',
    replacementSection: 'Flooring replacement in Solon can refresh rooms and help properties feel more polished and current.',
    commercialSection: 'We support Solon businesses with commercial flooring projects that emphasize durability and appearance.',
    reasons: ['Professional project guidance for Solon clients', 'Clear material recommendations and honest estimates', 'Dependable local service across Northeast Ohio'],
    nearby: ['Beachwood', 'Twinsburg', 'Mentor', 'Aurora', 'Chagrin Falls'],
    faqs: [
      { q: 'Do you offer estimates in Solon?', a: 'Yes. We provide free estimates to help Solon clients plan their flooring work.' },
      { q: 'Can you help with commercial projects?', a: 'Yes. We support commercial flooring jobs as well as residential upgrades.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Solon, OH',
    ctaText: 'Schedule a Solon flooring consultation with Great Lakes Flooring Pros.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-beachwood-oh',
    city: 'Beachwood',
    description: 'Flooring installation and carpet services for Beachwood, OH homes and businesses that need a polished, professional finish.',
    intro: 'Beachwood properties can benefit from flooring installation that feels refined, practical, and designed for everyday traffic.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Commercial carpet installation'],
    carpetSection: 'Carpet installation in Beachwood works especially well for rooms where warmth, softness, and sound control matter.',
    replacementSection: 'Flooring replacement in Beachwood helps update worn surfaces and preserve the polished feel of the property.',
    commercialSection: 'We also support Beachwood businesses that need carpet and flooring installations that look professional and last.',
    reasons: ['Thoughtful planning for Beachwood projects', 'Accessible estimates and responsive communication', 'Experience with local residential and commercial flooring work'],
    nearby: ['Cleveland Heights', 'Shaker Heights', 'Solon', 'Orange', 'Mayfield Heights'],
    faqs: [
      { q: 'Do you serve Beachwood?', a: 'Yes. We provide estimates and installation support in Beachwood and nearby communities.' },
      { q: 'Can you help with commercial flooring?', a: 'Yes. We support commercial carpet and flooring projects in Beachwood.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Beachwood, OH',
    ctaText: 'Get in touch for a Beachwood flooring consultation with Great Lakes Flooring Pros.'
  }),
  buildLocationPage({
    slug: 'flooring-installation-twinsburg-oh',
    city: 'Twinsburg',
    description: 'Carpet and flooring installation services in Twinsburg, OH for homes and businesses that want clear guidance and dependable project support.',
    intro: 'Twinsburg clients can rely on Great Lakes Flooring Pros for flooring installation projects that balance quality, comfort, and dependable planning.',
    services: ['Carpet installation', 'Carpet replacement', 'Vinyl plank flooring', 'Laminate flooring', 'Flooring estimates'],
    carpetSection: 'Carpet installation in Twinsburg is a practical choice for living areas, bedrooms, and offices that benefit from comfort and warmth.',
    replacementSection: 'Flooring replacement in Twinsburg can refresh outdated rooms and make everyday spaces feel more polished.',
    commercialSection: 'We also help Twinsburg businesses with flooring options that feel professional and stand up to regular use.',
    reasons: ['Local support for Twinsburg project planning', 'Straightforward estimates and clear next steps', 'Dependable service across Northeast Ohio'],
    nearby: ['Solon', 'Hudson', 'Stow', 'Akron', 'Cuyahoga Falls'],
    faqs: [
      { q: 'Do you serve Twinsburg?', a: 'Yes. We support flooring estimates and installation in Twinsburg and nearby communities.' },
      { q: 'Can you help with carpet replacement?', a: 'Yes. We can assess your current flooring and recommend the right next step.' }
    ],
    ctaTitle: 'Request a Free Flooring Estimate in Twinsburg, OH',
    ctaText: 'Schedule your Twinsburg flooring consultation with Great Lakes Flooring Pros.'
  })
];

const overviewPages = [
  {
    slug: 'services',
    title: 'Flooring Services in Cleveland & Northeast Ohio | Great Lakes Flooring Pros',
    description: 'Explore carpet installation, carpet replacement, carpet repair, vinyl plank, laminate, and commercial flooring services in Cleveland and Northeast Ohio.',
    h1: 'Flooring Services for Cleveland & Northeast Ohio',
    intro: 'Great Lakes Flooring Pros provides practical support for homeowners and businesses looking to improve comfort, style, and performance with flooring upgrades that are tailored to each property type.',
    type: 'overview',
    cards: services.map((service) => ({ title: service.h1.replace(' in Cleveland & Northeast Ohio', ''), text: service.intro, link: `/${service.slug}/` })),
    reasons: ['Support for residential and commercial projects', 'Clear estimates and honest recommendations', 'Local experience in Cleveland and Northeast Ohio'],
    faqs: [
      { q: 'Which services do you offer?', a: 'We help with carpet installation, carpet replacement, carpet repair, commercial carpet installation, residential carpet installation, vinyl plank flooring, laminate flooring, and flooring estimates.' },
      { q: 'Do you serve both homes and businesses?', a: 'Yes. We support residential and commercial flooring projects across Northeast Ohio.' }
    ],
    schemaType: 'LocalBusiness'
  },
  {
    slug: 'service-areas',
    title: 'Service Areas | Great Lakes Flooring Pros',
    description: 'Explore flooring services in Cleveland, Akron, Canton, Parma, Mentor, Strongsville, and other Northeast Ohio communities with local installation support.',
    h1: 'Service Areas Across Northeast Ohio',
    intro: 'Great Lakes Flooring Pros serves homeowners and businesses in Cleveland and nearby Northeast Ohio communities with responsive flooring estimates, local project support, and installation planning.',
    type: 'overview',
    cards: locationPages.map((location) => ({ title: location.city, text: `Flooring installation support for ${location.city} and nearby service areas.`, link: `/${location.slug}/` })),
    reasons: ['Coverage across major Cleveland-area cities and suburbs', 'Local knowledge of neighborhood-specific needs', 'Easy estimate scheduling for home and business projects'],
    faqs: [
      { q: 'What cities do you serve?', a: 'We provide flooring support in Cleveland, Akron, Canton, Parma, Lakewood, Elyria, and many other Northeast Ohio communities.' },
      { q: 'Can I request a quote for my city?', a: 'Yes. Please contact us to discuss your city and project scope.' }
    ],
    schemaType: 'LocalBusiness'
  },
  {
    slug: 'about',
    title: 'About Great Lakes Flooring Pros | Flooring Estimates in Northeast Ohio',
    description: 'Learn more about Great Lakes Flooring Pros and its local flooring support for Northeast Ohio homeowners, landlords, and business owners.',
    h1: 'About Great Lakes Flooring Pros',
    intro: 'Great Lakes Flooring Pros is a local flooring resource focused on practical project guidance, trustworthy communication, and helpful estimates for homes, rentals, and businesses.',
    type: 'about',
    reasons: ['Local knowledge of real Northeast Ohio flooring needs', 'A practical and approachable installation process', 'A conversion-focused website built to connect visitors with a free estimate'],
    faqs: [
      { q: 'What makes Great Lakes Flooring Pros different?', a: 'We focus on local service, strong communication, and a straightforward path to a free estimate.' },
      { q: 'Do you work with both homes and businesses?', a: 'Yes. Our services are designed to support both residential and commercial flooring projects.' }
    ],
    schemaType: 'LocalBusiness'
  },
  {
    slug: 'contact',
    title: 'Contact Great Lakes Flooring Pros | Free Flooring Estimate',
    description: 'Contact Great Lakes Flooring Pros for a free flooring estimate in Cleveland and Northeast Ohio for carpet, vinyl plank, laminate, and commercial projects.',
    h1: 'Contact Great Lakes Flooring Pros',
    intro: 'Call or complete the form to request a free flooring estimate, consultation, or project guidance in Cleveland and Northeast Ohio.',
    type: 'about',
    reasons: ['Call us directly at (216) 555-0198', 'Email us at info@greatlakesflooringpros.com', 'Serving homeowners and businesses throughout Northeast Ohio'],
    faqs: [
      { q: 'How quickly will I hear back?', a: 'We aim to follow up promptly on calls and estimate requests.' },
      { q: 'Do you serve my city?', a: 'Please contact us with your city and project type so we can confirm service availability.' }
    ],
    schemaType: 'LocalBusiness'
  }
];

const pageDefinitions = [homePage, ...overviewPages, ...services.map((service) => ({ ...service, type: 'service' })), ...locationPages.map((location) => ({ ...location, type: 'location' }))];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function href(slug) {
  return slug === '/' ? '/' : `/${slug}/`;
}

function navMarkup(activeSlug) {
  return `
    <header class="site-header">
      <div class="container">
        <a class="brand" href="/">Great Lakes <span>Flooring Pros</span></a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="primary-nav" class="nav-links" aria-label="Primary">
          <div class="nav-item"><a href="/" ${activeSlug === '/' ? 'aria-current="page"' : ''}>Home</a></div>
          <div class="nav-item">
            <button type="button">Services</button>
            <div class="drop-menu">
              <a href="/carpet-installation/">Carpet Installation</a>
              <a href="/carpet-replacement/">Carpet Replacement</a>
              <a href="/carpet-repair/">Carpet Repair</a>
              <a href="/commercial-carpet-installation/">Commercial Carpet Installation</a>
              <a href="/residential-carpet-installation/">Residential Carpet Installation</a>
              <a href="/vinyl-plank-flooring/">Vinyl Plank Flooring</a>
              <a href="/laminate-flooring/">Laminate Flooring</a>
            </div>
          </div>
          <div class="nav-item">
            <button type="button">Service Areas</button>
            <div class="drop-menu">
              <a href="/flooring-installation-cleveland-oh/">Cleveland</a>
              <a href="/flooring-installation-akron-oh/">Akron</a>
              <a href="/flooring-installation-canton-oh/">Canton</a>
              <a href="/flooring-installation-parma-oh/">Parma</a>
              <a href="/flooring-installation-lakewood-oh/">Lakewood</a>
              <a href="/flooring-installation-mentor-oh/">Mentor</a>
              <a href="/flooring-installation-strongsville-oh/">Strongsville</a>
            </div>
          </div>
          <div class="nav-item"><a href="/about/" ${activeSlug === 'about' ? 'aria-current="page"' : ''}>About</a></div>
          <div class="nav-item"><a href="/contact/" ${activeSlug === 'contact' ? 'aria-current="page"' : ''}>Contact</a></div>
        </nav>
        <a class="phone-pill" href="tel:${siteConfig.phone}">${siteConfig.phone}</a>
      </div>
    </header>
  `;
}

function topBarMarkup() {
  return `
    <div class="topbar">
      <div class="container">
        <span>Serving Cleveland and Northeast Ohio</span>
        <span>Free estimates • Local service • Trusted flooring support</span>
      </div>
    </div>
  `;
}

function heroMarkup(page) {
  const buttons = (page.hero?.ctas || [{ label: 'Call for a Free Estimate', href: `tel:${siteConfig.phone}` }, { label: 'Request an Estimate', href: '/contact/' }])
    .map((cta) => `<a class="btn ${cta.label.includes('Call') ? 'btn-primary' : 'btn-secondary'}" href="${cta.href}">${escapeHtml(cta.label)}</a>`)
    .join('');

  return `
    <section class="hero">
      <div class="container">
        <div class="content">
          <div>
            <h1>${escapeHtml(page.h1)}</h1>
            <p>${escapeHtml(page.intro)}</p>
            <div class="button-row">${buttons}</div>
            <div class="badges">
              <span class="badge">Free Estimates</span>
              <span class="badge">Local Service Area</span>
              <span class="badge">Residential & Commercial</span>
            </div>
          </div>
          <div class="hero-card">
            <img src="/assets/flooring-hero.svg" alt="Flooring installation illustration" />
          </div>
        </div>
      </div>
    </section>
  `;
}

function cardsMarkup(cards, title, copy) {
  if (!cards || cards.length === 0) return '';
  return `
    <section class="section">
      <div class="container">
        <h2 class="section-title">${escapeHtml(title)}</h2>
        <p class="section-copy">${escapeHtml(copy)}</p>
        <div class="grid-3">
          ${cards.map((card) => `
            <article class="card">
              <h3>${escapeHtml(card.title)}</h3>
              <p class="muted">${escapeHtml(card.text)}</p>
              <a class="btn btn-outline" href="${card.link}">Learn More</a>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function trustMarkup(page) {
  return `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Why Homeowners and Businesses Choose Us</h2>
        <p class="section-copy">Trustworthy local service for flooring estimates, carpet installation, and replacement projects.</p>
        <div class="trust-grid">
          <article class="card">
            <h3>Local Expertise</h3>
            <p class="muted">We understand the flooring needs of Cleveland and Northeast Ohio properties.</p>
          </article>
          <article class="card">
            <h3>Clear Estimates</h3>
            <p class="muted">We make pricing and next steps simple so you can move forward confidently.</p>
          </article>
          <article class="card">
            <h3>Responsive Support</h3>
            <p class="muted">Our team helps homeowners and businesses schedule consultations and project visits.</p>
          </article>
          <article class="card">
            <h3>Service Area Focus</h3>
            <p class="muted">We proudly support Cleveland and nearby Northeast Ohio communities.</p>
          </article>
        </div>
      </div>
    </section>
  `;
}

function serviceAreaMarkup(page) {
  const areas = page.serviceAreas || page.nearby || [];
  if (!areas.length) return '';
  return `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Service Area Coverage</h2>
        <p class="section-copy">We support flooring projects in ${escapeHtml(page.city || siteConfig.serviceArea)} and surrounding Northeast Ohio communities.</p>
        <div class="badges">
          ${areas.map((area) => `<span class="badge">${escapeHtml(area)}</span>`).join('')}
        </div>
      </div>
    </section>
  `;
}

function testimonialsMarkup(page) {
  if (!page.testimonials || !page.testimonials.length) return '';
  return `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Sample Testimonials</h2>
        <p class="section-copy">These are sample testimonials used to demonstrate the project experience and tone of the site.</p>
        <div class="testimonials">
          ${page.testimonials.map((item) => `
            <article class="testimonial-card">
              <p>“${escapeHtml(item.quote)}”</p>
              <strong>${escapeHtml(item.author)}</strong>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function beforeAfterMarkup(page) {
  const beforeImage = page.beforeAfter?.beforeImage || 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80';
  const afterImage = page.beforeAfter?.afterImage || 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80';

  return `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Project Inspiration</h2>
        <p class="section-copy">Before-and-after style placeholders help frame the transformation potential of flooring updates.</p>
        <div class="before-after">
          <div class="placeholder-box">
            <img src="${beforeImage}" alt="Before flooring condition" loading="lazy" />
            <div class="placeholder-copy">
              <span>Before</span>
              <p class="muted">Worn carpet or dated flooring ready for a refresh.</p>
            </div>
          </div>
          <div class="placeholder-box">
            <img src="${afterImage}" alt="After flooring installation" loading="lazy" />
            <div class="placeholder-copy">
              <span>After</span>
              <p class="muted">Fresh flooring installed with a cleaner, more polished finish.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function normalizeKeywordText(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function findBestImageForText(text, folders = []) {
  const keywords = normalizeKeywordText(text).split(/\s+/).filter(Boolean);
  const fileEntries = [];

  folders.filter(Boolean).forEach((folder) => {
    if (!fs.existsSync(folder)) return;

    fs.readdirSync(folder, { withFileTypes: true }).forEach((entry) => {
      if (!entry.isFile()) return;
      const ext = path.extname(entry.name).toLowerCase();
      if (!['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'].includes(ext)) return;

      const normalizedName = normalizeKeywordText(entry.name);
      const score = keywords.reduce((total, keyword) => {
        if (!keyword) return total;
        if (normalizedName.includes(keyword)) return total + 10;
        if (normalizedName.includes(keyword.replace(/s$/, ''))) return total + 2;
        return total;
      }, 0);

      fileEntries.push({ path: path.join(folder, entry.name), score });
    });
  });

  fileEntries.sort((a, b) => b.score - a.score || a.path.localeCompare(b.path));
  if (!fileEntries.length || fileEntries[0].score === 0) return null;

  const resolvedPath = fileEntries[0].path;
  return `/assets/carousel-images/${encodeURIComponent(path.basename(resolvedPath))}`;
}

function carouselImage(fileName) {
  return `/assets/carousel-images/${encodeURIComponent(fileName)}`;
}

const finishImageMap = {
  'Plush Neutral': carouselImage('plush neutral.png'),
  'Textured Sage': carouselImage('sage.png'),
  'Low-Profile Charcoal': carouselImage('charcoal.png'),
  'Soft Sand': carouselImage('bedroom plush.png'),
  'Warm Walnut': carouselImage('walnut grain.png'),
  'Modern Greige': carouselImage('modern greige.png'),
  'Patch Blend': carouselImage('patch blend.png'),
  'Seamless Repair': carouselImage('seamless repair.png'),
  'Refresh Finish': carouselImage('bedroom plush.png'),
  'Low-Profile Executive': carouselImage('low-profile.png'),
  'Durable Tile Texture': carouselImage('durable tile texture.png'),
  'Warm Hospitality': carouselImage('warm hospitality.png'),
  'Bedroom Plush': carouselImage('bedroom plush.png'),
  'Family Room Texture': carouselImage('family room texture.png'),
  'Stairway Classic': carouselImage('stairway classic.png'),
  'Oak Drift': carouselImage('oak drift.png'),
  'Weathered Gray': carouselImage('weathered gray.png'),
  'Espresso Matte': carouselImage('espresso matte.png'),
  'Maple Linen': carouselImage('maple linen.png'),
  'Walnut Grain': carouselImage('walnut grain.png'),
  'Smoky Oak': carouselImage('smoky oak.png'),
  'Budget-Friendly Carpet': carouselImage('plush neutral.png'),
  'Wood-Look Vinyl': carouselImage('oak drift.png'),
  'Modern Laminate': carouselImage('smoky oak.png')
};

function renderFinishPreview(page, finish, index) {
  const text = `${finish.title || ''} ${finish.description || ''} ${finish.type || ''}`;
  const image = finishImageMap[finish.title] || finish.image;

  const imageFromText = findBestImageForText(text, [path.join(root, 'assets', 'carousel-images')]);
  const serviceImages = {
    'carpet-installation': [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80'
    ],
    'carpet-replacement': [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80'
    ],
    'carpet-repair': [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80'
    ],
    'commercial-carpet-installation': [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80'
    ],
    'residential-carpet-installation': [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80'
    ],
    'vinyl-plank-flooring': [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80'
    ],
    'laminate-flooring': [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80'
    ],
    'flooring-estimate': [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80'
    ]
  };

  const resolvedImage = image || imageFromText || (serviceImages[page.slug] || [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80'
  ])[index % 3];

  return `
    <img src="${resolvedImage}" alt="${escapeHtml(finish.title)}" loading="lazy" />
  `;
}

function serviceCarouselMarkup(page) {
  if (!page.finishes || !page.finishes.length) return '';
  return `
    <section class="section">
      <div class="container">
        <div class="service-carousel" data-carousel>
          <div class="carousel-header">
            <div>
              <h2 class="section-title">Finish Options to Explore</h2>
              <p class="section-copy">Browse sample finishes and style directions that may fit this service.</p>
            </div>
            <div class="carousel-controls">
              <button class="carousel-btn" type="button" data-dir="prev" aria-label="Show previous finish">←</button>
              <button class="carousel-btn" type="button" data-dir="next" aria-label="Show next finish">→</button>
            </div>
          </div>
          <div class="carousel-track">
            ${page.finishes.map((finish, index) => `
              <article class="carousel-slide ${index === 0 ? 'active' : ''}">
                <div class="carousel-preview">${renderFinishPreview(page, finish, index)}</div>
                <div class="carousel-copy">
                  <h3>${escapeHtml(finish.title)}</h3>
                  <p class="muted">${escapeHtml(finish.description)}</p>
                </div>
              </article>
            `).join('')}
          </div>
          <div class="carousel-dots">
            ${page.finishes.map((_, index) => `<button class="carousel-dot ${index === 0 ? 'active' : ''}" type="button" data-slide="${index}" aria-label="Show finish ${index + 1}"></button>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function servicePageMarkup(page) {
  return `
    ${serviceCarouselMarkup(page)}
    <section class="section">
      <div class="container">
        <div class="grid-2">
          <article class="card">
            <h3>What the service includes</h3>
            <ul>${(page.includes || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </article>
          <article class="card">
            <h3>Signs you may need this service</h3>
            <ul>${(page.signs || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </article>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="grid-2">
          <article class="card">
            <h3>Benefits</h3>
            <ul>${(page.benefits || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </article>
          <article class="card">
            <h3>Why choose Great Lakes Flooring Pros</h3>
            <ul>${(page.reasons || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </article>
        </div>
      </div>
    </section>
  `;
}

function locationPageMarkup(page) {
  return `
    <section class="section">
      <div class="container">
        <div class="grid-3">
          <article class="card">
            <h3>Services available in ${escapeHtml(page.city)}</h3>
            <ul>${(page.services || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </article>
          <article class="card">
            <h3>Carpet installation</h3>
            <p class="muted">${escapeHtml(page.carpetSection)}</p>
          </article>
          <article class="card">
            <h3>Flooring replacement</h3>
            <p class="muted">${escapeHtml(page.replacementSection)}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="grid-2">
          <article class="card">
            <h3>Commercial flooring</h3>
            <p class="muted">${escapeHtml(page.commercialSection)}</p>
          </article>
          <article class="card">
            <h3>Why local homeowners and businesses choose us</h3>
            <ul>${(page.reasons || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </article>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2 class="section-title">Nearby service areas</h2>
        <div class="badges">${(page.nearby || []).map((area) => `<span class="badge">${escapeHtml(area)}</span>`).join('')}</div>
      </div>
    </section>
  `;
}

function faqsMarkup(page) {
  if (!page.faqs || !page.faqs.length) return '';
  return `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="grid-2">
          ${page.faqs.map((item) => `
            <article class="faq-item">
              <button type="button">${escapeHtml(item.q)}</button>
              <div class="answer">${escapeHtml(item.a)}</div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function ctaMarkup(page) {
  const title = page.ctaTitle || 'Request a Free Flooring Estimate';
  const text = page.ctaText || 'Call Great Lakes Flooring Pros to talk through your project and schedule a consultation.';
  return `
    <section class="section">
      <div class="container">
        <div class="cta-box">
          <h2>${escapeHtml(title)}</h2>
          <p class="muted">${escapeHtml(text)}</p>
          <div class="button-row">
            <a class="btn btn-primary" href="tel:${siteConfig.phone}">Call Now</a>
            <a class="btn btn-secondary" href="/contact/">Schedule a Consultation</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function contactMarkup(page) {
  return `
    <section class="section">
      <div class="container contact-section">
        <div class="contact-card">
          <h2>Get a Free Flooring Estimate</h2>
          <p class="muted">Call ${siteConfig.phone} or fill out the form to request a consultation for ${escapeHtml(page.city || siteConfig.serviceArea)}.</p>
          <ul>
            <li><strong>Email:</strong> ${siteConfig.email}</li>
            <li><strong>Phone:</strong> ${siteConfig.phone}</li>
            <li><strong>Service area:</strong> ${siteConfig.serviceArea}</li>
          </ul>
        </div>
        <div class="contact-card">
          <form action="/contact/" method="post">
            <label>Name<input name="name" type="text" required /></label>
            <label>Phone<input name="phone" type="tel" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>City<input name="city" type="text" /></label>
            <label>Flooring service needed<select name="service"><option>Carpet Installation</option><option>Carpet Replacement</option><option>Carpet Repair</option><option>Commercial Carpet Installation</option><option>Residential Carpet Installation</option><option>Vinyl Plank Flooring</option><option>Laminate Flooring</option><option>Flooring Estimate</option></select></label>
            <label>Project details<textarea name="details"></textarea></label>
            <button class="btn btn-primary" type="submit">Request My Estimate</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function footerMarkup() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div>
          <strong>Great Lakes Flooring Pros</strong>
          <p class="small">Serving Cleveland and Northeast Ohio with flooring estimates and installation support.</p>
        </div>
        <div class="list-inline">
          <a href="/">Home</a>
          <a href="/services/">Services</a>
          <a href="/service-areas/">Service Areas</a>
          <a href="/about/">About</a>
          <a href="/contact/">Contact</a>
        </div>
      </div>
    </footer>
  `;
}

function buildSchema(page) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.company,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cleveland',
      addressRegion: 'OH',
      addressCountry: 'US'
    },
    areaServed: siteConfig.serviceArea,
    description: page.description
  };

  if (page.type === 'service') {
    return `
      <script type="application/ld+json">
      ${JSON.stringify({ ...base, '@type': 'Service', serviceType: page.h1, provider: { '@id': `${siteConfig.url}/#business` } }, null, 2)}
      </script>
    `;
  }

  if (page.faqs && page.faqs.length) {
    return `
      <script type="application/ld+json">
      ${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      }, null, 2)}
      </script>
    `;
  }

  return `
    <script type="application/ld+json">
    ${JSON.stringify(base, null, 2)}
    </script>
  `;
}

function renderPage(page) {
  const activeSlug = page.slug === '/' ? '/' : page.slug;
  const body = `
    ${topBarMarkup()}
    ${navMarkup(activeSlug)}
    ${page.type === 'home' ? heroMarkup(page) : heroMarkup({ ...page, hero: { ctas: [{ label: 'Call for a Free Estimate', href: `tel:${siteConfig.phone}` }, { label: 'Request an Estimate', href: '/contact/' }] } })}
    ${page.type === 'home' ? cardsMarkup(page.cards, 'Popular Flooring Services', 'Professional support for carpet, vinyl plank, laminate, and commercial flooring projects.') : ''}
    ${page.type === 'overview' ? cardsMarkup(page.cards, 'Explore Our Services', 'Choose the right flooring support for your home or business.') : ''}
    ${page.type === 'service' ? servicePageMarkup(page) : ''}
    ${page.type === 'location' ? locationPageMarkup(page) : ''}
    ${(page.type === 'home' || page.type === 'overview' || page.type === 'about' || page.type === 'service' || page.type === 'location') ? trustMarkup(page) : ''}
    ${page.type === 'home' ? beforeAfterMarkup(page) : ''}
    ${page.type === 'home' ? testimonialsMarkup(page) : ''}
    ${(page.type === 'home' || page.type === 'overview' || page.type === 'about' || page.type === 'service' || page.type === 'location') ? serviceAreaMarkup(page) : ''}
    ${page.faqs && page.faqs.length ? faqsMarkup(page) : ''}
    ${contactMarkup(page)}
    ${ctaMarkup(page)}
    ${footerMarkup()}
  `;

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="stylesheet" href="/styles.css" />
    <script defer src="/scripts/main.js"></script>
    ${buildSchema(page)}
  </head>
  <body>
    ${body}
  </body>
</html>`;

  return html;
}

function writePage(page) {
  const outputPath = page.slug === '/' ? path.join(root, 'index.html') : path.join(root, page.slug, 'index.html');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, renderPage(page));
}

function copyStaticFiles() {
  const assetsDir = path.join(root, 'assets');
  const scriptsDir = path.join(root, 'scripts');
  const targetAssets = path.join(root, 'assets');
  const targetScripts = path.join(root, 'scripts');
  fs.mkdirSync(targetAssets, { recursive: true });
  fs.mkdirSync(targetScripts, { recursive: true });
  fs.copyFileSync(path.join(root, 'styles.css'), path.join(root, 'styles.css'));
  fs.copyFileSync(path.join(root, 'scripts', 'main.js'), path.join(root, 'scripts', 'main.js'));
  fs.copyFileSync(path.join(root, 'assets', 'flooring-hero.svg'), path.join(root, 'assets', 'flooring-hero.svg'));
  fs.copyFileSync(path.join(root, 'assets', 'room-preview.svg'), path.join(root, 'assets', 'room-preview.svg'));
}

copyStaticFiles();
pageDefinitions.forEach(writePage);
console.log(`Generated ${pageDefinitions.length} pages.`);
