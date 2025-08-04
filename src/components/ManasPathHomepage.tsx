import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Wind, BookOpen, Play, Flower2, CircleDot } from "lucide-react";
import heroImage from "@/assets/hero-meditation.jpg";
import mandalaBackground from "@/assets/mandala-background.jpg";
import sanskritPattern from "@/assets/sanskrit-pattern.jpg";
import quiz from "../pages/Quiz.tsx";

const ManasPathHomepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Mandala Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${mandalaBackground})` }}
        ></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/90"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sandalwood to-turmeric bg-clip-text text-transparent">
            ManasPath
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Your Inner Path to Balance
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 italic">
            "Ancient Indian wisdom for a peaceful mind, every day."
          </p>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              Reimagine mental wellness through timeless Indian Knowledge Systems – Gita, Ayurveda, and Yoga.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              Begin your journey with personalized daily routines rooted in tradition and backed by balance.
            </p>
            <p className="text-xl font-semibold text-sandalwood mb-8">
              🌅 Start your day with clarity. End with calm.
            </p>
          </div>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Start My Daily Path
          </Button>
        </div>
      </section>

      {/* About ManasPath Section with Sanskrit Pattern */}
      <section className="py-20 px-6 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${sanskritPattern})` }}
        ></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <CircleDot className="w-12 h-12 mx-auto mb-4 text-turmeric" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why ManasPath?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/90">
                India has always known the power of inner balance — from the meditative stillness of the Himalayas to the life-giving flow of Ayurveda.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                ManasPath brings these traditions to life through a simple, accessible platform that helps people check in with themselves, balance their doshas, and receive daily wellness suggestions based on ancient systems like:
              </p>
            </div>
            
            <div className="grid gap-6">
              <Card className="bg-gradient-to-br from-card to-turmeric/20 border-sandalwood/20 shadow-soft">
                <CardContent className="p-6 flex items-center gap-4">
                  <BookOpen className="w-8 h-8 text-sandalwood" />
                  <div>
                    <h3 className="text-xl font-semibold text-sandalwood mb-2">Bhagavad Gita</h3>
                    <p className="text-foreground/80">Mindful thought & purpose</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-card to-lotus-pink/20 border-lotus-pink/20 shadow-soft">
                <CardContent className="p-6 flex items-center gap-4">
                  <Flower2 className="w-8 h-8 text-lotus-pink" />
                  <div>
                    <h3 className="text-xl font-semibold text-lotus-pink mb-2">Ayurveda</h3>
                    <p className="text-foreground/80">Sattva-Rajas-Tamas balance</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-card to-indigo/20 border-indigo/20 shadow-soft">
                <CardContent className="p-6 flex items-center gap-4">
                  <Heart className="w-8 h-8 text-indigo" />
                  <div>
                    <h3 className="text-xl font-semibold text-indigo mb-2">Yoga & Pranayama</h3>
                    <p className="text-foreground/80">Body-breath connection</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Your Daily Path Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30 relative">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${mandalaBackground})` }}
        ></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">📿</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Daily Path
            </h2>
            <p className="text-xl text-muted-foreground">
              Your Personalized 3-Minute Wellness Routine
            </p>
          </div>
          
          <p className="text-lg text-center text-foreground/90 mb-12 max-w-3xl mx-auto">
            Start your day with a balanced mind using our 3-step IKS-based ritual:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <Card className="bg-gradient-to-br from-card to-turmeric/30 border-turmeric/40 shadow-elevation hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Wind className="w-12 h-12 mx-auto mb-4 text-turmeric" />
                <h3 className="text-xl font-semibold text-turmeric mb-4">Pranayama of the Day</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Nadi Shodhan or Bhramari to cleanse energy channels.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-card to-sandalwood/20 border-sandalwood/40 shadow-elevation hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-sandalwood" />
                <h3 className="text-xl font-semibold text-sandalwood mb-4">Gita Thought of the Day</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  "You have the right to work, but not to the fruits of the work." (Gita 2.47)
                </p>
                <p className="text-turmeric font-medium">Reflect and release.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-card to-lotus-pink/30 border-lotus-pink/40 shadow-elevation hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-lotus-pink" />
                <h3 className="text-xl font-semibold text-lotus-pink mb-4">Yogic Pose or Mudra</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Simple stretches or Hasta Mudras to realign energy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manas Balance Test Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Flower2 className="w-12 h-12 mx-auto mb-6 text-lotus-pink" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Manas Balance Test
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Find Your Manas Balance
          </p>
          
          <div className="bg-gradient-to-br from-card to-lotus-pink/20 border border-lotus-pink/30 rounded-2xl p-8 shadow-elevation mb-8">
            <p className="text-lg leading-relaxed text-foreground/90 mb-8">
              Take our short daily quiz to reflect on your emotions, energy levels, and focus. We'll suggest practices based on your dominant Sattva, Rajas, or Tamas energies – inspired by the Triguṇa theory of Indian psychology.
            </p>
            
            <Button 
              variant="turmeric" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => navigate("/quiz")}
            >
              Take the Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* Listen & Reflect Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Play className="w-12 h-12 mx-auto mb-4 text-indigo" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Listen & Reflect
            </h2>
            <p className="text-xl text-muted-foreground">
              Sacred Sounds for Inner Stillness
            </p>
          </div>
          
          <p className="text-lg text-center text-foreground/90 mb-12">
            Explore our collection of short audio guides:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-card to-turmeric/20 border-turmeric/30 shadow-soft hover:shadow-elevation transition-all duration-300">
              <CardContent className="p-6 text-center">
                <CircleDot className="w-8 h-8 mx-auto mb-3 text-turmeric" />
                <h3 className="font-semibold text-turmeric mb-2">Om Chanting</h3>
                <p className="text-sm text-foreground/70">(2 mins)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-card to-lotus-pink/20 border-lotus-pink/30 shadow-soft hover:shadow-elevation transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Wind className="w-8 h-8 mx-auto mb-3 text-lotus-pink" />
                <h3 className="font-semibold text-lotus-pink mb-2">Guided Nadi Shodhan</h3>
                <p className="text-sm text-foreground/70">(3 mins)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-card to-sandalwood/20 border-sandalwood/30 shadow-soft hover:shadow-elevation transition-all duration-300">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-sandalwood" />
                <h3 className="font-semibold text-sandalwood mb-2">Gita Shloka Recitation</h3>
                <p className="text-sm text-foreground/70">with Meaning</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-card to-indigo/20 border-indigo/30 shadow-soft hover:shadow-elevation transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 mx-auto mb-3 text-indigo" />
                <h3 className="font-semibold text-indigo mb-2">Nighttime Yoga Nidra</h3>
                <p className="text-sm text-foreground/70">(5 mins)</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="sacred" size="lg" className="text-lg px-8 py-3">
              Listen Now
            </Button>
          </div>
        </div>
      </section>

      {/* Community & Impact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-4xl mb-6 block">🌱</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Community & Impact
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            A Movement for Inner Well-being
          </p>
          
          <div className="bg-gradient-to-br from-lotus-pink/10 to-turmeric/10 border border-lotus-pink/20 rounded-2xl p-8 shadow-soft mb-8">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              ManasPath is more than a tool – it's a movement to reconnect youth with the timeless roots of Indian wellness. From schools to rural communities, we aim to bring these tools to those who need them most.
            </p>
            
            <p className="text-lg font-medium text-lotus-pink mb-6">
              Want to collaborate or use this in your school/NGO?
            </p>
            
            <Button variant="gentle" size="lg" className="text-lg px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo text-indigo-foreground py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-turmeric transition-colors">Home</a>
                <a href="#" className="block hover:text-turmeric transition-colors">Daily Path</a>
                <a href="#" className="block hover:text-turmeric transition-colors">Listen</a>
                <a href="#" className="block hover:text-turmeric transition-colors">Contact</a>
                <a href="#" className="block hover:text-turmeric transition-colors">Privacy Policy</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span>📧</span> manaspath.wellness@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span> Based in India | Inspired by Bharat
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-indigo-foreground/20 mt-8 pt-8 text-center">
            <p className="text-indigo-foreground/80">
              © 2024 ManasPath. Nurturing minds through ancient wisdom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ManasPathHomepage;
