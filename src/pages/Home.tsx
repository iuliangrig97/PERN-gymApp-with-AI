import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    name: "Instant Personalization",
    description:
      "Our AI analyzes your goals, experience, and available equipment to build your perfect program in seconds.",
    icon: BrainCircuit,
    color: "text-blue-400",
  },
  {
    name: "Intelligent Progression",
    description:
      "The app adapts every session. As you get stronger, GymAI automatically pushes you to the next level.",
    icon: BarChart3,
    color: "text-emerald-400",
  },
];

const testimonials = [
  {
    quote:
      "I’ve gained 5kg of muscle in 3 months. GymAI removes all the guesswork.",
    name: "Alex R.",
    role: "Intermediate Lifter",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Perfect for home workouts. It built a brutal plan with just my dumbbells.",
    name: "Sarah P.",
    role: "Busy Mom / Home Gym",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "The progression logic is smarter than any human PT I’ve ever had.",
    name: "David K.",
    role: "Competitive Athlete",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
      <main className="pt-24 shadow-2xl shadow-blue-900/10">
        <section className="relative overflow-hidden bg-gray-950 pb-20 pt-16 md:pb-32 md:pt-24">
          <div className="absolute inset-0 opacity-10 blur-[100px] saturate-150">
            <div className="absolute -top-10 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
            <div className="inline-flex items-center gap-2 bg-blue-950 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-blue-800 shadow-inner">
              <BrainCircuit className="w-4 h-4" />
              <span>Next-Gen Fitness Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[0.9] mb-6">
              Stop <span className="text-gray-500">Guessing</span>. <br />
              Start <span className="text-blue-500">Growing</span>.
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              GymAI uses advanced artificial intelligence to forge perfectly
              personalized training plans that adapt to you, every single
              session. Your goals, your gear, your schedule—solved.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-5 rounded-xl transition w-fit sm:w-auto shadow-2xl shadow-blue-600/30 transform hover:-translate-y-1"
              >
                Build Your Free Plan
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-800 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-center gap-12 text-gray-500 font-medium">
            <span className="text-sm uppercase tracking-widest text-gray-600">
              Trusted By
            </span>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-gray-700" />
              <span className="text-lg font-bold">10,000+ Athletes</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-gray-700" />
              <span className="text-lg font-bold">50k+ Plans Generated</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-500">
              <span>★★★★★</span>
              <span className="text-lg font-bold text-gray-500">
                4.9 App Rating
              </span>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 md:py-32 bg-gray-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-sm tracking-widest text-blue-500 font-bold mb-4">
                Why GymAI?
              </h2>
              <p className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                Your entire fitness journey, optimized by AI.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Generic plans fail because they aren't *you*. GymAI bridges the
                gap between expert programming and hyper-personalization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 p-8 rounded-3xl border border-gray-800 transform hover:border-blue-800 transition group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
                >
                  <div
                    className={`mb-6 p-4 rounded-xl bg-gray-800 inline-block border border-gray-700 group-hover:bg-blue-950 group-hover:border-blue-800 transition`}
                  >
                    <feature.icon className={`w-10 h-10 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-gray-900/50 border-y border-gray-800 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                Results that speak for themselves.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col justify-between"
                >
                  <p className="text-lg text-gray-300 leading-relaxed italic mb-8">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full border-2 border-gray-700"
                    />
                    <div>
                      <p className="font-bold text-white text-lg">{t.name}</p>
                      <p className="text-blue-400 text-sm font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 blur-[100px] saturate-150">
            <div className="absolute -bottom-10 right-1/2 h-125 w-125 translate-x-1/2 rounded-full bg-emerald-600"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white leading-[0.9] mb-8">
              Ready to build <br /> your{" "}
              <span className="text-blue-500">ultimate</span> physique?
            </h2>
            <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who have unlocked their potential with
              GymAI. It takes less than 2 minutes to generate your customized
              plan. Completely free.
            </p>
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-200 text-black font-extrabold text-xl px-12 py-6 rounded-2xl transition shadow-2xl shadow-white/10 transform hover:-translate-y-1"
            >
              Start Training Smart
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-950 py-12 text-center text-gray-600 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Target className="w-6 h-6 text-gray-700" />
            <span className="text-xl font-extrabold tracking-tighter text-gray-600">
              Gym<span className="text-gray-700">AI</span>
            </span>
          </div>
          <p className="text-sm">
            © 2026 GymAI Technologies Inc. All rights reserved.
          </p>
          <p className="text-xs mt-2">Built with passion & intelligence.</p>
        </div>
      </footer>
    </div>
  );
}
