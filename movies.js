document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL path
    const path = window.location.pathname;

    // Check if the current page is the home page
    if (path === "/" || path.endsWith("index.html")) {
        document.getElementById("home-link").classList.add("active");
    } else if (path.endsWith("movies.html")) {
        document.getElementById("movies-link").classList.add("active");
    } else if (path.endsWith("series.html")) {
        document.getElementById("series-link").classList.add("active");
    }else if (path.endsWith("contact.html")) {
        document.getElementById("contact-link").classList.add("active");
    }
});







    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


     function selectItem(type, text) {
            document.getElementById('selected' + type).textContent = text;
        }











        document.getElementById('submitComment').addEventListener('click', function() {
            var commentInput = document.getElementById('commentInput');
            var commentText = commentInput.value.trim();
            if (commentText) {
                var commentList = document.getElementById('commentList');
                var firstComment = document.querySelector('.comment-item:first-child');
                if (firstComment && firstComment.textContent === 'Be the first to comment') {
                    firstComment.remove();
                }
                var newComment = document.createElement('li');
                newComment.className = 'comment-item';
                newComment.innerHTML = `
                    ${commentText}
                    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
                `;
                commentList.appendChild(newComment);
                commentInput.value = '';

                // Add event listener to the delete button
                newComment.querySelector('.delete-btn').addEventListener('click', function() {
                    commentList.removeChild(newComment);
                    // If there are no comments left, add the placeholder text back
                    if (commentList.children.length === 0) {
                        var placeholderComment = document.createElement('li');
                        placeholderComment.className = 'comment-item';
                        placeholderComment.textContent = 'Be the first to comment';
                        commentList.appendChild(placeholderComment);
                    }
                });
            }
        });





