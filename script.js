
const wineOptions = {
    white: [
        {
            title: 'Pinot Grigio',
            id: 'vegetables',
            pro: 'Pinot Grigio tends to be slightly citrusy with hints of apples and flowers. This lightness makes it a natural pairing for veggie dishes.',
            novice: 'Pinot Grigio is one of the lighter white wines available, which makes it perfect for pairing with a veggie dish.',
        },
        {
            title: 'Chardonnay',
            id: 'cheese',
            pro: 'Opt for a full bodied, oak aged chardonnay for a perfect match to go with your cheese spread.',
            novice: "Lots of people think that they don't like chardonnay, but it's great for pairing with food. Enjoy it with your next cheese spread!",
        },
        {
            title: 'Riesling',
            id: 'redMeat',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Chardonnay',
            id: 'whiteMeat',
            pro: 'Opt for a young, unoaked chardonnay from a cool climate for the best match with your dish.',
            novice: "Chardonnay pairs well with delicate food like chicken, so you've got a perfect match.",
        },
        {
            title: 'Pinot Grigio',
            id: 'fish',
            pro: 'Pinot Grigio tends to be slightly citrusy with hints of apples and flowers. This lightness makes it a natural pairing for your fish.',
            novice: 'Pinot Grigio is one of the lighter white wines available, which makes it perfect for pairing with a fish dish.',
        }
    ],
    red: [
        {
            title: 'Pinot Noir',
            id: 'vegetables',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Cabernet Sauvignon',
            id: 'cheese',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Cabernet Sauvignon',
            id: 'redMeat',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Merlot',
            id: 'whiteMeat',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Pinot Noir',
            id: 'fish',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        }
    ],
}

//Document ready
$(function() {
    
    // ensures that radio buttons aren't selected on page load
    $('input[type="radio"]').prop('checked', false);

    //on click of button, capture the selections of the raio buttons
    $('button').on('click', function(e){
        //prevent button from refreshing the page
        e.preventDefault();
        
        // saving the user selections on the form in variables
        const wineLevel = $("input[name=questionOne]:checked").val();
        const redOrWhite = $("input[name=questionTwo]:checked").val();
        const foodPairing = $("input[name=questionThree]:checked").val();
        
        const colorChoice = wineOptions[redOrWhite]; //filtering down to red or white
        const results = [];
        const wineDescription = [];

        for (let index = 0; index < colorChoice.length; index++){
            if(colorChoice[index].id === foodPairing) {
                //determining the wine type based on colour/food
                results.push(colorChoice[index].title);
                //pull the appropriate wine description from the array based on familiarity with wine
                if(wineLevel === 'pro') {
                    wineDescription.push(colorChoice[index].pro);
                } else if(wineLevel === 'novice') {
                    wineDescription.push(colorChoice[index].novice);
                }
            }
        }

        //printing out result
        $('.answer').html(`<h2>Pour yourself some ${results} </h2>
        <p>${wineDescription}</p>`);
    })
});