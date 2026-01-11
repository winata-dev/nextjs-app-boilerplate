import { BadgeDot } from "@/components/atoms/BadgeDot";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { FeatureSection } from "@/components/organisms/FeatureSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <BadgeDot label="Member access" />
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900">
              Welcome back to Blossend.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Sign in to keep your team, inventory, and orders aligned in one
              place.
            </p>
            <div className="mt-8 grid gap-4">
              <FeatureCard
                title="Fast onboarding"
                description="Save favorite workspaces and resume quickly across devices."
              />
              <FeatureCard
                title="Secure sessions"
                description="Built-in checks keep your account protected without friction."
              />
            </div>
          </div>

          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900">Sign in</h2>
              <p className="text-sm text-slate-500">
                Use your work email to continue.
              </p>
            </CardHeader>
            <CardContent>
              <form className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button type="submit">Continue</Button>
                <p className="text-xs text-slate-500">
                  By continuing, you agree to our terms and privacy policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <FeatureSection />
    </div>
  );
}
