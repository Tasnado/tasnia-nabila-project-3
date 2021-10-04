import happyBellsBotification from '../audio/happyBellsBotification.wav'
import messagePopAlert from '../audio/messagePopAlert.mp3'
import positiveNotification from '../audio/positiveNotification.wav'
import correctAnswerReward from '../audio/correctAnswerReward.wav';

const Music = (userText) => {
    const playSound = (url) => {
        const audio = new Audio(url);
        audio.play();
    }

    if (userText.includes("juno")) {
        playSound(happyBellsBotification);
    } else if (userText.includes("cohort 36") || userText.includes("cohort36")) {
        playSound(positiveNotification);
    } else if (userText.includes("buff skeleton") || userText.includes("buffskeleton")) {
        playSound(correctAnswerReward);
    } else {
        playSound(messagePopAlert);
    }

}

export default Music;