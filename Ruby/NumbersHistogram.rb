#Author: Kevin Loría Paniagua

#Method
def numbersHistogram(array)
 
  numberCounter = ""
  number = 1
  for number in 1..5 do
    numberCounter = number.to_s + ": "
    array.each do |numberAppearance|
      if number == numberAppearance
        numberCounter += "*"
      end
    end
    puts numberCounter + "\n"
  end
end
   
#Test
myArray = [1,2,1,3,3,1,2,1,5,1]
numbersHistogram(myArray)