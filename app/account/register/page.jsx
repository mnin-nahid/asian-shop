export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-md shadow">
        <h1 className="text-xl font-semibold mb-6">Register Account</h1>

        <form className="space-y-5">
          {/* Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">
              E-Mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="E-Mail"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Telephone */}
          <div>
            <label className="text-sm font-medium">
              Telephone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Telephone"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded font-medium hover:bg-indigo-700 transition"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-500">
            Already have an account?
          </span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Login text */}
        <p className="text-sm text-gray-700">
          If you already have an account with us, please login at the{" "}
          <a href="/account/login" className="text-red-500 hover:underline">
            login page
          </a>
          .
        </p>
      </div>
    </div>
  );
}