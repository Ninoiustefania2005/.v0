import { Clock, Shield, CreditCard, Smartphone, Users, HeartPulse } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Economisesti timp",
    description: "Nu mai stai la cozi. Comanda de oriunde si primeste medicamentele acasa in aceeasi zi, oriunde in tara."
  },
  {
    icon: Shield,
    title: "Farmacii verificate",
    description: "Lucram doar cu farmacii autorizate care respecta toate standardele de calitate si siguranta."
  },
  {
    icon: CreditCard,
    title: "Preturi transparente",
    description: "Vezi preturile de la mai multe farmacii si alege cea mai buna oferta pentru tine."
  },
  {
    icon: Smartphone,
    title: "Fara aplicatie",
    description: "Foloseste WhatsApp-ul pe care il ai deja. Nu trebuie sa descarci nimic nou."
  },
  {
    icon: Users,
    title: "Suport uman",
    description: "Desi AI-ul gestioneaza majoritatea cererilor, farmacisti reali sunt mereu disponibili."
  },
  {
     icon: HeartPulse,
    title: "Reminder tratament",
    description: "Nu uiti niciodata sa iti refaci retetele. Primesti notificari automate la timp."
  }
]

export function Benefits() {
  return (
    <section id="beneficii" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            De ce sa alegi Gonzales?
          </h2>
          <p className="text-lg text-muted-foreground">
            Beneficii care fac diferenta in viata ta de zi cu zi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
