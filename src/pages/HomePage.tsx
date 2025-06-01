import Hero from "~/components/Hero/Hero";
import About from "~/components/About/About";
import Contact from "~/components/Contact/Contact";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";
import Projects from "~/components/Projects/Projects";
import Skills from "~/components/Skills/Skills";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-gray-300">
      <header className="w-full mx-auto md:px-20 fixed top-0 z-50">
        <Header />
      </header>

      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <Hero />
        <hr className="border-1/2 border-gray-500" />
        <About />
        <hr className="border-1/2 border-gray-500" />
        <Skills />
        <hr className="border-1/2 border-gray-500" />
        <Projects />
        <hr className="border-1/2 border-gray-500" />
        <Contact />
      </main>

      <footer className=" w-full">
        <hr className="w-full h-0.5 mx-auto mt-20 bg-neutral-200 border-0"></hr>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
