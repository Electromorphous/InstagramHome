const main = document.querySelector(".main");

for (let i = 1; i < 9; i++) {
  // creating a post
  const post = document.createElement("div");
  post.classList = "post";

  // creating the header of the post
  const header = document.createElement("div");
  header.classList = "header";
  const userProfilePic = document.createElement("img");
  userProfilePic.src = "./ui-elements/user.svg";
  header.appendChild(userProfilePic);
  header.appendChild(document.createTextNode("Electromorphous"));
  post.appendChild(header);

  // creating the image of the post
  const imageDiv = document.createElement("div");
  imageDiv.classList = "image";
  const postImage = document.createElement("img");
  postImage.src = `./posts/abs${i}.jpg`;
  imageDiv.appendChild(postImage);
  post.appendChild(imageDiv);

  // creating bottom part of the post
  const postBottom = document.createElement("div");
  postBottom.classList = "post-bottom";
  // left part
  const bottomLeftIcons = document.createElement("div");
  bottomLeftIcons.classList = "left";
  postBottom.appendChild(bottomLeftIcons);
  const likesIcon = document.createElement("img");
  const commentsIcon = document.createElement("img");
  const sendIcon = document.createElement("img");
  likesIcon.src = "./ui-elements/heart.svg";
  commentsIcon.src = "./ui-elements/comments.svg";
  sendIcon.src = "./ui-elements/send.svg";
  bottomLeftIcons.appendChild(likesIcon);
  bottomLeftIcons.appendChild(commentsIcon);
  bottomLeftIcons.appendChild(sendIcon);
  // right part
  const bottomRightIcons = document.createElement("div");
  bottomRightIcons.classList = "right";
  postBottom.appendChild(bottomRightIcons);
  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.src = "./ui-elements/bookmark.svg";
  bottomRightIcons.appendChild(bookmarkIcon);
  post.appendChild(postBottom);

  // number of likes
  const likes = document.createElement("div");
  likes.classList = "likes";
  likes.appendChild(document.createTextNode("69420 likes"));
  post.appendChild(likes);

  // caption
  const caption = document.createElement("div");
  caption.classList = "caption";
  const captionUser = document.createElement("span");
  captionUser.appendChild(document.createTextNode("Electromorphous"));
  caption.appendChild(captionUser);
  caption.appendChild(
    document.createTextNode(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta optio ratione pariatur."
    )
  );
  post.appendChild(caption);

  // time
  const time = document.createElement("div");
  time.classList = "time";
  time.appendChild(document.createTextNode("2 minutes ago"));
  post.appendChild(time);

  main.appendChild(post);
}
