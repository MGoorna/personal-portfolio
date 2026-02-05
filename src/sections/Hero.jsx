import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
import { useState } from "react";
import Button from "@/components/Button";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Git",
  "Github Actions",
  "Docker",
  "PostgreSQL",
  "Python",
  "Vercel",
  "Tailwind CSS",
  "Figma",
]

const Hero = () => {

  const [dots] = useState(() =>
    Array.from({ length: 40 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }))
  );
  const handleDownload = () => {
    console.log('Download CV');
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'MyCV.pdf';
    link.click();
  };
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      <div className='absolute inset-0'>
        <img 
          src="/bg1.png" 
          alt="Magadalena" 
          className='w-full h-full object-cover opacity-40'/>
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              top: dot.top,
              left: dot.left,
              animation: `slow-drift ${Math.random() * 30}s, ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    <div className="container relative z-20 mx-auto px-6 pt-32 pb-20">
      <div className="grid items-center lg:grid-cols-2 gap-12 ">
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Frontend Engineer | Data Science & Analytics </span>
            </span>
          </div>
          {/*Headline*/}
          <div className="space-y">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Crafting 
              <span className="text-primary glow-text">
                Digital 
              </span>
              <br />
                Experiences with 
              <br />
              <span className="font-serif italic font-normal text-white">precission.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hard-working Frontend Developer with 6+ years of experience in developing and maintaining responsive web applications. A pragmatic individual who leverages modern technologies such as React and Next.js.
            </p>
          </div>
         {/*  CTas */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg" href="#contact"> 
              <a href="#contact" className="flex items-center gap-2">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </a>                  
            </Button>
            <AnimatedBorderButton onClick={handleDownload}>
              <Download className='w-5 h-5'/>
              Download CV
            </AnimatedBorderButton>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow me:</span>
            {[
              {icon: Linkedin, link: "https://www.linkedin.com/in/mgorna/"},
              {icon: Github, link: "https://github.com/MGoorna"},
            ].map((social, idx) => (
              <a 
                key={idx} 
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" 
                href={social.link}
                target='_blank'
                >
                {<social.icon className="w-5 h-5"/>}
              </a>
            ))}
          </div> 
        </div>
          {/* right column image */}
        <div className="relatice animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br
                from-primary/30 via-transparent to-primary/10 blur-2xl
                animate-pulse" />
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img 
                    src="/profile-photo2.png" 
                    alt="Magdalena Gorna" 
                    className="w-full aspect-4/5 object-cover rounded-2xl"
                  />

                 {/*  floting badge */}
                 <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                 </div>
                 <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animtion-delay-500">
                  <div className="text-xl font-bold text-primary">6+</div>
                  <div className="text-xs text-muted-foreground">years experience</div>
                 </div>
                </div>
              
            </div>
        </div>
       
      </div>
      {/*  Skills sections */}
      <div className="mt-20 animate-fade-in animation-delay-600">
        <p className="text-sm text-muted-foreground mb-6 text-center">
          Technologies I work with:
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10"/>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10"/>
          <div className="flex animate-marquee">
            {[...skills, skills[0]].map((skill, idx) => (
              <div key={idx} className="shrink-0 px-8 py-4">
                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
        
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
        <a 
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >  
        <span className="test-small uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce"/>
        </a>
      </div>
    </section>
  )
}

export default Hero
