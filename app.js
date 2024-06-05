document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "x") {
    const channel_name = document.getElementById("channel_name");
    const link = document.getElementById("link");
    const ads = document.getElementById("ads");
    const bitrate = document.getElementById("bitrate");
    const visible = document.getElementById("visible");
    const mobile_compatible = document.getElementById("mobile_compatible");

    channel_name.value = "Maaz-Streams";
    link.value = "http://maaz.ar-livehd.link/p/live.html";
    ads.value = "1";
    bitrate.selectedIndex = 6;
    visible.checked = true;
    mobile_compatible.checked = true;
  }
});
