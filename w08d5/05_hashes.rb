# user = {
#   "username" => "Monkey",
#   "password" => "Fuzz",
#   "logged_in" => false
# }


# user = {
#   "username": "Monkey",
#   "password": "Fuzz",
#   "logged_in": false
# }

# user = {
#   :username => 'monkey',
#   :password => 'fuzz'
# }


user = {
  username: 'monkey',
  password: 'fuzz'
}

my_key = "username"


p user[my_key.to_sym]
