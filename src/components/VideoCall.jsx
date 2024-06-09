// VideoCall.jsx
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';
import { Button, Box } from '@mui/material';

const VideoCall = ({ roomId }) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const videoContainerRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:5000'); // Adjust backend URL
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      userVideo.current.srcObject = stream;

      socketRef.current.emit('join-room', roomId);

      socketRef.current.on('user-connected', (userId) => {
        const peer = createPeer(userId, socketRef.current.id, stream);
        peersRef.current.push({
          peerID: userId,
          peer,
        });
        setPeers((users) => [...users, peer]);
      });

      socketRef.current.on('signal', (data) => {
        const item = peersRef.current.find((p) => p.peerID === data.from);
        item.peer.signal(data.signal);
      });
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const createPeer = (userToSignal, callerID, stream) => {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socketRef.current.emit('signal', { signal, to: userToSignal, from: callerID });
    });

    peer.on('stream', (stream) => {
      const videoElement = document.createElement('video');
      videoElement.srcObject = stream;
      videoElement.autoplay = true;
      videoElement.playsInline = true;
      videoContainerRef.current.appendChild(videoElement);
    });

    return peer;
  };

  return (
    <Box>
      <video ref={userVideo} autoPlay playsInline muted style={{ width: '300px' }} />
      <Box ref={videoContainerRef}></Box>
    </Box>
  );
};

export default VideoCall;
