// Encapsulation is the hiding of data / functions so that it can't be used or overwritten outside the class 


class PayRoll {
  
        setEmployeeDetail(name, salary){
            this.name = name
            this.salary = salary
            this.bonus = 10000

        }
        getTotalComp(){
            return this.bonus + this.salary
        }
  }
  
  const jerry = new PayRoll()

  jerry.setEmployeeDetail('Jerry', 2000)
  
  console.log(jerry.getTotalComp())