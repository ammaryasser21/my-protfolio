
const wordElement = document.getElementById('word');
const colorSwitch = document.getElementById('colorSwitch');
const wordElement2 = document.getElementById('word2');
const filteredImg = document.getElementById('filteredImg');
const faviconLink = document.getElementById('favicon');

/*spilt the word to letters in hero section to make hover for every single letter*/

const letters = wordElement.textContent.split('');
wordElement.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');

const letters2 = wordElement2.textContent.split('');
wordElement2.innerHTML = letters2.map(letter => `<span>${letter}</span>`).join('');

let isDefaultIcon = true;
colorSwitch.addEventListener('click', () => {
  isDefaultIcon = !isDefaultIcon;
  faviconLink.href = isDefaultIcon ? 'img/icons8-a-321.png' : 'img/icons8-a-32.png';
  // localStorage.setItem('iconPreference', isDefaultIcon ? 'default' : 'alternate');
});
/*change color of page when i press top switch button */
const main_color = ['#88ff08', '#1808ff']; 
const bg_color = ['#030302', '#fefefe']; 
const bg_accent_color = ['#191919', '#f1efef']; 
const font_color = ['#efefef', '#181818']; 
const main_font_color = ['#efefef', '#c0bebe'];

let currentColorIndex = 1;
function changeMainColor() {
  
  const newColor_main = main_color[currentColorIndex];
  const newColor_bg = bg_color[currentColorIndex];
  const newColor_bg_accent = bg_accent_color[currentColorIndex];
  const newColor_font = font_color[currentColorIndex];
  const newColor_main_font = main_font_color[currentColorIndex];
  
  currentColorIndex = (currentColorIndex + 1) % 2;
  document.documentElement.style.setProperty('--main', newColor_main);
  document.documentElement.style.setProperty('--bg', newColor_bg);
  document.documentElement.style.setProperty('--bg-accent', newColor_bg_accent);
  document.documentElement.style.setProperty('--font', newColor_font);
  document.documentElement.style.setProperty('--main-font', newColor_main_font);
}
colorSwitch.addEventListener('click', () => {
  changeMainColor();
  localStorage.setItem('colorPreference', currentColorIndex === 1 ? 'alternate' : 'default');
});

/*chang filter of my photo to be suitable on the page*/

  let isBlackAndWhite = true;
function changeImgColor(){



  if (isBlackAndWhite) {
    filteredImg.classList.remove('black-and-white');
  } else {
    filteredImg.classList.add('black-and-white');
  }
  
  isBlackAndWhite = !isBlackAndWhite;

}
colorSwitch.addEventListener('click', () => {
  changeImgColor();
  localStorage.setItem('imageFilterPreference', isBlackAndWhite ? 'bw' : 'color');
});





    // Initialize EmailJS with your user ID
    emailjs.init("5t2NetiIk8WnndxVU");

    // Attach event listener to the form submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form data
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;

        // Prepare email parameters
        let params = {
            from_name: name,
            from_email: email,
            to_email: "ammaryasserqwertyu@gmail.com",
            message: "Name: " + name + "\nEmail: " + email + "\nNumber: " + number
        };

        // Send the email using your service ID and template ID
        emailjs.send("service_kg0456l", "template_vaskdh6", params)
            .then(function(response) {
                alert("Email sent successfully!");
            }, function(error) {
                alert("An error occurred while sending the email.");
            });
    });





