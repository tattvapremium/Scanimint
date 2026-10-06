'use client';
import Link from 'next/link';import {usePathname} from 'next/navigation';
const nav=[['/dashboard','Dashboard'],['/analyzer','AI Analyzer'],['/builder','Resume Builder'],['/profile-to-resume','Profile → Resume'],['/auto-tailor','Auto-Tailor'],['/job-matcher','Job Matcher']];
export default function AppShell({children}:{children:React.ReactNode}){const p=usePathname();return <div className="shell"><aside><div className="brand">SCANIMINT<span>✦</span></div><div className="tag">AI Resume & Career</div><nav>{nav.map(([href,label])=><Link className={p===href?'active':''} href={href} key={href}>{label}</Link>)}</nav><div className="sideBottom"><Link href="/settings">Settings</Link><Link href="/">Home</Link></div></aside><main>{children}</main></div>}
