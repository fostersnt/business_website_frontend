// import { useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import { useEffect, useState } from "react";

const ParticleJsBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // this loads the tsparticles bundle with all features
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        background: {
            color: {
                // value: "#ffffff",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 100 },
                push: { quantity: 4 },
            },
        },
        particles: {
            color: { value: "#00e5ff" },
            //   color: { value: "#ff5722" },
            links: {
                color: "#00e5ff",
                distance: 150,
                enable: true,
            },
            move: { enable: true, speed: 3 },
            number: { value: 50 },
            size: { value: { min: 1, max: 5 } },
        },
    };

    if (init) {
        return <Particles id="tsparticles" options={options} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1
        }} />;
    }

    return <></>;
};

export default ParticleJsBackground;
