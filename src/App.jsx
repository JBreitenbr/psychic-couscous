import './App.css'
import { useState, useEffect } from "react";
import TrackList from "./TrackList";
import Pagination from "./Pagination";
import Pagination2 from "./Pagination2";
export default function App() {
  const [tracks, setTracks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tracksPerPage,setTracksPerPage] = useState(8);
//  const [totalPageCount,setTotalPageCount]=useState(30);
  const letters="ABCDEFGHJKLMNOPQRSTUVWYZ".split("");
  const [letter,setLetter]=useState();
  const [bands,setBands]=useState([]);
  let [countDict,setCountDict]=useState({});
/*for(let i=0;i<bands.length;i++){
  countDict[bands[i]]=tracks.filter((item)=>item.artist==bands[i]).length;
}*/
  const [artist,setArtist]=useState("none");
  function handleLetter(e){
    setLetter(e.target.value);
  }
  function handleArtist(e){
    setArtist(e.target.value);
    setCurrentPage(1);
  }
  /*useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch(`https://raw.githubusercontent.com/JBreitenbr/Spotify-Data/refs/heads/main/Songs/${artist}.json`); */
  useEffect(() => {
    fetch(`https://juliascodingeckle.pythonanywhere.com/spotiAPI/${artist}/`) 
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => setTracks(data))
      .catch(error => console.error("Fetch error:", error));
  }, [artist]);
useEffect(() => {
    const fetchBands = async () => {
      const res = await fetch(`https://raw.githubusercontent.com/JBreitenbr/Spotify-Data/refs/heads/main/bandSubs.json`);
      const pre = await res.json();
      const data=pre.filter((item)=>item.name==letter).map((item)=>item.bands.map((sub)=>sub.name)).flat();
      setBands(data);
      
    };

    fetchBands();
  },[letter]);
  useEffect(()=>{
    const fetchCountDict= async () => 
      {
        const res = await fetch("https://raw.githubusercontent.com/JBreitenbr/Spotify-Data/refs/heads/main/countDict.json");
        const data = await res.json();
        setCountDict(data);
      };
    fetchCountDict();
  },[]);
  const indexOfLastTrack = currentPage * tracksPerPage;
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
  const currentTracks = tracks.slice(indexOfFirstTrack, indexOfLastTrack);

  return (
      <div className="generale bg-slate-500" style={{position:"relative"}}>
     <div className="bg-slate-300 flex flex-col" style={{position: "sticky",top:"0px",width:"100vw"}}>
      <h3 className="text-white text-center text-xl h-12 pt-2 mb-6 bg" >My Own Private Spotify</h3>
      <select className="mb-2 mx-8 sm:mx-32 sm:h-6 sm:text-xl bg-white rounded" onChange={handleLetter}>
        <option>--Select Letter--</option>
        {letters.map(item=>
          <option key={item}>{item} </option>
        )}</select>
      <select className="mb-4 mx-8 sm:mx-32 sm:h-6 sm:text-xl bg-white rounded" onChange={handleArtist}>
        <option>--Select Artist--</option>
        {bands.map(item=>
          <option key={item} value={item}>{item} </option>
        )}</select>
      </div>
        {artist=="none"?<div className="spoti mt-7 sm:mt-36"></div>:<TrackList tracks={currentTracks} />}
  {tracks.length<=80?   <Pagination
        tracksPerPage={tracksPerPage}
        totalTracks={tracks.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />:<Pagination2 tracksPerPage={tracksPerPage} totalTracks={tracks.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>}
    </div>)
}
