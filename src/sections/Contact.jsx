import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, LoaderCircle } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'magdalena.goorna@gmail.com',
    href: 'mailto:magdalena.goorna@gmail.com',
  },
    {
    icon: Phone,
    label: 'Phone',
    value: "+41 78 222 56 49",
    href: 'tel:+41782225649',
  },
    {
    icon: MapPin,
    label: 'Location',
    value: 'Zurich, Switzerland',
    href: '#',
  },
]
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success', 'error'
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ type: null, message: '' })

    try {

      const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      if(!serviceId || !templateId || !publicKey) {
        throw new Error('Missing environment variables');
      }
      await emailjs.send(serviceId, templateId, formData, publicKey);
/*       const data = {
        serviceId,
        templateId,
        publicKey,
        templateParams: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      } */
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully',
      })


    } catch (error) {
      console.error(error);
      setLoading(false);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    } finally {
      setLoading(false);
      //setSubmitStatus({ type: null, message: '' })
    }


  } 


  return (
    <section id="contact" className='py-32 relative overflow-hidden'>
      <div className="absolute top-0 left-0 w-full h-full" >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in animation-delay-100">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Let's {" "}
              <span className="font-serif italic font-normal text-white"> 
                Connect.
              </span>     
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            Have a project in mind or just want to say hi? Let's connect and explore the possibilities together.
          </p>
        </div>
        

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass 2 p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}> 
              <div className="">
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input 
                  id="name"
                  type="text" 
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input 
                  id="email" 
                  type="email" 
                  rows={5}
                  required
                  placeholder="Your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea 
                  id="message" 
                  type="message" 
                  placeholder="Your message..."
                  required  
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
              </div>
              <Button className="w-full" type="submit" size='default' disabled={loading}>
                {loading 
                ? (<>
                  Sending...
                  <LoaderCircle className="w-5 h-5"/>
                  </>) 
                : (<>
                  Send Message
                  <Send className="w-5 h-5"/>
                  </>)
                }

              </Button>
              {submitStatus.type && 
              (<div
                className={`flex items-center gap-3 p-4 rounded-xl ${
                  submitStatus.type === 'success'
                    ? 'text-green-500 border border-green-500/20 bg-green-500/10'
                    : 'text-red-500 border border-green-500/20 bg-red-500/10'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 shrink-0"/>
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0"/>
                )}
                <p className='text-sm'>{submitStatus.message}</p>
              </div>)}

            </form>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <h4 className="text-lg font-semibold text-white">Currently Available</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                I'm currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!
              </p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Contact
