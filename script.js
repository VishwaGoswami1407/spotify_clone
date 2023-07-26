console.log("Welcome to Spotify");

//initialize the variable
let songIndex = '0';
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "let me love you", filepath:"Let Me Love You(PagalWorld.com.se).mp3", coverPath: "cover_1.jpg"},
    {songName: "Bhula Diya", filepath:"Bhula_Diya.mp3", coverPath: "music.jpg"},
    {songName: "Bhula Diya", filepath:"Bhula_Diya.mp3", coverPath: "music.jpg"},
    {songName: "Bhula Diya", filepath:"Bhula_Diya.mp3", coverPath: "music.jpg"},
    {songName: "Bhula Diya", filepath:"Bhula_Diya.mp3", coverPath: "music.jpg"} ,
    {songName: "Bhula Diya", filepath:"Bhula_Diya.mp3", coverPath: "music.jpg"} ,

]

//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
    }
})
//list to events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seekbar
})