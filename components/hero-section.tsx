import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl lg:text-6xl font-black text-foreground mb-6">
            Learn Without
            <span className="text-primary block">Limits</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees
            from world-class universities and companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="What do you want to learn?" className="pl-12 pr-4 h-14 text-lg" />
            </div>
            <Button size="lg" className="h-14 px-8 text-lg font-semibold">
              <Search className="mr-2 h-5 w-5" />
              Search Courses
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="outline" size="lg" className="h-14 px-8 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>

            <div className="text-sm text-muted-foreground">
              Join over <span className="font-semibold text-primary">2 million</span> learners worldwide
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
    </section>
  )
}
