(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "2021-07-26T12:00:00.000Z";
  birthdayUtc = Date.parse(birthday);
  nowUtc = Date.parse(new Date().toISOString());
      //countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        //let now = new Date().getTime(),
            distance = birthdayUtc - nowUtc;
        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("displayImage").style="display:block";

          headline.innerText = "";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
