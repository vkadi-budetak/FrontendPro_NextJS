export default function Me() {
  return (
    <div className="max-w-xs mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg border border-gray-100 font-sans">
      <h1 className="text-2xl font-bold text-gray-800">Vladyslav</h1>

      <p className="text-sm text-blue-600 font-medium mb-4">
        Junior Frontend Developer
      </p>

      <hr className="border-gray-200 my-4"></hr>

      <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
        <li>JavaScript & React</li>
        <li>HTML5 & Tailwind CSS</li>
        <li>Git & Webpack</li>
      </ul>

      <a
        href="mailto:vlad@example.com"
        className="block w-full text-center bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition"
      >
        Contact Me
      </a>
    </div>
  );
}
