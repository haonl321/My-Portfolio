// pages/Contact.jsx
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gt7u3vh",         // service ID của bạn
        "template_28aoqqw",        // template ID
        form.current,
        "k9YIu1YGRyzik5YDn"        // public key
      )
      .then(
        (result) => {
          alert("Gửi thành công!");
        },
        (error) => {
          alert("Lỗi gửi! " + error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* Form */}
      <section className="px-6 py-16 max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-500">Liên hệ với tôi</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            name="name"
            placeholder="Họ tên"
            required
            className="w-full p-3 rounded bg-[#1e293b] border border-gray-600 text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded bg-[#1e293b] border border-gray-600 text-white"
          />
          <textarea
            name="message"
            placeholder="Tin nhắn"
            required
            className="w-full p-3 h-32 rounded bg-[#1e293b] border border-gray-600 text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
          >
            Gửi
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
