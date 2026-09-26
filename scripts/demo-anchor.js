(() => {
    // The browser may follow this deep link before images and web fonts settle.
    if (window.location.hash !== '#yadrei-demo') return;

    let cancelled = false;
    const events = ['wheel', 'touchstart', 'pointerdown', 'hashchange'];
    const cancel = () => { cancelled = true; };
    const cancelOnKey = (event) => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Tab'].includes(event.key)) cancel();
    };
    events.forEach(type => window.addEventListener(type, cancel, { passive: true, capture: true }));
    window.addEventListener('keydown', cancelOnKey, true);

    const alignInitialDemo = async () => {
        if (document.fonts) await document.fonts.ready;
        // Let the final font metrics and responsive styles reach layout first.
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        events.forEach(type => window.removeEventListener(type, cancel, true));
        window.removeEventListener('keydown', cancelOnKey, true);
        if (!cancelled && window.location.hash === '#yadrei-demo') {
            document.getElementById('yadrei-demo')?.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    };

    if (document.readyState === 'complete') alignInitialDemo();
    else window.addEventListener('load', alignInitialDemo, { once: true });
})();
