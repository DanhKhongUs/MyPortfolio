import { useState } from "react";

interface ContactProps {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="relative py-16 px-4 md:px-12 mt-10">
      {/* Shadow */}
      <div className="absolute inset-0 bg-[#ff6b6b] rounded-[60px] w-[90%] md:w-[80%] mx-auto h-[90%] translate-y-6 z-0" />

      {/* Content Main */}
      <div
        className="relative z-10 bg-gradient-to-r from-[#0f3d3e] to-[#0c4749] text-white 
        rounded-[60px] p-8 md:p-16 flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto shadow-lg"
      >
        <div className="md:w-1/2 ">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 mt-20">
            I'm available for <br />
            full time opportunities
          </h2>
        </div>

        {/*Form */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Contact</h3>
          <hr className="w-12 border-t-4 border-teal-400 rounded mb-8" />

          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded text-gray-900 bg-white outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded text-gray-900 bg-white outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="p-3 rounded text-gray-900 bg-white outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#ff4d4d] text-white py-3 px-6 rounded hover:bg-[#ff3333] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
