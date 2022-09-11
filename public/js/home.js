//it's not good practice to keep this clientID over here, as this can change over time ~ to overcome this we can make one requestHandler where it'll redirect to github for us.
const clientID = "YOUR_CLIENT_ID";

async function createRepo() {
  try {
    //Get the data, throws error if repo name is not provided.
    let repo_name = document.getElementById("create-repo-form-name");
    let repo_desc = document.getElementById("create-repo-form-desc");
    let repo_lang = document.getElementById("create-repo-form-lang");
    if (!repo_name || !repo_desc || !repo_lang) {
      alert("something wrong with HTML");
      return;
    }
    repo_name = repo_name.value;
    repo_desc = repo_desc.value;
    repo_lang = repo_lang.value;
    if (!repo_name) {
      alert("please enter repo name");
      return;
    }

    //Resest values
    document.getElementById("create-repo-form-name").value = "";
    document.getElementById("create-repo-form-desc").value = "";
    document.getElementById("create-repo-form-lang").selectedIndex = 0;

    ///Request to server using axios
    // if running on your own - make changes here
    const redirectURLEncoded = encodeURIComponent(
      `https://github-repo-com.herokuapp.com/github-oauth?path=https://github-repo-com.herokuapp.com/github-repo/create&repo_name=${repo_name}&repo_desc=${repo_desc}&repo_lang=${repo_lang}`
    );
    window.location.href = `https://github.com/login/oauth/authorize/?client_id=${clientID}&scope=repo&redirect_uri=${redirectURLEncoded}`;
  } catch (err) {
    alert(err.response.data);
  }
}
