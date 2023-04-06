function updateTime() {
    const todaysDate = new Date();
    let todaysHours = todaysDate.getHours();
    let todaysMinutes = todaysDate.getMinutes();
    let todaySeconds = todaysDate.getSeconds();
    let amPm = todaysHours >= 12 ? 'pm' : 'am';
    todaysHours = todaysHours % 12;
    todaysHours = todaysHours ? todaysHours : 12
    todaysMinutes = todaysMinutes < 10 ? '0' + todaysMinutes : todaysMinutes;
    todaySeconds = todaySeconds < 10 ? '0' + todaySeconds : todaySeconds;
    const actualTime = todaysHours + ':' + todaysMinutes + ':' + todaySeconds + " " + amPm; 
    document.getElementById('clock').innerHTML = actualTime;
    }
    
  updateTime();
  setInterval(updateTime, 1000);

  /*
  Logical Discussion ==>
  In order to develop the functionalities of the clock. 
  At first a simple function was created in which current date, hour, minute and second 
  has been defined,
  By using JS built in functions called date(), gethours(), getMinutes(), getSeconds().

  Meanwhile, current hour have been categorized into AM/PM conditionally.
  After that current hour's value have been converted from 24-hour to 12-hour format. 
  Moreover, current minutes and current second has been format accordingly
  By using simple ternary operator and string manipulation.
  
  These hour,minute and second then got wrapped all together along with with AM/PM into a single variable 
  with the usage of string manipulation technique.  

  After that it has got generated dynamically into html by using innerHTML

  Last but no least the function was called 
  And Most importantly it was then placed as callback inside 
  setInterval function along with DELAY value.  
  
  */