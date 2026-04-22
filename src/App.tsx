/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Heart, 
  ShoppingBag, 
  Users, 
  MapPin, 
  Facebook, 
  MessageCircle, 
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-navy/90 backdrop-blur-md border-b border-white/10">
      <div className="absolute top-0 left-0 w-full h-1 traditional-border opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-brand-gold uppercase tracking-widest leading-none">
              Монголын Зүймэл Урлалын Төв
            </h1>
            <p className="text-[10px] text-brand-ivory/60 uppercase tracking-[0.2em] font-medium">
              Mongolian Quilting Center
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-ivory/80">
              <a href="#about" className="hover:text-brand-gold transition-colors">Бидний тухай</a>
              <a href="#impact" className="hover:text-brand-gold transition-colors">Нийгмийн нөлөөлөл</a>
              <a href="#products" className="hover:text-brand-gold transition-colors">Бүтээлүүд</a>
              <a href="#contact" className="hover:text-brand-gold transition-colors">Холбоо барих</a>
            </div>
            <button className="bg-brand-gold text-brand-navy px-8 py-3 text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-brand-gold/10">
              Дэмжих
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-gold">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-navy border-b border-white/10 p-4 space-y-6"
        >
          <a href="#about" className="block text-xs font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Бидний тухай</a>
          <a href="#impact" className="block text-xs font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Нийгмийн нөлөөлөл</a>
          <a href="#products" className="block text-xs font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Бүтээлүүд</a>
          <a href="#contact" className="block text-xs font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Холбоо барих</a>
          <button className="w-full bg-brand-gold text-brand-navy py-4 text-xs font-bold uppercase tracking-widest">
            Дэмжих
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-navy">
      <div className="quilt-grid-dark absolute inset-0 opacity-20" />
      
      {/* Visual Background Text */}
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 text-[200px] font-black text-white/5 select-none pointer-events-none rotate-90 leading-none">
        QUILTING
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-gold" />
              <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold">Threads of Mongolia</span>
            </div>
            
            <h2 className="text-7xl md:text-8xl font-serif italic mb-8 leading-[1] text-brand-ivory">
              Монголын <br />
              <span className="text-brand-gold">Хэлхээ</span>
            </h2>
            
            <p className="text-lg text-brand-ivory/70 mb-12 leading-relaxed max-w-md font-light">
              Бид эмэгтэйчүүдийг чадваржуулж, уламжлалт зүймэл урлагийг орчин үеийн загварт хөрвүүлэн, Монгол өв соёлыг хадгалан үлдээдэг.
            </p>
            
            <div className="flex items-center gap-10 mb-12">
              <div className="flex flex-col">
                <span className="text-4xl font-serif italic text-brand-gold leading-none mb-2">100+</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-ivory/40 font-bold">Сургагдсан урлаачид</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-4xl font-serif italic text-brand-gold leading-none mb-2">5000+</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-ivory/40 font-bold">Хийгдсэн бүтээлүүд</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              <button className="flex items-center gap-3 bg-brand-gold text-brand-navy px-10 py-5 font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-brand-gold/10">
                Цуглуулга үзэх <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[600px]"
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">
              <div className="bg-brand-gold opacity-10 border border-white/5 rotate-45 scale-125"></div>
              <div className="col-span-2 bg-white/5 border border-white/10 p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold mb-2">Featured</span>
                <p className="text-lg font-serif italic text-brand-ivory leading-tight">Master Artisan Collection 2024</p>
              </div>
              <div className="col-span-2 relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1598212686704-332309f5964d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Mongolian Patchwork Quilt" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-brand-gold flex items-center justify-center p-4">
                <Heart className="text-brand-navy" size={40} strokeWidth={1} />
              </div>
              <div className="bg-white/5 border border-white/5"></div>
              <div className="bg-white/10 border border-white/5"></div>
              <div className="bg-white/5 border border-white/5"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-10 -left-10 bg-brand-ivory text-brand-navy px-8 py-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-2xl rotate-12 border-[6px] border-brand-gold z-20">
              <span className="text-[11px] font-black uppercase leading-tight tracking-wider">Гар урлалын охь</span>
              <span className="text-[9px] uppercase tracking-widest mt-1 opacity-70 italic font-serif">Handmade soul</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-32 bg-brand-navy-light relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Our Mission</span>
            <h2 className="text-5xl font-serif italic mb-8 text-brand-ivory">Нийгмийн нөлөөлөл</h2>
            <p className="text-brand-ivory/60 text-lg leading-relaxed max-w-xl font-light italic">
              "Бид зүгээр нэг оёдол биш, харин боломж, бие даасан байдлыг оёдог. Одоогоор 500 гаруй эмэгтэйчүүдэд ур чадвар олгож, амьжиргааг нь дэмжлээ."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { title: "Чадавхжуулах", icon: <Users size={24} /> },
               { title: "Уламжлал", icon: <ShoppingBag size={24} /> },
               { title: "Тогтвортой", icon: <Heart size={24} /> }
             ].map((item, i) => (
               <div key={i} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-brand-gold mb-6">{item.icon}</div>
                  <h3 className="text-xl font-serif mb-2 text-brand-ivory">{item.title}</h3>
                  <div className="h-[1px] w-10 bg-brand-gold/30 mt-4" />
               </div>
             ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-1 overflow-hidden group">
          <div className="h-[400px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="h-[400px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://images.unsplash.com/photo-1598212686704-332309f5964d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="h-[400px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://images.unsplash.com/photo-1582213700778-9e4693952f4c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  const products = [
    { name: "Үндэсний Дээл", price: "240,000₮", img: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a58e?q=80&w=2070&auto=format&fit=crop" },
    { name: "Зүймэл Эко цүнх", price: "45,000₮", img: "https://images.unsplash.com/photo-1591348113494-51674e6629d8?q=80&w=2070&auto=format&fit=crop" },
    { name: "Хананы чимэглэл", price: "120,000₮", img: "https://images.unsplash.com/photo-1582213700778-9e4693952f4c?q=80&w=2070&auto=format&fit=crop" },
    { name: "Зочны өрөөний иж бүрдэл", price: "350,000₮", img: "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?q=80&w=2069&auto=format&fit=crop" }
  ];

  return (
    <section id="products" className="py-32 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div>
            <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Artisanal Craft</span>
            <h2 className="text-5xl font-serif italic text-brand-ivory">Шилдэг бүтээлүүд</h2>
          </div>
          <button className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 border-b border-brand-gold/30 pb-2 hover:gap-6 transition-all">
            Бүх каталог үзэх <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 group overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h3 className="font-serif italic text-xl mb-2 text-brand-ivory">{p.name}</h3>
                <p className="text-brand-gold text-lg tracking-wider font-light">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkshopVisit = () => {
  return (
    <section id="contact" className="py-0 bg-brand-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-white/10">
        <div className="grid lg:grid-cols-2">
          <div className="p-16 md:p-24 border-r border-white/10">
            <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold mb-8 block">Connect With Us</span>
            <h2 className="text-5xl font-serif italic mb-12 text-brand-ivory leading-tight">Манай төвөөр <br />зочлоорой</h2>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-3">Location</h4>
                <p className="text-brand-ivory/70 text-sm leading-relaxed font-light italic">Сөүлийн гудамж, Улаанбаатар хот,<br />Монгол улс (Хүүхдийн ордны эсрэг талд)</p>
              </div>
              
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-3">Communication</h4>
                <div className="flex gap-10">
                   <a 
                     href="https://www.facebook.com/MongolianQuiltingCenter/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-brand-ivory/60 hover:text-brand-gold transition-colors font-medium text-xs tracking-widest uppercase"
                   >
                     Facebook
                   </a>
                   <a 
                     href="https://www.instagram.com/mqc_züimel/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-brand-ivory/60 hover:text-brand-gold transition-colors font-medium text-xs tracking-widest uppercase"
                   >
                     Instagram
                   </a>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <a 
                  href="https://m.me/MongolianQuiltingCenter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/5 border border-white/10 text-brand-gold px-8 py-4 text-[10px] uppercase font-bold tracking-widest hover:bg-white/10 transition-all"
                >
                  <MessageCircle size={18} /> Send Message
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 min-h-[500px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2139.0!2d106.9110!3d47.9157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d06730000000001%3A0x33f33f33f33f33f3!2sMongolian%20Quilting%20Center!5e0!3m2!1sen!2smn!4v1713794600000!5m2!1sen!2smn" 
              className="w-full h-full border-0 absolute inset-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Footer Info Strip */}
        <div className="grid md:grid-cols-3 border-t border-white/10">
          <div className="p-10 border-r border-white/10 flex flex-col gap-3">
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Impact</span>
             <p className="text-xs text-brand-ivory/50 leading-relaxed font-light italic">Эмэгтэйчүүдийг бие даасан орлоготой болоход нь тусалдаг.</p>
          </div>
          <div className="p-10 border-r border-white/10 flex flex-col gap-3">
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Craft</span>
             <p className="text-xs text-brand-ivory/50 leading-relaxed font-light italic">Зүймэл дээл, эко цүнх, ханын чимэглэл, бэлэг дурсгал.</p>
          </div>
          <div className="p-10 flex flex-col gap-3">
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Workshop</span>
             <p className="text-xs text-brand-ivory/50 leading-relaxed font-light italic">Улаанбаатар, Сөүлийн гудамж, Урлангийн төв байр.</p>
          </div>
        </div>
      </div>
      
      <footer className="py-12 bg-brand-navy text-center">
         <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">© 2024 Монголын Зүймэл Урлалын Төв</p>
      </footer>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold/20 selection:text-brand-gold bg-brand-navy">
      <Navbar />
      <Hero />
      <Impact />
      <ProductShowcase />
      <WorkshopVisit />
    </div>
  );
}


