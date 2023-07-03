let month;
let style = {};
function getMonth() {
  const year = new Date();
  const currentMonth = year.getMonth() + 1;

  if (currentMonth === 1) {
    month = "January";
  } else if (currentMonth === 2) {
    month = "Febuary";
  } else if (currentMonth === 3) {
    month = "March";
  } else if (currentMonth === 4) {
    month = "April";
  } else if (currentMonth === 5) {
    month = "May";
  } else if (currentMonth === 6) {
    month = "June";
  } else if (currentMonth === 7) {
    month = "July";
  } else if (currentMonth === 8) {
    month = "August";
  } else if (currentMonth === 7) {
    month = "September";
  } else if (currentMonth === 7) {
    month = "October";
  } else if (currentMonth === 7) {
    month = "November";
  } else if (currentMonth === 7) {
    month = "December";
  }
  return month;
}
export default getMonth;

export const pickMonth = () => {
  if (month === "January") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "Febuary") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "March") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "April") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "May") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "June") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "July") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "August") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "September") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "October") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "November") {
    style = {
      background: "#8f8f8f",
    };
  } else if (month === "December") {
    style = {
      background: "#8f8f8f",
    };
  }

  return style;
};


export const MonthDropdown = () => {
    return(
        <div>
            
        </div>
    )
}