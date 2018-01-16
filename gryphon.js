const Gryphon = {
    animate: (element, keyFrames) => {
        const tl = new TimelineLite();
        keyFrames = JSON.parse(keyFrames);
        tl.to(element, 0, {
                rotation: keyFrames[0].rotation + 'deg',
                opacity: keyFrames[0].opacity,
                timingFunction: 'Linear'
        });
        for (let i = 1; i < keyFrames.length; i++) {
            const currentKeyFrameTime = keyFrames[i].timestamp / 1000;
            const previousKeyFrameTime = keyFrames[i - 1].timestamp / 1000;
            const duration = currentKeyFrameTime - previousKeyFrameTime;
            let ease;
            if (keyFrames[i].timingFunction === 'Linear') {
                ease = 'Linear.easeNone';
            } else {
                ease = 'Power1.' + keyFrames[i].timingFunction;
            }
            tl.to(element, duration, {
                x: '+=' + keyFrames[i].x,
                y: '-=' + keyFrames[i].y,
                rotation: '+=' + keyFrames[i].rotation + 'deg',
                opacity: keyFrames[i].opacity,
                ease: ease
            });
        }
    }
};
