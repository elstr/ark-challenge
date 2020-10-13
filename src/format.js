export function formatNumberK (number) {
    let  formatNumber = number;
    if(number > 9999){
       number += '';
      formatNumber = number.substring(0, number.length - 3) + 'K';
    }
    return formatNumber;
  }


  /* const Sample = {
      facebook: {
          userName:"@nathanf",
          svgIcon:{FacebookIcon},


      }
      instagram:{

      }
  }
               generalNumber={1987}
              todayNumber={12}
              generalDesc="Followers" */