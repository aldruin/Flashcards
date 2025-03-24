module.exports = (paramsObject) => {
  let newObject = { ...paramsObject};

  for (let propriety in newObject){
    if (/Id|id/.test(propriety)){
      newObject[propriety] = Number(newObject[propriety]);
    }
  }

  return newObject;
}