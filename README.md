# Wordle Solver

🎯 **Helping you solve the famous Wordle game.**

A web-based application that assists players in solving Wordle puzzles by suggesting optimal word choices based on the game's constraints and feedback patterns.

## 🌟 Features

- **Smart Word Suggestions**: Algorithm-driven recommendations for optimal word choices
- **Interactive Interface**: User-friendly web interface for inputting clues and receiving suggestions
- **Real-time Analysis**: Instant feedback and word filtering based on Wordle constraints
- **Comprehensive Dictionary**: Extensive word database for accurate suggestions
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## 🚀 Live Demo

Currently offline

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML, CSS, JavaScript, EJS templating
- **Deployment**: Heroku
- **Data**: JSON-based word dictionary

## 📁 Project Structure

```
WordleSolver/
├── node_modules/           # Dependencies (ignored in git)
├── views/                  # EJS templates and frontend views
├── .gitignore             # Git ignore rules
├── package.json           # Node.js dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── server.js              # Main Express server
├── styles.css             # Main stylesheet
├── resultStyles.css       # Styling for results page
├── words_dictionary.json  # Word database
└── README.md              # Project documentation
```

## 🎮 How It Works

1. **Input Current State**: Enter the letters you've guessed and their feedback (green, yellow, gray)
2. **Constraint Processing**: The algorithm processes Wordle's constraints:
   - **Green letters**: Correct letters in correct positions
   - **Yellow letters**: Correct letters in wrong positions  
   - **Gray letters**: Letters not in the word
3. **Word Filtering**: Filters the dictionary based on your constraints
4. **Smart Suggestions**: Recommends words that maximize information gain
5. **Iterative Process**: Repeat until you solve the puzzle!


## 📦 Dependencies

Key dependencies include:
- **Express.js**: Web framework for Node.js
- **EJS**: Templating engine for dynamic HTML
- Additional packages as specified in `package.json`

## 🎯 Usage Example

1. Start with a good opening word (like "SLATE" or "ADIEU")
2. Input the feedback from Wordle:
   - Mark green letters (correct position)
   - Mark yellow letters (wrong position)
   - Mark gray letters (not in word)
3. Get suggestions for your next guess
4. Repeat until solved!

## 🧠 Algorithm Strategy

The solver uses intelligent strategies including:
- **Frequency Analysis**: Prioritizes common letters and letter combinations
- **Position Optimization**: Considers letter frequency by position
- **Information Theory**: Maximizes information gain with each guess
- **Constraint Satisfaction**: Efficiently filters words based on feedback



## 📈 Project History

- **3 years ago**: Initial development and core functionality
- **Multiple branches**: Feature development including `alternateDesign`
- **19 commits**: Iterative improvements and refinements
- **Heroku integration**: Production deployment setup



## 🔧 Development

### File Structure Details
- **server.js**: Main application logic and routing
- **views/**: EJS templates for rendering pages
- **styles.css & resultStyles.css**: Styling for different pages
- **words_dictionary.json**: Comprehensive word database
- **.gitignore**: Excludes node_modules and other unnecessary files


## 📄 License

This project is open source. Please check the repository for specific license details.


---

*Happy Wordling! May your guesses be ever in your favor.* 🎯
