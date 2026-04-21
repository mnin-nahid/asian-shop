export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg-white p-8 rounded-md shadow">
        <h1 className="text-xl font-semibold mb-6">Account Login</h1>

        <form className="space-y-5">
          {/* Email / Phone */}
          <div>
            <label className="text-sm font-medium">
              Phone / E-Mail
            </label>
            <input
              type="text"
              placeholder="Phone / E-Mail"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-red-500 hover:underline"
              >
                Forgotten Password?
              </a>
            </div>

            <input
              type="password"
              placeholder="Password"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded font-medium hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-sm text-gray-500">
            Don't have an account?
          </span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Create Account Button */}
        <a href="/account/register">
          <button className="w-full border border-indigo-600 text-indigo-600 py-3 rounded font-medium hover:bg-indigo-50 transition">
            Create Your Account
          </button>
        </a>
      </div>
    </div>
  );
}