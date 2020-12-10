import './utils/name'

let age = { '23' : 22};



let objFunc = {

  'age': 'возраст',
  'name': 'имя',
  'fuc': ()=> {
    console.log(age);
    console.log(this.name);
  }
}
objFunc.fuc();

// objFunc.fuc.bind('ss');

objFunc.fuc();
