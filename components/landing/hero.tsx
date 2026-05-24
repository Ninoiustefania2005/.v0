"use client"

import { QRCodeSVG } from "qrcode.react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Clock, Shield } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const whatsappUrl = "https://wa.me/40700000000?text=Salut%20Gonzales!"

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Disponibil 24/7</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Medicamentele tale,{" "}
              <span className="text-primary">livrate rapid</span>{" "}
              la usa ta
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Scanezi codul QR, conversezi cu asistentul nostru AI pe WhatsApp, 
              iar medicamentele ajung la tine in cel mai scurt timp posibil.
               </p>

             <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link href={whatsappUrl} target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Comanda pe WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link href="#cum-functioneaza">
                  Vezi cum functioneaza
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Livrare in aceeasi zi</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Farmacii verificate</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Asistent AI 24/7</span>
              </div>
            </div>
          </div>

           <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Scaneaza pentru a comanda</h3>
                    <p className="text-sm text-muted-foreground">Deschide WhatsApp instant</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl inline-block">
                    <QRCodeSVG 
                      value={whatsappUrl}
                      size={200}
                      level="H"
                      includeMargin={false}
                      bgColor="#ffffff"
                      fgColor="#000000"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                    <span>WhatsApp Business</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
