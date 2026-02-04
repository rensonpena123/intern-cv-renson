import { Top } from "@/sections/top"
import { About } from "@/sections/about"
import { Projects } from "@/sections/projects"
import { Contacts } from "@/sections/contact"
import { Navbar } from "@/layout/navbar"

function App() {

  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />

    <main>
      <Top />
      <About />
      <Projects />
      <Contacts />
    </main>
  </div>
}

export default App
