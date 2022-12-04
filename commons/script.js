// const body = document.querySelector('body')

// // function to set a given theme/color-scheme
// function setTheme(themeName) {
//         localStorage.setItem('theme', themeName);
//         document.documentElement.className = themeName;
//     }
//     // function to toggle between light and dark theme
//     function toggleTheme() {
//        if (localStorage.getItem('theme') === 'theme-dark'){
//            setTheme('theme-light');
//                 body.classList.remove('dark-html');
//        } else {
//            setTheme('theme-dark');
//            body.classList.add('dark-html');
//        }
//     }
//     // Immediately invoked function to set the theme on initial load
//     (function () {
//        if (localStorage.getItem('theme') === 'theme-dark') {
//            setTheme('theme-dark');
//        } else {
//            setTheme('theme-light');
//        }
//     })();