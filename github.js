document.addEventListener("DOMContentLoaded", () => {
  const token = "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"; // Replace with your actual GitHub token
  const owner = "mohitmittal10"; // Replace with the repository owner's username
  // const repo = 'music-player-js'; // Replace with the repository name

  async function fetchIssues() {
    const url = `https://api.github.com/repos/${owner}/${repo}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      console.error(
        "Error fetching issues:",
        response.status,
        response.statusText
      );
      return;
    }

    const issues = await response.json();
    // console.log(issues);
  }

  async function fetchRepo() {
    const url = `https://api.github.com/users/mohitmittal10/repos`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      console.error(
        "Error fetching issues:",
        response.status,
        response.statusText
      );
      return;
    }

    const repo = await response.json();
    console.log(repo);

    for (let i = 0; i < repo.length; i++) {
      if (repo[i].id == "761080805") {
        continue;
      }
      const element = repo[i];

      ///////////////////////////////// Fetch contents of a specific repository////////////////////////////////////////
      const contentUrl = `https://api.github.com/repos/mohitmittal10/${element.name}/contents`;
      const contentResponse = await fetch(contentUrl, {
        method: "GET",
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!contentResponse.ok) {
        console.error(
          `Error fetching contents for repo ${element.name}:`,
          contentResponse.status,
          contentResponse.statusText
        );
        continue;
      }

      const contents = await contentResponse.json();
      console.log(contents);
     
      
       
         const cardRepo = `
            <div class="repo-card">
                <img id="repo-img" src="assests/repo-img.png" alt="Repo Image">
                <div class="repo-detail">
                    <div id="repo-title">
                        <p>${repo[i].name}</p>
                    </div>
                    
                </div>
            </div>
        `;
        const parent = document.getElementsByClassName("github-body")[0];
        parent.innerHTML += cardRepo;
     

      for (let j = 0; j < contents.length; j++) {
        console.log(contents[j].name);
       

        
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////////
      //creating repo card

      // const imgRepo = document.createElement("img");
      // imgRepo.id = "repo-img";
      // imgRepo.src = "assests/repo-img.png"

      // const detailRepo = document.createElement("div");
      // detailRepo.className = "repo-detail";

      // cardRepo.appendChild(imgRepo);
      // cardRepo.appendChild(detailRepo);

      // const parent = document.getElementsByClassName("github-body")[0];
      // parent.appendChild(cardRepo);

      // //repo title
      // const titleRepo = document.createElement("div");
      // titleRepo.id = "repo-title";
      // titleRepo.innerHTML = `<p>${issues[i].name}</p>`
      // cardRepo.appendChild(titleRepo)
      // console.log(issues[i].name)

      // //repo files
      // const contentRepo = document.createElement("div");
      // contentRepo.id = "repo-content";
      // contentRepo.innerHTML = `<p>${contents[i].name}</p>`
      // cardRepo.appendChild(contentRepo)
      // console.log(contents[i].name)
    }
  }
  // async function fetchRepoContent() {
  //         const url = `https://api.github.com/repos/mohitmittal10/music-player-js/contents`;

  //         const response = await fetch(url, {
  //             method: 'GET',
  //             headers: {
  //                 'Authorization': `token ${token}`,
  //                 'Accept': 'application/vnd.github.v3+json'
  //             }
  //         });

  //         if (!response.ok) {
  //             console.error('Error fetching issues:', response.status, response.statusText);
  //             return;
  //         }
  //         const issues = await response.json();
  //         console.log(issues);
  //  }

  fetchIssues();
  fetchRepo();
  // fetchRepoContent()
});

const base64Content =
  "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRo\nPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJu\nb25lIiBjbGFzcz0iaW5qZWN0ZWQtc3ZnIiBkYXRhLXNyYz0iaHR0cHM6Ly9o\ndWdlaWNvbnMuc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9pY29ucy9jYW5jZWwt\nMDEtc3Ryb2tlLXJvdW5kZWQuc3ZnP3R5cGU9c3ZnIiB4bWxuczp4bGluaz0i\naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcm9sZT0iaW1nIiBjb2xv\ncj0iIzAwMDAwMCI+CjxwYXRoIGQ9Ik0xOSA1TDUgMTlNNSA1TDE5IDE5IiBz\ndHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGlu\nZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4K\nPC9zdmc+\n"; // (truncated for brevity)

// // Decode the Base64 content
const decodedContent = atob(base64Content);
//console.log(decodedContent);
