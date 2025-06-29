import {Tooltip} from "react-tooltip";
import AlbumInfo from "./AlbumInfo";
import SongTitles from "./SongTitles";
const TrackList = ({ tracks }) => {
  return (<ul className="list-group grid grid-cols-2 mt-8">
      {tracks.map((track,index) => (
        <li key={track.track}><div className="ml-4 mb-4">
<Tooltip id={`my-anchor-element-${index}`}><div><AlbumInfo item={track}/><SongTitles item={track}/></div></Tooltip><a data-tooltip-id={`my-anchor-element-${index}`}>
<img src={track.album_pic} className="h-16 w-16 sm:h-32 sm:w-32" style={{border:"1px solid #0f172a"}}/></a>
<div className="sm:text-xl md:text-2xl xl:text-3xl mt-2 text-white" style={{fontSize:"0.84rem"}}>{track.track}</div></div></li>
      ))}
    </ul>
  );
};
export default TrackList;