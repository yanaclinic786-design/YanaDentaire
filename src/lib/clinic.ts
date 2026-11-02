export const clinic = { name: "Yana's Dentaire", address: 'B 292, Block B, Sector 105, Noida, Uttar Pradesh 201304', phone: '099908 18438', phoneSecondary: '081787 43873', tel: '+919990818438', whatsapp: 'https://wa.me/919990818438', rating: 5.0, reviewCount: 11, hours: 'By appointment — please call to confirm today’s availability' };
export const siteUrl = 'https://www.yanadentaire.in';
export const doctors = [
{ name: 'Dr. Ravi Sachdeva', qualifications: 'BDS, MDS (Orthodontist)', credentials: ['Certified Implantologist', 'Certified Endodontist (PGCE)', 'PGI Rohtak'], focus: 'Orthodontics, implants and comprehensive dental care' },
{ name: 'Dr. Vijeta Arora Sachdeva', qualifications: 'BDS, MIDA · PGDHM (Hospital Management)', credentials: ['Cosmetic Dentist'], focus: 'Cosmetic dentistry and thoughtful smile planning' },
];
export const services = [
{slug:'dental-implants',name:'Dental Implants',description:'A lasting foundation for a complete smile.',icon:'implant'},
{slug:'root-canal',name:'Root Canal',description:'Preserve your natural tooth. Find relief.',icon:'tooth'},
{slug:'braces-aligners',name:'Braces & Aligners',description:'A straighter smile, at your own pace.',icon:'braces'},
{slug:'teeth-whitening',name:'Teeth Whitening',description:'Refresh the natural brightness of your smile.',icon:'sparkles'},
{slug:'smile-makeover',name:'Smile Makeover',description:'A thoughtful plan for the smile you envision.',icon:'smile'},
{slug:'kids-dentistry',name:'Kids Dentistry',description:'Small smiles deserve a gentle beginning.',icon:'heart'},
{slug:'crowns-bridges',name:'Crowns & Bridges',description:'Restore comfort, strength and confidence.',icon:'shield'},
{slug:'tooth-extraction',name:'Tooth Extraction',description:'Careful assessment. Clear next steps.',icon:'tooth'}
];
export const servicePageContent = {
  'dental-implants': {
    description: 'Discuss dental implant options in Noida with the team at Yana’s Dentaire, Sector 105. Your dentist will assess your oral health and explain whether implant treatment may suit your needs.',
    overview: 'Dental implants are one option for replacing missing teeth. Planning depends on your oral health, medical history and the condition of your jaw. An examination helps your dentist explain suitable options and the stages involved.',
    consultation: 'Ask how assessment, any recommended scans, the implant and its restoration fit into your proposed plan. Your dentist can also discuss expected appointments, healing time, alternatives and fees for your individual case.',
  },
  'root-canal': {
    description: 'Looking for root canal treatment in Noida? Visit Yana’s Dentaire in Sector 105 to discuss your symptoms, assessment and options for caring for a tooth.',
    overview: 'Root canal treatment may be recommended when the tissue inside a tooth is damaged or infected. Your dentist will examine the tooth and discuss whether this treatment or another option is appropriate.',
    consultation: 'Tell your dentist about pain, sensitivity or swelling and when it started. Ask what the examination shows, what treatment involves, whether a restoration may be needed afterwards and what to expect during recovery.',
  },
  'braces-aligners': {
    description: 'Explore braces and clear aligners in Noida at Yana’s Dentaire, Sector 105. A dental assessment can help you compare options for tooth alignment and your individual goals.',
    overview: 'Braces and clear aligners are different approaches to moving teeth. The right option depends on your bite, alignment, oral health and the result you want; a dentist can explain what is suitable after an assessment.',
    consultation: 'Discuss the proposed timeline, appointments, everyday care and any limits of each option. Your dentist can explain how progress is reviewed and what follow-up or retention may be part of your plan.',
  },
  'teeth-whitening': {
    description: 'Ask about teeth whitening in Noida at Yana’s Dentaire, Sector 105. A consultation helps assess your teeth and gums and discuss appropriate options and expectations.',
    overview: 'Tooth colour can have different causes, and whitening may not be suitable for everyone. A dental check-up helps identify concerns and set realistic expectations before deciding whether whitening is appropriate.',
    consultation: 'Tell your dentist about sensitivity, existing dental work and any concerns about tooth colour. Ask which options are suitable, what results to expect and how to reduce the chance of sensitivity.',
  },
  'smile-makeover': {
    description: 'Plan a smile makeover in Noida with Yana’s Dentaire in Sector 105. Discuss your priorities and learn which dental options may suit your oral health and goals.',
    overview: 'A smile makeover is a personalised discussion about changes you would like to make to your smile. Your dentist will consider your oral health, priorities and suitable treatment options before suggesting a plan.',
    consultation: 'Share what you would like to change and which outcomes matter most to you. Ask about alternatives, the sequence of any recommended treatments, maintenance and the fees involved before making a decision.',
  },
  'kids-dentistry': {
    description: 'Find children’s dental care in Noida at Yana’s Dentaire, Sector 105. Contact the clinic to discuss your child’s needs and plan a comfortable first visit.',
    overview: 'Children’s dental visits can help families discuss oral health, home care and any concerns about a child’s teeth. The dentist can tailor the conversation to your child’s age and needs.',
    consultation: 'Share your child’s dental history, any discomfort and questions about brushing or diet. You can ask what to expect at the visit and how to support your child’s oral care at home.',
  },
  'crowns-bridges': {
    description: 'Discuss dental crowns and bridges in Noida at Yana’s Dentaire, Sector 105. Your dentist can assess your tooth and explain restorative options for your situation.',
    overview: 'Crowns and bridges are restorations that may be considered for different dental needs. An examination helps your dentist understand the tooth or teeth involved and explain which options may be appropriate.',
    consultation: 'Ask why a particular restoration is recommended, what alternatives are available and how many visits may be involved. Your dentist can also explain care, maintenance and the estimate for your treatment.',
  },
  'tooth-extraction': {
    description: 'Need a tooth extraction consultation in Noida? Visit Yana’s Dentaire in Sector 105 for an assessment and a discussion of suitable next steps.',
    overview: 'Whether a tooth should be removed depends on an individual examination and your dental history. Your dentist will explain the findings and discuss extraction or other appropriate options with you.',
    consultation: 'Tell your dentist about your symptoms, medicines and relevant health conditions. Ask about the procedure, aftercare, warning signs to look out for and whether replacement options should be discussed.',
  },
} satisfies Record<(typeof services)[number]['slug'], { description: string; overview: string; consultation: string }>;
export const posts = [
{slug:'dental-implants-cost-noida',title:'Dental implants in Noida: what to ask',description:'How consultation, planning and aftercare shape an implant treatment plan.'},
{slug:'root-canal-what-to-expect',title:'Root canal treatment: what to expect',description:'A calm, clear guide to assessment, treatment and recovery.'},
{slug:'braces-or-clear-aligners',title:'Braces or clear aligners?',description:'How your dentist helps you compare options for a straighter smile.'}
];
export const faqs = [
{question:'How do I book an appointment?',answer:'Call 099908 18438, message us on WhatsApp, or send an appointment request. The clinic will confirm availability before your visit.'},
{question:'Where is Yana’s Dentaire located?',answer:clinic.address+'. You can find directions on our contact page.'},
{question:'What should I bring to my first visit?',answer:'Bring any previous dental records, a list of your medicines, and the questions you would like to discuss.'},
{question:'Can I discuss treatment costs before deciding?',answer:'Yes. Ask for a personalised treatment plan and estimate at your consultation. Fees and suitability depend on your assessment.'}
];
export function pageHead(title:string,description:string,path:string, options:{noindex?:boolean;faq?:typeof faqs}={}) {
 const canonical = new URL(path, siteUrl).href;
 const scripts = options.noindex ? [] : [
  {
   type: 'application/ld+json',
   children: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
     { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
     ...(path === '/' ? [] : [{
      '@type': 'ListItem',
      position: 2,
      name: (title.split('|')[0] ?? title).trim(),
      item: canonical,
     }]),
    ],
   }),
  },
  ...(path === '/' ? [{
   type: 'application/ld+json',
   children: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'LocalBusiness'],
    '@id': `${siteUrl}/#dentist`,
    name: clinic.name,
    url: siteUrl,
    telephone: clinic.tel,
    address: {
     '@type': 'PostalAddress',
     streetAddress: 'B 292, Block B, Sector 105',
     addressLocality: 'Noida',
     addressRegion: 'Uttar Pradesh',
     postalCode: '201304',
     addressCountry: 'IN',
    },
   }),
  }] : []),
  ...(options.faq ? [{
   type: 'application/ld+json',
   children: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: options.faq.map(f => ({
     '@type': 'Question',
     name: f.question,
     acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
   }),
  }] : []),
 ];

 return {
  meta: [
   { title },
   { name: 'description', content: description },
   { property: 'og:title', content: title },
   { property: 'og:description', content: description },
   { property: 'og:type', content: 'website' },
   { property: 'og:url', content: canonical },
   { property: 'og:locale', content: 'en_IN' },
   { name: 'twitter:card', content: 'summary_large_image' },
   ...(options.noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
  ],
  links: [{ rel: 'canonical', href: canonical }],
  scripts,
 };
}
