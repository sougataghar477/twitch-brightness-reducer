 
    if (document.readyState = "interactive") {
 
        const settingsBtn = document.querySelector("[data-a-target='player-settings-button']");
        const videoplayer = document.querySelector('.click-handler');
        browser.storage.local.get()
        .then((item)=>{
            if('previousBrightness' in item ===false){
                videoplayer.style.background=`rgba(0,0,0,0)`;
                
                 }
                 videoplayer.style.background=`rgba(0,0,0,${item.previousBrightness})`;
            });
     
        settingsBtn.addEventListener('click', () => {
            setTimeout(() => {
                const videoplayer = document.querySelector('.click-handler');
                const brightnessElement = document.createElement("DIV");
                const brightnessText = document.createElement("LABEL");
                brightnessText.classList.add("yep");
                const brightnessRange = document.createElement("INPUT");
                brightnessRange.id="brightnessInput";
                brightnessRange.type = "range";
                
    
                brightnessRange.min = 0;
                brightnessRange.max = 1;
                brightnessRange.step = 0.01;
                 
                brightnessElement.classList.add("Layout-sc-nxg1ff-0", "WUWgS", "xAfNg");
                
                let gettingItem = browser.storage.local.get();
                gettingItem.then(function(item){
                    if('previousBrightness' in item ===false){
                        brightnessRange.defaultValue=0;
                        videoplayer.style.background=`rgba(0,0,0,${0})`;
                         }
                   brightnessRange.defaultValue=item.previousBrightness;
                   videoplayer.style.background=`rgba(0,0,0,${item.previousBrightness})`;
                });
    
                brightnessText.classList.add("fjMXDc");
                brightnessText.textContent = "Brightness";
                brightnessElement.appendChild(brightnessText);
                brightnessElement.appendChild(brightnessRange);
                const settingsPanel = document.querySelector("[data-a-target='player-settings-menu']");
                settingsPanel.appendChild(brightnessElement);
                brightnessRange.addEventListener("input", () => {
    
                    videoplayer.style.background = `rgba(0,0,0,${brightnessRange.value})`;
                    browser.storage.local.set({
                       previousBrightness:brightnessRange.value
                      });
                });
    
            }, 10)
    
    
        })
    
    }
 