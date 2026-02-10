let content = document.querySelector('section');
renderChoice();
function renderChoice(){
    const htmlContent = `
        <ul>
            <li data-choice="Arcade">
                <figure>
                    <img src="choiceImg/arcade.gif" alt="">
                    <figcaption><h2>Arcade Date</h2></figcaption>
                </figure>
            </li>
            <li data-choice="Food Date">
                <figure>
                    <img src="choiceImg/Food.gif" alt="">
                    <figcaption><h2>Food Date</h2></figcaption>
                </figure>
            </li>
            <li data-choice="Gift">
                <figure>
                    <img src="choiceImg/Gift.gif" alt="">
                    <figcaption><h2>Gift</h2></figcaption>
                </figure>
            </li>
        </ul>
        <a>
        <button>Next</button>
        <a/>
    `;
    content.innerHTML+=htmlContent;
}