const mergeTwoLists = function(list1, list2) {
    let arr = []

    list1.forEach((item, index) => {
        arr.push(item)
        if(list2[index] != undefined){
            arr.push(list2[index])

        }
       
    })

    if(list1.length < list2.length){
        const remainiingItems = list2.slice(list1.length, )
        let newArr = [...arr, ...remainiingItems]
        console.log(newArr)
        return newArr
    }
    console.log(arr)
    return arr
};


const list1 = [1]
const  list2 = []

mergeTwoLists(list1, list2)