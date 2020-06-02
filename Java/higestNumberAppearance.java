//Author: Kevin Loría Paniagua

class Main {
  
    //Method
    public static String higestNumberAppearance(int[] array) {
      int number = 0;
      int maxContiniousAppearances = 0;
      int continuousAppearances = 0;
      for (int i = 0; i < array.length; i++) {
        continuousAppearances = 0;
        for (int j = 0; j < array.length; j++) {
          if (array[j] == array[i]) {
            if (continuousAppearances != 0) {
                if (array[j] == array[j-1]){
                  continuousAppearances++;
                }
            } else {
              continuousAppearances++;
            }
          }
        }
      if (maxContiniousAppearances < continuousAppearances) {
        maxContiniousAppearances = continuousAppearances;
        number = array[i];
      }
    }
    return "Ocurrencias: " + maxContiniousAppearances + "\n" +  "Número: " + number;
  }
  //Test
  public static void main(String[] args) {
    int[] myArray = {1,2,2,5,4,6,7,8,8,8};
    System.out.println(higestNumberAppearance(myArray));
  }
}