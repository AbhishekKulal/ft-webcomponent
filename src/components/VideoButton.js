import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/antd.css';
import { Button } from 'antd';
import VideoModal from './VideoModal';

const VideoComponent = ({ videoSource, label }) => (
    <div className="test">
        <VideoModal videoSource={videoSource} label={label}/>
    </div>
);

class FTVideoTutorial extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');
        this.appendChild(mountPoint);
        const root = ReactDOM.createRoot(mountPoint);
        root.render(<VideoComponent videoSource={this.getAttribute('video-source')} label={this.getAttribute('label')} />);
    }
}

customElements.define('ft-video-link', FTVideoTutorial);
