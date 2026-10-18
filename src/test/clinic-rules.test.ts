import {describe,it,expect} from 'vitest';import {clinic} from '@/lib/clinic';import {appointmentSchema,appointmentWhatsApp} from '@/lib/appointment';
describe('Clinic facts and appointment rules',()=>{
it('keeps the exact clinic name',()=>expect(clinic.name).toBe("Yana's Dentaire"));
it('keeps the exact address',()=>expect(clinic.address).toBe('B 292, Block B, Sector 105, Noida, Uttar Pradesh 201304'));
it('keeps the exact telephone',()=>expect(clinic.phone).toBe('099908 18438'));
it('keeps the owner supplied Google rating',()=>expect(clinic.rating).toBe(5.0));
it('keeps the owner supplied review count',()=>expect(clinic.reviewCount).toBe(11));
it('requires all appointment fields',()=>expect(appointmentSchema.safeParse({name:'Patient',phone:'9990818438',service:'Root Canal'}).success).toBe(false));
it('sends appointment details to the clinic WhatsApp number',()=>{const u=new URL(appointmentWhatsApp({name:'Patient',phone:'9990818438',service:'Root Canal',preferred_date:'2026-10-20'}));expect(u.pathname).toBe('/919990818438');expect(u.searchParams.get('text')).toContain('2026-10-20');});
});
