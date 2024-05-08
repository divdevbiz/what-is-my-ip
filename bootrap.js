// Fungsi untuk melakukan permintaan ke API
    function getData() {
      fetch('https://cmyip.yoi.workers.dev/json/')
        .then(response => response.json())
        .then(data => {
          document.getElementById('ip').innerHTML = 'IP: ' + data.ip;
          document.getElementById('mobile').innerHTML = 'Mobile: ' + data.mobile;
          document.getElementById('proxy').innerHTML = 'Proxy: ' + data.proxy;
          document.getElementById('city').innerHTML = 'City: ' + data.city;
          document.getElementById('region').innerHTML = 'Region: ' + data.region;
          document.getElementById('country').innerHTML = 'Country: ' + data.country;
          document.getElementById('countryFlagEmoji').innerHTML = 'Country Flag Emoji: ' + data.countryFlagEmoji;
          document.getElementById('latitude').innerHTML = 'Latitude: ' + data.latitude;
          document.getElementById('longitude').innerHTML = 'Longitude: ' + data.longitude;
          document.getElementById('isp').innerHTML = 'ISP: ' + data.isp;
          document.getElementById('timezone').innerHTML = 'Timezone: ' + data.timezone;
        })
        .catch(error => {
          console.log('Terjadi kesalahan:', error);
        });
    }

=    document.addEventListener('DOMContentLoaded', getData);
