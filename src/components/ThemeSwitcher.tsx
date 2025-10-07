"use client"; // ini untuk komponen client side

import {useEffect, useState} from "react";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark-mode") {
      setDark(true);
      document.body.classList.add("dark-mode");
    }
  }, []); // [] tanda bahwa useEffect ini hanya dijalanlan sekali saat komponen di render

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "");
    }
  });

  return (
    <div>
      <button
        id="theme-switcher"
        className="theme-switcher"
        onClick={() => setDark(!dark)}
      >
        <span className="icon">🌓</span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
