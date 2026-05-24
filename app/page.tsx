"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QRCodeSVG } from "qrcode.react"
import {
  Clock,
  Shield,
  DollarSign,
  Smartphone,
  Users,
  Bell,
  MessageCircle,
  Truck,
  Search,
  Bot,
  CheckCircle2,
  ArrowRight,
  Send,
  TrendingUp,
  BarChart3,
  Heart,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"

const TELEGRAM_BOT_URL = "https://t.me/Gonzales_official_bot"

export default function GonzalesLandingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">G</span>
            </div>
            <span className="text-xl font-bold text-foreground">Gonzales</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#cum-functioneaza" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Cum funcționează
            </Link>
            <Link href="#beneficii" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Beneficii
            </Link>
            <Link href="#pentru-farmacii" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pentru farmacii
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Autentificare
            </Button>
            <Button size="sm" asChild>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
                Începe acum
              </a>
            </Button>
          </div>
        </div>
      </header>

       {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                Disponibil 24/7
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Medicamentele tale,
                <br />
                <span className="text-primary">livrate rapid</span>
                <br />
                la ușa ta
              </h1>

              <p className="max-w-lg text-pretty text-lg text-muted-foreground">
                Scanezi codul QR, conversezi cu asistentul nostru AI pe Telegram, iar medicamentele ajung la tine în cel mai scurt timp posibil.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
                    <Send className="h-5 w-5" />
                    Comandă pe Telegram
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#cum-functioneaza">Vezi cum funcționează</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Livrare în aceeași zi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Farmacii verificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Asistent AI 24/7</span>
                </div>
              </div>
            </div>

            {/* QR Code Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-sm overflow-hidden shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 text-center">
                    <h3 className="text-lg font-semibold
                    text-foreground">Scanează pentru a comanda</h3>
                    <p className="text-sm text-muted-foreground">Deschide Telegram instant</p>
                  </div>
                  <div className="flex justify-center rounded-xl bg-white p-4">
                    <QRCodeSVG
                      value={TELEGRAM_BOT_URL}
                      size={200}
                      level="H"
                      includeMargin={false}
                      bgColor="#ffffff"
                      fgColor="#0088cc"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Send className="h-4 w-4 text-[#0088cc]" />
                    <span>Telegram Bot</span>
                  </div>
                  </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="cum-functioneaza" className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Cum funcționează Gonzales?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un proces simplu în 5 pași care transformă modul în care comanzi medicamente
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
      {
                step: 1,
                icon: Search,
                title: "Scanează codul QR",
                description: "Folosește camera telefonului pentru a scana codul QR de pe site sau din materialele noastre.",
              },
              {
                step: 2,
                icon: Bot,
                title: "Conversezi cu AI Bot",
                description:
                  "Asistentul nostru inteligent te ajută să găsești medicamentele de care ai nevoie și verifică disponibilitatea.",
              },
              {
                step: 3,
                icon: Shield,
                title: "Verificare farmacii",
                description:
                  "Sistemul verifică automat stocul la farmaciile partenere din zona ta pentru cele mai bune prețuri.",
              },
              {
                step: 4,
                icon: Truck,
                title: "Livrare rapidă",
                description: "Primești medicamentele acasă sau la adresa dorită în cel mai scurt timp posibil.",
              },
              {
                step: 5,
                icon: Bell,
                title: "Reminder automat",
                description:
                  "Pentru rețetele recurente, primești notificări automate când este timpul să refaci comanda.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div className="mb-3 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficii" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">De ce să alegi Gonzales?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Beneficii care fac diferența în viața ta de zi cu zi</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Economisești timp",
                description:
                  "Nu mai stai la cozi. Comandă de oriunde și primește medicamentele acasă în aceeași zi, oriunde în țară.",
              },
              {
                icon: Shield,
                title: "Farmacii verificate",
                description:
                  "Lucrăm doar cu farmacii autorizate care respectă toate standardele de calitate și siguranță.",
              },
              {
                icon: DollarSign,
                title: "Prețuri transparente",
                description: "Vezi prețurile de la mai multe farmacii și alege cea mai bună ofertă pentru tine.",
              },
              {
                icon: Smartphone,
                title: "Fără aplicație",
                description: "Folosește Telegram-ul pe care îl ai deja. Nu trebuie să descarci nimic nou.",
              },
              {
                icon: Users,
                title: "Suport uman",
                description:
                  "Deși AI-ul gestionează majoritatea cererilor, farmaciști reali sunt mereu disponibili.",
              },
              {
                icon: Bell,
                title: "Reminder tratament",
                description: "Nu uiți niciodată să îți refaci rețetele. Primești notificări automate la timp.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Conversation Section */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Conversație naturală cu AI</h2>
              <p className="text-lg text-muted-foreground">
                Asistentul nostru inteligent înțelege limbajul natural. Spune-i ce ai nevoie și el se ocupă de restul -
                găsește farmaciile, compară prețurile și plasează comanda.
              </p>
              <ul className="space-y-3">
                {[
                  "Recunoaște nume de medicamente și prescurtări",
                  "Compară prețuri automat de la farmacii multiple",
                  "Memorează preferințele tale pentru comenzi viitoare",
                  "Setează reminder-uri pentru rețete recurente",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chat Preview */}
            <div className="flex justify-center">
              <Card className="w-full max-w-sm overflow-hidden shadow-xl">
                <div className="flex items-center gap-3 bg-[#0088cc] p-4 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Gonzales</p>
                    <p className="text-xs text-white/80">online</p>
                  </div>
                </div>
                <CardContent className="space-y-4 bg-[#e5ddd5] p-4">
                  <div className="max-w-[80%] rounded-lg bg-white p-3 shadow-sm">
                    <p className="text-sm text-foreground">
                      Bună! Sunt Gonzales, asistentul tău pentru medicamente. Cu ce te pot ajuta azi?
                    </p>
                    <p className="mt-1 text-right text-xs text-muted-foreground">10:30</p>
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-lg bg-[#dcf8c6] p-3 shadow-sm">
                    <p className="text-sm text-foreground">Am nevoie de Nurofen și Vitamina C</p>
                    <p className="mt-1 text-right text-xs text-muted-foreground">10:31</p>
                  </div>
                  <div className="max-w-[80%] rounded-lg bg-white p-3 shadow-sm">
                    <p className="text-sm text-foreground">
                      Perfect! Am găsit aceste produse la 3 farmacii din zona ta:
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                      <li>1. Farmacia Catena - Nurofen 12.50 lei, Vitamina C 8.90 lei</li>
                      <li>2. Farmacia Helpnet - Nurofen 11.90 lei, Vitamina C 9.50 lei</li>
                      <li>3. Farmacia Sensiblu - Nurofen 12.00 lei, Vitamina C 8.50 lei</li>
                    </ul>
                    <p className="mt-2 text-sm text-foreground">De unde preferi să comand?</p>
                    <p className="mt-1 text-right text-xs text-muted-foreground">10:31</p>
                  </div>
                </CardContent>
                <div className="flex items-center gap-2 border-t border-border bg-white p-3">
                  <input
                    type="text"
                    placeholder="Scrie un mesaj..."
                    className="flex-1 bg-transparent text-sm outline-none"
                    disabled
                  />
                  <Button size="icon" className="h-8 w-8 rounded-full bg-[#0088cc] hover:bg-[#006da3]">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* For Pharmacies Section */}
      <section id="pentru-farmacii" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-px bg-border">
                    {[
                      { value: "500+", label: "Farmacii partenere", icon: Shield },
                      { value: "50k+", label: "Comenzi livrate", icon: Truck },
                      { value: "24h", label: "Livrare națională", icon: Clock },
                      { value: "4.9", label: "Rating mediu", icon: Heart },
                    ].map((stat, index) => (
                      <div key={index} className="flex flex-col items-center justify-center bg-card p-6 text-center">
                        <stat.icon className="mb-2 h-6 w-6 text-primary" />
                        <p className="text-3xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 space-y-6 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <TrendingUp className="h-4 w-4" />
                Pentru farmacii
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Devino partener Gonzales și crește-ți afacerea
              </h2>
              <p className="text-lg text-muted-foreground">
                Alătură-te rețelei noastre de farmacii partenere și beneficiază de un flux constant de clienți noi, fără
                costuri de marketing suplimentare.
              </p>
              <ul className="space-y-3">
                {[
      { icon: TrendingUp, text: "Crește vânzările - Acces la clienți noi care preferă să comande online." },
                  {
                    icon: BarChart3,
                    text: "Gestiune simplificată - Dashboard dedicat pentru gestionarea comenzilor și stocurilor.",
                  },
                  {
                    icon: Heart,
                    text: "Fidelizare clienți - Sistemul de reminder-uri aduce clienții înapoi automat.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="gap-2">
                Devino partener
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">G</span>
                </div>
                <span className="text-xl font-bold text-foreground">Gonzales</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Medicamentele tale, livrate rapid la ușa ta. Simplu, sigur, convenabil.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-foreground">Link-uri rapide</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#cum-functioneaza" className="text-muted-foreground hover:text-foreground">
                    Cum funcționează
                  </Link>
                </li>
                <li>
                  <Link href="#beneficii" className="text-muted-foreground hover:text-foreground">
                    Beneficii
                  </Link>
                </li>
                <li>
                  <Link href="#pentru-farmacii" className="text-muted-foreground hover:text-foreground">
                    Pentru farmacii
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Despre noi
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground 
                  hover:text-foreground">
                    Termeni și condiții
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Politica de confidențialitate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Politica cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  contact@gonzales.ro
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +40 700 000 000
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  București, România
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2024 Gonzales. Toate drepturile rezervate.</p>
            <p className="text-sm text-muted-foreground">Făcut cu dedicare în România 🇷🇴</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
