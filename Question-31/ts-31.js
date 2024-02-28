var current_users = ['john', 'alice', 'admin', 'peter', 'sarah'];
var new_users = ['bob', 'sarah', 'john', 'emily', 'sam'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var isTaken = false;
    var lowercase_new_user = new_user.toLowerCase();
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (current_user.toLowerCase() === lowercase_new_user) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log("Sorry, ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, ".concat(new_user, " is available."));
    }
}
