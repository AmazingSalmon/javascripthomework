let adminPassword = "master";
begin = function (pass) {
    whoami = prompt("who are you?");
    if(whoami === "admin")
    {
      password = prompt("password: ");
      if(password === pass)
      {
          alert("welcome");
      } else if (password === null || password === "")
      {
          alert("cancelled");
      } else
      {
          alert("wrong password");
      }
    } else if (whoami === null || whoami === "")
    {
        alert("cancelled");
    } else {
        alert("I don\'t know you");
    }
}
begin(adminPassword);