import happyBellsBotification from '../audio/happyBellsBotification.wav'
import messagePopAlert from '../audio/messagePopAlert.mp3'
import positiveNotification from '../audio/positiveNotification.wav'
import correctAnswerReward from '../audio/correctAnswerReward.wav';
import crowdLaugh from '../audio/crowdLaugh.wav';

const Music = (userText) => {
    const playSound = (url) => {
        const audio = new Audio(url);
        audio.play();
    }

    // play different sounds based on certain user keywords
    if (userText.includes("juno")) {
        playSound(happyBellsBotification);
    } else if (userText.includes("cohort 36") || userText.includes("cohort36")) {
        playSound(positiveNotification);
    } else if (userText.includes("buff skeleton") || userText.includes("buffskeleton")) {
        playSound(correctAnswerReward);
    } else if (userText === "lol" || userText === "lmao" || userText === "rofl") {
        playSound(crowdLaugh);
    } else {
        playSound(messagePopAlert);
    }

}

export default Music;