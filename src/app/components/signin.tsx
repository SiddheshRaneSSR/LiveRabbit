import { Buttoncomponent } from './button';
export function Signincomponent(){

   


    return <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
      <form className="mt-4 space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="••••••••"
          />
        </div>

        <Buttoncomponent />
        
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <a href="/signup" className="text-indigo-600 hover:underline">
          Sign up
        </a>
      </p>
      <p className="mt-2 text-sm text-center text-gray-600">
        <a href="/forgot-password" className="text-indigo-600 hover:underline">
          Forgot your password?
        </a>
      </p>
    </div>
  </div>
}