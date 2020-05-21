import React from "react";

const Header = () => {
  const [isDark, setIsDark] = React.useState(false);

  function toggleDarkMode() {
    setIsDark(!isDark);
  }

  React.useEffect(() => {
    document.body.className = isDark ? "dark" : "light"
  }, [isDark]);

  return (
    <header className="header">
      <div>
        <h1 className="header__title">Social Media Dashboard </h1>
        <h2 className="header__subtitle">Total Followers: 23,004</h2>
      </div>
      <div className="header__theme-switcher">
        <span className="header__theme-switcher__label">Dark Mode</span>
        <div className="toggle" role="button" onClick={toggleDarkMode}>
          <div
            className={`toggle__switch  ${
              isDark ? "toggle__switch-on" : "toggle__switch-off"
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
