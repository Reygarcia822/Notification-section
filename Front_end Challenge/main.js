
const markAll = document.querySelector('#markAll');
const numberElement = document.querySelector('#number');
const post = document.querySelectorAll('.posts');
const currentNotReadedElement = document.querySelectorAll('.not-readed');
    numberElement.innerText = currentNotReadedElement.length;

const updateNotifications = () => {
    const currentNotReadedElement = document.querySelectorAll('.not-readed');
    numberElement.innerText = currentNotReadedElement.length;
};

markAll.addEventListener('click', () => {
   const notReadedElements = document.querySelectorAll('.not-readed');
   notReadedElements.forEach(notReadedElements => {
    notReadedElements.classList.remove('not-readed');
    updateNotifications();
   });
});

post.forEach(post => {
    post.addEventListener('click', () => {
    post.querySelector('.status').classList.remove('not-readed');
    updateNotifications();
    });
});


