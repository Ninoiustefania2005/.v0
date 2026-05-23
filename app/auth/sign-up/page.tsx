"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pill, Loader2, User, Store } from "lucide-react"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [pharmacyName, setPharmacyName] = useState("")
  const [pharmacyAddress, setPharmacyAddress] = useState("")
  const [pharmacyCity, setPharmacyCity] = useState("")
  const [role, setRole] = useState<"customer" | "pharmacy">("customer")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ?? 
          `${window.location.origin}/auth/callback`,
        data: {
          full_name: fullName,
          phone,
          role,
          pharmacy_name: role === "pharmacy" ? pharmacyName : null,
          pharmacy_address: role === "pharmacy" ? pharmacyAddress : null,
          pharmacy_city: role === "pharmacy" ? pharmacyCity : null,
        },
      },
    })
               if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push("/auth/sign-up-success")
  }
           
   return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Pill className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Gonzales</span>
          </Link>
          <CardTitle className="text-2xl">Creeaza cont</CardTitle>
          <CardDescription>Alege tipul de cont si completeaza datele</CardDescription>
        </CardHeader>
        <form onSubmit={handleSignUp}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <Tabs defaultValue="customer" onValueChange={(v) => setRole(v as "customer" | "pharmacy")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customer" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Client
                </TabsTrigger>
                <TabsTrigger value="pharmacy" className="flex items-center gap-2">
                  <Store className="h-4 w-4" />
                  Farmacie
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="customer" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nume complet</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Ion Popescu"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                                                type="tel"
                    placeholder="07XX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="pharmacy" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="pharmacyName">Numele farmaciei</Label>
                  <Input
                    id="pharmacyName"
                    type="text"
                    placeholder="Farmacia Exemplu"
                    value={pharmacyName}
                    onChange={(e) => setPharmacyName(e.target.value)}
                    required={role === "pharmacy"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pharmacyAddress">Adresa</Label>
                  <Input
                    id="pharmacyAddress"
                    type="text"
                    placeholder="Str. Exemplu nr. 1"
                    value={pharmacyAddress}
                    onChange={(e) => setPharmacyAddress(e.target.value)}
                    required={role === "pharmacy"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pharmacyCity">Oras</Label>
                  <Input
                    id="pharmacyCity"
                    type="text"
                    placeholder="Bucuresti"
                    value={pharmacyCity}
                    onChange={(e) => setPharmacyCity(e.target.value)}
                    required={role === "pharmacy"}
                  />
                </div>
                           <div className="space-y-2">
                  <Label htmlFor="contactPhone">Telefon contact</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    placeholder="07XX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required={role === "pharmacy"}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@exemplu.ro"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Parola</Label>
              <Input
                id="password"
                type="password"
                placeholder="Minim 6 caractere"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Se creeaza contul...
                </>
              ) : (
                "Creeaza cont"
              )}
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Ai deja cont?{" "}
              <Link href="/auth/login" className="text-primary hover:underline">
                Autentifica-te
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
