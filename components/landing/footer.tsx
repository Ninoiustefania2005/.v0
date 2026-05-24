import Link from "next/link"
import { Pill, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Pill className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Gonzales</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Medicamentele tale, livrate rapid la usa ta. Simplu, sigur, convenabil.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Link-uri rapide</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#cum-functioneaza" className="text-background/70 hover:text-background transition-colors text-sm">
                  Cum functioneaza
                </Link>
              </li>
              <li>
                <Link href="#beneficii" className="text-background/70 hover:text-background transition-colors text-sm"
                        Beneficii
                </Link>
              </li>
              <li>
                <Link href="#farmacii" className="text-background/70 hover:text-background transition-colors text-sm">
                  Pentru farmacii
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/70 hover:text-background transition-colors text-sm">
                  Despre noi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-background/70 hover:text-background transition-colors text-sm">
                  Termeni si conditii
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-background/70 hover:text-background transition-colors text-sm">
                  Politica de confidentialitate
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-background/70 hover:text-background transition-colors text-sm">
                  Politica cookies
                </Link>
                  </li>
              <li>
                <Link href="/gdpr" className="text-background/70 hover:text-background transition-colors text-sm">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                <span>contact@gonzales.ro</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                <span>+40 700 000 000</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Bucuresti, Romania</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            2024 Gonzales. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-background/50">Facut cu dedicare in Romania</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
