


// // Load icon preference from local storage
// const storedIconPreference = localStorage.getItem('iconPreference');
// if (storedIconPreference) {
//     isDefaultIcon = storedIconPreference === 'default';
//     faviconLink.href = isDefaultIcon ? 'default-icon.png' : 'alternate-icon.png';
// }

// // Load color preference from local storage
// const storedColorPreference = localStorage.getItem('colorPreference');
// if (storedColorPreference) {
//     currentColorIndex = storedColorPreference === 'alternate' ? 1 : 0;
//     changeMainColor();
// }

// // Load image filter preference from local storage
// const storedImageFilterPreference = localStorage.getItem('imageFilterPreference');
// if (storedImageFilterPreference === 'bw') {
//     filteredImg.classList.add('black-and-white');
//     isBlackAndWhite = true;
// }

colorSwitch.addEventListener('click', () => {
   
    localStorage.setItem('iconPreference', isDefaultIcon ? 'default' : 'alternate');
});

colorSwitch.addEventListener('click', () => {
    changeMainColor();
    localStorage.setItem('colorPreference', currentColorIndex === 1 ? 'alternate' : 'default');
});

colorSwitch.addEventListener('click', () => {
    changeImgColor();
    localStorage.setItem('imageFilterPreference', isBlackAndWhite ? 'bw' : 'color');
});

/*spilt the word to letters in hero section to make hover for every single letter*/