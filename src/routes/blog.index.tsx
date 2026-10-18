import {createFileRoute,Link} from '@tanstack/react-router';
import {posts,pageHead} from '@/lib/clinic';
import {PageTop} from '@/components/clinic/shared';
import {ArrowUpRight,BookOpen} from 'lucide-react';
export const Route=createFileRoute('/blog/')({head:()=>pageHead("Dental Journal | Yana's Dentaire, Noida","Helpful dental reading from Yana's Dentaire in Sector 105, Noida.",'/blog'),component:Blog});
function Blog(){return <><PageTop title="A little knowledge. A better conversation." description="Clear, practical dental reading from the team at Yana's Dentaire. Use these guides to prepare for a conversation with your dentist."/><section className="section"><div className="container-clinic gallery-grid">{posts.map((p,index)=><Link to="/blog/$slug" params={{slug:p.slug}} key={p.slug} className="service-card"><span className="journal-number">0{index+1}</span><BookOpen className="journal-icon"/><p className="text-xs text-primary">DENTAL JOURNAL</p><h2 className="mt-5 text-xl">{p.title}</h2><p>{p.description}</p><span className="card-bottom">Read article <ArrowUpRight className="size-4"/></span></Link>)}</div></section></>}
