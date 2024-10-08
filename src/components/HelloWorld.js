import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/antd.css';
// import './VideoComponent.scss';
import { Button } from 'antd';
import VideoModal from './VideoModal';

const VideoComponent = ({ videoSource }) => (
    <div className="test">
        <VideoModal videoSource={videoSource}/>
    </div>
);

class FTVideoTutorial extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        const root = ReactDOM.createRoot(mountPoint);
        root.render(<VideoComponent videoSource={this.getAttribute('video-source')} />);
    }
}

customElements.define('ft-video-tutorial', FTVideoTutorial);
