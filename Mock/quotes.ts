export interface Quote {
    text: string;
    author: string;
    context: string;
  }
  
  export const philosophyQuotes: Quote[] = [
    // ==========================================
    // PROGRAMMERS, ENGINEERS & ARCHITECTS (25 Quotes)
    // ==========================================
    { text: "Simplicity is the ultimate sophistication.", author: "Edsger W. Dijkstra", context: "Systems Architect" },
    { text: "The competent programmer is fully aware of the strictly limited size of his own skull.", author: "Alan Turing", context: "Computing Pioneer" },
    { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan", context: "Unix Co-Creator" },
    { text: "Clean code always looks like it was written by someone who cares.", author: "Michael Feathers", context: "Legacy Systems Expert" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds", context: "Linux Founder" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson", context: "MIT Computer Scientist" },
    { text: "The most disastrous thing that you can do to a program is to add pieces to it without an overall plan.", author: "Niklaus Wirth", context: "Pascal Creator" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson", context: "Design Patterns Author" },
    { text: "The secret to building large apps is never to build large apps. Break them into small, predictable pieces.", author: "Justin Meyer", context: "Software Engineer" },
    { text: "Fix the cause, not the symptom.", author: "Steve Maguire", context: "Software Systems Pioneer" },
    { text: "Deleted code is the cleanest code, and the most secure.", author: "Jeff Sickel", context: "Systems Engineer" },
    { text: "First, do it. Then, do it right. Then, do it fast.", author: "Kent Beck", context: "Agile Pioneer" },
    { text: "Optimization is the art of avoiding work that doesn't need to be done.", author: "Martin Fowler", context: "Refactoring Authority" },
    { text: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies.", author: "Tony Hoare", context: "ALGOL Designer" },
    { text: "Software structure should mimic the structure of the problem it is trying to solve.", author: "David Parnas", context: "Modular Design Pioneer" },
    { text: "The best error message is the one that never shows up because the system prevented the failure.", author: "Robert C. Martin", context: "Clean Code Author" },
    { text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard", context: "DevOps Engineer" },
    { text: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.", author: "Linus Torvalds", context: "Linux Founder" },
    { text: "If you cannot grok the overall state loop in one breath, your abstraction layers are broken.", author: "John Carmack", context: "3D Engine Architect" },
    { text: "Complexity creates hidden corners where bugs hide. Clear layouts expose them.", author: "Dave Thomas", context: "Pragmatic Programmer Author" },
    { text: "A user interface is like a joke. If you have to explain it, it's not that good.", author: "Martin LeBlanc", context: "UI/UX Pioneer" },
    { text: "Systems scale gracefully only when the cost of adding a feature remains constant over time.", author: "Grady Booch", context: "UML Co-Creator" },
    { text: "Code is generated far more quickly when the developer understands the problem completely before writing a line.", author: "Niklaus Wirth", context: "Pascal Creator" },
    { text: "Every dependency is an unwritten contract that you are responsible for maintaining.", author: "Arlo Belshee", context: "Agile Engineer" },
    { text: "Do not write code to handle hypothetical futures. Build for the explicit requirements of today.", author: "Sandi Metz", context: "OOP Architect" },
  
    // ==========================================
    // PHILOSOPHERS, SCHOLARS & POLYMATHS (25 Quotes)
    // ==========================================
    { text: "Nature does nothing uselessly. Every single block must serve a core systemic purpose.", author: "Aristotle", context: "Classical Philosopher" },
    { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant", context: "Historian & Scholar" },
    { text: "Order and simplification are the first steps toward the mastery of any subject.", author: "Thomas Mann", context: "Philosophical Thinker" },
    { text: "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.", author: "Isaac Newton", context: "Mathematician & Physicist" },
    { text: "He who overcomes his design limitations faces no structural breakdown.", author: "Nasir al-Din al-Tusi", context: "Polymath & Astronomer" },
    { text: "The greatest wisdom is to realize that the framework must adapt to the truth, not the reverse.", author: "Al-Farabi", context: "Philosopher & Logician" },
    { text: "Divide each difficulty into as many parts as is feasible and necessary to resolve it.", author: "René Descartes", context: "Philosopher & Mathematician" },
    { text: "Nature is pleased with simplicity. And nature is no dummy.", author: "Isaac Newton", context: "Mathematician & Physicist" },
    { text: "The line between beautiful architecture and absolute chaos is drawn by discipline.", author: "Pythagoras", context: "Classical Mathematician" },
    { text: "To make things complicated is commonplace; to make things simple, strikingly simple, that's creativity.", author: "Charles Mingus", context: "Structural Thinker" },
    { text: "He who knows how to break down a colossal mountain into individual stones can rebuild the world.", author: "Nizami Ganjavi", context: "Poet & Philosopher" },
    { text: "Knowledge is true wealth, but its execution requires a stable, well-ordered foundation.", author: "Bahmaniyar", context: "Peripatetic Philosopher" },
    { text: "It is not that we have a short time to live, but that we waste a lot of it by building what is unneeded.", author: "Seneca", context: "Stoic Philosopher" },
    { text: "Time corrects all structural flaws, but at the cost of those who ignored them.", author: "Ibn Sina (Avicenna)", context: "Polymath & Scholar" },
    { text: "A vessel is useful because of its empty space. Design for what is unwritten as much as what is written.", author: "Lao Tzu", context: "Taoist Philosopher" },
    { text: "The desire to over-complicate simple truths stems from an inability to manage minor details.", author: "Immanuel Kant", context: "Enlightenment Philosopher" },
    { text: "Small variations in foundational initial logic cause massive anomalies down the pipeline.", author: "Henri Poincaré", context: "Chaos Theory Mathematician" },
    { text: "Nothing is more dangerous than an absolute idea when it is configured incorrectly from the start.", author: "Émile Chartier", context: "Philosophical Essayist" },
    { text: "He who works with untested assumptions builds a structure over a chasm.", author: "Imadaddin Nasimi", context: "Mystic Poet & Thinker" },
    { text: "Patient measurement and structural testing reveal errors that swift assumptions blind us to.", author: "Abū Rayḥān al-Bīrūnī", context: "Polymath & Physicist" },
    { text: "An elegant solution does not feel forced; it fits so natively that it feels as if it has always existed.", author: "Baruch Spinoza", context: "Rationalist Philosopher" },
    { text: "He who seeks to understand the whole must first master the intricate properties of the component pieces.", author: "Gottfried Wilhelm Leibniz", context: "Mathematician & Logician" },
    { text: "The architect's greatest triumph is omitting the non-essential without weakening the core frame.", author: "Marcus Vitruvius", context: "Roman Architectural Master" },
    { text: "True clarity means eliminating noise so that the signal can communicate with absolute authority.", author: "Arthur Schopenhauer", context: "Philosophical Theorist" },
    { text: "He who builds a firm path step by step travels faster than he who leaps across unfinished paths.", author: "Mirza Fatali Akhundov", context: "Enlightenment Scholar" }
  ];