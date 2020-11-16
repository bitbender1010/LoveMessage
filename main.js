let btn_value = document.querySelectorAll('.next-btn');

btn_value.forEach(btn_val => {
    btn_val.addEventListener('click', process);
    
    function process() {
        let parentValue = btn_val.parentElement.parentElement;
        let parentvalval = parentValue.classList;
        //array
        // parentvalval = Array.from(parentvalval);
        if(parentvalval.contains('last-childer')) {
            parentValue.style.display = "none";
            let firstChild = parentValue.parentElement.children[0];
            firstChild.style.display = 'block';
            console.log(firstChild);
        }

        else if(parentValue.style.display = 'block') {
            parentValue.style.display = "none";
            let next_sib = parentValue.nextElementSibling;
            next_sib.style.display = "block";
        }

    }
});
