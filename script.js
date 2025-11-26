// Progress bar



// let progressBar = document.querySelector(".fill")
// let btn = document.querySelector("button")
// let statusBar = document.querySelector("h3")

// btn.addEventListener("click", () => {
//     grow = 0;
    
//     let progress = setInterval(() => {
//         grow++
//         statusBar.innerText = `${grow}%`
//         progressBar.style.width = `${grow}%`
//         btn.style.pointerEvents = "none"
//     }, 50);

//     setTimeout(() => {
//         clearInterval(progress);
//         btn.innerText = "Downloaded";
//         btn.style.backgroundColor = "#8dbaeb"
//     }, 5000);
// })






// Toggle Button

// let btns = document.querySelectorAll("button")

// btns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         if (btn.innerText == "Add Friend") {
//             btn.innerText = "Remove Friend"
//             btn.style.backgroundColor = "#777"
//         }
//         else{
//             btn.innerText = "Add Friend"
//             btn.style.backgroundColor = "royalblue"
//         }
//     })
// })



// Event Bubbling

const reels = [
  {
    "username": "alex_travels",
    "likeCount": 1240,
    "isLiked": false,
    "commentCount": 87,
    "caption": "Sunset vibes by the ocean 🌅",
    "video": "/Reels/1.mp4",
    "userProfile": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    "shareCount": 42,
    "isFollowed": true
  },
  {
    "username": "foodie_frenzy",
    "likeCount": 985,
    "isLiked": true,
    "commentCount": 63,
    "caption": "Best pasta in the city 😍🍝",
    "video": "Reels/2.mp4",
    "userProfile": "https://randomuser.me/api/portraits/women/68.jpg",
    "shareCount": 28,
    "isFollowed": false
  },
  {
    "username": "gymgrind",
    "likeCount": 3120,
    "isLiked": false,
    "commentCount": 142,
    "caption": "Leg day hits different 💪🔥",
    "video": "Reels/3.mp4",
    "userProfile": "https://randomuser.me/api/portraits/men/32.jpg",
    "shareCount": 67,
    "isFollowed": true
  },
  {
    "username": "codingwizard",
    "likeCount": 765,
    "isLiked": true,
    "commentCount": 31,
    "caption": "Debugging at 2AM hits different 😂👨‍💻",
    "video": "Reels/4.mp4",
    "userProfile": "https://randomuser.me/api/portraits/men/12.jpg",
    "shareCount": 15,
    "isFollowed": false
  },
  {
    "username": "pet_paradise",
    "likeCount": 1890,
    "isLiked": false,
    "commentCount": 112,
    "caption": "Cute puppies for your timeline 🐶💖",
    "video": "Reels/5.mp4",
    "userProfile": "https://randomuser.me/api/portraits/women/44.jpg",
    "shareCount": 54,
    "isFollowed": false
  },
  {
    "username": "citysketcher",
    "likeCount": 1430,
    "isLiked": true,
    "commentCount": 49,
    "caption": "Sketching downtown architecture ✏️🏙️",
    "video": "Reels/1.mp4",
    "userProfile": "https://randomuser.me/api/portraits/men/45.jpg",
    "shareCount": 23,
    "isFollowed": true
  },
  {
    "username": "travelmoments",
    "likeCount": 2575,
    "isLiked": false,
    "commentCount": 96,
    "caption": "Exploring hidden gems in Bali ✨",
    "video": "Reels/2.mp4",
    "userProfile": "https://randomuser.me/api/portraits/women/21.jpg",
    "shareCount": 84,
    "isFollowed": true
  },
  {
    "username": "dancevibes",
    "likeCount": 3320,
    "isLiked": true,
    "commentCount": 158,
    "caption": "Freestyle challenge! 🔥🕺",
    "video": "Reels/3.mp4",
    "userProfile": "https://randomuser.me/api/portraits/men/80.jpg",
    "shareCount": 102,
    "isFollowed": false
  },
  {
    "username": "minimalhome",
    "likeCount": 920,
    "isLiked": false,
    "commentCount": 27,
    "caption": "Clean space, clean mind 🏡✨",
    "video": "Reels/4.mp4",
    "userProfile": "https://randomuser.me/api/portraits/women/15.jpg",
    "shareCount": 19,
    "isFollowed": true
  },
  {
    "username": "carscene",
    "likeCount": 4110,
    "isLiked": true,
    "commentCount": 204,
    "caption": "Night drive with the squad 🚗💨",
    "video": "Reels/5.mp4",
    "userProfile": "https://randomuser.me/api/portraits/men/11.jpg",
    "shareCount": 143,
    "isFollowed": false
  }
]

let allReels = document.querySelector(".all-reels")


function render(){

  let sum = ""

  reels.forEach((elem, idx) => {
    sum = sum + `<div class="reel">
                      <video autoplay loop muted src="${elem.video}" alt=""></video>
                      <div class="bottom">
                          <div class="user">
                              <img src="${elem.userProfile}" alt="">
                              <h4>${elem.username}</h4>
                              <button class="follow" data-index="${idx}">${elem.isFollowed ? "Unfollow" : "Follow"}</button>
                          </div>
                          <div class="title">
                              <h4>${elem.caption}</h4>
                          </div>
                      </div>
                      <div class="right">
                          <div class="like" data-index="${idx}">
                              <h4 class="like-icon">${elem.isLiked ? '<i class="ri-heart-3-fill love"></i>' : '<i class="ri-heart-line not-love"></i>'}</h4>
                              <h6>${elem.likeCount}</h6>
                          </div>
                          <div class="comment">
                              <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                              <h6>${elem.commentCount}</h6>
                          </div>
                          <div class="share">
                              <h4 class="share-icon"><i class="ri-share-2-line"></i></i></h4>
                              <h6>${elem.shareCount}</h6>
                          </div>
                          <div class="menu">
                              <h4 class="menu-icon"><i class="ri-more-2-line"></i></i></h4>
                          </div>
                      </div>
                  </div>`
  })

  allReels.innerHTML = sum;
}

render()

allReels.addEventListener("click", (dets) => {
  
  // if (dets.target.classList.contains('like')) {
  //   reels[dets.target.id].isLiked = !reels[dets.target.id].isLiked;
  //   reels[dets.target.id].isLiked ? reels[dets.target.id].likeCount++ : reels[dets.target.id].likeCount--;
  //   render()
  // }

  // if(dets.target.classList.contains('follow')){
  //   reels[dets.target.id].isFollowed = !reels[dets.target.id].isFollowed;
  //   render();
  // }  


  // Like event

  const likeBtn = dets.target.closest(".like");
  const followBtn = dets.target.closest(".follow")

  if (likeBtn){
    const likeIcon = likeBtn.childNodes[1];
    const index = likeBtn.dataset.index;

    reels[index].isLiked = !reels[index].isLiked;

    if (reels[index].isLiked) {
      likeIcon.innerHTML = `<i class="ri-heart-3-fill love"></i>`;
      reels[index].likeCount++;
    } else {
      likeIcon.innerHTML = `<i class="ri-heart-line not-love"></i>`;
      reels[index].likeCount--;
    }
  }

  if(followBtn) {
    const index = followBtn.dataset.index;
    
    reels[index].isFollowed = !reels[index].isFollowed;
    reels[index].isFollowed ? followBtn.innerText = "Unfollow" : followBtn.innerText = "Follow";
  }
})


// const like = document.querySelectorAll(".like")

// like.forEach((elem) => {
//   elem.addEventListener("click", (dets) => {
//       reels[dets.target.id].isLiked = !reels[dets.target.id].isLiked;
//       render();
//     })
// })
