const { terminal } = require('terminal-kit');
const termkit = require('terminal-kit').terminal;

export class Menu{
    constructor(){

    }
    static launchMainMenu(){
        const mainMenuItems = [
            "Play Game",
            "Settings",
            "Exit"
        ];


        termkit.singleColumnMenu(menuItems, (error, response) => {
            let selection = response.selectedText;
            switch (selection) {
                case "Play Game":
                    console.log("Now launching the game")
                    launchGame();
                    break;
                case "Settings":
                    launchSettings()
                    console.log("Now opening settings");
                    break;
                default:
                    break;
            }
            process.exit(0);
        });
    }
   static launchSettings(){
        const settingsMenuItems = [
            "Colors",
            "Difficulty"
        ];
        termkit.singleColumnMenu(settingsMenuItems, (error, response) => {
            let selection = response.selectedText;
            switch (selection) {
                case value:
                    
                    break;
            
                default:
                    break;
            }
        })
    }
    

}