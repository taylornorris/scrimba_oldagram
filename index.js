// provided with project material
const posts = [
    {
        name: "Vincent van Gogh", 
        username: "vincey1853", 
        location: "Zundert, Netherlands", 
        avatar: "images/avatar-vangogh.jpg", 
        post: "images/post-vangogh.jpg", 
        comment: "just took a few mushrooms lol", 
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const newPostEl = document.getElementById("new-post")

for (let i = 0; i < posts.length; i++) {

    const postContent = posts[i] 
    const newPost = document.createElement("article")

    newPost.innerHTML = `
                        <section class="user-info-section">
                            <div class="container user-info-div">
                                <img class="avatar" src="${postContent.avatar}">
                                <div class="user-info-text">
                                    <p class="bold">${postContent.name}</p>
                                    <p class="small-text">${postContent.location}</p>
                                </div>
                            </div>
                        </section>

                        <img class="post-img" src="${postContent.post}" alt="${postContent.alt}">

                        <section class="post-body">
                            <div class="container body-div">
                                <div class="icons-div">
                                    <img class="icon" src="images/icon-heart.png">
                                    <img class="icon" src="images/icon-comment.png">
                                    <img class="icon" src="images/icon-dm.png">
                                </div>
                                <div class="likes-div">
                                    <P class="bold">${postContent.likes} likes</P>
                                </div>
                                <div class="caption-div">
                                    <p><span class="bold">${postContent.username}</span> ${postContent.comment}</p>
                                </div>
                            </div>
                        </section>
    `

    newPostEl.append(newPost)
}
