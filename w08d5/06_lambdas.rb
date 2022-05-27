# dogs = ['Odie', 'Snoop', 'Lassie', 'Clifford', 'Milo', 'Michael', 'Angelo', 'Dioji', 'Gohan']


# dogs.each do |dog|
#   puts dog
# end


# do_thing = lambda { |dog| puts dog }

# dogs.each &do_thing

objects = ['phone', 'spaghetti']

one_thing = 'wrench'

user = {
  name: 'monkey',
  password: 'fuzz'
}

class Blender
  def will_it_blend user
    user[:password] = user[:password] + '!'
  end
end

b = Blender.new


p user[:password]
p b.will_it_blend user
p user[:password]
