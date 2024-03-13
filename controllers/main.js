fetch("./data/Data.json")
  .then((win) => {
    return win.json();
  })
  .then((data) => {
    Rendernav(data.navPills, data.tabPanes);
    const button = document.querySelectorAll("#pills-tabContent button");
    button.forEach((ele) => {
      ele.onclick = () => {
        let arr = data.tabPanes.filter((pro) => {
          return pro.id === ele.getAttribute("data-button-id");
        });

        // if (arr[0].type === "topclothes") {
        //   document.getElementById(
        //     "topclothes"
        //   ).style.backgroundImage = `url('${arr[0].imgSrc_png}')`;
        // } else if (arr[0].type === "botclothes") {
        //   document.getElementById(
        //     "bikinibottom"
        //   ).style.backgroundImage = `url('${arr[0].imgSrc_png}')`;
        // } else if (arr[0].type === "shoes") {
        //   document.getElementById(
        //     "feet"
        //   ).style.backgroundImage = `url('${arr[0].imgSrc_png}')`;
        // } else if (arr[0].type === "shoes") {
        //   document.getElementById(
        //     "feet"
        //   ).style.backgroundImage = `url('${arr[0].imgSrc_png}')`;
        // }
        dieukien(arr,"topclothes")
        dieukien(arr,'botclothes')
        dieukien(arr,"shoes")
        dieukien(arr,"handbags")
        dieukien(arr,"necklaces");
        dieukien(arr,"hairstyle")
        dieukien(arr,"background")
      };
    });
  });
