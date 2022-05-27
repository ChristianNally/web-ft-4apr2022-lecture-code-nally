
num = 4
value = 50

# if num < 5
#   p "num is less than 5"
# else
#   p "num is NOT less than 5"
# end


# if num > 5 && value < 10
#   p "both are valid range"
# elsif num > 5
#   p "only num is valid range"
# else
#   p "some third condition"
# end

# JS
# if (num < 5) console.log('num < 5');

p "num < 5" if num < 5

# JS
# if ( !(num > 5 && value < 10) )

unless num > 5 && value < 10
  p "one or the other is outside of range"
end

p "num >= 5" unless num < 5

num = 70
puts (num < 10) ? "single digits" : "multiple digits"
