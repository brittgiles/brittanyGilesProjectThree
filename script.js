
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
            pro: "This sweeter white wine pairs well with many things, which includes red meats, particularly if it's a spicy dish. While red wine may be the more popular choice, if you're going for white then a Riesling is the way to go.",
            novice: 'A Riesling is a sweeter white wine that will pair nicely with your meal.',
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
            pro: "Ethereally aromatic with firm tannins that aren't obtrusive, this pairs well with a variety of foods. More fruit-forward pinots from California, Oregon, and New Zealand would pair well with a veggie-focused dish.",
            novice: 'This more fruit-forward type of wine pairs well with a veggie-focused dish and your best bet is to select one from either the California, Oregon, or New Zealand regions.',
        },
        {
            title: 'Cabernet Sauvignon',
            id: 'cheese',
            pro: "Cab Sauv is always a gouda idea for cheese. It goes particularly well with an aged cheddar and, you guessed it, gouda, as well as blue cheese like gorgonzola.",
            novice: "If you're looking for a red to go with your cheese-based dish or cheese plate, look no further then a Cab Sauv. It works especially well with a cheddar or gouda.",
        },
        {
            title: 'Cabernet Sauvignon',
            id: 'redMeat',
            pro: "You can't get a much better pairing than these two! While it pairs well with a red meat served rare, there are different styles of cabernet to experiment with. Keep in mind that with young cabernets it helps to have an element of charring or spice to offset the sweetness and tannins.",
            novice: "Cab Sauv and red meat are a match made in wine pairing heaven, particularly when it's a red meat served rare.",
        },
        {
            title: 'Merlot',
            id: 'whiteMeat',
            pro: "This medium-bodied blend tends to pair well with the umami with white meats, particularly grilled chicken. The inherent sweetness of this blend also makes it work well with spices or black pepper. For turkey, opt for a riper style of merlot while for chicken, you may want a classic, more elegant style of merlot. ",
            novice: "This medium-bodied blend pairs well with white meats like turkey or chicken thanks to its inherent sweetness.",
        },
        {
            title: 'Pinot Noir',
            id: 'fish',
            pro: "For pairing with fish, opt for a sweetly fruited pinot from the Chile, New Zealand, and California. These wines go particularly well with fish like salmon or tuna. This versatile wine is great for ordering at a restaurant when you're ordering different things.",
            novice: "A pinot is a great option to go with your fish because the sweet, fruitier varieties will be balanced with your dish. Check for a pinot in the Chile, New Zealand, or California areas for a great fit.",
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

            // check if any of the questions has no value and send an alert if so
            if (!$("input[name=questionOne]:checked").val()) {
                alert('Select an answer for the first question to get your wine! 🍷');
            } 
            if (!$("input[name=questionTwo]:checked").val()) {
                alert('Select an answer for the second question to get your wine! 🍷');
            } 
            if (!$("input[name=questionThree]:checked").val()) {
                alert('Select an answer for the last question to get your wine! 🍷');
            }
        }

        //on click of answer, scroll to answer container
        $('button').get(0).scrollIntoView();

        //printing out result
        $('.answer').html(`<h2>Pour yourself some ${results} </h2>
        <p>${wineDescription}</p>`);
    })
});