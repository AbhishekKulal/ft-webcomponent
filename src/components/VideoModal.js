import React, { useState } from "react";
import { Modal, Button } from 'antd';
import './styles.scss';

const VIDEOS_LINKS =  {
    'add_indent' : {
        src: "https://player.vimeo.com/video/1004174072?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        name : "Add Indent"
    },
    'my_trips': {
        src: "https://player.vimeo.com/video/1004180634?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
         name : "My trips"
    }
    
}

function VideoModal(props){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {videoSource, label} = props

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if(!VIDEOS_LINKS[videoSource]) return <h1>Unable to find the video!</h1>
  return (
    <>
      <Button type="link" onClick={showModal} className="btn-link">
        {label || VIDEOS_LINKS[videoSource].name}
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div style={{padding:'75% 0 0 0', position:'relative'}}>
            <iframe src={VIDEOS_LINKS[videoSource].src} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} title="First Video for template">
            </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
      </Modal>
    </>
  );
}

export default VideoModal;