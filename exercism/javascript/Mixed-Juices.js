export function timeToMixJuice(name) {
    switch(name){
      case 'Pure Strawberry Joy':
        return 0.5
        break;
      case 'Energizer':
      case 'Green Garden':
        return 1.5
        break;
      case 'Tropical Island':
        return 3
        break;
      case 'All or Nothing':
        return 5
        break;
      default:
        return 2.5
    }
  }
  

  export function limesToCut(wedgesNeeded, limes) {
    const typesOfWedge = {
      'small': 6,
      'medium': 8,
      'large': 10
    }
  
    let wedges = 0
    let count = 0
  
    while(wedges < wedgesNeeded){
      if(!limes[count]) return count
      
      wedges += typesOfWedge[limes[count]]
      count++
    }
    return count
  }
  
  export function remainingOrders(timeLeft, orders) {
    while (timeLeft > 0) {
      timeLeft -= timeToMixJuice(orders[0]);
      orders.shift();
    }
    return orders;
  }
  