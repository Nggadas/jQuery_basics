$('.loc').hover(
    function(){
        $(this).html("<strong>Location:</strong> Your house?");
    },
    function() {
        $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
    }
);

// Adds a pet to the page with the user input
$('#add-pet').on('click', function () {

    // Grab info from the form
    var $species = $('#pet-species');
    var $name = $('#pet-name');
    var $notes = $('#pet-notes');

    var $newPet = $(
        '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name.val() +
        '</p><p><strong>Species:</strong> ' + $species.val() +
        '</p><p><strong>Notes:</strong> ' + $notes.val() +
        '</p><span class="close">&times;</span></div></section>'
    );

    // Attach the new element to the page
    $('#posted-pets').append($newPet);

    // Make the 'x' in the corner remove the section it's contained within
    $('.close').on('click', function () {
        $(this).parent().remove();
    });

    //Reset Form Fields
    $name.val("");
    $species.val("Dog");
    $notes.val("");
});

// Puppy images fade in
$('img').css('display', 'none').fadeIn(1600);

$('.card').on('click', function () {
    $(this).toggleClass('selected')
});