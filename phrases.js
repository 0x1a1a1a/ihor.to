const myList = [
    "I am a designer who thinks",
    "I am a software product designer",
    "I am a digital product designer",
    "I focused on problem investigation, user experience improvement, user flows and documentation",
    "I help digital products to meet business goals and user needs simultaneously",
    "I make everything handy",
    "I am a proud Ukrainian 🇺🇦",
    "I am about consistency, iterations and love to details",
    "A designer who has all layers named",
    "Me = 🕵️‍♂️+👨‍🔬+👨‍💻"];

function randomizeFunction() {
    document.getElementById("randomPhrase").innerHTML = myList[Math.floor(Math.random() * myList.length)]
}