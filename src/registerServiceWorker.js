// In product ,we register a service worker to serve asessement
// This lets the app load faster on subsequent visits in program
//it offline capabilities. However, It also means that development
//will only see deployed updates on the "N+1" visit to page
//cached resouces are updated in background 

//to learn more about the benefitrs of this model .
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address
        window.location.hostname === '[::1]' ||
        // 127.0.0.1/8 is considered localhost for IPv4
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9|[01]?[0-9][0-9]?)){3}s^/

        )
);