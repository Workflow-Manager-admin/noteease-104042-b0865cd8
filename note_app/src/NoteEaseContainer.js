import React, { useState, useEffect } from "react";
import "./NoteEaseContainer.css";

// PUBLIC_INTERFACE
function NoteEaseContainer({ onAddNote }) {
  /**
   * The main container for NoteEase with glassy effect, theme support,
   * and a floating action button for "Add new note".
   */
  // For demonstration, just a hero container for now.
  const [theme, setTheme] = useState("dark");

  // Toggle between light and dark themes when user presses T
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "t") {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    // Set CSS variable on root for theme support
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }
  }, [theme]);

  return (
    <div className={`noteease-glass-container ${theme}-theme`}>
      <header className="noteease-header">
        <h1 className="noteease-title">NoteEase</h1>
        <p className="noteease-subtitle">
          Your simple, beautiful, and organized personal notes app
        </p>
      </header>
      <div className="noteease-content">
        {/* Placeholder for notes list / main content */}
        <div className="noteease-placeholder">
          No notes yet. Click the button below to add your first note!
        </div>
      </div>
      <button
        className="noteease-fab"
        aria-label="Add new note"
        onClick={onAddNote}
        tabIndex={0}
        type="button"
      >
        <span aria-hidden="true">+</span>
      </button>
      <div className="noteease-theme-toggle-helper">
        Press <kbd>T</kbd> to toggle {theme === "dark" ? "Light" : "Dark"} Mode
      </div>
    </div>
  );
}

export default NoteEaseContainer;
