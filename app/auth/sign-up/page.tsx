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
