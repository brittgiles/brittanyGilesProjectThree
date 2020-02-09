
const wineOptions = {
    white: [
        {
            title: 'Pinot Grigio',
            pairsWith: 'Vegetables',
            id: 'vegetables',
        },
        {
            title: 'Chardonnay',
            pairsWith: 'Cheese',
            id: 'cheese',
        },
        {
            title: 'Riesling',
            pairsWith: 'Red Meat',
            id: 'redMeat',
        },
        {
            title: 'Chardonnay',
            pairsWith: 'White Meat',
            id: 'whiteMeat',
        },
        {
            title: 'Pinot Grigio',
            pairsWith: 'Fish',
            id: 'fish',
        }
    ],
    red: [
        {
            title: 'Pinot Noir',
            pairsWith: 'Vegetables',
            id: 'vegetables',
        },
        {
            title: 'Cabernet Sauvignon',
            pairsWith: 'Cheese',
            id: 'cheese',
        },
        {
            title: 'Cabernet Sauvignon',
            pairsWith: 'Red Meat',
            id: 'redMeat',
        },
        {
            title: 'Merlot',
            pairsWith: 'White Meat',
            id: 'whiteMeat',
        },
        {
            title: 'Pinot Noir',
            pairsWith: 'Fish',
            id: 'fish',
        }
    ],
}

//Document ready
$(function() {
    //on click of button, capture the selections of the raio buttons
    $('button').on('click', function(e){
        //prevent button from refreshing the page
        e.preventDefault();
        
        // saving the user selections on the form in variables
        const wineLevel = $("input[name=questionOne]:checked").val();
        const redOrWhite = $("input[name=questionTwo]:checked").val();
        const foodPairing = $("input[name=questionThree]:checked").val();
        console.log(wineLevel);
        console.log(redOrWhite);
        console.log(foodPairing);
    })

});

        // const wineLevel = document.querySelector('input[name="questionOne"]:checked').id;
        //const redOrWhite = document.querySelector('input[name="questionTwo"]:checked').id;
        //const foodPairing = document.querySelector('input[name="questionThree"]:checked').id;