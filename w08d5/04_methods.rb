def say_hello name
  num = 42
  p num = (num * 3).to_s
end

def say_goodbye name
  p "goodbye #{name}"
end

return_value = say_hello 'my little friend!'

# p return_value

say_goodbye 'my little friend'


# JS
# (param) => { console.log(1); console.log(2); }
# param => console.log(1)

p 5 + 1
