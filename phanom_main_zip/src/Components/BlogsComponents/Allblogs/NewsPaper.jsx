import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Images from "../../../assets/Images";
const API_BASE = "https://admin.phanomprofessionals.com";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      setBusy(true);
      const res = await fetch(`${API_BASE}/api/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ email }),
      });
      const j = await res.json();
      if (res.ok && j.ok) {
        toast.success("Subscribed! Check your inbox soon.");
        setEmail("");
      } else {
        toast.error(j.message || "Failed to subscribe");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-2xl p-8 text-white flex justify-center my-10 py-10"
         style={{ backgroundImage:"url(/placeholder.svg?height=400&width=800)", backgroundSize:'cover' }}>
      <Toaster position="top-right" />
      <div className="absolute inset-0 bg-[#6C5FD4]" />
      <div className="relative flex justify-center items-center gap-8 z-10">
        <div><img src={Images.NewsLetterLeftPic} alt="" className="hidden sm:block" /></div>
        <div className="flex justify-center flex-col">
          <div className="mb-2 text-lg sm:text-xl font-medium uppercase tracking-wider opacity-90">
            SUBSCRIBE OUR NEWSLETTER
          </div>
          <h2 className="mb-6 text-lf sm:text-3xl font-bold leading-tight">
            Stay updated with our bi-monthly stories.
          </h2>
          <form onSubmit={handleSubmit} className="flex items-center gap-0 bg-white rounded-xl overflow-hidden w-full shadow p-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="flex-1 sm:px-4 py-1 text-gray-700 placeholder-gray-400 focus:outline-none"
              required
            />
            <button disabled={busy} type="submit"
              className="bg-[#AB0D0D] hover:bg-red-700 text-sm text-white px-6 py-2 font-medium rounded-xl disabled:opacity-60">
              {busy? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <img src={Images.NewsLetterRightPic} alt="" />
      </div>
    </div>
  );
}
