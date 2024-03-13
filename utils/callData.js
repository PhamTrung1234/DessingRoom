function dieukien(value1,value2){
    if(value1[0].type === value2){
        document.getElementById(value2).style.backgroundImage = `url('${value1[0].imgSrc_png}')`
    }

}
