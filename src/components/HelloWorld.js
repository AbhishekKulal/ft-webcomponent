import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/antd.css';
// import './HelloWorld.scss';
import { Button } from 'antd';
import VideoModal from './VideoModal';

const HelloWorld = ({ videoSource }) => (
    <div className="hello-world">
        <VideoModal videoSource={videoSource}/>
    </div>
);

class HelloWorldComponent extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        const root = ReactDOM.createRoot(mountPoint);
        root.render(<HelloWorld videoSource={this.getAttribute('video-source')} />);
    }
}

customElements.define('hello-world-component', HelloWorldComponent);
