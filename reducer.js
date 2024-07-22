
const settingsBtn = document.querySelector("[data-a-target='player-settings-button']");

// brightnessRange starts here
const brightnessRange = document.createElement("input");
brightnessRange.type = "range";

brightnessRange.id = "brightnessInput";

brightnessRange.value = 0;

brightnessRange.min = 0;

brightnessRange.max = 1;

brightnessRange.step = 0.01;

const videoplayer = document.querySelector(".celebration__overlay");
setTimeout(() => {
    let curtain = document.createElement("div");
    curtain.classList.add("curtain")
    videoplayer.appendChild(curtain);
    brightnessRange.addEventListener("input", (e) => {
        curtain.style.backgroundColor = `rgba(0,0,0,${brightnessRange.value})`
    })
}, 60)
// brightnessRange ends here

// Creating the input range and appending to the menu when user clicks on the settings button

settingsBtn.addEventListener("click", () => {

    setTimeout(() => {
        const menuContainer = document.querySelector("[data-a-target='player-settings-menu']");

        setTimeout(() => {
            let brightnessContainer = document.createElement("div");
            brightnessContainer.classList.add('jHGpDy', 'jc');
            let label = document.createElement('span');
            label.textContent = 'Brightness';

            brightnessContainer.appendChild(label);
            brightnessContainer.appendChild(brightnessRange);
            menuContainer.appendChild(brightnessContainer);
        }, 100)
    }, 200)
})

