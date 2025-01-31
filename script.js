
// Add event listener to CBT techniques list
document.querySelector('#cbt-techniques ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // Display more information about the selected CBT technique
        alert(`You selected ${e.target.textContent}!`);
    }
});
