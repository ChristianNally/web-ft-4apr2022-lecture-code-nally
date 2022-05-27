
class Car

  def initialize color, year, model
    @color = color
    @year = year
    @model = model
  end

  attr_accessor :year, :color, :model

  def drive
    p "now a #{@color} really going somewhere"
  end


end


my_car = Car.new "red", 2007, "matrix"

my_car.drive

p my_car.color

my_car.year = 2020

p my_car.year



