import styles from "./Gallery.module.css";
import { withNamespaces } from "react-i18next";
import axios from 'axios';
import Tabs from "../Tabs";
import BigTab from "../BigTab";
import { useState , useEffect } from "react";
import i18n from "../../i18n";
import {Carousel} from '../News/index'
import { FiChevronRight, FiChevronLeft, FiZoomIn, FiAperture, FiFilm } from "react-icons/fi";

const tabs = [
  {
    value: "photo",
    label: "Фотогалерея",
    labelKz: "Фотогалерея",
  },
  {
    value: "video",
    label: "Фотогалерея",
    labelKz: "Видеогалерея",
  },
];

const API_FETCH_URL = "https://back.nigrch.kz/"

const Gallery = ({ t }) => {
  const [tab, setTab] = useState("photo");
  const [gallery , setGallery] = useState([]);
  const [current_selected, setCurrent] = useState(null);
  const [open, setOpen] = useState({style: {"max-height":"0"} , opened : false})
  const [images , setImages] = useState([])
  const mobile = true
  const [current, setAnotherCurrent] = useState(0);

  useEffect(async () => {
    const fetch_gallery = tab == 'video' ?  
      await axios.get(`${API_FETCH_URL}video/?lang=${i18n.language}`) : 
      await axios.get(`${API_FETCH_URL}gallery`)

    setGallery(fetch_gallery.data.galleries);
    setCurrent(0)

    // console.log(fetch_gallery.data.galleries[0])
    let image = tab == "video" ? await axios.get(`${API_FETCH_URL}video/getVideos?id=${fetch_gallery.data.galleries[0]._id}`) : await axios.get(`${API_FETCH_URL}gallery/getPhotos?id=${fetch_gallery.data.galleries[0]._id}`)
    setImages(tab == "video" ? image.data.videos : image.data.photos)
  }, [tab])

  const changeCurrent = async (value , i) =>{
    setCurrent(i)
    setOpen({ 
      style: {"max-height" : "0"}, 
      opened : !open.opened
    })
    let image = await axios.get(`${API_FETCH_URL}gallery/getPhotos?id=${value._id}`)
    image != null ? setImages(image.data.photos) : setImages([])
  }
  const collapse =async (object) =>{
    let image = tab == "video" ? await axios.get(`${API_FETCH_URL}video/getVideos?id=${object._id}`) : await axios.get(`${API_FETCH_URL}gallery/getPhotos?id=${object._id}`)
    setImages(tab == "video" ? image.data.videos : image.data.photos)
    setOpen({
      style : {"max-height" : open.opened ? "0" : "1000px"},
      opened : !open.opened,
    })
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.block}>
        <div className={styles.mobile}>
          <Tabs theme="white" onChange={setTab}  lang={i18n.language} value={tab} items={tabs} />
        </div>
        <div className={styles.desktop}>
          <BigTab theme="white" onClick={setTab} value={tab} tab="photo">
            <FiAperture size={24}/>
            <span>Фотогалерея</span>
          </BigTab>
          <div className={styles.select_collapse}>
            <div className={styles.select} onClick={() => collapse(gallery[current_selected])}>
              <span>{
                gallery[current_selected] != null ? (i18n.language === "ru" ? (tab == 'video' ? gallery[current_selected].name : gallery[current_selected].nameRu) : gallery[current_selected].nameKk) : ""
              }</span>
              <FiChevronRight size={24} />
            </div>
            <div className={styles.select_container} style={open.style}>
              {
                gallery.map((value , i)=>{
                  if(i === current_selected) return;
                  return (
                    <div className={styles.select} key={i} onClick={() => changeCurrent(value, i )}>
                      <span>{ i18n.language === "ru" ? value.nameRu : value.nameKk }</span>
                    </div>
                  )
                })
              }
            </div>
          </div>

          
          <BigTab theme="white" onClick={setTab} value={tab} tab="video">
            <FiFilm size={24}/>
            <span>Видеогалерея</span>
          </BigTab>
        </div>
        
      </div>
      <div className={styles.block}>
        <Carousel mobile={mobile} page={current} onChange={setAnotherCurrent}>
          {images.map((item, i) => (
              <div className={styles.wrap} key={i} >
              <div className={styles.photoBlock} key={item.id}>
                {
                  tab == "video" ? 
                  <iframe src={`${"https://youtube.com/embed/"+ item.url.split("=")[item.url.split("=").length - 1]}`} width="100%" height="300px"></iframe> : 
                  <img alt="Изображение" src={`https://back.nigrch.kz/${item.url}`} />
                }
                {/* <div className={styles.zoom}>
                  <FiZoomIn size={24} />
                </div> */}
              </div>
                <div className={styles.photoBlockControls}>
                  <div className={styles.photoLabel}>
                    {  i18n.language === "ru" ? item.captionRu : item.captionKk}
                  </div>
                  <div className={styles.photoBlockArrows}>
                    <div className={styles.arrow} onClick={() => {
                        if (current > 0) {
                          setAnotherCurrent(current - 1);
                        }
                      }}>
                      <FiChevronLeft />
                    </div>
                    <div className={styles.arrow} onClick={() => {
                        if (current < Math.ceil(images.length / (mobile ? 1 : 3)) - 1) {
                          setAnotherCurrent(current + 1);
                        }
                      }}>
                      <FiChevronRight />
                    </div>
                  </div>
                </div>
            </div>
          ))}

      </Carousel>
      </div>
    </div>
  );
};

export default withNamespaces()(Gallery);
