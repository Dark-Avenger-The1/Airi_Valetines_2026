import { choice } from "./storedChoice.js";
// 1. Configuration: Match the index of your array to the entry ID
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScIk58mV4BWvqnC1jGoWpqnxqkBpX2RnxJZt8M-dQTVcKmy-w/formResponse";

// We use an array here so the order matches your stored answers
const entryIDs = [
    "entry.2064523558", // Maps to answerArray[0]
    "entry.2082307258", // Maps to answerArray[1]
    "entry.1372808003"  // Maps to answerArray[2]
];

// 2. Your stored answers from your module

async function sendArrayToGoogleForm(answerArray) {
    const formData = new FormData();
    
    // Loop through the array and attach to the corresponding Entry ID
    answerArray.forEach((answer, index) => {
        if (entryIDs[index]) {
            formData.append(entryIDs[index], answer);
        }
    });

    try {
        await fetch(FORM_URL, {
            method: "POST",
            mode: "no-cors",
            body: formData
        });
        alert("Submission Complete!");
    } catch (error) {
        console.error("Submission failed:", error);
    }
}

// 3. Trigger this whenever you are ready to send
// sendArrayToGoogleForm(myStoredAnswers);
sendArrayToGoogleForm(choice);