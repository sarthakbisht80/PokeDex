<h1 align="center">🐱 Pokémon Selector App</h1>

<p align="center">
A simple interactive frontend application that allows users to browse Pokémon using a dropdown and navigation controls.
Built using React with a focus on custom hooks and clean state management.
</p>


---

## 📌 Project Overview

---

The Pokémon Selector App is a frontend-focused project designed to demonstrate **state management using custom hooks**, UI synchronization, and component-based architecture.

The application allows users to:

* Select Pokémon from a dropdown list
* Navigate through Pokémon using Next/Previous buttons
* View Pokémon details (image, name, description)
* Experience seamless synchronization between dropdown and navigation controls

---

## 🚀 Key Features

* 📌 Dropdown selection for Pokémon
* ⏭️ Next button for forward navigation
* ⏮️ Previous button for backward navigation
* 🔄 Dropdown automatically updates on navigation
* 🚫 Previous button disabled on first Pokémon
* 🚫 Next button disabled on last Pokémon
* 🔁 Maintains correct sequence after manual selection
* 🧠 Custom Hook used for centralized state management
* 📦 Static dataset (no API calls)

---

<h1 align="center">🧩 UI Preview</h1>

<p align="center">
<img src="./public/page.png" alt="Pokemon Card" height="350" width="250"/>
</p>

---

## 🧠 Core Logic

The entire application is driven by a single state:

```js
index → tracks current Pokémon position in array
```

### Custom Hook: `usePokemon`

Handles:

* Current index state
* Next / Previous navigation
* Dropdown selection handling
* Boundary conditions (first & last element)

Returns:

```js
current, next, prev, change, isFirst, isLast
```

---

## ⚙️ How It Works

1. Application loads with first Pokémon
2. User interactions:

   * Dropdown → updates index
   * Next → moves forward
   * Previous → moves backward
3. UI updates dynamically:

   * Image
   * Name
   * Description
   * Dropdown value
4. Buttons enable/disable automatically based on position

---

## 📁 Folder Structure

```bash
src/
  components/
    PokemonCard.jsx
    Dropdown.jsx
    Controls.jsx
  hooks/
    usePokemon.js
  data/
    data.js
  App.jsx
  index.js
```

---

## ⚒️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* Custom Hooks
* Basic CSS / Inline Styling

---

## 🎯 Purpose

This project demonstrates:

* Custom hook implementation
* Separation of logic and UI
* Controlled components (dropdown)
* State synchronization across multiple UI elements
* Handling edge cases in navigation

---

## ▶️ Run the Project

```bash
npm install
npm run dev

```

---

## 📎 Notes

* No external API used
* Fully logic-driven implementation
* Designed based on assignment constraints
* Focused more on functionality than styling

---

