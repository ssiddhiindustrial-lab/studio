import Image from "next/image"
import { ShieldCheck, HardHat, ClipboardCheck, Users, GraduationCap, Microscope, Award, AlertCircle, CheckCircle2 } from "lucide-react"

export default function SafetyPage() {
  const safetyProtocols = [
    { title: "Mandatory PPE", desc: "Strict 100% Personal Protective Equipment usage policy for all workers and visitors on site.", icon: HardHat },
    { title: "Dedicated HSE Officers", desc: "Qualified Health, Safety, and Environment officers present on every major project site.", icon: ShieldCheck },
    { title: "Daily Toolbox Talks", desc: "Morning safety briefings held every day before work begins to discuss potential hazards.", icon: AlertCircle },
    { title: "Safety Training", desc: "Ongoing specialized training programs for working at heights, electrical safety, and first aid.", icon: GraduationCap },
    { title: "Safety Audits", desc: "Weekly internal audits and monthly third-party reviews to ensure total compliance.", icon: ClipboardCheck },
    { title: "ISO Compliance", desc: "Adherence to international standards for occupational health and safety management.", icon: Award },
    { title: "Worker Welfare", desc: "On-site hygienic living facilities, clean drinking water, and regular health checkups.", icon: Users },
    { title: "Zero Compromise", desc: "A strict 'Stop Work' authority granted to any employee who observes an unsafe condition.", icon: ActivityIcon }
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm">Protection & Performance</h2>
            <h1 className="text-4xl md:text-6xl font-bold font-headline">Our Safety First Culture</h1>
            <p className="text-xl text-white/70">At Siddhi Industrial Services, safety isn't just a requirement; it's our core value. We believe every worker should return home safe every day.</p>
          </div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-accent font-headline mb-2">0</p>
              <p className="text-xs font-bold text-primary uppercase tracking-widest">LTI Records</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent font-headline mb-2">500k+</p>
              <p className="text-xs font-bold text-primary uppercase tracking-widest">Safe Man Hours</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent font-headline mb-2">100%</p>
              <p className="text-xs font-bold text-primary uppercase tracking-widest">PPE Compliance</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-accent font-headline mb-2">Daily</p>
              <p className="text-xs font-bold text-primary uppercase tracking-widest">HSE Audits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Protocols Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyProtocols.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border shadow-sm hover:border-accent transition-colors group flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-secondary text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary font-headline">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold font-headline leading-tight">Zero Compromise Policy on Health & Safety</h2>
              <p className="text-lg text-white/70 leading-relaxed">We maintain a comprehensive HSE Management System that covers every aspect of our project execution. From site mobilization to final cleanup, safety is meticulously planned and audited.</p>
              
              <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
                {[
                  "Hazard Identification & Risk Assessment (HIRA) for every project phase.",
                  "24/7 on-site emergency medical response capability.",
                  "Regular fire drills and equipment testing at all locations.",
                  "Eco-friendly waste management and site restoration policies."
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                    <p className="text-white/80 text-left">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image 
                src="https://picsum.photos/seed/safety-site/800/600" 
                alt="Safety on Site" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
