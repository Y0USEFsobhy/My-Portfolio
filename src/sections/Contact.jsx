import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const promise = emailjs.send(
      "service_pia3fdg",
      "template_k6xtx5l",
      form,
      "_GoQ19LbpDWhLygsh",
    );
    toast.promise(promise, {
      loading: "Sending...",
      success: <b>Message sent!</b>,
      error: <b>Failed to send.</b>,
    });
  };
  return (
    <section
      id="contact"
      className="lg:px-30 md:px-20 px-6 mt-20 mb-12 text-white"
    >
      <h2 className="text-5xl mb-3 text-white">Contact</h2>
      <div>
        <Toaster />
      </div>
      <div className="flex md:flex-row flex-col gap-10">
        <div className="bg-[#0f141a] rounded-lg text-white rounde-md md:p-10 p-3 py-5 lg:w-1/2 w-full border-2 border-transparent hover:border-2 hover:border-amber-200 duration-300">
          <p className="text-2xl mb-10 font-bold">Establish Connection</p>
          <ul className="space-y-4">
            <li className="flex flex-col">
              <span className="text-gray-400">My email :</span>
              yousefdeved@gmail.com
            </li>
            <li className="flex flex-col">
              <span className="text-gray-400">My phone :</span>0101 3555 036
            </li>
            <li className="flex flex-col">
              <span className="text-gray-400">My Social :</span>
              <ul className="flex space-x-2 mt-2">
                <li className="bg-black p-2 rounded-md border border-transparent hover:border-amber-50 duration-300">
                  <a target="_blank" href="https://github.com/Y0USEFsobhy">
                    <FaGithub className="w-7 h-7" />
                  </a>
                </li>
                <li className="bg-black p-2 rounded-md border border-transparent hover:border-amber-50 duration-300">
                    <a target="_blank" href="https://www.linkedin.com/in/yousef-sobhy-3978a2262/">
                  <FaLinkedin className="w-7 h-7" />
                    </a>
                </li>
                <li className="bg-black p-2 rounded-md border border-transparent hover:border-amber-50 duration-300">
                    <a target="_blank" href="https://wa.me/201013555036">
                  <FaWhatsapp className="w-7 h-7" />
                    </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f141a] border border-amber-50 rounded-lg md:p-10 p-3 py-6 md:py-0 flex flex-col lg:w-1/2 w-full space-y-4 justify-center"
        >
          <label className="mb-1" htmlFor="name">
            Your Name
          </label>
          <input
            className="border border-[#00bcd4] p-2 rounded-md"
            type="text"
            name="name"
            placeholder="Enter your name.."
            onChange={handleChange}
            required
          />
          <label className="mb-1" htmlFor="name">
            your Email
          </label>
          <input
            className="border border-[#00bcd4] p-2 rounded-md"
            name="email"
            type="email"
            placeholder="Enter your Email.."
            onChange={handleChange}
            required
          />
          <label className="mb-1" htmlFor="name">
            Message Payload
          </label>
          <input
            className="border border-[#00bcd4] p-2 rounded-md"
            name="message"
            type="text"
            placeholder="Enter your Message..."
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="hover:bg-amber-50 bg-white duration-200 cursor-pointer p-2 w-full text-black rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
