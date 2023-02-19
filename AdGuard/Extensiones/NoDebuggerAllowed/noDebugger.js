// ==UserScript==
// @name         Disable debugger pausing on page
// @version      1.0
// @description  Disables script from pausing debugger when debugging JavaScript code in the browser console
// @match        *://*/*
// @grant        none
// ==/UserScript==

// Define a function that sets the "debugger" statement to "never pause"
function disableDebuggerPause(event) {
    event.preventDefault();
}

// Add an event listener to prevent the "debugger" statement from pausing the debugger
window.addEventListener('beforeunload', () => {
    const originalDebug = Object.getOwnPropertyDescriptor(window, 'debugger');
    Object.defineProperty(window, 'debugger', {
        get: () => {
            return originalDebug.get.call(this);
        },
        set: (value) => {
            if (value !== originalDebug.get.call(this)) {
                originalDebug.set.call(this, value);
                disableDebuggerPause(event);
            }
        }
    });
});
