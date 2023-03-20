console.log("Welcome to My Spotify");
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songs =[
    {songName: "Alan_Walker_-_Faded(128k)", filePath: "songs/1.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "Aankhon_Se_Batana_Dikshant_Viral_Song_2022___Official_Audio(128k)", filePath: "songs/2.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Tu mora Nai Separi | Humane Sagar", filePath: "songs/3.mp3", coverPath: "covers/cover6.jpg"},
    {songName: "To Akhi Mo Aaina[slowed & reverb]", filePath: "songs/4.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "Falak Tu Garaj Tu Lyrical(Hindi) | KGF chapter 2", filePath: "songs/5.mp3", coverPath: "covers/cover5.jpg"},
    {songName: "Badshah-Jugnu(Offcial Audio) | Nikhita Gandhi | Akanksha Sharma", filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg"},
    {songName: "She Don't Know:Millind Gaba | Shabby | Song 2019", filePath: "songs/7.mp3", coverPath: "covers/cover7.jpg"},
    {songName: "Sia-Unstoppable(Official Video-Live from the Nostalgic for the present Tour)", filePath: "songs/8.mp3", coverPath: "covers/cover8.jpg"},
    {songName: "Reply To Apna Bana Le(Bhediya) || Lyrics- Swati Sharma", filePath: "songs/9.mp3", coverPath: "covers/cover9.jpg"},
    {songName: "Apna Bana Le-Bhediya | Varun Dhawan,Kirti Sanon| Sachin-Jigar,Arjit Singh,Amitabh Bhattacharya", filePath: "songs/10.mp3", coverPath: "covers/cover10.jpg"},
]
songItem.forEach((element ,i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//Handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    }
 else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
 }   
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{   
    //Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove(fa-play-circle);
        masterPlay.classList.add(fa-pause-circle);
    })
})
document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove(fa-play-circle);
    masterPlay.classList.add(fa-pause-circle);
})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove(fa-play-circle);
    masterPlay.classList.add(fa-pause-circle);
})