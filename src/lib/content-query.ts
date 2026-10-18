import { queryOptions } from '@tanstack/react-query';
import { getClinicContent } from './content.functions';
export const contentQuery=queryOptions({queryKey:['clinic-content'],queryFn:()=>getClinicContent(),staleTime:300000});
