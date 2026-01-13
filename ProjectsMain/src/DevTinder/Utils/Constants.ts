const staticImage:string =
  "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const static1:string =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const static2:string =
  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const static3:string =
  "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"; 
const SkillOption:string[] = ['JS','React','Node JS']
const ENV_TYPE ='UAT'
const BASE_URL = ENV_TYPE === 'UAT'?'http://localhost:7000':'/api'

  export { BASE_URL, SkillOption, static1, static2, static3, staticImage };

