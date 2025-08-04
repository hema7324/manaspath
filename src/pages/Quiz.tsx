import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleDot, Heart, BookOpen, Wind, Volume2, VolumeX, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mandalaBg from "@/assets/mandala-background.jpg";
import sanskritBg from "@/assets/sanskrit-pattern.jpg";

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    icon: string;
    type: 'sattva' | 'rajas' | 'tamas';
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How do you usually start your day?",
    options: [
      { text: "Calm meditation or reading", icon: "🧘", type: "sattva" },
      { text: "A fast-paced workout or checking notifications", icon: "🔥", type: "rajas" },
      { text: "Struggling to get out of bed", icon: "😴", type: "tamas" }
    ]
  },
  {
    id: 2,
    question: "How do you react in stressful situations?",
    options: [
      { text: "Reflect and breathe", icon: "🧘", type: "sattva" },
      { text: "Take action immediately, sometimes impulsively", icon: "🔥", type: "rajas" },
      { text: "Withdraw or avoid completely", icon: "😵‍💫", type: "tamas" }
    ]
  },
  {
    id: 3,
    question: "Your energy throughout the day feels…",
    options: [
      { text: "Balanced and alert", icon: "✨", type: "sattva" },
      { text: "High and restless", icon: "⚡", type: "rajas" },
      { text: "Low and sluggish", icon: "💤", type: "tamas" }
    ]
  },
  {
    id: 4,
    question: "Preferred type of content:",
    options: [
      { text: "Spiritual books or poetry", icon: "📖", type: "sattva" },
      { text: "Motivational talks or news", icon: "📈", type: "rajas" },
      { text: "Entertainment or binge-watching", icon: "🎮", type: "tamas" }
    ]
  },
  {
    id: 5,
    question: "What best describes your food habits?",
    options: [
      { text: "Light, sattvic meals (fruits, grains, no onion/garlic)", icon: "🥗", type: "sattva" },
      { text: "Spicy or stimulating foods (coffee, fried)", icon: "🌶️", type: "rajas" },
      { text: "Heavy or processed meals, irregular eating", icon: "🍕", type: "tamas" }
    ]
  }
];

const results = {
  sattva: {
    title: "Sattva - The Peaceful Mind",
    description: "You possess the quality of balance, clarity, and harmony. Your mind tends toward peace and wisdom.",
    suggestions: [
      "Continue your meditation practice",
      "Read sacred texts like the Bhagavad Gita",
      "Practice gentle yoga and pranayama",
      "Maintain sattvic diet with fresh, pure foods"
    ],
    color: "bg-gradient-to-br from-sandalwood to-turmeric",
    icon: <CircleDot className="w-12 h-12 text-sandalwood-foreground" />
  },
  rajas: {
    title: "Rajas - The Active Mind", 
    description: "You have dynamic energy and passion, but may benefit from grounding practices to find balance.",
    suggestions: [
      "Practice cooling pranayama like Sheetali",
      "Try restorative yoga poses",
      "Meditate regularly to calm the mind",
      "Reduce stimulating foods and activities before sleep"
    ],
    color: "bg-gradient-to-br from-turmeric to-lotus-pink",
    icon: <Wind className="w-12 h-12 text-turmeric-foreground" />
  },
  tamas: {
    title: "Tamas - The Resting Mind",
    description: "You may be in a phase of rest or inertia. Gentle activation can help restore your natural vitality.",
    suggestions: [
      "Start with gentle morning sun salutations",
      "Practice energizing breath work like Kapalabhati",
      "Read inspiring spiritual texts",
      "Gradually increase light, fresh foods in your diet"
    ],
    color: "bg-gradient-to-br from-lotus-pink to-indigo",
    icon: <Heart className="w-12 h-12 text-lotus-pink-foreground" />
  }
};

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<'sattva' | 'rajas' | 'tamas'>('sattva');
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    document.title = "Find Your Manas Balance - ManasPath";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover your mental energy type rooted in Indian wisdom - Sattva, Rajas, or Tamas. Take our ancient wisdom quiz.');
    }
  }, []);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers: string[]) => {
    const counts = { sattva: 0, rajas: 0, tamas: 0 };
    allAnswers.forEach(answer => {
      counts[answer as keyof typeof counts]++;
    });

    const dominant = Object.entries(counts).reduce((a, b) => 
      counts[a[0] as keyof typeof counts] > counts[b[0] as keyof typeof counts] ? a : b
    )[0] as 'sattva' | 'rajas' | 'tamas';

    setResult(dominant);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const resultData = results[result];
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={mandalaBg} 
            alt="Mandala background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-card/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="max-w-2xl mx-auto text-center">
            <Card className={`${resultData.color} border-none shadow-elevation`}>
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  {resultData.icon}
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  {resultData.title}
                </CardTitle>
                <p className="text-white/90 text-lg">
                  {resultData.description}
                </p>
              </CardHeader>
              <CardContent className="bg-card/95 rounded-b-lg">
                <h3 className="font-semibold text-xl mb-4 text-foreground">
                  Your Daily Path Suggestions:
                </h3>
                <div className="space-y-3">
                  {resultData.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-background/80 rounded-md">
                      <Badge variant="secondary" className="shrink-0">
                        {index + 1}
                      </Badge>
                      <span className="text-foreground">{suggestion}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-8">
                  <Button onClick={resetQuiz} variant="outline" className="flex-1">
                    Retake Quiz
                  </Button>
                  <Button 
                    onClick={() => navigate('/')} 
                    variant="hero"
                    className="flex-1"
                  >
                    Start My Daily Path
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={sanskritBg} 
          alt="Sanskrit background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-card/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMusicPlaying(!musicPlaying)}
            className="text-muted-foreground hover:text-foreground"
          >
            {musicPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </Button>
        </div>

        {/* Quiz Content */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-4 mb-6">
              <CircleDot className="w-8 h-8 text-sandalwood" />
              <BookOpen className="w-8 h-8 text-turmeric" />
              <Heart className="w-8 h-8 text-lotus-pink" />
              <Wind className="w-8 h-8 text-indigo" />
            </div>
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-sandalwood to-turmeric bg-clip-text text-transparent mb-4">
              Find Your Manas Balance
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Discover your mental energy type rooted in Indian wisdom
            </p>
            <p className="text-lg text-lotus-pink font-medium">
              Sattva • Rajas • Tamas
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-sandalwood to-turmeric h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <Card className="shadow-elevation border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full p-6 h-auto text-left justify-start hover:bg-accent/20 hover:border-sandalwood/50 transition-all duration-300"
                  onClick={() => handleAnswer(option.type)}
                >
                  <span className="text-2xl mr-4">{option.icon}</span>
                  <span className="text-lg">{option.text}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;