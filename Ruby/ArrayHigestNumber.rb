#Author: Kevin Loría Paniagua

#Method
def arrayHigestNumber(array)
  higestNumber = 0;
  array.each do |number|
    if number > higestNumber
      higestNumber = number
    end
  end
  return higestNumber
end
   
#Test
myArray = [13,2,4,35,1]
arrayHigestNumber(myArray)