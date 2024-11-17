
const userData = {
    login: "Alfiya-heba",
    id: 157894259,
    avatar_url: "https://avatars.githubusercontent.com/u/157894259?v=4",
    html_url: "https://github.com/Alfiya-heba",
    location: "Karnataka",
    bio: "Hi, I’m Alfiya Heba, a Computer Science student exploring new skills in coding and development.\r\nLet's connect!!",
    public_repos: 7,
    followers: 0,
    following: 0,
    created_at: "2024-01-27T13:21:24Z",
};

// Target the container
const cardContainer = document.getElementById('card-container');

// Create the card element
const card = document.createElement('div');
card.className = 'card';

// Populate card content
card.innerHTML = `
    <img src="${userData.avatar_url}" alt="Avatar" class="avatar">
    <h3>${userData.login}</h3>
    <p>${userData.bio}</p>
    <p><strong>Location:</strong> ${userData.location || "Not Provided"}</p>
    <div class="stats">
        <div>
            <span>${userData.public_repos}</span>
            <p>Repositories</p>
        </div>
        <div>
            <span>${userData.followers}</span>
            <p>Followers</p>
        </div>
        <div>
            <span>${userData.following}</span>
            <p>Following</p>
        </div>
    </div>
    <a href="${userData.html_url}" target="_blank">View GitHub Profile</a>
`;

// Append the card to the container
cardContainer.appendChild(card);