import '@/pug/utils/name';
import '@/assets/scss.scss'
import '@/assets/scssopy.css'
let age = {
  '23': 22
};



let objFunc = {

  'age': 'возраст',
  'name': 'имя',
  'fuc': () => {
    console.log(age);
    console.log(name);
  }
}
objFunc.fuc();

// objFunc.fuc.bind('ss');

objFunc.fuc();