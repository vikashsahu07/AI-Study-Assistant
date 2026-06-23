function getAnswer() {
    let question = document.getElementById("question").value.trim().toLowerCase();
    let answerBox = document.getElementById("answer-box");
    let answerText = document.getElementById("answer");

    if (question === "") {
        alert("Please enter a question first!");
        return;
    }

    let answer = "";

    // Better keyword matching for keywords
    if (question.includes("ai") || question.includes("artificial intelligence")) {
        answer = "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.";
    } 
    else if (question.includes("ml") || question.includes("machine learning")) {
        answer = "Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data and improve their accuracy over time without being explicitly programmed.";
    } 
    else if (question.includes("python") || question.includes("programming")) {
        answer = "Python is a high-level, interpreted programming language known for its simplicity and readability. It is the gold standard for AI, Machine Learning, Data Science, and Web Development.";
    } 
    else {
        answer = "Thank you for your question. This prototype demonstrates how a smart study assistant handles queries. In production, this would connect to an LLM API (like Gemini) to give real-time responses.";
    }

    // Showing the answer with animation effect
    answerText.innerHTML = answer;
    answerBox.classList.remove("hidden");
}

function clearAll() {
    document.getElementById("question").value = "";
    document.getElementById("answer-box").classList.add("hidden");
    document.getElementById("answer").innerHTML = "";
}