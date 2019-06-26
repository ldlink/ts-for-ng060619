Object.defineProperty(window, 'MySweetApp', {value: 'v1.0.0', writable: true});

function shipWeight(): number {
    const el: HTMLElement | null = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML);
}

function sendEmail(addr: string): void {

    if (shipWeight() > 100) {
        console.log('WARNING: Oversize package');
    }
    console.log(addr);
    // ..........
}

/**
 * @param {(string | string[])} emailAddr
 */
function sendUpdates(emailAddr: string | string[]): void {
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
