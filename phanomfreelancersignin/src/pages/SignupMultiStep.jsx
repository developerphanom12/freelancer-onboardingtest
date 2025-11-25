import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://127.0.0.1:8000";

const UploadField = ({ id, label, accept, helper, onFile, fileName }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm mb-1">
      {label} <span className="text-red-500">*</span>
    </label>
    <div className="relative w-full sm:w-3/4">
      <input
        id={id}
        type="file"
        accept={accept}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f && onFile) onFile(f, id);
        }}
      />
      <div className="w-full border border-gray-300 rounded-lg p-3 flex items-center justify-between text-sm text-gray-400 bg-white">
        <span>{fileName || "Upload file"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </div>
    </div>
    <p className="text-xs text-gray-400 mt-1">{helper}</p>
  </div>
);

const SignUpMultiStep = () => {
  const navigate = useNavigate();
  const totalSteps = 4;

  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [alreadyExistsPopup, setAlreadyExistsPopup] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    // phone kept in UI for future profile use, but NOT used by backend table:
    phone: "",
    dob: "",
    gender: "",
    location: "",
    category: "",
    subcategory: "",
    experience: "",
    notableProjects: "",
    uploads: {},
  });

  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [activeSuggestionField, setActiveSuggestionField] = useState(null);
  const [errors, setErrors] = useState({});

  // Debounced suggestions (if you have this API)
  const fetchSuggestions = useCallback(
    debounce(async (q) => {
      if (!q?.trim()) return setSuggestions([]);
      setLoadingSuggestions(true);
      try {
        const res = await fetch(`${API_BASE}/api/suggestions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q }),
        });
        const json = await res.json();
        if (json.ok && Array.isArray(json.suggestions)) setSuggestions(json.suggestions);
        else setSuggestions([]);
      } catch (err) {
        setSuggestions([]);
      } finally {
        setLoadingSuggestions(false);
      }
    }, 350),
    []
  );

  useEffect(() => {
    return () => fetchSuggestions.cancel?.();
  }, [fetchSuggestions]);

  const completionRate = Math.round((step / totalSteps) * 100);

  const update = (k, v) => {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const nextStep = () => {
    const { valid, fieldErrors } = validateStep(step);
    if (!valid) {
      setErrors(fieldErrors);
      toast.error("Please fix errors before continuing");
      return;
    }
    if (step === totalSteps) setShowPopup(true);
    else setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const onCategoryChange = (v) => {
    update("category", v);
    setActiveSuggestionField("category");
    fetchSuggestions(v);
  };

  const onSubcategoryChange = (v) => {
    update("subcategory", v);
    setActiveSuggestionField("subcategory");
    fetchSuggestions(v);
  };

  const onPickSuggestion = (s) => {
    if (activeSuggestionField === "category") update("category", s);
    else if (activeSuggestionField === "subcategory") update("subcategory", s);
    setSuggestions([]);
    setActiveSuggestionField(null);
  };

  const handleFile = (file, id) => {
    update("uploads", { ...form.uploads, [id]: file.name });
    toast.success(`${file.name} selected`);
  };

  // Validation
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
  const validateStep = (s) => {
    const fieldErrors = {};
    if (s === 1) {
      if (!form.name?.trim()) fieldErrors.name = "Full name is required";
      if (!form.email?.trim() || !validateEmail(form.email)) fieldErrors.email = "Valid email is required";
      if (!form.password || form.password.length < 6) fieldErrors.password = "Password (min 6 chars) is required";
      // phone not required by users table; keep optional
    } else if (s === 2) {
      if (!form.dob) fieldErrors.dob = "Date of birth is required";
      if (!form.gender) fieldErrors.gender = "Gender is required";
      if (!form.location?.trim()) fieldErrors.location = "Location is required";
    } else if (s === 3) {
      if (!form.category?.trim()) fieldErrors.category = "Category is required";
      if (!form.subcategory?.trim()) fieldErrors.subcategory = "Subcategory is required";
    } else if (s === 4) {
      if (!form.experience) fieldErrors.experience = "Select experience";
    }
    return { valid: Object.keys(fieldErrors).length === 0, fieldErrors };
  };

  // Submit: verify (email) -> payment -> register (name, email, password)
  const submitSignup = async () => {
  setShowPopup(false);
  toast.loading("Checking user by email...");

  try {
    // Step 1: verify if email already exists
    const verifyRes = await fetch(`${API_BASE}/api/verifyUserIfAlreadyExist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email }),
    });
    const verifyJson = await verifyRes.json();
    toast.dismiss();

    if (verifyJson.ok && verifyJson.exists) {
      setAlreadyExistsPopup({
        name: verifyJson.user?.name || "User",
        email: verifyJson.user?.email,
        message: verifyJson.message || "User already exists with this email.",
      });
      return;
    }

    // Step 2: Open Razorpay for payment
    toast.loading("Opening payment...");
    const options = {
      key: "rzp_live_RVIcNUS9XS7Mrc", // replace with your Razorpay key
      amount: 1 * 100, // ₹499 in paise
      currency: "INR",
      name: "Phanom Professionals",
      description: "Enrollment Fee",
      image: "https://yourlogo.url/logo.png",
      handler: async function (response) {
        toast.loading("Completing signup...");
        try {
          // ✅ Step 3: Send all form data to Laravel (User + FreelancerProfile)
          const res = await fetch(`${API_BASE}/api/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...form,
              razorpay_payment_id: response.razorpay_payment_id,
            }),
          });

          const json = await res.json();
          toast.dismiss();

          if (!json.ok) {
            toast.error(json.message || "Signup failed after payment");
            return;
          }

          sessionStorage.setItem("userName", json.user?.name || form.name);
sessionStorage.setItem("userId", json.user?.id);
sessionStorage.setItem("userEmail", json.user?.email);
sessionStorage.setItem("userToken", json.token);
// ✅ You can now use this anywhere
toast.success(`Welcome ${json.user?.name || form.name}! 🎉`);
navigate("/welcome");

        } catch (err) {
          toast.dismiss();
          toast.error("Signup failed after payment");
        }
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      theme: { color: "#5A32EA" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    toast.dismiss();
  } catch (err) {
    toast.dismiss();
    toast.error("Something went wrong while verifying or initializing payment");
  }
};


  const Err = ({ field }) => (errors[field] ? <div className="text-red-500 text-xs mt-1">{errors[field]}</div> : null);

  return (
    <div className="flex items-center justify-center p-4">
      <Toaster position="top-right" />
      <div className="w-full max-w-[1500px] rounded-2xl p-6">
        {/* Progress Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div className="flex flex-wrap gap-4 mb-4 sm:mb-0">
            {["Signup", "Description", "Upload Category", "Experience"].map((label, i) => (
              <div
                key={i}
                className={`flex items-center text-xs space-x-2 ${step >= i + 1 ? "text-green-600 font-medium" : "text-gray-400"}`}
              >
                <div
                  className={`w-5 h-5 flex items-center justify-center rounded-full border-2 text-xs ${
                    step >= i + 1 ? "bg-green-600 text-white border-green-600" : "border-gray-300 text-gray-400"
                  }`}
                >
                  {i + 1}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start sm:items-end w-full sm:w-auto">
            <span className="text-gray-400 text-xs mb-2">Completion Rate: {completionRate}%</span>
            <div className="w-32 bg-gray-200 rounded-full h-1.5">
              <div className="bg-purple-600 h-1.5 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${completionRate}%` }} />
            </div>
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-medium mb-3">Why Signup?</h2>
            <p className="text-gray-500 mb-5">We use your details to verify your profile and connect you with clients.</p>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full sm:w-3/4 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              />
              <Err field="name" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Phone Number (optional)</label>
              <input
                type="text"
                placeholder="Enter your mobile number"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full sm:w-3/4 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm mb-1">Email ID *</label>
              <input
                type="email"
                placeholder="Enter your email ID"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full sm:w-3/4 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              />
              <Err field="email" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Password *</label>
              <input
                type="password"
                placeholder="Choose a password"
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                className="w-full sm:w-3/4 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              />
              <Err field="password" />
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">Personalized Dashboard</h2>
            <p className="text-gray-500 mb-5">Tell us more about yourself to personalize your experience.</p>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Date of Birth *</label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => update("dob", e.target.value)}
                className="w-full sm:w-3/4 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              />
              <Err field="dob" />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Gender *</label>
              <select
                value={form.gender}
                onChange={(e) => update("gender", e.target.value)}
                className="w-full sm:w-3/4 border bg-white border-gray-300 text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <Err field="gender" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm mb-1">Location *</label>
              <input
                type="text"
                placeholder="Enter your location"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                className="w-full sm:w-3/4 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              />
              <Err field="location" />
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">Select Your Expertise</h2>
            <p className="text-gray-500 mb-5">Choose Your Main Skill And Specialty.</p>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full sm:w-3/4 bg-white border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                placeholder="Type category (suggestions will appear)"
                value={form.category}
                onChange={(e) => onCategoryChange(e.target.value)}
              />
              <Err field="category" />
              {activeSuggestionField === "category" &&
                (loadingSuggestions ? (
                  <div className="text-xs text-gray-500 mt-2">Loading suggestions…</div>
                ) : suggestions.length > 0 ? (
                  <div className="flex gap-2 flex-wrap my-2">
                    {suggestions.map((s, i) => (
                      <button key={i} onClick={() => onPickSuggestion(s)} className="px-2 py-1 border rounded text-sm">
                        {s}
                      </button>
                    ))}
                  </div>
                ) : null)}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">
                Subcategory <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full sm:w-3/4 bg-white border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                placeholder="Type subcategory (suggestions will appear)"
                value={form.subcategory}
                onChange={(e) => onSubcategoryChange(e.target.value)}
              />
              <Err field="subcategory" />
              {activeSuggestionField === "subcategory" &&
                (loadingSuggestions ? (
                  <div className="text-xs text-gray-500 mt-2">Loading suggestions…</div>
                ) : suggestions.length > 0 ? (
                  <div className="flex gap-2 flex-wrap my-2">
                    {suggestions.map((s, i) => (
                      <button key={i} onClick={() => onPickSuggestion(s)} className="px-2 py-1 border rounded text-sm">
                        {s}
                      </button>
                    ))}
                  </div>
                ) : null)}
            </div>

            <UploadField id="portfolioUpload" label="Upload Portfolio" accept=".pdf,.doc,.docx" helper="Upload PDF or DOC only" onFile={handleFile} fileName={form.uploads?.portfolioUpload} />
            <UploadField id="aadharUpload" label="Upload Aadhar Card" accept=".pdf" helper="Upload PDF only" onFile={handleFile} fileName={form.uploads?.aadharUpload} />
            <UploadField id="panUpload" label="Upload Pan Card" accept=".pdf" helper="Upload PDF only" onFile={handleFile} fileName={form.uploads?.panUpload} />
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">Add Experience</h2>
            <p className="text-gray-500 mb-5">Share your professional experience and notable projects.</p>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Years of Experience *</label>
              <select
                value={form.experience}
                onChange={(e) => update("experience", e.target.value)}
                className="w-full sm:w-3/4 bg-white text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              >
                <option value="">Select Years</option>
                <option>0-1 Year</option>
                <option>2-5 Years</option>
                <option>6-10 Years</option>
                <option>10+ Years</option>
              </select>
              <Err field="experience" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm mb-1">Notable Projects (Optional)</label>
              <textarea
                placeholder="Describe your most impactful projects or achievements."
                value={form.notableProjects}
                onChange={(e) => update("notableProjects", e.target.value)}
                className="w-full sm:w-3/4 border text-sm border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                rows={4}
              />
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-4 mt-4">
          {step > 1 && <button onClick={prevStep} className="px-4 py-2 border rounded">Back</button>}
          {step < totalSteps && <button onClick={nextStep} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Next</button>}
          {step === totalSteps && <button onClick={() => setShowPopup(true)} className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Proceed to Enrollment</button>}
        </div>
      </div>

      {/* Payment Modal */}
      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-[600px] w-full sm:w-3/4 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-black-800 mb-3">Secure Your Spot for <br />Just ₹499!</h2>
            <p className="text-gray-900 mb-5 text-sm">One-time registration fee ensures only serious professionals join our elite network.</p>
            <p className="text-gray-900 mb-5 text-sm">After payment, you’ll unlock:</p>
            <ul className="text-left text-sm text-gray-700 mb-6 space-y-3">
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Access to first round of testing</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Technical evaluation round</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Dedicated onboarding support</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Recognized as Top 1% Indian Talent</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Work with High-Value International Clients</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Earn in Dollars, Spend in Rupees</li>
              <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Exclusive Access to Elite Talent Pool</li>
            </ul>

            <div className="flex gap-3">
              <button onClick={() => setShowPopup(false)} className="px-4 py-2 border rounded">Cancel</button>
              <button onClick={submitSignup} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg">Continue to Payment</button>
            </div>
          </div>
        </div>
      )}

      {/* Already Exists Modal (email-only) */}
      {alreadyExistsPopup && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-[500px] w-full text-center shadow-lg">
            <h2 className="text-2xl font-semibold text-red-600 mb-3">Account Already Exists</h2>
            <p className="text-gray-700 mb-2">{alreadyExistsPopup.message}</p>
            <p className="text-gray-500 text-sm mb-6">Email: {alreadyExistsPopup.email}</p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => setAlreadyExistsPopup(null)} className="px-4 py-2 border rounded text-sm">Close</button>
              <button onClick={() => navigate("/login")} className="px-4 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">Go to Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpMultiStep;
