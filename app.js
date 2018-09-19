// Search input
const searchUser = document.querySelector('#searchUser');
// Init
const github = new Github();
const ui = new UI();

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show alert

            } else {
                // Show profile
                ui.showProfile(data.profile);

            }
        });
    } else {
        // Clear profile
    }
});