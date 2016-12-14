var Firebase, new_user, userAPI_DB, users, users_receive;

Framer.Info = {
  title: "",
  author: "Андрей Максимов",
  twitter: "",
  description: ""
};

users = [];

users_receive = [];

Firebase = require('firebase').Firebase;

userAPI_DB = new Firebase({
  projectID: "usersapi-95122",
  secret: "AYFmsArjzYFWfBbS4fFiLrsVvYE63nigpw1VSlDY"
});

new_user = Utils.round(Utils.randomNumber(0, 100), 0);

print(new_user);

userAPI_DB.get("/users", function(users_receive) {
  print(users);
  users = users_receive;
  users.push(new_user);
  print(users);
  return userAPI_DB.put("/users", users);
});
