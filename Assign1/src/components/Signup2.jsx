import { useState, useEffect } from 'react';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.includes('@') || !form.email.includes('.'))
      newErrors.email = 'Email is not valid';
    if (form.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  };

  useEffect(() => {
    const validationErrors = validate();
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsTouched({ ...isTouched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md animate-fade-in space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Signup to Course</h2>

        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {isTouched.name && errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {isTouched.email && errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {isTouched.password && errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2 rounded-md text-white font-semibold transition-transform duration-300 ${
            isValid
              ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Signup
        </button>
      </form>
    </div>
  );
}
