import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pill, AlertTriangle } from "lucide-react"

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Pill className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Gonzales</span>
          </Link>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl">Eroare de autentificare</CardTitle>
          <CardDescription>
            A aparut o problema la autentificare
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Link-ul de confirmare poate fi expirat sau invalid. Te rugam sa incerci din nou.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button asChild className="w-full">
            <Link href="/auth/login">Inapoi la autentificare</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full">
            <Link href="/">Inapoi la pagina principala</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
