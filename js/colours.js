if(localStorage.getItem('colour') == 'dark'){ // Load colour selection from local storage
    DarkMode();
}else{
    LightMode();
}
function toggleDark() { // When the light in the top left is clicked
    if(localStorage.getItem('colour') == 'dark'){
        LightMode();
    }else{
        DarkMode();
    }
}
function DarkMode() { // Apply dark CSS
    console.log("Selected dark mode");
    document.getElementById("stylesheet").href = "style/main.css";
    localStorage.setItem("colour", "dark");
}
function LightMode() { // Apply light CSS
    console.log("Selected light mode");
    document.getElementById("stylesheet").href = "style/light.css";
    localStorage.setItem("colour", "light");
}