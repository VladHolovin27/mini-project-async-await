const btn = document.querySelector('.btn');
const postContainer = document.querySelector('.postContainer');

async function getPosts(e) {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/students');
        const data = await response.json();
        
        postContainer.innerHTML = '';
        if (Array.isArray(data)) {
            data.forEach(item => {
                const postElement = document.createElement('div');
                postElement.textContent = item.email;
                postContainer.appendChild(postElement);
            });
        } else {
            console.log('Дані не є масивом');
        }
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener('click', getPosts);

// CreatePost
const btn2 = document.querySelector('.btn2');
const postContainer2 = document.querySelector('.postContainer2');

async function createPost(event) {
    event.preventDefault();
    const obj = {
        name: 'Mango', 
        body: 'CRUD is awesome',
    };

    const opt = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };

    try {
        const response2 = await fetch('http://localhost:3000/students', opt);
        const data2 = await response2.json();

        postContainer2.innerHTML = '';
        const postElement2 = document.createElement('div');
        postElement2.textContent = `Імя: ${data2.name}, Опис: ${data2.body}`;
        postContainer2.appendChild(postElement2);
        
    } catch (error) {
        console.error(error);
    }
}

btn2.addEventListener('click', createPost);

// updatePost
const btn3 = document.querySelector('.btn3');
const postContainer3 = document.querySelector('.postContainer3');

async function updatePost(event) {
    event.preventDefault()
    const postToUpdate = {
        id: 1,
        body: "CRUD is really awesome", 
    };
        
    const options = {    
        method: "PATCH",      
        body: JSON.stringify(postToUpdate),       
        headers: {        
            "Content-Type": "application/json; charset=UTF-8",
        },        
    };
    try {
        const response3 = await fetch(`http://localhost:3000/students/${postToUpdate.id}`, options);
        const data3 = await response3.json();

        postContainer3.innerHTML = '';

        for (const key in data3) {
            if (Object.hasOwnProperty.call(data3, key)) {
                const postElement3 = document.createElement('div');
                postElement3.textContent = `${key}: ${data3[key]}`;
                postContainer3.appendChild(postElement3);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

btn3.addEventListener('click', updatePost);

// comments

const commentInp = document.querySelector('.comment-inp');
const commentBtn = document.querySelector('.comment-btn');
const ariaComment = document.querySelector('.aria-comment');

commentBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const inpValue = commentInp.value;
    const commentDiv = document.createElement('div');
    commentDiv.textContent = inpValue;
    ariaComment.appendChild(commentDiv);
    if(commentInp.value = '') {
      ariaComment.textContent = '';
    }
});


// modal

const modal = document.getElementById('modal');
const btnRegistr = document.querySelector('.registration-btn');
const span = document.getElementsByClassName('close')[0];
const saveBtn = document.querySelector('.btn-registr');

btnRegistr.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

saveBtn.onclick = function() {
    modal.style.display = 'none';
    alert('Реєстрація успішна!');
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
