import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';
export const getClinicContent = createServerFn({method:'GET'}).handler(async()=>{
 try {
  const key=process.env['SUPABASE_PUBLISHABLE_KEY']; const url=process.env['SUPABASE_URL'];
  if(!key||!url) return {media:[],reviews:[]};
  const client=createClient<Database>(url,key,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:(input,init)=>{const h=new Headers(init?.headers);if(key.startsWith('sb_')&&h.get('Authorization')===`Bearer ${key}`)h.delete('Authorization');h.set('apikey',key);return fetch(input,{...init,headers:h});}}});
  const [media,reviews]=await Promise.all([client.from('clinic_media').select('*').order('created_at'),client.from('testimonials').select('*').order('created_at')]);
  if(media.error||reviews.error) return {media:[],reviews:[]};
  const signed=await Promise.all((media.data??[]).map(async m=>{const {data,error}=await client.storage.from('clinic-media').createSignedUrl(m.path,3600);if(error) return null;return {...m,url:data.signedUrl.replace(url,import.meta.env['VITE_SUPABASE_URL'])};}));
  return {media:signed.filter((item):item is NonNullable<typeof item>=>Boolean(item)),reviews:reviews.data??[]};
 } catch {
  return {media:[],reviews:[]};
 }
});
