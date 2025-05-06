function abc() {
    console.log("Enter in function");
    //const searchicon1 = document.querySelector('#searchicon1');
    //const srchicon1 = document.querySelector('#srchicon1');
    const search1 = document.querySelector('#searchinput1');
    console.log(searchicon1);
    console.log(search1);


    console.log("hhhh")
    search1.style.display = 'block';
    //search1.style.display = 'flex';

}

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function() {
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})



// const searchicon1 = document.querySelector('#searchicon1');
// const srchicon1 = document.querySelector('#srchicon1');
// const search1 = document.querySelector('#searchinput1');

// searchicon1.addEventListener('click', function() {
//     search1.style.display = 'felx';
//     searchicon1.style.display = 'none';
// })

const bar = document.querySelector('fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function() {
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function() {
    cross.style.dislay = 'none';
    headerbar.style.righht = '0%';
})

function openNav() {
    document.getElementById("mySidenav").style.width = "745px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function ModalController() {
    console.log("ModalController function called");
    // For Modal Functionality
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}