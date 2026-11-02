import {describe,it,expect} from 'vitest';import {clinic,pageHead,siteUrl} from '@/lib/clinic';import {appointmentSchema,appointmentWhatsApp} from '@/lib/appointment';
describe('Clinic facts and appointment rules',()=>{
it('keeps the exact clinic name',()=>expect(clinic.name).toBe("Yana's Dentaire"));
it('keeps the exact address',()=>expect(clinic.address).toBe('B 292, Block B, Sector 105, Noida, Uttar Pradesh 201304'));
it('keeps the exact telephone',()=>expect(clinic.phone).toBe('099908 18438'));
it('keeps the owner supplied Google rating',()=>expect(clinic.rating).toBe(5.0));
it('keeps the owner supplied review count',()=>expect(clinic.reviewCount).toBe(11));
it('uses absolute canonical and Open Graph URLs',()=>{const head=pageHead('Root Canal in Noida',"Root canal care in Noida.",'/services/root-canal');expect(head.links).toContainEqual({rel:'canonical',href:`${siteUrl}/services/root-canal`});expect(head.meta).toContainEqual({property:'og:url',content:`${siteUrl}/services/root-canal`});});
it('publishes the verified dentist and local business details without review markup',()=>{const head=pageHead("Yana's Dentaire","Dental clinic in Noida.",'/',{faq:[]});const schemas=head.scripts.map(script=>JSON.parse(script.children));const business=schemas.find(schema=>schema['@type']?.includes('Dentist'));expect(business).toMatchObject({'@id':`${siteUrl}/#dentist`,name:clinic.name,telephone:clinic.tel,address:{streetAddress:'B 292, Block B, Sector 105',addressLocality:'Noida',postalCode:'201304'}});expect(business).not.toHaveProperty('aggregateRating');});
it('requires all appointment fields',()=>expect(appointmentSchema.safeParse({name:'Patient',phone:'9990818438',service:'Root Canal'}).success).toBe(false));
it('sends appointment details to the clinic WhatsApp number',()=>{const u=new URL(appointmentWhatsApp({name:'Patient',phone:'9990818438',service:'Root Canal',preferred_date:'2026-10-20'}));expect(u.pathname).toBe('/919990818438');expect(u.searchParams.get('text')).toContain('2026-10-20');});
});
