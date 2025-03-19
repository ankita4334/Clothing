import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Avatar = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Set up scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true,alpha: true, });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement);

        // Add lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5).normalize();
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
        scene.add(ambientLight);

        // Load the human body model
        const loader = new GLTFLoader();
        loader.load(
            '/models/cute_girl_character.glb',
            (gltf) => {
                console.log('Human body model loaded successfully:', gltf);
                const model = gltf.scene;
                scene.add(model);

                // Adjust model position, scale, or rotation
                model.position.set(0, -1, 0); // Move the model down
                model.scale.set(0.5, 0.5, 0.5); // Scale the model down

                // Change clothes color
                model.traverse((child) => {
                    if (child.isMesh) {
                        if (child.name === 'Shirt') {
                            child.material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red shirt
                        } else if (child.name === 'Pants') {
                            child.material = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blue pants
                        }
                    }
                });
            },
            undefined,
            (error) => {
                console.error('Error loading human body model:', error);
            }
        );

        // Position the camera
        camera.position.set(0, 1, 5); // Adjust the camera position
        camera.lookAt(0, 1, 0); // Look at the center of the scene

        // Render loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Clean up
        return () => {
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef}></div>;
};

export default Avatar;