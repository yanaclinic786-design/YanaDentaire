import {z} from 'zod';
import {clinic} from './clinic';
export const appointmentSchema=z.object({name:z.string().trim().min(2).max(100),phone:z.string().regex(/^[0-9+ ()-]{8,20}$/),service:z.string().min(2).max(100),preferred_date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/)});
export function appointmentWhatsApp(input:z.infer<typeof appointmentSchema>){return `${clinic.whatsapp}?text=${encodeURIComponent(`Hello Yana's Dentaire, I would like to request an appointment.\nName: ${input.name}\nPhone: ${input.phone}\nTreatment: ${input.service}\nPreferred date: ${input.preferred_date}`)}`;}
