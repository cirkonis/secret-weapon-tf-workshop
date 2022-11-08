import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Host from "../components/Host"

export default function SecretWeapon() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <Hero></Hero>
        {/* Host Section */}
        <Host></Host>
        {/* CTA section */}
        <CallToAction></CallToAction>
      </main>
      {/* Footer section */}
        <Footer></Footer>
    </div>
  )
}
