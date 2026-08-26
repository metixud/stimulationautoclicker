// ==UserScript==
// @name         Stimulation Autoclicker ( metix )
// @namespace    https://neal.fun/
// @version      1.5
// @description  Stimulation autoclicker made by metix
// @author       Metix
// @match        https://neal.fun/stimulation-clicker/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const a = {
        b: true,
        c: true,
        d: 100000,
        e: true,
        f: true,
        g: true,
        h: 50
    };

    let i = true;
    let l = null;

    function n() {
        if (!l) {
            l = document.querySelector('.main-btn');
        }
        return l;
    }

    function o() {
        const p = n();

        if (p && i) {
            if (a.e) {
                const q = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });

                p.dispatchEvent(q);
            } else {
                p.click();
            }
        }
    }

    function r() {
        if (!a.g) {
            o();
            return;
        }

        for (let s = 0; s < a.h; s++) {
            o();
        }
    }

    function t() {
        const u = document.createElement('div');

        u.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px;
            border-radius: 5px;
            z-index: 10000;
            font-family: Arial, sans-serif;
            font-size: 12px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        `;

        u.innerHTML = `
            <div style="margin-bottom: 5px; font-weight: bold;">Stimulation Clicker Autoclicker</div>
            <div id="status">Status: Active</div>
            <button id="toggleBtn" style="margin-top: 5px; padding: 3px 6px; background: #4CAF50; color: white; border: none; border-radius: 3px; cursor: pointer;">Pause</button>
        `;

        document.body.appendChild(u);

        const v = u.querySelector('#toggleBtn');

        v.addEventListener('click', () => {
            i = !i;

            v.textContent = i ? 'Pause' : 'Resume';

            u.querySelector('#status').textContent =
                `Status: ${i ? 'Active' : 'Paused'}`;

            v.style.background = i ? '#4CAF50' : '#f44336';
        });
    }

    function w() {
        if (i) {
            r();
        }

        requestAnimationFrame(w);
    }

    function x() {
        t();
        requestAnimationFrame(w);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', x);
    } else {
        x();
    }
})();
