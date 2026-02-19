🧠 Quiz Application (React + Vite)

🔗 Live Demo: https://quizzesapplication1.netlify.app/

-> An interactive and responsive Quiz Application built using React (Vite).
-> Users can select category and difficulty, attempt timed multiple-choice questions, and view animated results.

🚀 Features

✅ Category selection (Computer Science, General Knowledge, etc.)
✅ Difficulty levels (Easy / Medium / Hard)
✅ Questions fetched from Open Trivia DB API
✅ 60-second quiz timer
✅ Animated progress bar
✅ Correct / Wrong answer highlighting
✅ Score animation on result page
✅ Dark / Light theme toggle
✅ Fully responsive UI
✅ SPA routing fixed for Netlify deployment
✅ Production-ready deployment with GitHub + Netlify


🛠️ Tech Stack

Frontend: React (Vite)
Styling: CSS3
API: Open Trivia Database API
Deployment: Netlify
Version Control: Git & GitHub

📂 Project Structure
quiz-app
 ├── public
 │    └── _redirects
 ├── src
 │    ├── components
 │    │    ├── Setup.jsx
 │    │    ├── Quiz.jsx
 │    │    └── Result.jsx
 │    ├── App.jsx
 │    ├── main.jsx
 │    ├── App.css
 │    └── index.css
 ├── index.html
 ├── package.json
 ├── vite.config.js
 └── netlify.toml


⚙️ Installation & Setup (Run Locally)
1️⃣ Clone the repository
git clone https://github.com/yourusername/quiz-application.git

2️⃣ Navigate into project
cd quiz-app

3️⃣ Install dependencies
npm install

4️⃣ Run development server
npm run dev


Open:

http://localhost:5173/

🏗️ Production Build

To create production build:

npm run build


The output will be generated inside:

dist/




🌍 Deployment

-> This project is deployed using Netlify (GitHub integration).
-> Netlify Configuration:

Base Directory: quiz-app
Build Command: npm run build
Publish Directory: dist

SPA Routing Fix:

A _redirects file is added inside public/:
/* /index.html 200



🎯 Learning Outcomes

-> This project demonstrates:

1. React component architecture
2. State management using hooks
3. API integration with fetch
4. Conditional rendering
5. UI animations with CSS
6. Timer logic using useEffect
7. GitHub + Netlify deployment workflow
8. Debugging production build issues
9. Handling SPA routing in Netlify


🔥 Future Improvements

-> Add leaderboard with ranking system
-> Add username before starting quiz
-> Add score-based confetti animation
-> Add sound effects
-> Add difficulty-based scoring multiplier
-> Add backend for storing user scores


⭐ If You Like This Project

Give it a ⭐ on GitHub!
