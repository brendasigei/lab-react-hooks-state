function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="mb-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      {/* Button text shows the mode you would switch to */}
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;