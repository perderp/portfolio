# PORTFOLIO 
---
Hello there! welcome to my portfolio. this shows my previous work experience and about myself. hope you guys enjoy!

## :pushpin: Prerequisites

Before you begin make sure you have met the following requirements: 

|Tool | Version | Description|
|-----|---------|------------|
|Node | > 16.17.0 | Install node version via [NVM](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7) or if you have the latest version, it's okay! |

### :muscle: Built With
    NodeJS, Express, EJS, SCSS, GULP, Javascript

:warning: for the **static-page** branch, I did an HTML file in order to deploy it on github-page 

### :file_folder: Installing portfolio

to install portfolio in your local machine, run the following script in your terminal: 

    git clone -b [your_branch] https://github.com/perderp/portfolio.git

### :computer: Usage of portfolio
To begin the development, follow the steps below : 
1. go to **/** or **root** folder
2. run `npm install` on your terminal
3. after the dependencies installed, run `npm run start`
4. open another terminal and run `gulp build && gulp watch`

**Code Block:**

    npm install
    npm run start 
    (Open another terminal or split terminal [CTRL + SHIFT + 5])
    gulp build && gulp watch


:warning: Note :  Make changes only on **/src** folder (Development)
:warning: Note :  For sending to FTP copy the **public/**  folder (Production)

### :speech_balloon: Additional Info

Additional information about portfolio

- #### Breakpoints

  portfolio has a specified breakpoints on respective platforms:

  | Platform | Breakpoints   |
  | -------- | ------------- |
  | PC       | 769px up      |
  | tablet   | 481px - 768px |
  | Mobile   | 480px below   |


### :heavy_heart_exclamation: Acknoledgements and References

- This Project uses [FLOCSS](https://github.com/hiloki/flocss/blob/master/README_eng.md) for the CSS architecture methodology
