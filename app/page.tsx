import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20">
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-premium-orange mb-6">
          Momos Magic
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8">
          From Humble Stall to Culinary Legend
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Order Now →
          </Button>
          <Button variant="outline" size="lg">
            Discover Our Story
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <Card>
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-semibold text-golden-glow mb-2">
            Award Winning
          </h3>
          <p className="text-foreground/70">
            Best Quality Food in City
          </p>
        </Card>

        <Card>
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold text-vegetarian-green mb-2">
            FSSAI Certified
          </h3>
          <p className="text-foreground/70">
            License: 20424201001152
          </p>
        </Card>

        <Card>
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold text-vegetarian-green mb-2">
            100% Vegetarian
          </h3>
          <p className="text-foreground/70">
            Pure Veg Kitchen
          </p>
        </Card>

        <Card>
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold text-warm-orange mb-2">
            Rated 4.9/5
          </h3>
          <p className="text-foreground/70">
            2000+ Happy Customers
          </p>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-bold text-golden-glow mb-6">
          Design System Test
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-6 bg-pitch-black border border-premium-orange rounded-lg">
            <p className="text-premium-orange font-semibold">Premium Orange</p>
            <p className="text-xs text-foreground/60">#ffc241</p>
          </div>
          <div className="p-6 bg-pitch-black border border-golden-glow rounded-lg">
            <p className="text-golden-glow font-semibold">Golden Glow</p>
            <p className="text-xs text-foreground/60">#ffd700</p>
          </div>
          <div className="p-6 bg-pitch-black border border-vegetarian-green rounded-lg">
            <p className="text-vegetarian-green font-semibold">Vegetarian Green</p>
            <p className="text-xs text-foreground/60">#059669</p>
          </div>
          <div className="p-6 bg-pitch-black border border-warm-orange rounded-lg">
            <p className="text-warm-orange font-semibold">Warm Orange</p>
            <p className="text-xs text-foreground/60">#EA580C</p>
          </div>
        </div>
      </section>
    </div>
  );
}
