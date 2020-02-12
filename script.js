
const wineOptions = {
    white: [
        {
            title: 'Pinot Grigio',
            //pairsWith: 'Vegetables',
            id: 'vegetables',
            pro: 'this is the pro pinot string',
            novice: 'this is the novice pinot string',
        },
        {
            title: 'Chardonnay',
            //pairsWith: 'Cheese',
            id: 'cheese',
            pro: 'this is the pro chardonnay string',
            novice: 'this is the novice chardonnay string',
        },
        {
            title: 'Riesling',
            //pairsWith: 'Red Meat',
            id: 'redMeat',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Chardonnay',
            //pairsWith: 'White Meat',
            id: 'whiteMeat',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Pinot Grigio',
            //pairsWith: 'Fish',
            id: 'fish',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        }
    ],
    red: [
        {
            title: 'Pinot Noir',
            //pairsWith: 'Vegetables',
            id: 'vegetables',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Cabernet Sauvignon',
            //pairsWith: 'Cheese',
            id: 'cheese',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Cabernet Sauvignon',
            //pairsWith: 'Red Meat',
            id: 'redMeat',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Merlot',
            //pairsWith: 'White Meat',
            id: 'whiteMeat',
            pro: 'this is the pro string',
            novice: 'this is the novice string',
        },
        {
            title: 'Pinot Noir',
            //pairsWith: 'Fish',
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
        
        //console.log('wine level', wineLevel);
        const colorChoice = wineOptions[redOrWhite]; //filtering down to red or white
        const results = [];

        for (let index = 0; index < colorChoice.length; index++){
            if(colorChoice[index].id === foodPairing) {
                results.push(colorChoice[index].title);
            }
        }
        console.log('results', results);
        
        //pull description from array based on familiarity with wine
        const wineDescription = [];
        for (let index = 0; index < colorChoice.length; index++) {
            if(wineLevel === 'pro') {
                wineDescription.push(colorChoice[index].pro);
            } 
            if (wineLevel === 'novice') {
                wineDescription.push(colorChoice[index].novice);
            }
        }

        console.log('wine description:', wineDescription);

        //printing out result
        $('.answer').html(`<h2>Pour yourself some ${results} </h2>
        <p>${wineDescription}</p>`);

    })


});

