export const clinic = { name: "Yana's Dentaire", address: 'B 292, Block B, Sector 105, Noida, Uttar Pradesh 201304', phone: '099908 18438', phoneSecondary: '081787 43873', tel: '+919990818438', whatsapp: 'https://wa.me/919990818438', rating: 5.0, reviewCount: 11, hours: 'By appointment — please call to confirm today’s availability' };
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
 return {meta:[{title},{name:'description',content:description},{property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:url',content:path},{name:'twitter:card',content:'summary_large_image'},...(options.noindex?[{name:'robots',content:'noindex, nofollow'}]:[])],links:[{rel:'canonical',href:path}],scripts:options.noindex?[]:[{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:clinic.name,item:'/'},...(path==='/'?[]:[{'@type':'ListItem',position:2,name:(title.split('|')[0] ?? title).trim(),item:path}])]})},...(path==='/'?[{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@type':'Dentist',name:clinic.name,telephone:clinic.tel,address:{'@type':'PostalAddress',streetAddress:'B 292, Block B, Sector 105',addressLocality:'Noida',addressRegion:'Uttar Pradesh',postalCode:'201304',addressCountry:'IN'},aggregateRating:{'@type':'AggregateRating',ratingValue:5,reviewCount:11,bestRating:5}})}]:[]),...(options.faq?[{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:options.faq.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))})}]:[])]};
}
